import {
  FaArrowDown,
  FaBars,
  FaCamera,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(isDropdownOpen);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md z-50 top-0">
      <div className="container mx-auto p-4 flex max-w-full items-center fixed justify-between bg-white shadow-md">
        <div className="">
          <Link to="/" className="flex-shrink-0 object-contain">
            <img
              src="..\logo\ADLM Studio Logo PNG-07.png"
              alt="adlmlogo"
              className="w-10 h-10 lg:w-18 lg:h-18"
            />
          </Link>
        </div>

        {/* Hambuger Icon */}
        <div className="md:hidden">
          <button onClick={handleToggleMenu} className="m-02">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav
          className={`md:flex md:gap-4 md:flex-row md:relative md:h-0 md:mt-0 md:translate-x-0 md:w-90 md:p-0 md:mb-2 md:ml-0 ${
            isMenuOpen ? "block" : "hidden"
          } translate-x-full top-0 w-56 mt-12 flex flex-col gap-4 ml-20 bg-white shadow-lg p-4 z-20 transition-transform duration-300 h-[22vh] absolute transform`}
        >
          {/* Menu Items */}
          <Link to="/HomeA" className="hover:opacity-45">
            Home
          </Link>
          <Link to="/marketplace" className="hover:opacity-45">
            Marketplace
          </Link>
          <Link to="/pricing" className="hover:opacity-45">
            Pricing
          </Link>
          <Link to="/services" className="hover:opacity-45">
            Services
          </Link>

          <div className="relative ">
            <button
              className="flex flex-row items-center gap-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="hover:opacity-45">Product</p>
              <FaArrowDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 w-56 mt-2 py-2 bg-white border rounded shadow-xl flex flex-col p-3">
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/planswift-plugin"}
                >
                  Planswift Plugin
                </Link>
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/rate-gen"}
                >
                  Rate Generator
                </Link>
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/bim-course"}
                >
                  BIM Course
                </Link>
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/ms-project"}
                >
                  Microsoft Project Course
                </Link>
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/mat-lab-gen"}
                >
                  Material and Labour Generator
                </Link>
                <Link
                  className="hover:underline block px-4 py-2 hover:opacity-85"
                  to={"/revit-plugin"}
                >
                  Revit Plugin
                </Link>
              </div>
            )}
          </div>

          <Link to="/newsletter" className="hover:opacity-45">
            Newsletter
          </Link>
        </nav>

        <form
          className="bg-gray-200 p-3 rounded-lg hidden justify-center lg:flex"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-15 sm:w-30"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-gray-75" />
          </button>
        </form>

        <Link to="/profile" className="">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="pp"
              className="rounded-full h-7 w-7 object-cover"
            />
          ) : (
            <li className="sm:inline text-blue-700 hover:underline">Sign Up</li>
          )}
        </Link>
      </div>
    </header>
  );
}
