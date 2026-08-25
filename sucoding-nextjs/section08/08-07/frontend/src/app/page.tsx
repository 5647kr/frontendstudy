export default async function Home() {
  const res = await fetch("http://localhost:4000/random1", {
    cache: "force-cache",
  });

  const randomNumber = await res.json();

  const res2 = await fetch("http://localhost:4000/random1", {
    cache: "force-cache",
  });

  const randomNumber2 = await res2.json();
  return (
    <>
      <h1>randomNumber: {randomNumber}</h1>
      <h1>randomNumber2: {randomNumber2}</h1>
    </>
  );
}

// api 요청을 2번이라 생각하기 쉽지만 한 번 요청을 한다.
