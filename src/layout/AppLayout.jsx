import PropTypes from "prop-types";
import Footer from "../components/ui/footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/navbar/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen scrollbar-hide min-w-full">
      {/* Sticky Header */}

      <header className="sticky top-0 left-0 z-50 ">
        <NavBar />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow overflow-auto min-h-screen scrollbar-hide ">
        {children}
        <Outlet />
      </main>

      {/* Scrollable Footer */}
      <footer className=" border-t">
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
};
