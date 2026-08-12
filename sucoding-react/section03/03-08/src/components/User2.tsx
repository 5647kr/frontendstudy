export default function User2({
  name,
  age,
  gender,
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </>
  );
}
