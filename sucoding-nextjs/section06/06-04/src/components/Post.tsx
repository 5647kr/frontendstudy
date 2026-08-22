export default async function Post() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await fetch("https://jsonplaceholder.typicode.com2222222/posts/1");
  const post: Post = await res.json();
  return (
    <>
      <pre>{JSON.stringify(post, null, 1)}</pre>
    </>
  );
}
