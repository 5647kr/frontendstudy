import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <>
      <UserProfile name="Alice" age={30} isAdmin={true} />
      <UserProfile name="Bob" age={25} isAdmin={false} />
    </>
  );
}
