export default async function SlotADetailPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error("에러 발생")
  return (
    <>
      <h1>SlotADetailPage</h1>
    </>
  );
}
