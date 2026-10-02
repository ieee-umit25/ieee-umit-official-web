import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
  setOpenDropdown(null);
};


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const linkStyle =
    "relative inline-block font-medium px-2 py-1 transition duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="w-full shadow-md sticky top-0 bg-white dark:bg-gray-900 dark:text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img
            src="https://res.cloudinary.com/ddhhqsm5p/image/upload/v1755956297/WhatsApp_Image_2025-08-23_at_19.07.23_399f15ec_sfbrs5.jpg"
            alt="IEEE Logo"
            className="w-15 h-15 rounded-full object-cover"
          />
          </NavLink>
          <NavLink to="/"><span className="font-bold text-2xl text-cyan-500 ">IEEE UMIT</span></NavLink>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={linkStyle} onClick={closeDropdown}>
            Home
          </NavLink>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("societies")}
              className={`${linkStyle} flex items-center`}
            >
              Societies <KeyboardArrowDownIcon />
            </button>
            {openDropdown === "societies" && (
              <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-56">
                <NavLink
                  to="/societies/women-in-engineering"
                  onClick={closeDropdown}
                  className="block hover:scale-105 hover:px-1 transition-all duration-200"
                >
                  Women in Engineering
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/council" className={linkStyle} onClick={closeDropdown}>
            Council
          </NavLink>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("events")}
              className={`${linkStyle} flex items-center`}
            >
              Activities <KeyboardArrowDownIcon />
            </button>
            {openDropdown === "events" && (
              <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-56">
                <NavLink
                  to="/events/past"
                  onClick={closeDropdown}
                  className="block hover:scale-105 hover:px-1 transition-all duration-200"
                >
                  Past Activities
                </NavLink>
                <NavLink
                  to="/events/upcoming"
                  onClick={closeDropdown}
                  className="block hover:scale-105 hover:px-1 transition-all duration-200"
                >
                  Upcoming Activities
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/developers" className={linkStyle} onClick={closeDropdown}>
            Developers
          </NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={closeDropdown}>
            Contact
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={closeDropdown}
            className={` ${linkStyle} font-medium  hover:border-green-600 transition duration-300`}
          >
            Blogs
          </NavLink>
        </nav>

        {/* mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </div>

    {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg p-4 space-y-3">
    
    {/* Home Link */}
    <NavLink
      to="/"
      className={linkStyle}
      onClick={() => {
        closeDropdown();
        setMenuOpen(false);
      }}
    >
      Home
    </NavLink>

    {/* Societies Dropdown */}
    <div>
      <button
        onClick={() => toggleDropdown("societies")}
        className={`${linkStyle} text-left`}
      >
        Societies ▾
      </button>
      {openDropdown === "societies" && (
        <div className="ml-4 mt-2 space-y-2">
          <NavLink
            to="/societies/women-in-engineering"
            className={linkStyle}
            onClick={() => {
              closeDropdown();
              setMenuOpen(false);
            }}
          >
            Women in Engineering
          </NavLink>
        </div>
      )}
    </div>

    {/* Council Link */}
    <NavLink
      to="/council"
      className={linkStyle}
      onClick={() => {
        closeDropdown();
        setMenuOpen(false);
      }}
    >
      Council
    </NavLink>

    {/* Events Dropdown */}
    <div>
      <button
        onClick={() => toggleDropdown("events")}
        className={`${linkStyle} text-left`}
      >
        Activities ▾
      </button>
      {openDropdown === "events" && (
        <div className="ml-4 mt-2 space-y-2">
          <NavLink
            to="/events/past"
            className={linkStyle}
            onClick={() => {
              closeDropdown();
              setMenuOpen(false);
            }}
          >
            Past Activities
          </NavLink>
          <NavLink
            to="/events/upcoming"
            className={linkStyle}
            onClick={() => {
              closeDropdown();
              setMenuOpen(false);
            }}
          >
            Upcoming Activities
          </NavLink>
        </div>
      )}
    </div>

    {/* Developers Link */}
    <NavLink
      to="/developers"
      className={linkStyle}
      onClick={() => {
        closeDropdown();
        setMenuOpen(false);
      }}
    >
      Developers
    </NavLink>

    {/* Contact Link */}
    <NavLink
      to="/contact"
      className={linkStyle}
      onClick={() => {
        closeDropdown();
        setMenuOpen(false);
      }}
    >
      Contact
    </NavLink>

    {/* Blogs Link */}
    <NavLink
      to="/blogs"
      className="font-medium hover:border-green-600 transition duration-300 mr-4"
      onClick={() => setMenuOpen(false)}
    >
      Blogs
    </NavLink>
    
  </div>
)}

    </header>
  );
}
