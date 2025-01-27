import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LogoColorFill, Menu, WatsApp } from "../../../assets/svg";
import Container from "../container/Container";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  console.log(isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-w-full bg-white">
      {/* Top Bar */}
      <Container color={"ttransperant"}>
        <div className="flex justify-between px-6 border-b text-black items-center py-2">
          <p className="text-sm md:text-base">info@ioready.io</p>

          <div className="flex gap-2 md:gap-3 items-center">
            <WatsApp />
            <p className="text-sm md:text-base">+91-7305909990</p>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="flex items-center justify-between h-16 md:h-[79px] lg:h-[79px] w-full px-6">
          {/* Logo */}
          <div className="flex items-center">
            <LogoColorFill />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-end items-center gap-6 lg:gap-[40px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className=" md:hidden lg:hidden focus:outline-none bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="bg-white border-t flex flex-col px-6 py-4"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#0D47A1]" : "hover:text-[#0D47A1] text-black"
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NavBar;
