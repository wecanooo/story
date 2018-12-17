---
title: Github와 Jekyll을 이용한 무료 블로그 만들기 - 3
cover: 'images/cover1.jpg'
author: "wecanooo"
date:   2016-04-30 10:18:00
category: "tech"
tags:
  - blog
  - jekyll
  - github
---

![Jekyll and Github Pages](https://wecanooo.github.io/blog/assets/images/jekyll_github.png)

---

[이전 에피소드](https://wecanooo.github.io/blog/github-pages/)에서 우리는 Github Page Generator를 이용하여 **[UserName].github.io** 라는 이름의 사이트를 갖게 되었다.
그런데, 이렇게 만들어진 사이트는 기본 정보만 가지고 있는 소개 페이지 정도여서 블로그로 사용하기에는 적합하지 않다. 따라서, 우리는 [Jekyll Theme](http://jekyllthemes.org/)를 이용하여 이미 만들어진 사이트를 블로그처럼 만들 필요가 있다.

### Git Clone을 통해 소스 내려받기

Jekyll Theme를 다운로드 받기 전에 `git clone` 명령을 통해 이전 에피소드에서 만들었던 저장소를 로컬 컴퓨터로 내려 받도록 하겠다. 저장소의 경로는 각자의 경로가 모두 다르기 때문에 본인의 저장소 경로를 확인하여야 한다.

```shell
$ git clone https://github.com/haassl/haassl.github.io.git
```

위의 명령을 수행하면 `haassl.github.io` 폴더가 생성이 된다. 해당 폴더 내에는 이전 에피소드에서 생성되었던 파일들이 존재하는 것을 확인할 수 있다. 이제 이 폴더에 Jekyll Theme 파일을 적용하기 위해 `haassl.github.io` 폴더 내의 모든 파일은 삭제하도록 한다.

### Jekyll Theme 다운로드 받기

[Jekyll Theme](http://jekyllthemes.org/) 사이트로 이동하면 많은 Theme 가 존재한다. 지금 글이 작성되고 있는 이 블로그도 Github Page와 Jekyll Theme를 이용한 블로그인데 편의상 같은 Theme를 다운로드 받아서 만들어 보겠다.

Jekyll Theme 중 [Moon Theme](http://jekyllthemes.org/themes/moon/) 를 선택하고 Download 버튼을 클릭하여 Moon-gh-pages.zip 파일을 다운로드 받은 뒤 압축을 풀어 `Moon-gh-pages` 폴더 내에 있는 모든 파일을 위에서 생성한 `haassl.github.io` 내로 복사한다.

### Jekyll 설치하기

[Jekyll](https://jekyllrb-ko.github.io/)은 정적파일을 블로그나 웹사이트로 제작할 수 있도록 하는 강력한 도구이다.
Jekyll에 대한 안내는 사이트에서 자세하게 안내하고 있으니 참고하기 바란다. Mac 에서 Jekyll 설치는 아주 간단하게 설치가 가능하다.

```shell
$ gem install jekyll
```

Jekyll을 설치한 뒤 화면을 확인하기 위해서는 작업경로로 이동한 뒤 아래의 명령을 수행하면 된다.

```shell
$ jekyll serve -w
```

이제 http://localhost:4000 에서 화면을 확인할 수 있다.

### Jekyll Theme 서버에 적용하기

```shell
$ git add --all
$ git commit -m "Initial Commit"
$ git push origin master
```

Github의 계정을 물어보면 계정정보를 입력하여 서버로 Theme를 올린다.

이제 **[UserName].github.io** 를 방문해 보면 변경된 Theme가 적용된 것을 확인할 수 있다.


### 안내영상

<iframe width="420" height="315" src="//www.youtube.com/embed/H5h4s7b6XcU" frameborder="0" allowfullscreen></iframe>
