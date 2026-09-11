export default function FeedLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
