export default async function Todo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo: Todo = await res.json();
  return (
    <>
      <pre>{JSON.stringify(todo, null, 1)}</pre>
    </>
  );
}
