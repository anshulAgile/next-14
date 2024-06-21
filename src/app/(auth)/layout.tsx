export default function AuthLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ background: "grey", height: "100vh" }}>{children}</div>;
}
