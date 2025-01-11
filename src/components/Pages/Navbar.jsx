import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const activeClassName = "text-[#00FBF4]";

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        {/* Logo */}
        <div className="">
          <img src="/assets/Creative.png" alt="Logo" className="h-16 px-4" />
        </div>

        {/* Toggle Button (Hamburger Icon) */}
        <button
          className="md:hidden text-[#00FBF4] text-2xl"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links for Large Screens */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4]"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Get Started Button */}
        <button className="hidden md:block px-6 py-2 border border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-gray-900 font-bold">
          Get Started
        </button>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-500 shadow-xl ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeDrawer}
          className="absolute top-4 right-4 text-2xl text-white"
        >
          ✖
        </button>

        {/* Logo in Drawer */}
        <div className="flex justify-center py-4">
          <img src="/assets/Creative.png" alt="Logo" className="h-16" />
        </div>

        <div className="flex flex-col justify-center items-center h-full space-y-8 text-center font-semibold">
          {/* Links */}
          <NavLink
            to="/"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/our-team"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            Our Team
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeDrawer}
            className={({ isActive }) =>
              isActive ? activeClassName : "hover:text-[#00FBF4] text-lg"
            }
          >
            Contact
          </NavLink>

          {/* Drawer Button */}
          <button className="px-6 py-2 border border-[#00FBF4] text-[#00FBF4] hover:bg-[#00FBF4] hover:text-gray-900 font-bold transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay for Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
