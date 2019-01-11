---
title: Rails에서 destroy_all 과 delete_all 의 차이점 
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover6.jpg'
author: "wecanooo"
date:   2019-01-10 21:12:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - rails
  - destroy_all
  - delete_all
  - delete_recursively
  - gem
---

![Destroy](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/933d63f9d5497e8d3c5c9330befe31f8/maxresdefault.jpg)


Rails 에서 `destroy_all` 과 `delete_all` 은 어떤 차이점이 있을까요?

Model 과 Model 간의 `has_many` 관계에서 `dependent: :destroy_all` 과 `dependent: :delete_all` 을 설정했을 경우 아래와 같은 형태로 동작을 하게 됩니다.

---

### dependent: :destroy_all

예를들어, Blog 모델은 여러개의 Post 모델을 가지고 있는 경우를 생각해 봅시다. 이런 경우 각각의 모델은 다음과 같은 형태의 구조를 가지게 됩니다.

```ruby
class Blog < ActiveRecord::Base
  has_many :posts, dependent: :destroy_all
end
```

```ruby
class Post < ActiveRecord::Base
  belongs_to :blog
end
```

위의 Blog 모델에서 `dependent: :destroy_all` 이 가지는 의미는 Blog 인스턴스가 삭제될 때 해당 Blog 에 속해 있는 Post 개체를 인스턴스화 한 뒤 `destroy` 함수를 호출하게 됩니다. 즉, Post 개체가 삭제될 때 연결된 filter 나 callback 함수들이 수행되게 됩니다. 이는 실제 서비스에서 아주 유용하게 사용하게 되며, destroy 에 관련된 filter 또는 callback 에서 추가적인 처리가 필요할 경우에 아주 유용합니다.

### dependent: :delete_all

`delete_all` 설정은 조금은 다르게 동작합니다. 우선, 설정하는 방식은 위의 `destroy_all` 과 다를바가 별로 없습니다.

```ruby
class Blog < ActiveRecord::Base
  has_many :posts, dependent: :delete_all
end
```

하지만 `delete_all` 설정은 `destroy_all` 의 설정과 다르게 연결된 Post 모델을 인스턴스화 하여 해당 인스턴스의 `destroy` 함수를 호출하는 방식이 아니라, 연결된 Post 들의 ID 리스트를 SQL Delete 구문을 통해 삭제하는 방식으로 동작합니다. 즉, Blog 에 연결된 Post 는 삭제하지만 해당 Post 의 `destroy` 함수는 수행하지 않기 때문에 filter 나 callback 함수는 수행되지 않습니다. 만약, Post 모델이 삭제될 때 별도의 연결된 추가 처리를 할 이유가 없다면 delete_all 구문이 훨씬 효율적인 방법으로 동작하게 됩니다.

---

### 검토해볼만한 Gem

비록 Star 수는 많지는 않지만 `destroy_all` 과 `delete_all` 에 관련된 흥미로운 Gem 이 있어서 소개합니다.

[delete_recursively](https://github.com/janosch-x/delete_recursively) 라는 Gem 은 Model 과 Model 간의 상관 관계를 확인하여 `:destroy_all` 과 `:delete_all` 중 어떤 것이 동작해야 하는지를 판단하여 수행하는 똑똑한 Gem 입니다.

또한, `destroy_all` 로 동작할 때도 삭제될 모델을 인스턴스화 하여 destroy 를 수행하는 것이 아니라 (인스턴스화 하여 삭제하게 되면 삭제할 갯수만큼 query 문이 발생됩니다.) `destroy_all` 과 `delete_all` 의 장점을 취합하여 사용하는 방식으로 동작합니다.

아직은 이 Gem 을 실무에서 사용해 본적이 없으나 곧 실무에서 적용해 볼 예정입니다.

