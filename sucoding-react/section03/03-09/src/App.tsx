import Button from "./components/ui/Button";
import Button2 from "./components/ui/Button2";

export default function App() {
  return (
    <>
      <h1>App Component</h1>
      {/* props */}
      <Button text="Login" />
      <Button text="Logout" />

      {/* children */}
      {/* text, 태그 등 다양하게 올 수 있다. */}
      <Button2>Signup</Button2>
    </>
  );
}
