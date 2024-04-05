import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNav = () => setIsNavVisible(!isNavVisible);
  const closeNav = () => setIsNavVisible(false);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240p] mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">8Giggle</h1>

      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile nav Icon*/}
      <div onClick={handleNav} className="block md:hidden">
        {isNavVisible ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Mobile nav */}
      <ul
        className={
          isNavVisible
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Icon */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          8Giggle
        </h1>

        {/* Mobile Nav Links */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={closeNav}
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
