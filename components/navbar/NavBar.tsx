"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import productos from "../../public/categorias.json";
import Image from "next/image";
import MainLogo from '../../public/images/LogoHorizontal.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { lang, setLang } = useTranslation();

  // const handleLanguageChange = (e) => {
  //   const selectedLang = e.target.value;
  //   setLang(selectedLang);
  // };

  return (
    
    <div className="sticky top-0 w-full bg-white z-40">
      <div className="border-b border-black font-Fitgre font-semibold">
        <div className="container mx-auto flex justify-between h-16 bg-white max-w-[1300px]">
          <div className="flex items-center cursor-pointer">
            <Link href="/">
              <Image src={MainLogo} alt="MainLogo" width="200" height="48"/>
            </Link>
          </div>
          <ul className="flex items-center gap-12 text-black font-serif text-[17px]">
            <li
              className="relative flex flex-col items-center cursor-pointer"
              onMouseEnter={() => {
                setIsOpen((prev) => !prev);
              }}
              onMouseLeave={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <Link href='/products'>
                <button className="flex items-center py-3 active:text-red hover:text-red">
                  Products
                  <RiArrowDropDownLine className="font-extrabold text-3xl" />
                </button>
              </Link>
              {isOpen && (
                <div
                  className={`absolute top-12 flex flex-col items-start text-black h-fit w-60 bg-white z-50`}
                >
                  {productos.map((producto, i) => (
                    <div
                      className="flex w-full justify-between border-[0.5px] font-normal border-black py-2 px-4 hover:bg-[#fef0e3] hover:text-red hover:border-l-lightRed hover:border-l-4"
                      key={i}
                    >
                      <Link href={producto.link}>
                        <p>{producto.category}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <Link href='/about'>
              <li className="cursor-pointer">About Us</li>
            </Link>
            <Link href="/why-us">
              <li className="cursor-pointer">Why Us</li>
            </Link>
            {/* <li className="cursor-pointer">Blog</li> */}
            <Link href="/contact">
              <li className="cursor-pointer active:text-red">Contact</li>
            </Link>
            {/* <select value={lang} onChange={handleLanguageChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
