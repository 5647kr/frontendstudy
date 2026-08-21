# 📌 [template]

> **한 줄 요약**: 완전 독립적인 404 페이지를 만들고 싶을 때 `global-not-found.tsx`를 생성하고 `html, body`태그를 사용해 작성하면 된다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [개념]

template는 layout과 거의 동일한 방식으로 작동하는 파일이다.
하지만 template의 경우 경로가 변경이 되면 컴포넌트의 mount와 unmount가 발생한다.

```
Layout

<Layout>
  <Page />
</Layout>

Template

<Template key="/">
  <Page />
</Template>
```

template는 암묵적으로 key라는 속성이 부여된다. 이 `key`라는 속성은 경로값을 그대로 가져와 적용된다.
이 key라는 속성의 값이 변경이 되면 Next.js는 변경을 감지하고 템플릿이라는 컴포넌트를 unmount 했다가 다시 mount하는 remount 과정을 거치게 된다.

하지만 layout는 mount와 unmount 과정을 거치지 않는다.

## 2. [template 특징]

- 경로가 변경될 떄마다 전체 리소스를 다시 다운받는다.
- 메타 데이터를 설정할 수 없다.
- 첫 번째 세그먼트의 변경만 감지한다.
- 만약 두 번째 세그먼트의 리마운트도 감지하고 싶다면 해당 세그먼트 폴더에 template 파일을 별도로 만들어야 한다.

## 3. [사용 방법]

위와 같은 이유로 단독으로 쓰는 것을 추천하지 않기 떄문에 RootLayout과 같이 사용한다.

```
<RootLayout>
  <Template key="/">
    <Page />
  </Template>
</RootLayout>
```

---

## 📂 구현 코드 파일

- 📄 [`template.tsx`](./src/app/template.tsx)
- 📄 [`layout.tsx`](./src/app/layout.tsx)
