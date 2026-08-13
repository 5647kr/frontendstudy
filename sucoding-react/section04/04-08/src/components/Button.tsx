export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick("event", event)}>클릭</button>
    </>
  );
}
