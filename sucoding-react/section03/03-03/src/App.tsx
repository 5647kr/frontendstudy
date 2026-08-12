import User from "./components/User";

export default function App() {
  return (
    // <div>
    //   <p>name: Jack</p>
    //   <p>age: 20</p>
    // </div>

    <>
      <User name="Jack" age={20} />
      <User name="Mike" age={30} />
    </>
  );
}
