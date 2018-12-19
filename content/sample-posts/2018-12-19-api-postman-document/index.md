---
title: API 개발에서 Postman 이용하기
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/b5a3f174d257be33bbbc1e6e7f787f6a/cover11.png'
author: "wecanooo"
date:   2018-12-19 20:37:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - api
  - rails
  - postman
---

![Rails API](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/b5a3f174d257be33bbbc1e6e7f787f6a/api.webp)

### Rails API 를 만들어 가면서의 고민

회사에서 Rails API 를 이용하여 Backend API Server 를 제작하고 있습니다. API 를 제작하는데 있어서 필수적으로 제공되어야 할 것은 일관성 있는 API 설계와 더불어 표준적인 API Spec 을 따라 클라이언트와 데이터를 교환하는 것일 겁니다.

하지만, API Server 를 제작하는 곳에서는 위의 내용에 더해 API 버전을 지속적으로 관리하는 것과 지속적으로 발전해 나가는 API Endpoint 가 정상적으로 잘 동작하는지에 대한 점검방법 또한 많은 고민을 하게 만드는 요소가 됩니다.

Rails Framework 를 사용하면서 그 사용의 편리성에 대체적으로 만족하고 사용하고 있습니다만, [Swagger](https://swagger.io/) 를 이용한 API 문서화 방법은 다른 개발 프레임워크들에 비해 의외로 편리하게 되어 있지 않습니다. 또한, Swagger 로 제작된 API Endpoint 는 지속적인 개발 기간동안 정상적으로 동작하는지에 대한 검증을 진행하기가 쉽지 않은 문제점이 있었습니다.

> - 편리한 방법으로 API Endpoint 검증과 함께 API 문서화를 한번에 이뤄낼 수 있는 방법은 없을까?
> - 테스트 도구와 문서화 도구를 분리하지 않을 수 있는 방법은 없을까?

---

### API 테스트 도구

위 문제를 고민하던 중 일반적으로 제작된 API 를 테스트를 하기 위해서 어떤 방법을 사용하고 있는지 나열해 보았습니다.

- Command Line 에서 curl 을 이용하는 방법
- IntelliJ 나 VSCode 와 같은 통합 IDE 에서 제공하는 [REST API Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 도구를 이용하는 방법
- [Postman](https://www.getpostman.com/) 과 같은 Gui 도구를 이용하는 방법


curl 을 사용하는 방법은 비교적 Command Line 에 익숙한 사용자들에게는 편리한 방법일지는 몰라도 히스토리 관리라던지 작성된 코드의 재활용이 쉽지 않다는 불편함이 있습니다.

최근까지는 IDE 에서 제공되는 REST API Client 도구를 이용하여 API 테스트를 진행해 왔었습니다. 개발을 진행하면서 내부 테스트 용도로는 상당히 편리함을 느꼈지만, 문서화 문제를 해결하진 못했고 프론트엔드 개발자와의 협업에도 크게 도움이 되진 못했습니다.

개인적으로 간간히 사용하던 [Postman](https://www.getpostman.com/) 을 최근에 다시 사용해 보면서 Postman 의 강력함에 놀라고 있는 중입니다. 예전부터 Postman 을 사용하면서 좋았던 것은 [Collection](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 기능과 [Collection Share](https://learning.getpostman.com/docs/postman/collections/sharing_collections/) 기능을 통해 만들었던 코드를 재활용할 수 있다는 것에서 상당히 만족하고 있었습니다.
이번에 [Test Script](https://learning.getpostman.com/docs/postman/scripts/test_scripts/) 기능까지 알게되면서 Postman 이라는 도구를 다시 한번 살펴보게 되었습니다.

![Postman Test Script](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/postman_test_script.png)


---

### Postman

[Postman](https://www.getpostman.com/) 은 Chrome Extendsion 과 Desktop 설치형 App 으로 제공되는 RestAPI Client 입니다. 그 기능이 상당히 강력하고 아래와 같이 Command Line 을 이용한 Restful API 호출에 익숙하지 않은 사용자들에게는 정말 편리한 도구입니다.

```shell
curl -i -X POST -H "Content-Type:application/json" http://localhost:3000/api/v1/channels -d '{"title":"- The Naked Scientists Podcast - Stripping Down Science-new-title2","linkOnPodcastpedia":"https://github.com/Codingpedia/podcastpedia/podcasts/792/-The-Naked-Scientists-Podcast-Stripping-Down-Science","description":"The Naked Scientists flagship science show brings you a lighthearted look at the latest scientific breakthroughs, interviews with the world top scientists, answers to your science questions and science experiments to try at home."}'
```

Postman 이 편리한 이유는 비단 잘 구성된 GUI 도구라는 것에만 그치지 않습니다. [Collection](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 기능을 통해 한 단위의 기능 또는 프로젝트 별로 API 들을 Group 화 할 수 있으며, [Collection Share](https://learning.getpostman.com/docs/postman/collections/sharing_collections/) 기능으로 다른 사용자 또는 다른 PC 로 저장된 Collection 을 쉽게 옮길 수도 있습니다.

또한, [Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) 이라는 Cli 를 통해 저장된 [Collection](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 을 Command Line Runner 로 실행해 볼 수도 있는 강력한 기능을 제공하고 있습니다.

![Postman Newman Cli](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/newman.gif)

이 문서에서 다루고 싶은 주제는 [Rails API](https://guides.rubyonrails.org/api_app.html) + [Gitlab CI](https://about.gitlab.com/product/continuous-integration/) + [RSpec](http://rspec.info/) + [Brakeman](https://github.com/presidentbeef/brakeman) + [Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) + [Postman Collection](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 의 조합을 통해 

- 빌드 자동화
- 테스트 검증
- API Endpoint 검증
- 보안 취약점 검증

을 진행해 보고자 합니다. 또한, 이 문서의 마지막에서는 Postman 에서 제공하고 있는 [Postman API Documentation](https://learning.getpostman.com/docs/postman/api_documentation/intro_to_api_documentation/) 기능을 통해 그동안 귀찮게 느껴졌었던 API Documentation 을 함께 해결하고자 합니다.

### 이 문서에서 다루지 않는 것들

- Rails API 프로젝트 생성 방법
- API 코드 작성 방법
- Rspec 코드 작성 방법
- Gitlab CI 설치방법 및 기본개념

여기서는 여러분이 Rails 라는 개발도구에 이미 익숙하고, Rspec 을 통해 테스트 코드를 작성할 수 있는 상태라고 가정합니다.

---

### Postman 으로 테스트 코드 작성

앞서 얘기한 Postman 도구를 통해 테스트 코드를 작성해 보겠습니다.

![Postman API](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/api.png)

![Postman Test Script](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/postman.png)

그림에서 표시한 것처럼 API 작성과 Tests 스크립트를 차례로 작성합니다. 아래 Test Script 에 대한 샘플 코드입니다.

```
// 1. 요청 이후 status code 체크

pm.test('Check status code === 200', () => pm.response.to.have.status(200));

// 2. 요청 이후 api_token 존재여부 체크

pm.test('Check api_token', () => {
    var jsonData = pm.response.json();
    pm.expect(jsonData.api_token !== null).to.be.true;
});
```

이후 `send` 버튼을 눌러 API 실행을 눌러보면 

![Postman Result](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/result.png)

그림과 같이 호출결과와 테스트 결과를 확인할 수 있습니다.

### Postman Collection 생성

이제 위에서 진행한 방식의 API 호출 및 테스트 코드작성을 Collection 으로 만들어 보겠습니다.
[Postman Collection 만들기](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 에서 자세한 내용을 보실 수 있습니다.

![Postman Collection](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/collection.png)

이렇게 생성된 Collection 을 한번에 실행해 보기 위해서는

- Postman 의 [Collection Runner](https://learning.getpostman.com/docs/postman/collection_runs/starting_a_collection_run/) 를 통해 UI 로 실행
- [Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) 을 통해 Command Line 에서 실행

두 가지 방식이 있습니다. Newman 을 이용한 방식은 나중에 Gitlab CI 와 연동해서 사용할 것이기 때문에 지금은 Collection Runner 를 통해 실행하는 방식을 간단히 알아보겠습니다.

![Collection Runner](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run.png)

위의 그림처럼 Collection 에서 Run 을 누르게 되면 아래와 같은 새로운 창이 뜨게 됩니다.

![Run](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run_collection.png)

![Result](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run_result.png)


위와 같은 방식으로 Postman 에서 작성된 Test Script 를 검증해 볼 수 있습니다.

다음으로 넘어가기 전에 Newman Cli 를 통해 Collection 에 등록된 테스트 코드를 실행하기 위해서는 다음 이미지와 같이 Collection 을 JSON 파일로 Export 시킬 필요가 있습니다.

![export](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/export.png)

예를 들어, Collection 을 `postman_collection.json` 이라는 파일명으로 export 했다면 Newman 으로는 다음과 같이 Collection 테스트를 수행해볼 수 있습니다.

```shell
newman run ./broker.postman_collection.json
```

---

### Gitlab CI : 소스 통합 및 동화를 위한 파이프라인

![Gitlab CI](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/ci-cd-test-deploy-illustration_2x.png)

Gitlab 은 Github 와 마찬가지로 소스코드 형상관리를 위한 도구입니다. Gitlab 에 대한 자세한 설명은 여기에서는 생략하도록 하겠습니다. 우리가 알아볼 것은 Gitlab CI 입니다.
Gitlab CI 는 소스 통합 및 배포 자동화를 위한 도구로 일반적으로 많이 알려져 있는 [Jenkins](https://jenkins.io/) 또는 [Travis CI](https://travis-ci.org/) 와 유사한 도구라고 보시면 됩니다.

Gitlab CI 를 자세하게 알고 싶다면 [Quick Start Gitlab CI](https://docs.gitlab.com/ee/ci/quick_start/) 를 참고하세요. 여기에서는 Gitlab CI 에 대해서 자세한 내용을 다루진 않습니다. 여러분이 Gitlab CI 에 어느정도 익숙하다고 가정하겠습니다.

이제 우리는 위에서 말한대로 Gitlab CI 를 통해 테스트 수행 + API 테스트 + 보안 취약점 검증을 진행할 것입니다.
먼저, .gitlab-ci.yml 파일을 아래와 같이 만들고 프로젝트 루트 디렉토리에 위치시킵니다.

```yml
image: "ruby:2.4"

services:
  - mysql:5.7
  - redis:alpine

variables:
  MYSQL_ALLOW_EMPTY_PASSWORD: "1"
  RAILS_ENV: "test"
  NODE_ENV: "test"

cache:
  paths:
    - node_modules/

before_script:
  - ruby -v
  - which ruby
  - apt-get update -y
  - apt-get install -y libssl-dev build-essential wget
  - npm -v
  - npm install
  - wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  - source /root/.bashrc
  - nvm install 6.6.0
  - nvm use 6.6.0
  - node -v
  - npm install newman -g
  - gem install bundler --no-ri --no-rdoc
  - bundle install --quiet
  - bundle exec rake db:create --quiet
  - bundle exec rake db:migrate --quiet
  - bundle exec rake db:test:prepare --quiet

api:
  script:
    # 백그라운드로 레일즈 서버 실행
    - bundle exec rails s -d
    - newman run ./broker.postman_collection.json

rspec:
  script:
    - rspec

brakeman:
  script:
    - bundle exec brakeman -z -q
```

Gitlab CI Runner 는 Docker 에서 동작하도록 설정을 한 상태입니다. 기본적으로 ruby 2.4 버전의 docker image 를 기본으로 하여, 프로젝트에서 사용하는 mysql, redis 를 이용할 수 있도록 서비스를 연결합니다.

Docker 환경에서 사용할 환경변수는 `variables` 항목으로 설정을 할 수 있습니다. 환경변수에 해당하는 ENV 설정은 여기를 통해 진행하세요.

`before_script` 에서는 본격적인 CI Script 를 돌리기 전에 수행하고자 하는 항목들을 설정할 수 있습니다. `before_script` 항목을 하나씩 뜯어보자면 다음과 같습니다.

```yml
before_script:
  # docker 내에 ruby on rails 환경을 운영하기 위한 기본 libraries 를 설치합니다.
  - ruby -v
  - which ruby
  - apt-get update -y
  - apt-get install -y libssl-dev build-essential wget

  # newman cli 를 설치하기 위해서는 npm 을 통해 설치하게 됩니다.
  # npm 이 기본적으로 설치되어 있지 않기 때문에 npm 설치를 위해
  # nvm 을 우선 설치하고 npm install newman -g 를 통해 newman 을 설치합니다.
  - wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  - source /root/.bashrc
  - nvm install 6.6.0
  - nvm use 6.6.0
  - node -v
  - npm install newman -g
 
  # rails 로 제작한 프로젝트를 실행하기 위해
  # 아래의 구문을 차례로 수행합니다.
  - gem install bundler --no-ri --no-rdoc
  - bundle install --quiet
  - bundle exec rake db:create --quiet
  - bundle exec rake db:migrate --quiet
  - bundle exec rake db:test:prepare --quiet
```

`before_script` 를 통해 `rails` 와 `newman` 을 동작시킬 수 있는 환경이 구성이 되었다면,

- api 테스트
- 테스트 수행을 위한 rspec
- 보안 취약성 점검을 위한 brakeman

.gitlab-ci.yml 에 위의 항목을 설정하면 Gitlab CI Runner 에서 각각의 항목에 대해 Job 이 동작하게 됩니다.

![Gitlab](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/gitlab.png)

이제 Gitlab 에 접속하여 프로젝트 Repository 에 들어가 좌측 메뉴에 있는 `CI / CD` 내의 `Pipeline` 을 눌러보면 .gitlab-ci.yml 에 의해 수행되는 자동화 파이프라인을 확인할 수 있습니다. 파이프라인을 클릭하여 세부 Job 을 보면 아래와 같은 화면을 보실 수 있습니다.

![Job](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/job.png)

각각의 Job 이 모두 성공으로 떨어져야 파이프라인이 성공적으로 끝나게 되며 Build 는 `Passed` 로 떨어집니다.

![RSpec](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/rspec.png)

위 이미지는 [RSpec](http://rspec.info/) 을 이용한 테스트 수행 결과입니다. Rspec 에 대한 자세한 설명은 여기에서 진행하지 않습니다.

![Brakeman]
(https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/brakeman.png)

위 이미지는 [Brakeman](https://github.com/presidentbeef/brakeman) 을 이용하여 보안 취약점을 점검하는 과정입니다. 만약, 코드에 보안 취약점이 있다면 Job 은 실패로 떨어지게 되고 Build 는 실패로 판명날 것입니다.

![Newman](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/newman.png)

위 이미지는 [Newman Cli](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) 를 이용하여 API TEST 를 점검하는 과정입니다.

위와 같이 Gitlab CI 를 통해 테스트 + 보안 취약점 점검 + API 테스트까지 완료해 보았습니다. 이제 남은 것은 

> API 를 어떻게 쉽고 빠르게 문서화를 할 것인가? 

라는 질문을 해결해야 할 때입니다.

---

### Postman 을 이용한 API 문서화

Postman 을 이용한 이유는 쉽게 API 를 명세화하고, 테스트를 수행할 수 있다는 점이 좋아서 사용한 것도 있지만, Postman 에 숨은 기능이 하나 더 있다면 바로 문서화를 상당히 쉽게 진행할 수 있다는 것입니다.

위에서 설명한 [Postman Collection](https://learning.getpostman.com/docs/postman/collections/creating_collections/) 에는 Collection 의 내용을 Postman 웹사이트로 `Publish` 할 수 있는 기능이 제공됩니다.

![Collection Publish](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/publish.png)

위와 같이 Collection 을 Publish 하게 되면 다음과 같이 멋진 API Document 를 출력할 수 있습니다.

![Document](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/document.png)

어떤가요? API 문서가 멋지지 않나요? 이렇게 만들어진 문서는 `Run in Postman` 버튼으로 Postman 이 설치된 환경이라면 어디서든 편리하게 실행해볼 수 있습니다.

---

이상으로 Gitlab CI + Postman 을 통해 API 테스트 수행 및 API 문서화까지 진행해 봤습니다. 예제에서는 Ruby on Rails 를 이용하였지만 본인이 이용하는 다른 개발 환경에서도 Gitlab CI 와 Postman 은 동일하게 수행할 수 있습니다.

아무쪼록 이 글이 API 테스트와 문서화를 고민하고 있는 다른 개발자 분들에게 도움이 되었으면 합니다.