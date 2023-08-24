import React from "react";
import categorias from "../../../public/categorias.json";
import Burbuja from "../../../components/burbuja/Burbuja";

function Productos() {
  return (
    <div className="bg-gradient-to-b from-lightPink to-white pt-32 pb-10">
      <section className="container mx-auto max-w-[1333px]">
        <h1 className="bg-red font-Poppins text-white inline-block px-[10px] py-1 text-[20px] font-[700] ml-4 lg:ml-0">
          Bulk Products
        </h1>
        <div className="lg:grid lg:grid-cols-2 gap-4 pt-2 px-3 lg:px-0">
          <div>
            <p className="font-Fitgree text-[17px] font-[500] pt-5 lg:pt-5">
              Here you’ll find a wide selection of specialty raw ingredients
              ranging from coconut products and plant-based proteins to
              sweeteners and additives. You can also browse by organic, halal,
              kosher, and vegan subcategories. Looking for something not listed?
            </p>
          </div>
          <div></div>
        </div>
        <div className="pt-10">
          <div className="flex flex-wrap justify-center gap-24">
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
