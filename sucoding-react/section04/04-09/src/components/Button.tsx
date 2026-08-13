export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
}) {
  return (
    <div>
      <button onClick={(event) => handleClick("hello", event)}>클릭</button>
    </div>
  );
}
