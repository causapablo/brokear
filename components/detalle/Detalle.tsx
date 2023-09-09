import Image from "next/image";
import crbn  from '../../public/images/carbon.jpg'
import carbon from "../../public/images/carbon.jpg";
import icon from "../../public/images/icon.png";
import Link from "next/link";
import TableBulk from "../tableBulk/TableBulk";
import Faq from "../faq/Faq";

import { GiCheckMark } from "react-icons/gi";
import React from "react";

const Detalle = ({title, description, name, countries, size, shelfLife, use, shippingStorage}:any) => {
  
    return (
        <main className="pb-20 bg-gradient-to-b from-lightPink to-white">
          <div className="container mx-auto max-w-[1300px]">
            <div className="pt-10 lg:pl-20 flex flex-wrap">
              <Image
                src={carbon}
                alt="img"
                className="rounded-full border-4 border-black lg:w-[30%]"
              />
    
              <div className="flex-col lg:w-6/12">
                <h4 className="font-bold text-4xl lg:pl-40 pt-10 text-center uppercase">
                  {title}
                </h4>
                <p className="text-lg lg:pl-40 pt-10 px-5 lg:px-0">
                  {
                    description
                  }
                </p>
                <Link href="/contacto">
                  <button className="bg-red text-white ml-[27%] mt-10 px-1 py-1 rounded-sm font-semibold">
                    Contact for Quote
                  </button>
                </Link>
              </div>
            </div>
            <TableBulk name = {name} countries = {countries} size = {size} shelfLife = {shelfLife} use = {use} shippingStorage = {shippingStorage} />
            <section className="flex-col lg:flex lg:flex-row mx-auto lg:ml-80 pt-10 pb-20 items-center">
              <div>
                <Image src={icon} alt="img" className="" />
              </div>
              <div className="pt-20">
                <h4 className="font-bold text-2xl px-3 lg:px-0">
                  Main producing countries and Harvest time
                </h4>
                <p className="lg:w-7/12 px-3 lg:px-0 text-xl pt-5 lg:pt-0">
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
            <div className="divide-y-2 divide-[#e9c5c5] flex flex-col w-3/5 ml-[23%]">
              <span className="text-white">d</span>
              <span className="text-white">d</span>
            </div>
            <section className="container mx-auto pt-14 items-center">
              <div className="flex items-center justify-center pb-10">
                <h4 className="bg-red text-white font-medium text-lg w-fit px-1 ">
                  RELATED PRODUCTS
                </h4>
              </div>
              <div className="flex-col lg:flex lg:flex-row">
                <div
                  className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
                  w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer mb-5"
                  style={{
                    backgroundImage: `url(/images/beans.jpg)`,
                    aspectRatio: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "20%",
                    backgroundPositionY: "40%",
                  }}
                >
                  <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                    Learn more
                  </p>
                </div>
                <div
                  className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
                  w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer mb-5"
                  style={{
                    backgroundImage: `url(/images/aceite.png)`,
                    aspectRatio: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "90%",
                    backgroundPositionY: "15%",
                  }}
                >
                  <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                    learn more
                  </p>
                </div>
                <div
                  className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
                  w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
                  style={{
                    backgroundImage: `url(/images/tree.jpg)`,
                    aspectRatio: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "20%",
                    backgroundPositionY: "40%",
                  }}
                >
                  <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                    learn more
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      );
};

export default Detalle;
