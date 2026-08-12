import User from "./components/User";
import User2 from "./components/User2";

export default function App() {
  const userObj = {
    name: "jack",
    age: 20,
    gender: "male",
  };
  return (
    <>
      <User userObj={userObj} />

      <User2 {...userObj} />
      <User2 name="jack" age={20} gender="gender" />
    </>
  );
}
