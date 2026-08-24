# 📌 [Static 렌더링 확인하기]

> **한 줄 요약**: RSC 이론 - 2

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [nextjs의 동작 방식]

nextjs는 기본적으로 RSC 기반 컴포넌트 아키텍쳐이다. 또한 그 외 렌더링 방식은 nextjs가 코드를 분석해 자동으로 적용한다.

### 2. [nextjs 기본 프로젝트 빌드 결과]

기본 프로젝트를 빌드하게 되면 2개의 라우트 결과가 나타나게 된다.

```
Route (app)
┌ ○ /
└ ○ /_not-found


○  (Static)  prerendered as static content
```

Static으로 빌드되었다는 것은 빌드 시점에 html을 미리 생성하는 SSG 방식으로 빌드가 되었다는 것을 뜻한다.
이는 이미 빌드 된 html을 생성한 것이기 때문에 수정을 하게 되면 반영되지 않는다.

수정사항을 반영하려면 다시 빌드를 하여 반영시켜야 한다.
