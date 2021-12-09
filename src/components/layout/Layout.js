import { Fragment } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="lg:px-0">{children}</main>
      <About />
      <Footer />
    </Fragment>
  );
};

export default Layout;
