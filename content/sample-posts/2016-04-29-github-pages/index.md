---
title: Github와 Jekyll을 이용한 무료 블로그 만들기 - 2
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover2.jpg'
author: "wecanooo"
date:   2016-04-29 10:18:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - blog
  - jekyll
  - github
---

![Github Pages](https://wecanooo.github.io/blog/assets/images/github-pages.jpg)

---

Github Pages를 이용하는 방법에는 크게 두가지가 있다.

* Github 계정 페이지
* Github 프로젝트 페이지

Github 계정 페이지의 경우 Github에서 Repository를 생성할 때 **[AccountName]**.github.io 형태로 만들면 된다. **[AccountName]** 에는 반드시 자신의 계정명을 입력해야 하니 유의하기 바란다.

Github 프로젝트 페이지의 경우 보통의 Repository를 만드는 것과 마찬가지로, 원하는 이름의 Repository를 생성한 뒤 생성된 저장소에 **gh-pages** 라는 이름의 Branch를 만들면 Github에서 이 것을 Github Pages로 인식한다. 이후 **gh-pages** Branch에 코드들을 넣으면 자신이 원하는 페이지를 제작할 수 있다.

이번 에피소드에서는 Github 계정 페이지 제작 방식으로 진행한다. 자세한 내용을 알고 싶으면 [Github Pages](https://pages.github.com/)를 참조하길 바란다.

### Github 저장소 생성하기

Github 계정이 있고 로그인이 완료된 상태라면 [New Repository](https://github.com/new)를 클릭하여
저장소 생성화면으로 이동한다.

![Create New User Repository](https://wecanooo.github.io/blog/assets/images/user-repo@2x.png)

Repository Name은 위에서 말한 것처럼 반드시 자신의 **[AccountName]**.github.io 형태로 입력을 해야 한다. 그렇지 않을 경우, 정상적으로 동작하지 않을 수 있으니 유의하기 바란다.

Github는 정책적으로 Private Repository를 유료로 지정하고 있기 때문에 우리는 Public Repository로 생성하도록 한다. 아래의 "Initialize this repository with a README"은 Repository를 생성할 때 README 파일을 함께 생성할 것인지를 물어보는 것으로 체크를 하면 최초에 README 파일을 함께 생성해 준다. 체크를 하고 가도록 하겠다. **Create Repository** 버튼을 클릭하면 다음 화면으로 진행할 수 있다.

![Repository Settings](https://wecanooo.github.io/blog/assets/images/created_repository.png)

저장소가 정상적으로 생성이 되었다면 Github Pages로 만들기 위해 상단 Tab 중 **[Settings]** 탭을 눌러 Settings 화면으로 이동한다.

![Auto Generator](https://wecanooo.github.io/blog/assets/images/auto_generator.png)

Settings 화면에서 마우스를 아래로 좀 내려보면 **[Github Pages]** 항목이 보이고 **[Launch automatic page generator]** 버튼이 보이면 클릭해 준다.

![Continue](https://wecanooo.github.io/blog/assets/images/continue.png)

최종화면에서 Page Name과 Tagline에 적당한 값을 입력한 뒤 **[Continue to layouts]** 버튼을 클릭하고 Layout은 기본 Layout을 선택한 뒤 완료한다.
Layout을 기본 Layout으로 선택하는 이유는 다음 에피소드에서 [Jekyll theme](http://jekyllthemes.org/)를 이용하여 외부 Theme를 적용할 것이 때문이다.

![Continue](https://wecanooo.github.io/blog/assets/images/done.png)

---

### 안내영상

<iframe width="420" height="315" src="//www.youtube.com/embed/eVc3S5wk18o" frameborder="0" allowfullscreen></iframe>

---

여기까지 완료한 뒤 **[AccountName]**.github.io 을 입력하면 Github 저장소에 호스팅 되는 자신의 페이지를 확인할 수 있다. 다음 에피소드에서 Jekyll Theme 중 적당한 것을 하나 선택하여 블로그를 꾸며보도록 하겠다.
