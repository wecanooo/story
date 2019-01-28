---
title: React 에서 Mobx 이용하기 I
cover: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg'
author: "wecanooo"
date:   2019-01-29 23:12:00
category: "tech"
logo: 'https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/dream.png'
tags:
  - react
  - mobx
  - annotation
---

![React & Mobx](https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/839b73fe29853699b34731dd60b6dbad/1_fVyLVvnbisXOgh1v3EhTrg.png)

React 진영에는 상태 관리를 하기 위해 Redux 라는 강력한 도구를 많이 이용하고 있습니다. 저도 여태 React 또는 React Native 작업을 진행하면서 상태 관리를 위해서는 Redux 를 이용해 왔었습니다.

프론트엔드 개발을 전문으로 하지 않는 저로서는 Redux 를 이용한 상태관리를 이해하는 것이 쉽지만은 않았습니다. Redux 를 이해하기 위해서는 Action 과 Reducer 그리고 Saga 또는 redux-thunk 와 같은 개념 또는 도구를 함께 이해해야 했고, 해당 기술을 조금씩 이해한 뒤에도 흐름을 쫒아가는 것이 쉽지만은 않았던 기억이 있었습니다.

이번에 오랜만에 React 를 이용한 SPA 를 제작하면서 Redux 가 아닌 Mobx 를 이용하여 상태 관리를 해 보고자 마음을 먹었는데, 이유는 잠깐 Mobx 를 살펴본 바로는 Redux 에 비해 상당히 간결하고 흐름이 직관적이어서 이해하기가 편했기 때문입니다.

---

### Mobx 의 핵심 기능들

Mobx 에는 다음과 같은 주요 개념들이 있습니다. 이 내용들은 Mobx 를 이해하는데 필수적인 부분이라 이해하고 넘어가면 편리합니다.

### 1. Observable

Mobx 를 이용하여 관찰하고자 하는 상태값이 있다면 Observable 기능을 이용하여 상태를 관찰할 수 있습니다. 실제 사용하는 예제는 다음과 같습니다.

```javascript
import { observable, action } from 'mobx'
import agent from '../agent'

class UserStore {

  @observable currentUser
  @observable loadingUser
  @observable updatingUser

  @action pullUser() {
    this.loadingUser = true
    return agent.Auth.current()
      .then(action(({ user }) => { this.currentUser = user; }))
      .finally(action(() => { this.loadingUser = false; }))
  }

  @action updateUser(newUser) {
    this.updatingUser = true
    return agent.Auth.save(newUser)
      .then(action(({ user }) => { this.currentUser = user; }))
      .finally(action(() => { this.updatingUser = false; }))
  }

  @action forgetUser() {
    this.currentUser = undefined
  }
}

export default new UserStore();
```

위에서 @observable 로 설정된 값들은 모두 관찰이 가능한 상태들입니다. 즉, 해당 상태가 변경이 되면 상태를 관찰하고 있던 Observer Component 의 render 함수가 호출이 되어 화면이 갱신되게 됩니다.

---

### 2. Action

액션은 상태의 변화를 일으키는 함수를 의미합니다. 위에서 얘기한 observable 한 상태값을 변화시키는 기능을 수행하는 함수가 있다면 이 함수에 @action 을 연결할 수 있습니다. 위의 예에서는 updateUser 또는 forgetUser 함수가 action 함수가 됩니다.

---

### 3. Observer

위에서 얘기한 observable 한 상태를 감시하는 주체인 Components 를 Observer 로 등록할 수 있습니다. 즉, Observable (관찰 가능한 상태) 값이 변경이 있을 때 그에 반응하는 Component 를 만들고 싶다면 해당 Component 를 Observer 로 등록하면 됩니다.
Component 를 Observer 로 등록하는 방법은 @observer annotation 을 이용하여 간단히 등록할 수 있습니다. 아래는 실제 사용 예시입니다.

```javascript
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    ...
  }

  render () {
    return (
      // userStore 내의 @observable 상태가 변경될 경우 화면을 갱신함
    )
  }
}
```

---

### 4. inject

Observer 로 등록된 Component 에서 Observable 한 상태를 포함하고 있는 Store 를 접근하고 싶다면, mobx-react package 의 inject 를 이용하면 쉽게 해결할 수 있습니다.

```javascript
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class SettingsForm extends React.Component {
  ...
}
```

위의 예제에서 SettingForm Component 는 userStore 내에 있는 상태의 변화를 감시하기 위해 Observer 로 등록되었습니다. 이제 SettingForm Component 에서 userStore 를 접근할 수 있도록 @inject annotation 을 이용하였습니다.

---

이번 회차에서는 Mobx 에서 사용하는 기본 기능들에 대해서 알아봤습니다. 2편에서는 CRA (Create React App) V2 에서 Mobx 의 annotation 을 이용하기 위한 설정에 대해서 알아보겠습니다.