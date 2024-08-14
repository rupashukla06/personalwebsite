import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose  } from "react-icons/md";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0">
        <nav className={`py-4 md:px-12 px-4 bg-[#0f0715] ${isSticky ? "sticky top-0 right-0 left-0 bg-[#0f0715]" : "" }`}>
          <div className="flex items-center justify-between">
            <a href="https://mail.google.com/mail/u/0/#inbox" className="text-white hover:text-indigo-500 font-semibold text-lg cursor-pointer"> daveparth2604@gmail.com </a>
            <div className="lg:flex items-center gap-3 hidden text-gray-100">
              <a className="block hover:text-indigo-500 py-2 px-4 cursor-pointer" >  Home </a>
              <a className="block hover:text-indigo-500 py-2 px-4 cursor-pointer"> Skills </a>
              <a className="block hover:text-indigo-500 py-2 px-4 cursor-pointer">  About me </a>
              <a className="block hover:text-indigo-500 py-2 px-4 cursor-pointer">  Portfolio </a>
              <a className="block hover:text-indigo-500 py-2 px-4 cursor-pointer"> Testimonials </a>
            </div>

            <button onClick={toggleMenu} className="lg:hidden text-gray-100 text-3xl">{isMenuOpen ?  <MdOutlineClose  /> : <HiMenu /> } </button>
          </div>

          {isMenuOpen && (
            <div className="mt-4 bg-body p-4 rounded-lg text-white cursor-pointer">
              <a className="block hover:text-indigo-500 py-2"> Home</a>
              <a className="block hover:text-indigo-500 py-2">  Skills </a>
              <a className="block hover:text-indigo-500 py-2">  About me  </a>
              <a className="block hover:text-indigo-500 py-2">  Portfolio </a>
              <a className="block hover:text-indigo-500 py-2">  Testimonials </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;