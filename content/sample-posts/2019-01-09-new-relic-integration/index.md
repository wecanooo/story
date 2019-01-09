---
title: New Relic 서비스 연동하기
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/b5a3f174d257be33bbbc1e6e7f787f6a/cover11.png'
author: "wecanooo"
date:   2019-01-09 16:37:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - newrelic
  - monitoring
  - system
  - rpm
---

![New Relic](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/2a041c5fdcfdb93da6360ccb5cc40ad9/download.jpg)


인프라스트럭쳐 모니터링(Infrastructure Monitoring) 하면 예전에는 대체적으로 하드웨어 중심의 모니터링 업무를 생각하기 쉬웠습니다.

하지만, 클라우드 서비스가 보편화된 지금은 이러한 인프라스트럭쳐 모니터링(Infrastructure Monitoring) 을 간편하게 연동하고 쉽게 정보를 확인할 수 있는 서비스들이 많이 있습니다.

제가 스타트업에서 여러 기술들을 적용해 나가고 있을 즈음인 2014년에 스타트업계에서 화두가 되는 서비스 회사가 있었었는데, New Relic 이 바로 그것입니다.

Rails 로 웹 개발을 진행하고 있던 차에 New Relic 은 상당히 반가운 서비스였고, 당시에는 무료 기능만으로도 스타트업에서 요구되는 기본 모니터링이 가능했으며, 심지어 New Relic Agent 를 아주 쉽게 연동할 수 있는 [Gem](https://github.com/newrelic/rpm) 이 있었기에 연동하는데는 별 어려움이 없었습니다.

그렇게 New Relic 을 어렴풋이 기억하고 있던 차에 현재의 회사에서 New Relic 을 통해 인프라 모니터링을 한다기에 다시 연동을 해 봤습니다.

---

### New Relic 계정생성

우선 New Relic 사용을 위해 아래의 단계를 진행합니다.

1. [New Relic 회원가입](https://newrelic.com/signup)
2. 입력한 Email 을 통해 전송된 메일을 통해 계정 확인 진행

위의 2단계를 진행한 뒤 [Account Setting](https://rpm.newrelic.com/accounts/) 메뉴로 들어가면 Serial Key 를 확인할 수 있습니다.

---

### Rails App 에 New Relic 연동

프로젝트 내의 Gemfile 에 New Relic Ruby Agent Gem 을 설치합니다.

```ruby
gem 'newrelic_rpm'
```

bundle install 을 통해 gem 을 설치한 뒤 터미널에서 newrelic command 를 통해 초기 셋업 파일을 생성합니다. 만약, newrelic command 를 인식하지 못하면 터미널을 종료했다가 다시 시작해 주세요.

```shell
newrelic install --license_key="YOUR_KEY" "어플리케이션 이름"
```

위의 명령어를 통해 초기 파일을 생성하면 `newrelic.yml` 파일이 생성됩니다. 생성된 newrelic.yml 파일은 다음과 같습니다.

```yml
#
# This file configures the New Relic Agent.  New Relic monitors Ruby, Java,
# .NET, PHP, Python, Node, and Go applications with deep visibility and low
# overhead.  For more information, visit www.newrelic.com.
#
# Generated January 08, 2019
#
# This configuration file is custom generated for STUnitas_2
#
# For full documentation of agent configuration options, please refer to
# https://docs.newrelic.com/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration

common: &default_settings
  # Required license key associated with your New Relic account.
  license_key: license key

  # Your application name. Renaming here affects where data displays in New
  # Relic.  For more details, see https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/renaming-applications
  app_name: My Application

  # To disable the agent regardless of other settings, uncomment the following:
  # agent_enabled: false

  # Logging level for log/newrelic_agent.log
  log_level: info


# Environment-specific settings are in this section.
# RAILS_ENV or RACK_ENV (as appropriate) is used to determine the environment.
# If your application has other named environments, configure them here.
development:
  <<: *default_settings
  app_name: My Application (Development)

test:
  <<: *default_settings
  # It doesn't make sense to report to New Relic from automated test runs.
  monitor_mode: false

staging:
  <<: *default_settings
  app_name: My Application (Staging)

production:
  <<: *default_settings
```

만약, development 모드에서는 New Relic 으로 정보전송을 하고 싶지 않다면, `monitor_mode: false` 를 설정합니다.

위와 같이 간단한 설정 후 App 배포를 진행하면, 이제 [New Relic](https://rpm.newrelic.com/) 을 방문하여 각종 모니터링 정보를 확인할 수 있습니다.

![New Relic](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/2a041c5fdcfdb93da6360ccb5cc40ad9/download.jpg)