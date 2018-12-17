---
title: Github와 Jekyll을 이용한 무료 블로그 만들기 - 4
cover: 'images/cover6.jpg'
author: "wecanooo"
date:   2016-05-01 10:18:00
category: "tech"
tags:
  - blog
  - jekyll
  - github
---

![Github Custom Domain](https://wecanooo.github.io/blog/assets/images/custom-domain-to-github.jpg)

이번 에피소드에서는 custom domain을 Github Pages에 적용하여 username.github.io 형태의 URL을 yourdomain.com 형태로 변경하는 방법에 대해서 알아본다.

### 꼭 Custom Domain을 적용해야 하나?

username.github.io 형태의 URL이 나쁜 것은 아니다. 하지만 나만의 URL을 적용함으로써 내가 제공하고자 하는 제품이나 서비스의 성격을 더욱 명확히 할 수 있고 SEO 측면에서도 상당히 중요하게 적용될 수 있다.

요즘은 도메인을 구매하는데 큰 비용이 들어가는 것도 아니고, 프로모션도 이따금씩 하니 나만의 도메인을 하나쯤 갖는 것도 좋을 것이다.

### Custom Domain 적용하기

도메인을 구매했다면 Custom Domain을 적용하는 것은 아래의 순서로 아주 간단하게 적용할 수 있다.
도메인 설정에 있어 필요한 DNS Record 관리는 도메인을 어디에서 구매했으냐에 따라 다소 화면이 다를 수 있다. 이 에피소드에서는 [Godaddy](https://kr.godaddy.com/) 기준으로 설명한다.

1. [이전 에피소드](https://wecanooo.github.io/blog/github-pages/)에서 만든 Github 저장소를 방문한 뒤 **New File** 을 클릭하여 **CNAME** 이라는 이름의 파일을 만든다.
2. **CNAME** 파일의 내용에 구매한 도메인을 입력한다. 예를들어, **yourdomain.com** 형태로 입력한다.
3. 만약 **subdomain** 을 적용하고 싶다면 **subdomain.yourdomain.com** 형태로 입력을 한다.
4. **CNAME** 파일을 제대로 생성했다면, 이제 도메인 관리를 위해 도메인을 구매한 사이트로 이동하여 DNS Record 설정을 한다.
5. **DNS 관리** 항목에서 새로운 Record를 추가한다.
6. Record의 유형은 'A', 호스트는 '@', 지시방향은 '192.30.252.153'로 지정하여 Record를 생성한다. (만약, **subdomain** 을 적용하고자 한다면 호스트 입력란에 **subdomain** 명을 입력한다.)

![CNAME 파일 생성](https://wecanooo.github.io/blog/assets/images/cname.png)

![DNS 관리](https://wecanooo.github.io/blog/assets/images/dns_management.png)

![레코드 추가](https://wecanooo.github.io/blog/assets/images/add_record.png)

위와 같이 도메인 관리 화면에서 새로운 Record를 추가하면 Custom Domain을 적용하기 위한 작업은 모두 끝났다.
DNS의 변경이기 때문에 바로 적용될 수도 있고, 때에 따라서는 변경까지 시간이 걸릴 수도 있다.
