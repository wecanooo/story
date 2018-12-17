---
title: Jekyll 에서 Gatsby 로 블로그 이사하기
cover: 'images/cover4.jpg'
author: "wecanooo"
date:   2018-12-17 23:57:00
category: "tech"
logo: '/logos/dream.png'
tags:
  - jekyll
  - react
  - gatsby
---

기존 [제 블로그](https://wecanooo.github.com/blog/)는 Jekyll 기반으로 만들어 Github 로 배포를 했습니다.
오랫동안 블로그를 방치하다가 근래 정리해야 할 것들이 있어서 다시 만지려고 하니 이제는 Jekyll 도 설치 중에 오류가 발생하기도 하고, 요즘엔 [React](https://reactjs.org/) 기반의 Static Site Generator 들이 대세인지라 이번참에 저도 블로그 환경을 새롭게 단장하기로 마음을 먹었습니다.

후보군을 보던 중 단연 눈에 띄는 것은 [Next.js](https://nextjs.org/) 와 [Gatsby](https://www.gatsbyjs.org/) 두가지의 React 기반 Generator 였습니다.

사실 예전부터 Next.js 는 개인적으로 관심을 많이 갖고 있던 Project 였으나, 회사에서 사용하고 있는 Gitlab 에서 제공되는 Gitlab CI  Template 중에 Gatsby 가 있는지라 이번참에 Gatsby 도 알아볼겸 Gatsby 로 옮기기로 했습니다.

Gatsby 를 이용하여 한땀한땀 블로그를 만들기엔 인생은 너무 짧고 해야할 일은 너무 많습니다. 제가 사용하고 있던 기존 블로그의 디자인을 그대로 이용하기로 마음을 먹고 찾아보니 역시 [Ghost 테마](https://github.com/haysclark/gatsby-starter-casper) 가 있었습니다.

---

### Gatsby Cli 설치하기

[Ghost 테마](https://github.com/haysclark/gatsby-starter-casper) 에서 안내하는 것처럼 아래와 같이 자신의 블로그를 위한 Repository 를 생성해 줍니다. github repo 를 clone 해서 사용하는 방법도 있으나, 배포나 실행의 편의를 위해 gatsby-cli 를 설치하는 것을 추천합니다.

```shell
npm install -g gatsby-cli
```


---

### Starter 를 이용하여 블로그 생성하기

gatsby cli 를 설치했다면 이제 gatsby command 로 블로그를 생성할 차례입니다. Gatsby 에서는 여러 유명한 Starter 들을 많이 제공하고 있어서 편리합니다. 저는 위에서 얘기한 것처럼 casper 라는 유명한 블로그 테마를 이용한 스타터를 이용했습니다.


```shell
gatsby new 생성할폴더이름 https://github.com/haysclark/gatsby-starter-casper
```

위와 같이 설치한 뒤에는 간단하게 로컬에서 실행해 볼 수 있습니다.

```shell
cd 생성된폴더이름
gatsby develop
```

실행 후에는 https://localhost:8000 을 통해 로컬에서 실행되는 blog 를 확인하실 수 있습니다.

![gatsby develop](https://wecanooo.github.com/story/images/gatsby_develop.png)

여기까지 진행하면 기본적인 blog 만들기 준비는 끝이 났습니다. 이제부터 할 일은 data 폴더 내의 SiteConfig.js 파일을 본인의 취향에 맞게끔 수정해 나가면 됩니다. 자세한 설정은 [Ghost 테마 스타터](https://github.com/haysclark/gatsby-starter-casper) 의 SiteConfig 설정을 참고하면 쉽게 변경하실 수 있습니다.

---

### Github 에 블로그 배포하기

이제 Github 에 배포하는 방법은 간단합니다. 

```
1. Gitlab 을 방문하여 로그인 한다.
2. New Repository 를 클릭하여 새로운 저장소를 생성한다.
3. 이때 저장소의 이름은 본인이 원하는 것으로 지정한다. (ex, blog)
```

위의 순서로 Repository 를 생성했다면 gatsby 를 통해 생성된 블로그 폴더로 이동하여 다음과 같이 명령을 수행합니다.
편의상 Github Repository 이름을 `blog` 로 정했다고 가정하겠습니다.

```shell
git init
git remote add origin https://github.com/계정이름/blog.git
```

위와같이 remote repository 를 연결했다면 이제 자신의 블로그 코드를 에디터로 열고 package.json 파일의 scripts 구문에 다음의 내용을 추가합니다.

```
"deploy": "gatsby build --prefix-paths && gh-pages -d public"
```

package.json 내의 scripts 구문은 다음과 같은 형태가 될 것입니다.

```json
"scripts": {
  "develop": "gatsby develop",
  "serve": "gatsby serve",
  "build": "gatsby build",
  "build:pp": "gatsby build --prefix-paths",
  "build:gh": "npm run clean && npm run build:pp && gh-pages -d public",
  "clean": "rm -rf .cache && rm -rf public",
  "lint": "npm run lint:js && npm run lint:css && npm run lint:md",
  "lint:js": "eslint --ext .js,.jsx --ignore-pattern public --ignore-pattern static .",
  "lint:css": "stylelint --fix 'src/**/*.css'",
  "lint:md": "remark content/posts/",
  "write-good": "write-good $(glob 'content/posts/**/*.md')",
  "format:js": "prettier '**/*.{js,jsx}' --write",
  "release": "standard-version -a",
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
},
```

이제 Github 내의 gh-pages 브랜치로 배포하기 위해 npm package 를 설치합니다. (이미 설치가 되어 있다면 다음 과정은 생략해도 됩니다.)

```shell
npm install --save-dev gh-pages
```

여기까지 문제없이 진행되었다면 아래의 명령으로 Github 에 배포를 진행합니다.

```shell
npm run deploy
```

위의 모든 과정이 정상적으로 수행이 되었다면 https://계정명.github.com/blog/ 에 본인이 생성한 블로그가 개설이 됩니다.

---

### 댓글 플러그인 붙이기

[Ghost 테마 스타터](https://github.com/haysclark/gatsby-starter-casper) 에는 기본적으로 [disqus](https://help.disqus.com/) 댓글 플러그인이 연동되어 있습니다.
disqus 가입 이후 발급된 short name 을 data/SiteConfig.js 파일 내에 있는 `disqusShortname` 설정값에 입력하기만 하면 모든 포스트에는 disqus comment 플러그인이 삽입이 됩니다.


