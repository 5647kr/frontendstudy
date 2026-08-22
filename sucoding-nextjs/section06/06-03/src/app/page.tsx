export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/post222222s/1");

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  const data = await response.json();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
