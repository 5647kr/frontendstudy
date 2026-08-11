# 02-03. React.Fragment

<br />

## 📑 목차

1. [루트 요소](#1-루트-요소)

<br />

## 1. 루트 요소

리액트는 하나의 루트 요소만 반환해야한다.
하지만 div 태그로 묶게 될 경우 div태그 역시 태그로 반영되게 된다. 단순히 묶는 용도로 쓰기 위해 React.Fragment를 사용한다.

이는 화면에 렌더링 되지 않는다.

<br />

```
import React from "react";

<React.Fragment>
  <h1>App Components</h1>
  <h1>App Components</h1>
</React.Fragment>

<!-- 단축 문법 -->

<>
  <h1>App Components</h1>
  <h1>App Components</h1>
</>
```
