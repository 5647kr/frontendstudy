export const revalidate = 10;

export default function TimePage() {
  return (
    <>
      <h1>TimePage: {new Date().toLocaleTimeString()}</h1>
    </>
  );
}
