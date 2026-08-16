import Button from "./components/html/Button";
import Input from "./components/html/Input";

export default function App() {
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData.get("email"));
    console.log(formData.get("pw"));
  };
  return (
    <>
      <form action={formAction}>
        <Input type="text" name="email" autoComplete="off" />
        <Input type="password" name="pw" />
        <Button type="submit">로그인</Button>
      </form>
    </>
  );
}
