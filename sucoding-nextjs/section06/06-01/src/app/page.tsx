export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await response.json();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
