This is a [React Native](https://reactnative.dev/) project create by [`npx react-native init`](https://github.com/react-native-community/cli/blob/master/docs/init.md).

## Getting Started

First, run the development server:

```bash
yarn start
```

then

```bash
yarn android
# or
yarn ios
```

- if using real device plugged in device and run `yarn npm-android-port`(if using android devices) before the commands above ^

Open [http://localhost:8081/debugger-ui/](http://localhost:8081/debugger-ui/) with your browser to debug.
Or use reactotron on port :9090

# Recommended Practices

#### 1. Separate our dependency imports from local imports by a newline

```
  import React from 'react'
  import get from lodash/get

  import {tools} from '/utils/function'
```

#### 2. Avoid missing denpendency warning

```
   Nếu setState trong useEffect có sử dụng state,
   tránh sử dụng:
     let newState = change(state);
     setState(newState)
   sử dụng:
     setState(oldState => change(state))
   để tránh warning thiếu dependency
```

#### 3. Order of component files

```
   biến,hàm bên ngoài => khai báo biến, state,ref, hooks,... => FlowType => function => useEffect => return => export
```

#### 4. Only call function (with useCallback) in useEffect

```use
  const _getApiData = useCallback(async () => {
    ...
  },[deps])

  useEffect(() => {
    _getApiData();
  },[_getApiData])
```

```avoid
  useEffect(() => {
    {
      ... code for getting data
    }
  },[deps])
```

```
  mục đích: Thuận tiện cho việc đọc flow trước (với meaningful name function) thay vì phải đọc hiểu từng function trước khi đọc flow
```

#### 5. Single Responsibility for easier-applying small parts and avoiding modifying big old ones (modify small parts instead)

```function
  //use
  function getUser(id) {...}
  function handleOpenModal(isOpened) {...}
  function sendConnection(message) {...}

  //avoid
  function getUserOpenModalAndSendConnection(id,isOpened,message)
```

```useEffect, chỉ gọi những hàm có liên quan về mặt logic trong cùng useEffect, để dễ đọc từng flow riêng và tránh thừa hàm khi deps thay đổi
  // ---------- use --------
  useEffect(() => {
    _getUserProfile();
  },[_getUserProfile])
  useEffect(() => {
    _getUserComments();
  },[_getUserComments])

  // -------- avoid ------
  useEffect(() => {
    _getUserProfile();
    _getUserComments();
  },[_getUserComments, _getUserProfile])
```

#### 6. Performance

```
  sử dụng useCallback() khi truyền hàm xuống dưới component con và useEffect, luôn điền đủ dependencies (deps)

  nếu useState nhận vào 1 function return object, truyền function chưa invoke, useState sẽ caching return value
  //use
  useState(getState)
  //avoid
  useState(getState())

  chỉ sử dụng memo cho những component có node cha thường xuyên render mà không cần render theo,
  khi dùng memo nhớ kiểm tra props tránh nhận các biến thay đổi liên tục : như object thừa, function không dùng useCallback
    VD: Box chat đổi state (comments) liên tục => re-render, nhưng các comment thì không cần re-render theo
```

#### 7. Do not passing anonymous function as props

```avoid
<input
  onChange={e => {
    model.name = e.target.value;  //Don't do that
  }}
/>
```

```use
<input
  onChange={_onChange}   //Better
/>
```

#### 8.Naming things

```Khai báo hàm local bắt đầu bằng "_", các hàm handle sự kiện on bắt đầu bằng_on
const _updateDate = date => {}
const _onSubmit = e => {
  e.preventDefault();
};
```

```các function truyền dưới dạng props sẽ không có "_"
<User
  renameUser={_renameUser}
/>
```

```sử dụng tên biến, tên hàm,arguments,...  có ý nghĩa, hạn chế comment code để giải thích cho những hàm đơn giản
  use:
  const _updateUserName = (userId, newName) => {};

  avoid:
  //update user name, with userid and user name as argument
  const _updateData = (id, name) => {}
```

#### 9. Writing our own hooks

```
  tránh lặp code bằng cách viết custom hooks
  tham khảo các files trong folder hooks để quen với việc viết custom hooks
```

#### 10. Using Flow instead Protypes

```
exp1:
export const PlaylistPropType = PropTypes.shape({
    next: ItemPropTypes,
    current: ItemPropTypes,
    history: PropTypes.arrayOf(ItemPropTypes).isRequired
});

export type Playlist = {
    next: Item,
    current: Item,
    history: Array<Item>
};

exp2:
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };

  render() {
    return <div>{this.props.bar}</div>;
  }
}

import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

class MyComponent extends React.Component<Props> {
  render() {
    return <div>{this.props.bar}</div>;
  }
}


```

## Abstraction and Dont Repeat Yourself (DRY)

KHÔNG copy paste những function, component giống nhau 100%.
Nhưng nếu giống nhau 80% hoặc ít hơn, hạn chế abstract hàm có sẵn. Vì requirement project sẽ thay đổi rất nhiều,
việc abstract bừa bãi sẽ làm các phần code không liên quan phụ thuộc vào nhau
khiến việc đọc code khó (phải đọc logic cho nhiều nơi khi chỉ sửa 1 nơi)
và sửa code khó (sửa code 1 nơi sẽ ảnh hưởng đến nhiều nơi khác dẫn đến bug lặp đi lặp lại)

Giữa việc abstract để 1 function chạy ở 10 chỗ "gần giống nhau" và copy paste chỉnh sửa 10 functions cho 10 chỗ
còn có thể chọn abstract thành 2, 3 functions đủ đơn giản để áp dụng cho 10 chỗ
