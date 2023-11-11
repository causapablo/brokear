"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import productos from "../../public/categorias.json";
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { GrClose } from 'react-icons/gr'
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage, selectLanguage } from '../../src/redux/translateSlice';
import ExportedImage from "next-image-export-optimizer";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#9aceb8' : '#9aceb8',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#2a923a' : '#2a923a',
    boxSizing: 'border-box',
  },
}));


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
  const handleOnMainLogo = () =>{
    if(open==true){
      setOpen(false);
    }
  }
  const handleBoth = ()=>{
    setProducts((prev) => !prev);
    setOpen((prev) => !prev);
  }

  const isSpanish = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const toggleLanguageHandler = () => {
    dispatch(toggleLanguage());
  };

  return (
    <div className="sticky top-0 w-full bg-white z-40">
      <div className="border-b border-black font-Fitgre font-semibold">
        <div className="container mx-auto md:flex md:justify-between h-14 md:h-16 bg-white max-w-[1300px]">
          <div className=" hidden md:flex items-center cursor-pointer">
            <Link href="/">
              <ExportedImage src={"/images/LogoHorizontal.png"} alt="MainLogo" width="260" height="90" className="" />
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
                      <Link href="/" onClick={handleOnMainLogo}>
                        <ExportedImage src={"/images/LogoHorizontal.png"} alt="MainLogo" width="160" height="48" />
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
                              <div  onClick={handleOnClick}>
                                <Link href="/products" className={active == "/products" ? "pr-8 text-red" : "pr-8"}>
                                  {isSpanish ? 'Productos' : 'Products'}
                                </Link>
                              </div>
                              <div onClick={handleOnClickProducts}>
                                {
                                  !products ? <ExpandMoreIcon /> : <ExpandLessIcon />
                                }
                              </div>
                            </div>

                          </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 0 }}>
                          <Box>
                            <div className="border-t-[0.5px]">
                              <div className="py-2 border-b-[0.5px]"  onClick={handleBoth}>
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-yerba-mate">
                                    Yerba Mate
                                  </Link></p>
                              </div>
                              <div className="py-2 border-b-[0.5px]"  onClick={handleBoth}>
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-tea">
                                    {isSpanish ? 'Té' : 'Tea'}
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2 border-b-[0.5px]" onClick={handleBoth}>
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-pulses-seeds">
                                  {isSpanish ? 'Legumbres y semillas oleaginosas' : 'Pulses & Oil Seeds'}
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2 border-b-[0.5px]" onClick={handleBoth}>
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-oils">
                                    {isSpanish ? 'Aceites' : 'Oils'}
                                  </Link>
                                </p>
                              </div>
                              <div className="py-2" onClick={handleBoth}>
                                <p className="pl-8">
                                  <Link href="/products/bulk-category/bulk-charcoal">
                                    {isSpanish ?'Carbón' : 'Charcoal'}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </div>


                    <Link href="/about" onClick={handleOnClick}>
                      <div className={active == "/about" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">{isSpanish ? 'Sobre nosotros' : 'About Us'}</p>
                      </div>
                    </Link>
                    <Link href="/why-us" onClick={handleOnClick}>
                      <div className={active == "/why-us" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">{isSpanish ? 'Por qué nosotros' : 'Why Us'}</p>
                      </div>
                    </Link>
                    <Link href="/contact" onClick={handleOnClick}>
                      <div className={active == "/contact" ? "py-3 border-b-[0.5px] border-black text-red" : "py-3 border-b-[0.5px]"}>
                        <p className="pl-3">{isSpanish ? 'Contacto' : 'Contact'}</p>
                      </div>
                    </Link>
                    <Stack direction="row" spacing={1} alignItems="center">
        {/* <Typography>EN</Typography> */}
        <ExportedImage src={"/images/inglaterra.png"} alt="MainLogo" width="30" height="30" className="" />
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={toggleLanguageHandler}/>
        {/* <Typography>ES</Typography> */}
        <ExportedImage src={"/images/espana.png"} alt="MainLogo" width="30" height="30" className="" />
      </Stack>
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
                {isSpanish ? 'Productos' : 'Products'}
                  <RiArrowDropDownLine className="font-extrabold text-3xl" />
                </button>
              </Link>
              {isOpen && (
                <div
                  className={`absolute top-12 flex flex-col items-start text-black h-fit w-60 bg-white z-50`}
                >
                  {productos.map((producto, i) => (
                    <div
                      className="flex w-full justify-between border-[0.5px] font-normal border-black py-2 px-4  hover:text-red hover:border-l-[#299131] hover:border-l-4"
                      key={i}
                    >
                      <Link href={producto.link} className="w-full">
                        <p className="w-full">{isSpanish ? producto.categoryES : producto.categoryEN}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <Link href='/about'>
              <li className={active == "/about" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>{isSpanish ? 'Sobre nosotros' : 'About Us'}</li>
            </Link>
            <Link href="/why-us">
              <li className={active == "/why-us" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>{isSpanish ? 'Por qué nosotros' : 'Why Us'}</li>
            </Link>
            {/* <li className="cursor-pointer">Blog</li> */}
            <Link href="/contact">
              <li className={active == "/contact" ? "cursor-pointer text-red" : "cursor-pointer hover:text-red"}>{isSpanish ? 'Contacto' : 'Contact'}</li>
            </Link>
            <Stack direction="row" spacing={1} alignItems="center">
        {/* <Typography>EN</Typography> */}
        <ExportedImage src={"/images/inglaterra.png"} alt="MainLogo" width="30" height="30" className="" />
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={toggleLanguageHandler}/>
        {/* <Typography>ES</Typography> */}
        <ExportedImage src={"/images/espana.png"} alt="MainLogo" width="30" height="30" className="" />
      </Stack>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

