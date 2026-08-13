import Button from "./components/Button";

export default function App() {
  const handleClick = (message: string) => {
    alert(message);
  };
  return (
    <>
      <Button message="로그인이 되었습니다." handleClick={handleClick}>
        로그인
      </Button>
      <Button message="로그아웃이 되었습니다." handleClick={handleClick}>
        로그아웃
      </Button>
    </>
  );
}
