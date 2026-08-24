# 📌 [CSR 렌더링 확인하기(흔한 실수)]

> **한 줄 요약**: RSC 이론 - 2

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [문제점]

`npm run dev`로 실행한 경우

```
<h1>TimePage: {date.toLocaleTimeString()}</h1>
```

위 코드를 실행하면 잘 작동한다. 하지만 build 이후 실행해도 build시점을 기준으로 데이터가 고정된다. 이는 build 결과가 static이기 때문이다.

```
Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /time


○  (Static)  prerendered as static content
```

### 2. [배포환경에서도 동작하는 방법1]

Static으로 빌드된 결과를 Dynamic 빌드가 되도록 변경해주어야 한다.

해당 컴포넌트를 dynamic 변수에 force-dynamic 값을 할당해 export 하면 된다.

```
export const dynamic = "force-dynamic";
```

위와 같이 작성할 경우 빌드 결과가 아래처럼 바뀌게 된다.

```
Route (app)
┌ ○ /
├ ○ /_not-found
└ ƒ /time


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### 3. [배포환경에서도 동작하는 방법2]

클라이언트 컴포넌트를 만들어 CSR 렌더링에 적용되게 한다.
build 결과 static으로 결정되어도 실시간으로 렌더링 된다.
