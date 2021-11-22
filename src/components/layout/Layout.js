import { Fragment } from "react";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className="bg-black-100 p-7">
        <Nav />
      </header>
      <main className="lg:px-0">{children}</main>
      <About />
      <Footer />
    </Fragment>
  );
};

export default Layout;
