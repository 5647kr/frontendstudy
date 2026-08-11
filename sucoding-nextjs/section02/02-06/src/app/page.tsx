// use client를 토글해서 콘솔창을 확인해 볼 것!
"use client";

export default function Page() {
  console.log("hello world");
  // eslint-disable-next-line react-hooks/purity
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);

  // Hydration failed 에러 발생: 서버에서 렌더링된 HTML 구조와 클라이언트에서 렌더링된 HTML 구조가 달라서 생기는 에러이다.
  return (
    <>
      <h1>Page: {randomNumber}</h1>
    </>
  );
}
