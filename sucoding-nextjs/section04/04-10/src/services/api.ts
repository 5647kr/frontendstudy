export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
}
