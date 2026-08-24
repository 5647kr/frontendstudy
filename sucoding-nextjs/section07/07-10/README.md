# 📌 [ISR 렌더링 확인하기]

> **한 줄 요약**: ISR 렌더링 확인하기

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [기본 동작]

ISR은 SSG와 기본적으로 동일하지만, 일정 주기로 특정 페이지를 다시 생성하는 특징을 가진 렌더링 방식이다.
nextjs는 ISR 렌더링 방식으로 빌드하려면 전제조건이 존재한다.

- Static 으로 빌드가 되면서 서버 컴포넌트여야 한다.

### 2. [적용하기]

`time/page.tsx` 처럼 서버 컴포넌트 생성 후 build를 하게 되면 그 결과는 아래와 같이 된다.

```
Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /time


○  (Static)  prerendered as static content
```

이후 `npm run start`를 실행해보면 Static으로 빌드되어 새로고침 해도 시간이 변경되지 않는다.

적용하려면 `export const revalidate`라는 변수에 재생성하고 싶은 초를 작성해주면 된다.

```
export const revalidate = 10;
```

이렇게 하면 10초의 재생성 주기를 가지게 된다.

1. 첫 방문자가 페이지에 접속한다.
2. nextjs는 해당 페이지를 보여준다.
3. 그럼 10초의 카운팅이 들어간다.
4. 10초가 지났을 때 다음 사용자가 방문하게 예전 페이지결과를 보여주지만 백그라운드에서 데이터패칭과 HTML 재생성을 통해 새로운 HTML을 만들게 된다.
5. 이후 3번째 방문자가 접속하게 되면 새롭게 만들어진 HTML페이지를 보여주게 된다.

### 3. [빌드하기]

빌드를 하게 되면 아래와 같이 변경되게 된다.

```
Route (app)      Revalidate  Expire
┌ ○ /
├ ○ /_not-found
└ ○ /time               10s      1y


○  (Static)  prerendered as static content
```

이는 재생성 주기가 10초로 설정되어있으며, 재생성 주기에 대한 전체 유효기간은 1년이란 뜻이다.

이후 /time 경로로 접속해 확인해보면 된다.
