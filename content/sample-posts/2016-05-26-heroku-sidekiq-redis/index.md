---
title: Heroku 환경에서 Sidekiq, Redis 이용하기
cover: 'images/heroku.jpg'
author: "wecanooo"
date:   2016-05-26 20:12:00
tags:
  - sidekiq
  - redis
  - heroku
---

최근에 개인적으로 [Heroku](http://heroku.com/) Free Tier를 이용하여 App을 배포하는 경우가 생겼는데 Puma + Sidekiq + Redis 환경을 설정하는데 좀 삽질을 한 경험이 있어 정리하고자 한다.

### Gem 설정

{% highlight ruby %}
gem 'rails', '4.2.6'
gem 'puma', '~> 2.15'
gem 'sidekiq', '~> 4.0'
{% endhighlight %}

이전에 진행했었던 프로젝트에서는 puma 대신 unicorn을 이용했었는데, Heroku 환경에서는 puma가 default이고 최근 많이들 unicorn에서 puma로 넘어가는 추세인 것 같아 puma를 이용하기로 했다.

### 프로그램 설정 및 Heroku 설정

{% highlight ruby %}
# config/puma.rb

workers Integer(ENV['WEB_CONCURRENCY'] || 2)
threads_count = Integer(ENV['MAX_THREADS'] || 5)
threads threads_count, threads_count

preload_app!

rackup      DefaultRackup
port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'

on_worker_boot do
  # Worker specific setup for Rails 4.1+
  # See: https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server#on-worker-boot
  @sidekiq_pid ||= spawn('bundle exec sidekiq -c 2 -q default -q mailer')
  ActiveRecord::Base.establish_connection
end

{% endhighlight %}

puma가 시작될 때 sidekiq을 몇 가지 옵션과 함께 실행도로록 했다. queue는 default, mailer queue를 생성했다.
이제 heroku에서 web instance를 실행하기 위해 Procfile을 작성할 차례이다.

예전에 unicorn 환경에서 배포를 할 때는 아래와 같이 web과 redis, worker를 별도로 돌렸었다.

{% highlight ruby %}
# Procfile with unicorn + nginx + ubuntu 14.04

web: rails s -b 0.0.0.0
redis: redis-server
worker: bundle exec sidekiq -C config/sidekiq.yml
{% endhighlight %}

지금은 Heroku에 배포할 것이기 때문에 redis-server는 Heroku redistogo add-on 으로 대체하고, sidekiq은 puma 시작 시 같이 실행하도록 할 것이기 때문에 Procfile은 좀 더 간단하게 유지할 수 있다.

{% highlight ruby %}
# Procfile with puma + heroku

web: bundle exec puma -C config/puma.rb
{% endhighlight %}

이제 위에서 말한 [redistogo](https://elements.heroku.com/addons/redistogo)를 설치하고 환경설정 값을 지정할 차례다.
터미널에서 아래의 명령을 실행하자. [Heroku Toolbelt](https://toolbelt.heroku.com/)는 이미 설치되어 있다고 가정한다.

{% highlight shell %}
$ heroku addons:create redistogo
$ heroku config:set REDIS_PROVIDER=REDISTOGO_URL
{% endhighlight %}

Heroku에 sidekiq + redis를 통해 ActiveJob을 돌릴 수 있는 준비는 되었고, ActiveJob Adapter를 sidekiq으로 지정하기 위해 ActiveJob Queue Adapter를 sidekiq으로 지정한다.

{% highlight ruby %}
# config/application.rb

class Application < Rails::Application

  config.active_job.queue_adapter = :sidekiq

end
{% endhighlight %}


### Rails 코딩

환영 메일을 보내기 위한 Mailer 생성

{% highlight shell %}
$ rails generator mailer UserMailer
{% endhighlight %}

{% highlight ruby %}
# app/mailer/user_mailer.rb

class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    mail to: @user.email, subject: t('email.welcome.subject') unless @user.email.empty?
  end

end

{% endhighlight %}

환영메일 전송을 백그라운드에서 처리하기 위해 ActiveJob 생성

{% highlight shell %}
$ rails generator job welcome_email --queue mailer
{% endhighlight %}

{% highlight ruby %}
# app/jobs/welcome_email_job.rb

class WelcomeEmailJob < ActiveJob::Base
  queue_as :mailer

  def perform(user_id)
    user = User.find_by(id: user_id)
    UserMailer.welcome_email(user).deliver_now if user
  end
end

{% endhighlight %}

이제 최종적으로 회원가입을 통해 사용자가 생성되었을 경우 환영메일을 전송

{% highlight ruby %}
# app/models/user.rb

class User < ActiveRecord::Base

  after_create :process_after_create!

  private

    def process_after_create!
      self.access_token = generate_access_token
      if save!
        # 환영메일 전송
        WelcomeEmailJob.perform_later(self.id)
      end
    end

    def generate_access_token
      loop do
        token = "#{self.id}:#{Devise.friendly_token}"
        break token unless User.where(access_token: token).first
      end
    end

end

{% endhighlight %}

이메일을 비동기로 전송할 수 있는 방법은 위의 방법 외에도 더 좋은 방법들이 있을 수 있다.
개인적인 코딩 취향에 따라 작성하면 된다.
