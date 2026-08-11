# 02-01. 컴포넌트의 종류

<br />

## 📑 목차

1. [종류](#1-종류)

<br />

## 1. 종류

함수형 컴포넌트
```
export default function App() {
  return (
    <>
      <h1>App Component</h1>
    </>
  );
}
```

<br />

클리스형 컴포넌트
```
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
```