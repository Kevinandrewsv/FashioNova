import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    setProfileDropdown(false);
    setVisible(false);
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVisible(false);
  };

  const linkClasses = (isActive) =>
    `relative py-2 px-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500"
        : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500"
    } after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500 after:transition-all hover:after:w-full`;

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between
                   bg-white/30 backdrop-blur-md border-b border-white/40
                   z-50"
      >
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="FashioNova Logo"
            className="w-12 sm:w-16 object-contain"
          />
          <h3 className="text-base font-semibold text-gray-800 group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 transition">
            FashioNova
          </h3>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center gap-8">
          <li>
            <button onClick={handleHomeClick} className={linkClasses(false)}>
              HOME
            </button>
          </li>
          {["COLLECTION", "ABOUT", "CONTACT"].map((label) => (
            <li key={label}>
              <NavLink
                to={`/${label.toLowerCase()}`}
                className={({ isActive }) => linkClasses(isActive)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
              setVisible(false);
            }}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:opacity-80 hidden sm:block"
          />

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              onClick={() => setProfileDropdown((p) => !p)}
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer hover:opacity-80"
            />
            <AnimatePresence>
              {profileDropdown && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-lg w-40 text-gray-700 text-sm overflow-hidden z-20"
                >
                  <li
                    className="px-4 py-2 hover:bg-white/50 cursor-pointer"
                    onClick={() => {
                      setProfileDropdown(false);
                      navigate("/profile");
                    }}
                  >
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-white/50 cursor-pointer"
                    onClick={() => {
                      setProfileDropdown(false);
                      navigate("/orders");
                    }}
                  >
                    Orders
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-white/50 cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative hidden sm:block">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-5 hover:opacity-80"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer hover:opacity-80 sm:hidden"
          />
        </div>
      </nav>

      {/* Spacer so content sits below fixed navbar */}
      <div className="h-16 sm:h-16" />

      {/* Mobile Sidebar + Overlay */}
      <AnimatePresence>
        {visible && (
          <>
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={() => setVisible(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            <motion.aside
              key="sidebar"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs
                         bg-white/20 backdrop-blur-lg border-l border-white/30
                         rounded-l-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/30">
                <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
                <button
                  onClick={() => setVisible(false)}
                  className="text-gray-800 text-xl"
                >
                  &times;
                </button>
              </div>
              <ul className="flex-1 flex flex-col gap-4 p-4 text-gray-800">
                <li>
                  <button onClick={handleHomeClick} className={linkClasses(false)}>
                    HOME
                  </button>
                </li>
                {["COLLECTION", "ABOUT", "CONTACT"].map((label) => (
                  <li key={label}>
                    <NavLink
                      to={`/${label.toLowerCase()}`}
                      onClick={() => setVisible(false)}
                      className={({ isActive }) => linkClasses(isActive)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li
                  onClick={() => {
                    setShowSearch(true);
                    navigate("/collection");
                    setVisible(false);
                  }}
                  className="py-2 px-3 rounded-lg cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 transition"
                >
                  Search
                </li>
                <li
                  onClick={() => {
                    navigate("/cart");
                    setVisible(false);
                  }}
                  className="py-2 px-3 rounded-lg cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 transition"
                >
                  Cart ({getCartCount()})
                </li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
