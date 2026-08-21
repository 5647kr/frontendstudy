import { notFound } from "next/navigation";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "10") notFound();
  return (
    <>
      <h1>PostDetailPage</h1>
    </>
  );
}
