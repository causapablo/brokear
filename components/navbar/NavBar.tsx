"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import productos from "../../public/categorias.json";
import Image from "next/image";
import MainLogo from '../../public/images/LogoHorizontal.png';
import { usePathname } from 'next/navigation'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = usePathname(); 
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
                <button className={active=="/products"? "flex items-center py-3 text-red" :"flex items-center py-3 hover:text-red"}>
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
                      <Link href={producto.link} className="w-full">
                        <p className="w-full">{producto.category}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <Link href='/about'>
              <li className={active=="/about"? "cursor-pointer text-red":"cursor-pointer hover:text-red"}>About Us</li>
            </Link>
            <Link href="/why-us">
              <li className={active=="/why-us"? "cursor-pointer text-red":"cursor-pointer hover:text-red"}>Why Us</li>
            </Link>
            {/* <li className="cursor-pointer">Blog</li> */}
            <Link href="/contact">
              <li className={active=="/contact"? "cursor-pointer text-red":"cursor-pointer hover:text-red"}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

