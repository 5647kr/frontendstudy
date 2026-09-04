import Header from "@/components/main/Header";

export default function AppTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
