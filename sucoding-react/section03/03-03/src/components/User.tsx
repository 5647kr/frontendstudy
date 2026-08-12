export default function User(props: { name: string; age: number }) {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
}
