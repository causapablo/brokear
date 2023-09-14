"use client"
import Image from "next/image";
import carbon from "../../public/images/carbon.jpg";
import icon from "../../public/images/icon.png";
import Link from "next/link";
import TableBulk from "../tableBulk/TableBulk";
import Faq from "../faq/Faq";
import { usePathname } from 'next/navigation'
import React from "react";
import { TbMathGreater } from 'react-icons/tb';
import Burbuja from "../burbuja/Burbuja";

const Detalle = ({ title, description, name, countries, size, shelfLife, use, shippingStorage }: any) => {

  const pathName = usePathname()
  const [, products, bulkCategory, bulkProduct, product] = pathName?.split('/');
  let Products = products?.charAt(0).toUpperCase() + products?.slice(1);
  let BulkProduct = bulkProduct?.charAt(0).toUpperCase() + bulkProduct?.slice(1);
  BulkProduct = BulkProduct.replaceAll("-", " ");


  return (
    <main className="pb-20 bg-gradient-to-b from-lightPink to-white">
      <div className="container mx-auto max-w-[1300px]">
        <section id="container" className="pb-20 pt-3">
          <div id="navigate" className="flex py-8">
            <Link href="/products" className="text-red text-sm font-semibold hover:underline underline-offset-1">{Products}</Link>
            <div className="flex items-center justify-center text-[10px] px-1">
              <TbMathGreater />
            </div>
            <Link href={`/${products}/${bulkCategory}/${bulkProduct}`} className="text-red text-sm font-semibold hover:underline underline-offset-1">{BulkProduct}</Link>
          </div>
          <div id="product">
            <div className="grid grid-cols-2 gap-16">
              <div id="img" className="flex justify-center items-center">
                <Image
                  src={carbon}
                  alt="img"
                  className="border-4 border-black rounded-full h-[414px] w-[414px]"
                />
              </div>
              <div id="text" className="flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="font-bold text-4xl uppercase">
                    {title}
                  </h4>
                  <p className="text-lg">
                    {
                      description
                    }
                  </p>
                </div>
                <div className="space-y-6">
                  <Link href="/contact">
                    <button className="bg-red text-white px-3 py-2 rounded-md font- w-fit font-Dancing hover:bg-lightRed">
                      Contact for Quote
                    </button>
                  </Link>
                  <div>
                    <p><span className="font-semibold">Categories: </span> <span>
                      <Link href={`/${products}/${bulkCategory}/${bulkProduct}`} className="text-red hover:underline underline-offset-1">{BulkProduct}</Link>
                    </span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div id="data">
            
          </div>
        </section>
        <TableBulk name={name} countries={countries} size={size} shelfLife={shelfLife} use={use} shippingStorage={shippingStorage} />




        <section className="flex-col lg:flex lg:flex-row mx-auto items-center w-3/4 py-20 just">
          <div className="basis-full w-fit">
            <Image src={icon} alt="img" className="w-3/4 h-3/4" />
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-2xl px-3 lg:px-0">
              Main producing countries and Harvest time
            </h4>
            <p className="px-3 lg:px-0 text-xl lg:pt-0 ">
              The main producing countries of beetroot powder are India, China
              and France. Its harvest time is 55-70 days after planting around
              late spring to fall.
            </p>
          </div>
        </section>

        <Faq />

        <section className="lg:pl-96 pl-10 pt-14 items-center">
          <div className="flex-col lg:flex lg:flex-row ">
            <p className="font-bold text-xl px-5 lg:px-0 pb-5 lg:pb-0">
              Have more questions or interested in a quote?
            </p>
            <Link href="/contacto">
              <button className="bg-red text-white w-fit px-3 py-2 rounded-sm font-semibold ml-20 ">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
        <div className="divide-y-2 divide-[#e9c5c5] flex flex-col w-10/12 mx-auto">
          <span className="text-white">d</span>
          <span className="text-white">d</span>
        </div>
        <section className="container mx-auto pt-14 items-center">
          <div className="flex items-center justify-center pb-10">
            <h4 className="bg-red text-white font-medium text-lg w-fit px-2 py-1 font-Dancing rounded-sm">
              RELATED PRODUCTS
            </h4>
          </div>
          <div className="flex-col lg:flex lg:flex-row">
            <Burbuja imagen ={`/images/carbon.jpg`} etiqueta = {"Learn More"} link ={"/products/bulk-category/bulk-yerba-mate/european-quality"}/>
            <Burbuja imagen ={`/images/beans.jpg`} etiqueta = {"Learn More"} link ={"/products/bulk-category/bulk-yerba-mate/european-quality"}/>
            <Burbuja imagen ={`/images/beans.jpg`} etiqueta = {"Learn More"} link ={"/products/bulk-category/bulk-yerba-mate/european-quality"}/>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Detalle;
