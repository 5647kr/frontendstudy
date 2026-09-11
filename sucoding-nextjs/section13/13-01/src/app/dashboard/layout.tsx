export default function DashboardLayout({
  children,
  slotA,
  slotB,
}: Readonly<{
  children: React.ReactNode;
  slotA: React.ReactNode;
  slotB: React.ReactNode;
}>) {
  return (
    <>
      {slotA}
      {slotB}
      {children}
    </>
  );
}
