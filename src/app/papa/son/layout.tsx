
export default function RootLayout({children}:Readonly<{
  children:React.ReactNode;
}>) {
  return (
    <>
        <h1>son layout</h1>
        {children}
    </>
  );
}