import { useFormStatus } from "react-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  const { pending, data, method, action } = useFormStatus();
  console.log("pending", pending);
  console.log("data", data);
  console.log("method", method);
  console.log("action", action);
  console.log("======");
  return (
    <>
      <button {...props} disabled={pending}>
        {children}
      </button>
      {data && <p>Logging in with ID: {String(data.get("email"))}</p>}
    </>
  );
}
