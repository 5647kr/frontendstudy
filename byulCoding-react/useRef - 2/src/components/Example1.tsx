import { useEffect, useRef } from "react";

export default function Example1() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value!}`);
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" placeholder="username" ref={inputRef} />
      <button onClick={login}>로그인</button>
    </>
  );
}
