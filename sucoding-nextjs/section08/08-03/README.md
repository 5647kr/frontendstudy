# 📌 [데이터 캐시 - 2 (구현)]

> **한 줄 요약**: 캐싱 전략의 4가지

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. [환경 구축]

backend 폴더에서 npm install && npm run dev명령어로 서버를 실행한 뒤 frontend 폴더도 npm install && npm run dev 명령어로 실행한다.

이후 fetch API 옵션으로 no-store를 명시적으로 작성한다. 그럼 새로고침을 해도 매번 새로운 값이 반환되는 것을 볼 수 있다.

```
fetch("http://localhost:4000/random1", {
    cache: "no-store",
  });
```

이는 매번 Data Source에서 데이터를 매번 가져오게 된다.

### 2. [force-cache 적용]

이번엔 데이터 캐시를 사용하게 되면 첫 요청은 Data Source에서 데이터를 가져온 뒤 다음부터는 Data Cache에서 이미 캐시된 데이터를 가져와 보여주게 된다.

```
fetch("http://localhost:4000/random1", {
    cache: "force-cache",
  });
```

따라서 새로고침을 해도 데이터가 변하지 않는다.

### 3. [데이터 캐시의 특징]

- 데이터 캐시는 데이지 단위가 아닌 API 요청 단위로 저장된다.
  about/page.tsx에서 같은 코드를 작성해서 about경로로 접속해보면 루트페이지의 데이터가 그대로 보이는 것을 볼 수 있다.

- 데이터 캐시의 저장 기간은 영속적이다. 따라서 따로 삭제를 해야한다.

---

## 📂 구현 코드 파일

- 📄 [`page.tsx`](./src/app/page.tsx)
- 📄 [`about.tsx`](./src/app/about/page.tsx)
