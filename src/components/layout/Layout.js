import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-black-100 p-7">
        <Nav />
      </header>
      <div className="lg:px-0">{children}</div>
    </div>
  );
};

export default Layout;
