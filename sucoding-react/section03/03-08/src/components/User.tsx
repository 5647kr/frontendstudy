export default function User(props: {
  userObj: { name: string; age: number; gender: string };
}) {
  return (
    <>
      <p>name: {props.userObj.name}</p>
      <p>age: {props.userObj.age}</p>
      <p>gender: {props.userObj.gender}</p>
    </>
  );
}

// export default function User({
//   userObj,
// }: {
//   userObj: { name: string; age: number; gender: string };
// }) {
//   return (
//     <>
//       <p>name: {userObj.name}</p>
//       <p>age: {userObj.age}</p>
//       <p>gender: {userObj.gender}</p>
//     </>
//   );
// }

// export default function User({
//   userObj: { name, age, gender },
// }: {
//   userObj: { name: string; age: number; gender: string };
// }) {
//   return (
//     <>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <p>gender: {gender}</p>
//     </>
//   );
// }
