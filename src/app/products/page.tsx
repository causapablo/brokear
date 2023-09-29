import React from "react";
import categorias from "../../../public/categorias.json";
import Burbuja from "../../../components/burbuja/Burbuja";
import Link from "next/link";
function Productos() {
  return (
    <div className="bg-gradient-to-b from-lightPink to-white pt-12 pb-10">
      <section className="container mx-auto max-w-[1300px]">
        <h1 className="bg-red text-white inline-block px-[10px] py-1 text-[20px] font-normal ml-4 lg:ml-0 font-Dancing">
          Products
        </h1>
        <div className="lg:grid lg:grid-cols-2 gap-4 pt-5 px-3 lg:px-0">
          <div>
            <p className="font-Fitgree text-[17px] font-[500] text-white">
              Here you’ll find a wide selection of specialty raw ingredients
              ranging from coconut products and plant-based proteins to
              sweeteners and additives. You can also browse by organic, halal,
              kosher, and vegan subcategories.<span> <Link href='/contact' className="text-red hover:underline underline-offset-1">Looking for something not listed?</Link></span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="pt-10">
          <div className="flex flex-wrap justify-start gap-10">
            {categorias.map((cat, i) => (
              <Burbuja etiqueta={cat.category} imagen={cat.img} link={cat.link} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
