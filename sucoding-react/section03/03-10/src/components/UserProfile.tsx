export default function UserProfile({
  name,
  age,
  isAdmin,
}: {
  name: string;
  age: number;
  isAdmin: boolean;
}) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isAdmin ? "관리자 계정" : "일반 사용자"}</h1>
    </>
  );
}
