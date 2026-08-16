import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const pw = formData.get("pw");

    // 로그인 api
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    console.log(`login success ${email}/${pw}`);
  };
  return (
    <>
      {/* 리액트 18 */}
      <form action={handleSubmit}>
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" autoComplete="off" />
        <button type="submit" disabled={isLoading}>
          로그인
        </button>
      </form>
    </>
  );
}

/**
 * 로그인 성공시 input의 값도 초기화 된다.
 */