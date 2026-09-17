# 📌 useMemo

> **한 줄 요약**: 학습한 핵심 내용이나 프로젝트의 목적을 간단히 적습니다.

---

## 💡 핵심 학습 내용 (Key Concepts)

### 1. 개념

useMemo에서 Memo는 Memoization에서 왔으며 이는 동일한 값을 리턴하는 함수를 반복적으로 호출해야한다면 맨 처음 값을 계산할 떄 해당 값을 메모리에 저장하고 필요할 때 마다 계산하지 않고 메모리에서 값을 꺼내와 사용하는 기법을 말한다.

자주 필요한 값을 맨 처음 계산할 떄 메모리에 저장했다가 그 값이 필요할 떄 메모리에 저장된 값을 꺼내와 사용한다는 걸 의미한다.

### 2. 기본 문법

const value = useMemo(() => {
  return ...
}, [])

- 첫번째 인자: 콜백 함수: 메모이제이션을 해줄 값
- 두번째 인자: 배열: 의존성 배열으로 배열안에 들어간 값이 업데이트 될때만 콜백함수를 다시 실행해 메모이제이션 된 값을 업데이트해 다시 메모이제이션 한다.

```code
// 핵심 코드 예시 작성
const [time, setTime] = useState(5);
```

State: time = 5
setTime(6)

setState함수를 사용해 state를 변경하면 해당 컴포넌트는 다시 렌더링 되게 된다.

### 3. useState

무거운 작업을 해야할때 다음과 같이 코드를 작성하게 되면 리렌더링이 발생할때마다 무거운 작업도 다시 발생하게 된다.

```
const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김민수"];
};

  const [names, setNames] = useState<string[]>(heavyWork());
```

이를 방지하기 위해 다음과 같이 함수를 직접 호출하는것이 아닌 콜백함수 형태로 수정해준다.

```
  const [names, setNames] = useState<string[]>(() => heavyWork());
```

### 4. 정리

- useState는 state와 setState를 배열 형태로 리턴해준다.
- state에는 현재 상태값이 들어가 있고 setState에는 state를 변경할 수 있는 함수를 제공한다.
- setState를 활용해 state를 변경할때 마다 컴포넌트는 다시 렌더링된다.
- state를 변경할 떄 새로 변경될 state의 값이 이전 state값과 연관이 되어 있다면 setState의 인자로 새로운 state를 리턴하는 콜백함수로 작성한다.
- useState를 사용해서 초기값을 받아올 때 어떤 무거운 작업을 수행해야 한다면 useState의 인자로 콜백함수를 작성해주면 맨 처음 렌더링될때만 실행되게 할 수 있다.

## 📂 구현 코드 파일

- 📄 [`예제 1`](./src/components/Example1.tsx)
- 📄 [`예제 2`](./src/components/Example2.tsx)
