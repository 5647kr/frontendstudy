"use client";

export default function UserForm({
  name,
  children,
}: {
  name: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <h1>UserForm: {name}</h1>
      {children}
    </>
  );
}
