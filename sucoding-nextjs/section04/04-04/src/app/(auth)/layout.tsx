export default function WithOutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
