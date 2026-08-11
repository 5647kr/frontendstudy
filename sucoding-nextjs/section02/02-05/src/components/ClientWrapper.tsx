"use client";

export default function ClientWrapper({
  children,
  name,
}: {
  children: Readonly<React.ReactNode>;
  name: string;
}) {
  return (
    <>
      <h1>{name}</h1>
      {children}
    </>
  );
}
