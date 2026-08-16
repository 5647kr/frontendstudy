type InputProps = React.ComponentPropsWithoutRef<"input">;
export default function Input(props: InputProps) {
  return (
    <>
      <input {...props} />
    </>
  );
}
