# 05-02. useState - 1

<br />

## 1. 개념

상태란 시간이 지남에 따라 변할 수 있는 데이터를 의미한다.

## 2. 기본 문법

```
const [state, setState] = useState<Type>(initialState);

initialState: 상태의 초기값
Type: 상태값의 타입
state: 실제 상태 값이 할당될 변수
setState: 상태값을 업데이트 하는 함수
```

## 3. 설명

React가 useState로 정의한 상태값을 변경되면 화면에 즉시 반영한다. 이를 리렌더링이라 한다.

## 4. 참고 파일

- App.tsx
