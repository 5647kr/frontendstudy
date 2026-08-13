export default function Button({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) {
  const handleClick = () => console.log(message);
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
