import Layout from "@/_components/layout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
