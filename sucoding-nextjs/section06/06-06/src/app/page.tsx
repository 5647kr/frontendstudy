import Posts from "@/components/Posts";

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data: Post = await response.json();
  return (
    <>
      <Posts data={data} />
    </>
  );
}
