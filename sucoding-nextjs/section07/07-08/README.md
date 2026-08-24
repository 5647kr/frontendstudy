# 📌 [Dynamic 렌더링 확인하기]

> **한 줄 요약**: RSC 이론 - 2

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [nextjs의 동작 방식]

동적 라우트로 구성된 페이지는 빌드시점에 정적으로 생성되지 않는다.

### 2. [동적 라우트 빌드 결과]

동적라우트를 포함한 프로젝트를 빌드하면 아래와 같이 Dynamic 이라는 빌드 결과를 볼 수 있다.

```
Route (app)
┌ ○ /
├ ○ /_not-found
└ ƒ /post/[id]


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand <- 서버에서 그때마다 렌더링해서 페이지를 전달한다.
```
