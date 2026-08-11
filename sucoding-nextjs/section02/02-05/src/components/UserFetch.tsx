import PostFetch from "./PostFetch";
import UserForm from "./UserForm";

export default async function UserFetch({ name }: { name: string }) {
  return (
    <>
      <h1>UserFetch: {name}</h1>
      <UserForm name="userForm">
        <PostFetch name="postFetch" />
      </UserForm>
    </>
  );
}
