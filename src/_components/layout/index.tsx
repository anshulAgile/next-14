import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
