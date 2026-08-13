export function ButtonA({
  children,
  handleClickA,
}: {
  children: React.ReactNode;
  handleClickA: () => void;
}) {
  return (
    <div>
      <button onClick={handleClickA}>{children}</button>
    </div>
  );
}

export function ButtonB({
  children,
  message,
  handleClickB,
}: {
  children: React.ReactNode;
  message: string;
  handleClickB: (message: string) => void;
}) {
  return (
    <div>
      <button onClick={() => handleClickB(message)}>{children}</button>
    </div>
  );
}

export function ButtonC({
  children,
  message,
  handleClickC,
}: {
  children: React.ReactNode;
  message: string;
  handleClickC: (message: string) => void;
}) {
  return (
    <div>
      <button onClick={() => handleClickC(message)}>{children}</button>
    </div>
  );
}
