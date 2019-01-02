webpackJsonp([0xc8ab9dc9de60],{467:function(t,e){t.exports={data:{markdownRemark:{html:'<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/dd18be1a7f3fbc91789207560798bb34/rails_api.png" alt="Rails API"></p>\n<h3 id="rails-api-를-만들어-가면서의-고민"><a href="#rails-api-%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-%EA%B0%80%EB%A9%B4%EC%84%9C%EC%9D%98-%EA%B3%A0%EB%AF%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rails API 를 만들어 가면서의 고민</h3>\n<p>회사에서 Rails API 를 이용하여 Backend API Server 를 제작하고 있습니다. API 를 제작하는데 있어서 필수적으로 제공되어야 할 것은 일관성 있는 API 설계와 더불어 표준적인 API Spec 을 따라 클라이언트와 데이터를 교환하는 것일 겁니다.</p>\n<p>하지만, API Server 를 제작하는 곳에서는 위의 내용에 더해 API 버전을 지속적으로 관리하는 것과 지속적으로 발전해 나가는 API Endpoint 가 정상적으로 잘 동작하는지에 대한 점검방법 또한 많은 고민을 하게 만드는 요소가 됩니다.</p>\n<p>Rails Framework 를 사용하면서 그 사용의 편리성에 대체적으로 만족하고 사용하고 있습니다만, <a href="https://swagger.io/">Swagger</a> 를 이용한 API 문서화 방법은 다른 개발 프레임워크들에 비해 의외로 편리하게 되어 있지 않습니다. 또한, Swagger 로 제작된 API Endpoint 는 지속적인 개발 기간동안 정상적으로 동작하는지에 대한 검증을 진행하기가 쉽지 않은 문제점이 있었습니다.</p>\n<blockquote>\n<ul>\n<li>편리한 방법으로 API Endpoint 검증과 함께 API 문서화를 한번에 이뤄낼 수 있는 방법은 없을까?</li>\n<li>테스트 도구와 문서화 도구를 분리하지 않을 수 있는 방법은 없을까?</li>\n</ul>\n</blockquote>\n<hr>\n<h3 id="api-테스트-도구"><a href="#api-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%8F%84%EA%B5%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API 테스트 도구</h3>\n<p>위 문제를 고민하던 중 일반적으로 제작된 API 를 테스트를 하기 위해서 어떤 방법을 사용하고 있는지 나열해 보았습니다.</p>\n<ul>\n<li>Command Line 에서 curl 을 이용하는 방법</li>\n<li>IntelliJ 나 VSCode 와 같은 통합 IDE 에서 제공하는 <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">REST API Client</a> 도구를 이용하는 방법</li>\n<li><a href="https://www.getpostman.com/">Postman</a> 과 같은 Gui 도구를 이용하는 방법</li>\n</ul>\n<p>curl 을 사용하는 방법은 비교적 Command Line 에 익숙한 사용자들에게는 편리한 방법일지는 몰라도 히스토리 관리라던지 작성된 코드의 재활용이 쉽지 않다는 불편함이 있습니다.</p>\n<p>최근까지는 IDE 에서 제공되는 REST API Client 도구를 이용하여 API 테스트를 진행해 왔었습니다. 개발을 진행하면서 내부 테스트 용도로는 상당히 편리함을 느꼈지만, 문서화 문제를 해결하진 못했고 프론트엔드 개발자와의 협업에도 크게 도움이 되진 못했습니다.</p>\n<p>개인적으로 간간히 사용하던 <a href="https://www.getpostman.com/">Postman</a> 을 최근에 다시 사용해 보면서 Postman 의 강력함에 놀라고 있는 중입니다. 예전부터 Postman 을 사용하면서 좋았던 것은 <a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Collection</a> 기능과 <a href="https://learning.getpostman.com/docs/postman/collections/sharing_collections/">Collection Share</a> 기능을 통해 만들었던 코드를 재활용할 수 있다는 것에서 상당히 만족하고 있었습니다.\n이번에 <a href="https://learning.getpostman.com/docs/postman/scripts/test_scripts/">Test Script</a> 기능까지 알게되면서 Postman 이라는 도구를 다시 한번 살펴보게 되었습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/postman_test_script.png" alt="Postman Test Script"></p>\n<hr>\n<h3 id="postman"><a href="#postman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Postman</h3>\n<p><a href="https://www.getpostman.com/">Postman</a> 은 Chrome Extendsion 과 Desktop 설치형 App 으로 제공되는 RestAPI Client 입니다. 그 기능이 상당히 강력하고 아래와 같이 Command Line 을 이용한 Restful API 호출에 익숙하지 않은 사용자들에게는 정말 편리한 도구입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">curl -i -X POST -H &quot;Content-Type:application/json&quot; http://localhost:3000/api/v1/channels -d &#39;{&quot;title&quot;:&quot;- The Naked Scientists Podcast - Stripping Down Science-new-title2&quot;,&quot;linkOnPodcastpedia&quot;:&quot;https://github.com/Codingpedia/podcastpedia/podcasts/792/-The-Naked-Scientists-Podcast-Stripping-Down-Science&quot;,&quot;description&quot;:&quot;The Naked Scientists flagship science show brings you a lighthearted look at the latest scientific breakthroughs, interviews with the world top scientists, answers to your science questions and science experiments to try at home.&quot;}&#39;</code></pre>\n      </div>\n<p>Postman 이 편리한 이유는 비단 잘 구성된 GUI 도구라는 것에만 그치지 않습니다. <a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Collection</a> 기능을 통해 한 단위의 기능 또는 프로젝트 별로 API 들을 Group 화 할 수 있으며, <a href="https://learning.getpostman.com/docs/postman/collections/sharing_collections/">Collection Share</a> 기능으로 다른 사용자 또는 다른 PC 로 저장된 Collection 을 쉽게 옮길 수도 있습니다.</p>\n<p>또한, <a href="https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/">Newman</a> 이라는 Cli 를 통해 저장된 <a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Collection</a> 을 Command Line Runner 로 실행해 볼 수도 있는 강력한 기능을 제공하고 있습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/newman.gif" alt="Postman Newman Cli"></p>\n<p>이 문서에서 다루고 싶은 주제는 <a href="https://guides.rubyonrails.org/api_app.html">Rails API</a> + <a href="https://about.gitlab.com/product/continuous-integration/">Gitlab CI</a> + <a href="http://rspec.info/">RSpec</a> + <a href="https://github.com/presidentbeef/brakeman">Brakeman</a> + <a href="https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/">Newman</a> + <a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Postman Collection</a> 의 조합을 통해 </p>\n<ul>\n<li>빌드 자동화</li>\n<li>테스트 검증</li>\n<li>API Endpoint 검증</li>\n<li>보안 취약점 검증</li>\n</ul>\n<p>을 진행해 보고자 합니다. 또한, 이 문서의 마지막에서는 Postman 에서 제공하고 있는 <a href="https://learning.getpostman.com/docs/postman/api_documentation/intro_to_api_documentation/">Postman API Documentation</a> 기능을 통해 그동안 귀찮게 느껴졌었던 API Documentation 을 함께 해결하고자 합니다.</p>\n<h3 id="이-문서에서-다루지-않는-것들"><a href="#%EC%9D%B4-%EB%AC%B8%EC%84%9C%EC%97%90%EC%84%9C-%EB%8B%A4%EB%A3%A8%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B2%83%EB%93%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>이 문서에서 다루지 않는 것들</h3>\n<ul>\n<li>Rails API 프로젝트 생성 방법</li>\n<li>API 코드 작성 방법</li>\n<li>Rspec 코드 작성 방법</li>\n<li>Gitlab CI 설치방법 및 기본개념</li>\n</ul>\n<p>여기서는 여러분이 Rails 라는 개발도구에 이미 익숙하고, Rspec 을 통해 테스트 코드를 작성할 수 있는 상태라고 가정합니다.</p>\n<hr>\n<h3 id="postman-으로-테스트-코드-작성"><a href="#postman-%EC%9C%BC%EB%A1%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Postman 으로 테스트 코드 작성</h3>\n<p>앞서 얘기한 Postman 도구를 통해 테스트 코드를 작성해 보겠습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/api.png" alt="Postman API"></p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/postman.png" alt="Postman Test Script"></p>\n<p>그림에서 표시한 것처럼 API 작성과 Tests 스크립트를 차례로 작성합니다. 아래 Test Script 에 대한 샘플 코드입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">// 1. 요청 이후 status code 체크\n\npm.test(&#39;Check status code === 200&#39;, () =&gt; pm.response.to.have.status(200));\n\n// 2. 요청 이후 api_token 존재여부 체크\n\npm.test(&#39;Check api_token&#39;, () =&gt; {\n    var jsonData = pm.response.json();\n    pm.expect(jsonData.api_token !== null).to.be.true;\n});</code></pre>\n      </div>\n<p>이후 <code class="language-text">send</code> 버튼을 눌러 API 실행을 눌러보면 </p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/result.png" alt="Postman Result"></p>\n<p>그림과 같이 호출결과와 테스트 결과를 확인할 수 있습니다.</p>\n<h3 id="postman-collection-생성"><a href="#postman-collection-%EC%83%9D%EC%84%B1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Postman Collection 생성</h3>\n<p>이제 위에서 진행한 방식의 API 호출 및 테스트 코드작성을 Collection 으로 만들어 보겠습니다.\n<a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Postman Collection 만들기</a> 에서 자세한 내용을 보실 수 있습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/collection.png" alt="Postman Collection"></p>\n<p>이렇게 생성된 Collection 을 한번에 실행해 보기 위해서는</p>\n<ul>\n<li>Postman 의 <a href="https://learning.getpostman.com/docs/postman/collection_runs/starting_a_collection_run/">Collection Runner</a> 를 통해 UI 로 실행</li>\n<li><a href="https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/">Newman</a> 을 통해 Command Line 에서 실행</li>\n</ul>\n<p>두 가지 방식이 있습니다. Newman 을 이용한 방식은 나중에 Gitlab CI 와 연동해서 사용할 것이기 때문에 지금은 Collection Runner 를 통해 실행하는 방식을 간단히 알아보겠습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run.png" alt="Collection Runner"></p>\n<p>위의 그림처럼 Collection 에서 Run 을 누르게 되면 아래와 같은 새로운 창이 뜨게 됩니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run_collection.png" alt="Run"></p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/run_result.png" alt="Result"></p>\n<p>위와 같은 방식으로 Postman 에서 작성된 Test Script 를 검증해 볼 수 있습니다.</p>\n<p>다음으로 넘어가기 전에 Newman Cli 를 통해 Collection 에 등록된 테스트 코드를 실행하기 위해서는 다음 이미지와 같이 Collection 을 JSON 파일로 Export 시킬 필요가 있습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/export.png" alt="export"></p>\n<p>예를 들어, Collection 을 <code class="language-text">postman_collection.json</code> 이라는 파일명으로 export 했다면 Newman 으로는 다음과 같이 Collection 테스트를 수행해볼 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">newman run ./broker.postman_collection.json</code></pre>\n      </div>\n<hr>\n<h3 id="gitlab-ci--소스-통합-및-동화를-위한-파이프라인"><a href="#gitlab-ci--%EC%86%8C%EC%8A%A4-%ED%86%B5%ED%95%A9-%EB%B0%8F-%EB%8F%99%ED%99%94%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8%1C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gitlab CI : 소스 통합 및 동화를 위한 파이프라인</h3>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/c7532b5bf0b64d61b0652f18ad3b7e23/ci-cd-test-deploy-illustration_2x.png" alt="Gitlab CI"></p>\n<p>Gitlab 은 Github 와 마찬가지로 소스코드 형상관리를 위한 도구입니다. Gitlab 에 대한 자세한 설명은 여기에서는 생략하도록 하겠습니다. 우리가 알아볼 것은 Gitlab CI 입니다.\nGitlab CI 는 소스 통합 및 배포 자동화를 위한 도구로 일반적으로 많이 알려져 있는 <a href="https://jenkins.io/">Jenkins</a> 또는 <a href="https://travis-ci.org/">Travis CI</a> 와 유사한 도구라고 보시면 됩니다.</p>\n<p>Gitlab CI 를 자세하게 알고 싶다면 <a href="https://docs.gitlab.com/ee/ci/quick_start/">Quick Start Gitlab CI</a> 를 참고하세요. 여기에서는 Gitlab CI 에 대해서 자세한 내용을 다루진 않습니다. 여러분이 Gitlab CI 에 어느정도 익숙하다고 가정하겠습니다.</p>\n<p>이제 우리는 위에서 말한대로 Gitlab CI 를 통해 테스트 수행 + API 테스트 + 보안 취약점 검증을 진행할 것입니다.\n먼저, .gitlab-ci.yml 파일을 아래와 같이 만들고 프로젝트 루트 디렉토리에 위치시킵니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code class="language-yml">image: &quot;ruby:2.4&quot;\n\nservices:\n  - mysql:5.7\n  - redis:alpine\n\nvariables:\n  MYSQL_ALLOW_EMPTY_PASSWORD: &quot;1&quot;\n  RAILS_ENV: &quot;test&quot;\n  NODE_ENV: &quot;test&quot;\n\ncache:\n  paths:\n    - node_modules/\n\nbefore_script:\n  - ruby -v\n  - which ruby\n  - apt-get update -y\n  - apt-get install -y libssl-dev build-essential wget\n  - npm -v\n  - npm install\n  - wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash\n  - source /root/.bashrc\n  - nvm install 6.6.0\n  - nvm use 6.6.0\n  - node -v\n  - npm install newman -g\n  - gem install bundler --no-ri --no-rdoc\n  - bundle install --quiet\n  - bundle exec rake db:create --quiet\n  - bundle exec rake db:migrate --quiet\n  - bundle exec rake db:test:prepare --quiet\n\napi:\n  script:\n    # 백그라운드로 레일즈 서버 실행\n    - bundle exec rails s -d\n    - newman run ./broker.postman_collection.json\n\nrspec:\n  script:\n    - rspec\n\nbrakeman:\n  script:\n    - bundle exec brakeman -z -q</code></pre>\n      </div>\n<p>Gitlab CI Runner 는 Docker 에서 동작하도록 설정을 한 상태입니다. 기본적으로 ruby 2.4 버전의 docker image 를 기본으로 하여, 프로젝트에서 사용하는 mysql, redis 를 이용할 수 있도록 서비스를 연결합니다.</p>\n<p>Docker 환경에서 사용할 환경변수는 <code class="language-text">variables</code> 항목으로 설정을 할 수 있습니다. 환경변수에 해당하는 ENV 설정은 여기를 통해 진행하세요.</p>\n<p><code class="language-text">before_script</code> 에서는 본격적인 CI Script 를 돌리기 전에 수행하고자 하는 항목들을 설정할 수 있습니다. <code class="language-text">before_script</code> 항목을 하나씩 뜯어보자면 다음과 같습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yml"><code class="language-yml">before_script:\n  # docker 내에 ruby on rails 환경을 운영하기 위한 기본 libraries 를 설치합니다.\n  - ruby -v\n  - which ruby\n  - apt-get update -y\n  - apt-get install -y libssl-dev build-essential wget\n\n  # newman cli 를 설치하기 위해서는 npm 을 통해 설치하게 됩니다.\n  # npm 이 기본적으로 설치되어 있지 않기 때문에 npm 설치를 위해\n  # nvm 을 우선 설치하고 npm install newman -g 를 통해 newman 을 설치합니다.\n  - wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash\n  - source /root/.bashrc\n  - nvm install 6.6.0\n  - nvm use 6.6.0\n  - node -v\n  - npm install newman -g\n \n  # rails 로 제작한 프로젝트를 실행하기 위해\n  # 아래의 구문을 차례로 수행합니다.\n  - gem install bundler --no-ri --no-rdoc\n  - bundle install --quiet\n  - bundle exec rake db:create --quiet\n  - bundle exec rake db:migrate --quiet\n  - bundle exec rake db:test:prepare --quiet</code></pre>\n      </div>\n<p><code class="language-text">before_script</code> 를 통해 <code class="language-text">rails</code> 와 <code class="language-text">newman</code> 을 동작시킬 수 있는 환경이 구성이 되었다면,</p>\n<ul>\n<li>api 테스트</li>\n<li>테스트 수행을 위한 rspec</li>\n<li>보안 취약성 점검을 위한 brakeman</li>\n</ul>\n<p>.gitlab-ci.yml 에 위의 항목을 설정하면 Gitlab CI Runner 에서 각각의 항목에 대해 Job 이 동작하게 됩니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/gitlab.png" alt="Gitlab"></p>\n<p>이제 Gitlab 에 접속하여 프로젝트 Repository 에 들어가 좌측 메뉴에 있는 <code class="language-text">CI / CD</code> 내의 <code class="language-text">Pipeline</code> 을 눌러보면 .gitlab-ci.yml 에 의해 수행되는 자동화 파이프라인을 확인할 수 있습니다. 파이프라인을 클릭하여 세부 Job 을 보면 아래와 같은 화면을 보실 수 있습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/job.png" alt="Job"></p>\n<p>각각의 Job 이 모두 성공으로 떨어져야 파이프라인이 성공적으로 끝나게 되며 Build 는 <code class="language-text">Passed</code> 로 떨어집니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/rspec.png" alt="RSpec"></p>\n<p>위 이미지는 <a href="http://rspec.info/">RSpec</a> 을 이용한 테스트 수행 결과입니다. Rspec 에 대한 자세한 설명은 여기에서 진행하지 않습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/brakeman.png" alt="Brakeman"></p>\n<p>위 이미지는 <a href="https://github.com/presidentbeef/brakeman">Brakeman</a> 을 이용하여 보안 취약점을 점검하는 과정입니다. 만약, 코드에 보안 취약점이 있다면 Job 은 실패로 떨어지게 되고 Build 는 실패로 판명날 것입니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/newman.png" alt="Newman"></p>\n<p>위 이미지는 <a href="https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/">Newman Cli</a> 를 이용하여 API TEST 를 점검하는 과정입니다.</p>\n<p>위와 같이 Gitlab CI 를 통해 테스트 + 보안 취약점 점검 + API 테스트까지 완료해 보았습니다. 이제 남은 것은 </p>\n<blockquote>\n<p>API 를 어떻게 쉽고 빠르게 문서화를 할 것인가? </p>\n</blockquote>\n<p>라는 질문을 해결해야 할 때입니다.</p>\n<hr>\n<h3 id="postman-을-이용한-api-문서화"><a href="#postman-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-api-%EB%AC%B8%EC%84%9C%ED%99%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Postman 을 이용한 API 문서화</h3>\n<p>Postman 을 이용한 이유는 쉽게 API 를 명세화하고, 테스트를 수행할 수 있다는 점이 좋아서 사용한 것도 있지만, Postman 에 숨은 기능이 하나 더 있다면 바로 문서화를 상당히 쉽게 진행할 수 있다는 것입니다.</p>\n<p>위에서 설명한 <a href="https://learning.getpostman.com/docs/postman/collections/creating_collections/">Postman Collection</a> 에는 Collection 의 내용을 Postman 웹사이트로 <code class="language-text">Publish</code> 할 수 있는 기능이 제공됩니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/publish.png" alt="Collection Publish"></p>\n<p>위와 같이 Collection 을 Publish 하게 되면 다음과 같이 멋진 API Document 를 출력할 수 있습니다.</p>\n<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/490504b627a15d108f1afe60362ce9da/document.png" alt="Document"></p>\n<p>어떤가요? API 문서가 멋지지 않나요? 이렇게 만들어진 문서는 <code class="language-text">Run in Postman</code> 버튼으로 Postman 이 설치된 환경이라면 어디서든 편리하게 실행해볼 수 있습니다.</p>\n<hr>\n<p>이상으로 Gitlab CI + Postman 을 통해 API 테스트 수행 및 API 문서화까지 진행해 봤습니다. 예제에서는 Ruby on Rails 를 이용하였지만 본인이 이용하는 다른 개발 환경에서도 Gitlab CI 와 Postman 은 동일하게 수행할 수 있습니다.</p>\n<p>아무쪼록 이 글이 API 테스트와 문서화를 고민하고 있는 다른 개발자 분들에게 도움이 되었으면 합니다.</p>',timeToRead:9,excerpt:"Rails API 를 만들어 가면서의 고민 회사에서 Rails API 를 이용하여 Backend API Server 를 제작하고 있습니다. API 를 제작하는데 있어서 필수적으로 제공되어야 할 것은 일관성 있는 API 설계와 더불어 표준적인 API…",frontmatter:{title:"API 개발에서 Postman 이용하기",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/b5a3f174d257be33bbbc1e6e7f787f6a/cover11.png",date:"2018-12-19T20:37:00.000Z",category:"tech",tags:["api","rails","postman"],author:"wecanooo"},fields:{slug:"/api-개발에서-postman-이용하기"}},prev:{excerpt:" 이번 에피소드에서는  Github Pages 의 기능을 이용하여 간단한 블로그를 제작하는 방법을 알아보고자 한다. 많은 사람들이 블로그를 운영하기 위해서  Wordpress…",frontmatter:{title:"Github와 Jekyll을 이용한 무료 블로그 만들기 - 1",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg",date:"2016-04-29"},fields:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-1"}},next:{excerpt:"기존  제 블로그 는 Jekyll 기반으로 만들어 Github 로 배포를 했습니다.\n오랫동안 블로그를 방치하다가 근래 정리해야 할 것들이 있어서 다시 만지려고 하니 이제는 Jekyll…",frontmatter:{title:"Jekyll 에서 Gatsby 로 블로그 이사하기",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg",date:"2018-12-17T23:57:00.000Z"},fields:{slug:"/jekyll-에서-gatsby-로-블로그-이사하기"}},authors:{edges:[{node:{id:"wecanooo",name:"Eric Jang",image:"https://api.adorable.io/avatars/150/wecanooo@adorable.io.png",url:"http://about.me/wecanooo",bio:"루비온레일즈를 좋아하고, 여행을 좋아하는 개발자입니다."}},{node:{id:"casper",name:"Casper User",image:"https://api.adorable.io/avatars/150/test.png",url:"http://gatsbyjs.org/",bio:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people."}},{node:{id:"guinevere",name:"Guinevere Kuiper",image:"https://randomuser.me/api/portraits/women/17.jpg",url:"https://randomuser.me/api/?seed=user1",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet lorem nec ligula aliquet, porta blandit augue luctus. Vivamus ac quam diam. Sed vestibulum pharetra hendrerit."}}]}},pathContext:{slug:"/api-개발에서-postman-이용하기",total:8,prev:"/github와-jekyll을-이용한-무료-블로그-만들기-1",next:"/jekyll-에서-gatsby-로-블로그-이사하기"}}}});
//# sourceMappingURL=path---api-개발에서-postman-이용하기-8aec06660dfc955b8835.js.map