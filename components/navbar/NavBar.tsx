"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import productos from "../../public/categorias.json";
import Image from "next/image";
import MainLogo from '../../public/images/LogoHorizontal.png';
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { GrClose } from 'react-icons/gr'
import Box from '@mui/material/Box';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(false);
  const active = usePathname();
  const handleOnClick = () => {
    setOpen((prev) => !prev);
  }
  const handleOnClickProducts = () => {
    setProducts((prev) => !prev);
  }

  return (
    <div className="sticky top-0 w-full bg-white z-40">
      <div className="border-b border-black font-Fitgre font-semibold">
        <div className="container mx-auto md:flex md:justify-between h-16 bg-white max-w-[1300px]">
          <div className=" hidden md:flex items-center cursor-pointer">
            <Link href="/">
              <Image src={MainLogo} alt="MainLogo" width="200" height="48" />
            </Link>
          </div>
          <div className="md:hidden">
            <Accordion expanded={open} sx={{ backgroundColor: "#ffffff", border: "none", boxShadow: "none", width: 'auto', padding: 0 }}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ width: 'auto', paddingY: 0 }}
              >
                <Box sx={{ width: '100%', padding: 0 }}>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center cursor-pointer">
                      <Link href="/">
                        <Image src={MainLogo} alt="MainLogo" width="120" height="48" />
                      </Link>
                    </div>
                    <div className="flex items-center font-extrabold text-4xl" onClick={handleOnClick}>
                      {
                        !open ? <GiHamburgerMenu /> : <GrClose />
                      }
                    </div>
                  </div>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Box>
                  <div className="border-t-[0.5px]">

                    <div id="ProductosDesplegable" className="py-0 border-b-[0.5px]">
                      <Accordion expanded={products} sx={{ backgroundColor: "#ffffff", border: "none", boxShadow: "none", width: 'auto', padding: 0 }}>
                        <AccordionSummary

                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Box sx={{ fontWeight: "600", width: "100%" }}>
                            <div className="flex justify-between">
                              <div >
                                <Link href="/products" className={active == "/products" ? "pr-8 text-red" : "pr-8"}>
                                  Products
                                </Link>
                              </div>
                              <div onClick={handleOnClickProducts}>
                                {
                                  productos ? <ExpandMoreIcon /> : <ExpandLessIcon />
                                }
                              </div>
                            </div>

                          </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 0 }}>
                          <Box>
                            <div className="border-t-[0.5px]">
                              <div className="py-2 border-b-[0.5px]">
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-yerba-mate">
                                    Yerba Mate
                                  </Link></p>
                              </div>
                              <div className="py-2 border-b-[0.5px]">
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-tea">
                                    Tea
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2 border-b-[0.5px]">
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-pulses-seeds">
                                    Pulses & Oil Seeds
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2 border-b-[0.5px]">
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-oils">
                                    Oils
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2">
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-charcoal">
                                    Charcoal
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </div>


                    <Link href="/about">
                      <div className={active == "/about" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">About Us</p>
                      </div>
                    </Link>
                    <Link href="/why-us">
                      <div className={active == "/why-us" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">Why Us</p>
                      </div>
                    </Link>
                    <Link href="/contact">
                      <div className={active == "/contact" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">Contact</p>
                      </div>
                    </Link>
                  </div>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>


          <ul className="md:flex items-center gap-12 text-black font-serif text-[17px] hidden">
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
                <button className={active == "/products" ? "flex items-center py-3 text-red" : "flex items-center py-3 hover:text-red"}>
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
              <li className={active == "/about" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>About Us</li>
            </Link>
            <Link href="/why-us">
              <li className={active == "/why-us" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>Why Us</li>
            </Link>
            {/* <li className="cursor-pointer">Blog</li> */}
            <Link href="/contact">
              <li className={active == "/contact" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

