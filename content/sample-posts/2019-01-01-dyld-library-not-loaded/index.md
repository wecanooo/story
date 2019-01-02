---
title: dyld Library not loaded 해결
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/b5a3f174d257be33bbbc1e6e7f787f6a/cover10.png'
author: "wecanooo"
date:   2019-01-01 16:37:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - shell
  - zsh
  - update
---

`brew install mongodb` 를 사용하기 위해 Mac Book 에 MongoDB 를 설치한 뒤 아래와 같은 오류가 발생되었습니다.

![zsh error](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/f8bec021d5d36dcd0930942693566a15/11.png)

해당 오류를 해결하는 방법을 찾던 중 [oh-my-zsh 이슈](https://github.com/robbyrussell/oh-my-zsh/issues/7033) 에 같은 내용이 해결이 되었습니다.

```
brew upgrade zsh
```
