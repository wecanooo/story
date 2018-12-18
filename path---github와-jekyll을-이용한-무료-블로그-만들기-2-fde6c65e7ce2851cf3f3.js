webpackJsonp([94803244746109],{462:function(t,e){t.exports={data:{markdownRemark:{html:'<p><img src="https://wecanooo.github.io/blog/assets/images/github-pages.jpg" alt="Github Pages"></p>\n<hr>\n<p>Github Pages를 이용하는 방법에는 크게 두가지가 있다.</p>\n<ul>\n<li>Github 계정 페이지</li>\n<li>Github 프로젝트 페이지</li>\n</ul>\n<p>Github 계정 페이지의 경우 Github에서 Repository를 생성할 때 <strong>[AccountName]</strong>.github.io 형태로 만들면 된다. <strong>[AccountName]</strong> 에는 반드시 자신의 계정명을 입력해야 하니 유의하기 바란다.</p>\n<p>Github 프로젝트 페이지의 경우 보통의 Repository를 만드는 것과 마찬가지로, 원하는 이름의 Repository를 생성한 뒤 생성된 저장소에 <strong>gh-pages</strong> 라는 이름의 Branch를 만들면 Github에서 이 것을 Github Pages로 인식한다. 이후 <strong>gh-pages</strong> Branch에 코드들을 넣으면 자신이 원하는 페이지를 제작할 수 있다.</p>\n<p>이번 에피소드에서는 Github 계정 페이지 제작 방식으로 진행한다. 자세한 내용을 알고 싶으면 <a href="https://pages.github.com/">Github Pages</a>를 참조하길 바란다.</p>\n<h3 id="github-저장소-생성하기"><a href="#github-%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Github 저장소 생성하기</h3>\n<p>Github 계정이 있고 로그인이 완료된 상태라면 <a href="https://github.com/new">New Repository</a>를 클릭하여\n저장소 생성화면으로 이동한다.</p>\n<p><img src="https://wecanooo.github.io/blog/assets/images/user-repo@2x.png" alt="Create New User Repository"></p>\n<p>Repository Name은 위에서 말한 것처럼 반드시 자신의 <strong>[AccountName]</strong>.github.io 형태로 입력을 해야 한다. 그렇지 않을 경우, 정상적으로 동작하지 않을 수 있으니 유의하기 바란다.</p>\n<p>Github는 정책적으로 Private Repository를 유료로 지정하고 있기 때문에 우리는 Public Repository로 생성하도록 한다. 아래의 "Initialize this repository with a README"은 Repository를 생성할 때 README 파일을 함께 생성할 것인지를 물어보는 것으로 체크를 하면 최초에 README 파일을 함께 생성해 준다. 체크를 하고 가도록 하겠다. <strong>Create Repository</strong> 버튼을 클릭하면 다음 화면으로 진행할 수 있다.</p>\n<p><img src="https://wecanooo.github.io/blog/assets/images/created_repository.png" alt="Repository Settings"></p>\n<p>저장소가 정상적으로 생성이 되었다면 Github Pages로 만들기 위해 상단 Tab 중 <strong>[Settings]</strong> 탭을 눌러 Settings 화면으로 이동한다.</p>\n<p><img src="https://wecanooo.github.io/blog/assets/images/auto_generator.png" alt="Auto Generator"></p>\n<p>Settings 화면에서 마우스를 아래로 좀 내려보면 <strong>[Github Pages]</strong> 항목이 보이고 <strong>[Launch automatic page generator]</strong> 버튼이 보이면 클릭해 준다.</p>\n<p><img src="https://wecanooo.github.io/blog/assets/images/continue.png" alt="Continue"></p>\n<p>최종화면에서 Page Name과 Tagline에 적당한 값을 입력한 뒤 <strong>[Continue to layouts]</strong> 버튼을 클릭하고 Layout은 기본 Layout을 선택한 뒤 완료한다.\nLayout을 기본 Layout으로 선택하는 이유는 다음 에피소드에서 <a href="http://jekyllthemes.org/">Jekyll theme</a>를 이용하여 외부 Theme를 적용할 것이 때문이다.</p>\n<p><img src="https://wecanooo.github.io/blog/assets/images/done.png" alt="Continue"></p>\n<hr>\n<h3 id="안내영상"><a href="#%EC%95%88%EB%82%B4%EC%98%81%EC%83%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>안내영상</h3>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 75%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube.com/embed/eVc3S5wk18o" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<hr>\n<p>여기까지 완료한 뒤 <strong>[AccountName]</strong>.github.io 을 입력하면 Github 저장소에 호스팅 되는 자신의 페이지를 확인할 수 있다. 다음 에피소드에서 Jekyll Theme 중 적당한 것을 하나 선택하여 블로그를 꾸며보도록 하겠다.</p>',timeToRead:2,excerpt:"Github Pages를 이용하는 방법에는 크게 두가지가 있다. Github 계정 페이지 Github 프로젝트 페이지 Github 계정 페이지의 경우 Github에서 Repository를 생성할 때  AccountName .github.io…",frontmatter:{title:"Github와 Jekyll을 이용한 무료 블로그 만들기 - 2",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover2.jpg",date:"2016-04-29T10:18:00.000Z",category:"tech",tags:["blog","jekyll","github"],author:"wecanooo"},fields:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-2"}},prev:{excerpt:"이전 에피소드 에서 우리는 Github Page Generator를 이용하여  UserName .github.io…",frontmatter:{title:"Github와 Jekyll을 이용한 무료 블로그 만들기 - 3",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover1.jpg",date:"2016-04-30T10:18:00.000Z"},fields:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-3"}},next:{excerpt:" 이번 에피소드에서는  Github Pages 의 기능을 이용하여 간단한 블로그를 제작하는 방법을 알아보고자 한다. 많은 사람들이 블로그를 운영하기 위해서  Wordpress…",frontmatter:{title:"Github와 Jekyll을 이용한 무료 블로그 만들기 - 1",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg",date:"2016-04-29"},fields:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-1"}},authors:{edges:[{node:{id:"casper",name:"Casper User",image:"https://api.adorable.io/avatars/150/test.png",url:"http://gatsbyjs.org/",bio:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people."}},{node:{id:"wecanooo",name:"Eric Jang",image:"https://api.adorable.io/avatars/150/wecanooo@adorable.io.png",url:"http://about.me/wecanooo",bio:"루비온레일즈를 좋아하고, 여행을 좋아하는 개발자입니다."}},{node:{id:"guinevere",name:"Guinevere Kuiper",image:"https://randomuser.me/api/portraits/women/17.jpg",url:"https://randomuser.me/api/?seed=user1",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet lorem nec ligula aliquet, porta blandit augue luctus. Vivamus ac quam diam. Sed vestibulum pharetra hendrerit."}}]}},pathContext:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-2",total:7,prev:"/github와-jekyll을-이용한-무료-블로그-만들기-3",next:"/github와-jekyll을-이용한-무료-블로그-만들기-1"}}}});
//# sourceMappingURL=path---github와-jekyll을-이용한-무료-블로그-만들기-2-fde6c65e7ce2851cf3f3.js.map