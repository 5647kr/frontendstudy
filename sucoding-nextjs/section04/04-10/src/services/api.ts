export async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "https://jsonplaceholder.typicode.co2m/posts?_limit=5",
  );
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
}
