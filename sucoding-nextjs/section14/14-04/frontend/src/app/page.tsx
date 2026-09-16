import UniqueContent from "@/components/UniqueContent";

export default function Page() {
  return (
    <>
      <h1>Page</h1>
      {/* 방법1 */}
      {/* <Suspense fallback={<h1>loading...</h1>}>
        <UniqueContent />
        </Suspense> */}
      {/* 방법2 */}
      <UniqueContent />
    </>
  );
}
