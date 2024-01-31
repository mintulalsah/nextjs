import MenuWithNoSSR from "../SideNavBar/Sidebar";
import Sidebar from "../SideNavBar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <MenuWithNoSSR />
      {children}
    </div>
  );
};

export default Layout;
