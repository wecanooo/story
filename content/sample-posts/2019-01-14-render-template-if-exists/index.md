---
title: Rails에서 template 파일이 존재할 경우에만 render 수행
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg'
author: "wecanooo"
date:   2019-01-14 16:12:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - rails
  - helper
  - controller
---

![Rails](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/adaf3a4c976806d3983a27734e42749d/Ruby_On_Rails_Logo.svg.png)


Rails 에서 Static Page 처리를 위해서는 간단하게 `controller` 내에 `action` 을 지정한 뒤 `action` 명으로 `template` 파일을 만들고, `router` 에 등록을 하면 됩니다.

하지만, 이런 파일들이 상당히 많다면 어떻게 관리되어야 할까요? 하나하나씩 `router` 에 등록하고 `action` 을 위한 `method` 를 만들고 `template` 을 연결하기엔 많이 비효율적인 것 같습니다.

이런 경우를 위해 [High Voltage Gem](https://github.com/thoughtbot/high_voltage) 을 사용하는 경우도 있습니다만, 회사 내 프론트엔드와 백엔드를 넘나들고 있는 임모 개발자가 좋은 방법을 찾아서 공유해 주었습니다.

---

### lookup_context

먼저, 라우트에 다음과 같이 설정했다고 가정합니다.

```ruby
get 'ip/:id' => "pages#ip", as: :ip_landing
```

이제 `pages_controller` 내의 `ip` action method 에 `params[:id]` 값이 page 명으로 전달이 됩니다.

처음에 고민했었던 구문은 아주 심플하게 action method 내에서 

```ruby
def ip
  render params[:id]
end
```

형태로 처리하는 것이었습니다. 하지만, 이런게 작성이 될 경우 `params[:id]` 에 어떤 값이 넘어오는지에 대한 검증을 할 수 없기 때문에 때로는 예상치 못한 오류를 발생시키기도 합니다.

임모 개발자를 통해 공유된 방법은 다음과 같습니다.

```ruby
def ip
  if lookup_context.exists?(params[:id], ["path1/path2"], true)
    render params[:id]
  else
    render 404_path
  end
end
```

위 구문에서 `params[:id]` 값이 `about` 이었다면  `path1/path2/_about.html.erb` 파일이 존재할 경우 `true` 가 되고 해당 파일을 rendering 하게 됩니다. 만약, 존재하지 않는 값으로 `params[:id]` 가 넘어왔다면 `404 page not found` 페이지를 출력하게 됩니다.

너무 심플해서 약간은 이상한 구문인듯 합니다만, 상당히 깔끔한 방법인 것 같기도 합니다. Route 파일에서 `:id` 에 대한 `constraint` 구문만 강화하면 훨씬 좋은 구문이 될 것 같습니다.

임모 개발자님에게 감사드립니다.