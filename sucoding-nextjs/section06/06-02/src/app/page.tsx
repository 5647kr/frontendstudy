export default async function Page() {
  // await new Promise((r) => setTimeout(r, 3000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await response.json();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
