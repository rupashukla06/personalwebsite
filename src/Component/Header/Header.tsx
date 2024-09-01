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
            <a href="https://mail.google.com/mail/u/0/#inbox" className="text-white hover:text-[#8750f7] font-semibold text-lg cursor-pointer"> rupashukla1006@gmail.com </a>
            <div className="lg:flex items-center gap-3 hidden text-gray-100">
              <a className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation">  Home </a>
              <a className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation"> Skills </a>
              <a className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation">  About me </a>
              <a className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation">  Resume </a>
              <a className="block hover:text-[#8750f7] py-2 px-4 cursor-pointer underline-animation"> Testimonials </a>
            </div>

            <button onClick={toggleMenu} className="lg:hidden text-gray-100 text-3xl">{isMenuOpen ?  <MdOutlineClose  /> : <HiMenu /> } </button>
          </div>

          {isMenuOpen && (
            <div className="mt-4 bg-body p-4 rounded-lg text-white cursor-pointer">
              <a className="block hover:text-[#8750f7] py-2 cursor-pointer"> Home</a>
              <a className="block hover:text-[#8750f7] py-2 cursor-pointer">  Skills </a>
              <a className="block hover:text-[#8750f7] py-2 cursor-pointer">  About me  </a>
              <a className="block hover:text-[#8750f7] py-2 cursor-pointer">  Resume </a>
              <a className="block hover:text-[#8750f7] py-2 cursor-pointer">  Testimonials </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;