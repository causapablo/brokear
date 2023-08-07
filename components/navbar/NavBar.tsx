"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import productos from "../../public/productos.json";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white">
      <div className="border-b border-black font-Fitgre font-semibold">
        <div className="container mx-auto flex justify-between h-16 bg-white">
          <div className="flex items-center cursor-pointer">
            <Link href="/">
              <h1 className="text-3xl font-bold text-red ">Logo de la Marca</h1>
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
              <button className="flex items-center py-3  hover:text-red">
                Products{" "}
                <RiArrowDropDownLine className="font-extrabold text-3xl" />
              </button>
              {isOpen && (
                <div
                  className={`absolute top-12 flex flex-col items-start text-black h-fit w-40 bg-white z-50`}
                >
                  {productos.map((producto, i) => (
                    <div
                      className="flex w-full justify-between border-[0.5px] border-black py-2 px-4 hover:bg-[#fef0e3] hover:text-red hover:border-l-lightRed hover:border-l-4"
                      key={i}
                    >
                      <Link href={producto.link}>
                        <p>{producto.product}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <Link href='/nosotros'>
                <li className="cursor-pointer hover:text-lightRed">About Us</li>
            </Link>
            <li className="cursor-pointer hover:text-lightRed">Why Us</li>
            <li className="cursor-pointer hover:text-lightRed">Blog</li>
            <Link href='/contacto'>
              <li className="cursor-pointer hover:text-lightRed">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
