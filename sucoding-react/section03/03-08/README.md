# 03-08. 스프레드 연산자 활용하기

<br />

## 📑 목차

1. [기존 방법](#1-기존-방법)
2. [스프레드 연산자 활용](#2-스프레드-연산자-활용)
3. [참고 파일](#3-참고-파일)

<br />

## 1. 기존 방법

```
export default function User(props: {
  userObj: { name: string; age: number; gender: string };
}) {
  return (
    <>
      <p>name: {props.userObj.name}</p>
      <p>age: {props.userObj.age}</p>
      <p>gender: {props.userObj.gender}</p>
    </>
  );
}
```

## 2. 스프레드 연산자 활용

```
<User2 {...userObj} />
```

전개연산자로 작성한 코드는 아래 코드와 동일하다.

```
<User2 name="jack" age={20} gender="gender" />
```

## 3. 참고 파일

- App.tsx
- components/User.tsx
- components/User2.tsx
