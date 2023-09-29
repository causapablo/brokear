import Link from "next/link";
import React from "react";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkCharcoal = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Charcoal</h4>
        <div className="md:w-7/12 md:pt-6 pt-4">
          <p>
            VegetableVegetal charcoal for HORECA is a high-quality product that
            can be used for grilling, smoking, and cooking food in hotels,
            restaurants, and catering services. It is made from different
            species of hard or semi-hard woods such as Quebracho Blanco, Itin,
            Garabato, Guayacán, Mistol, Quebracho Colorado, etc. These woods
            are sourced from sustainable forests and processed with minimal
            environmental impact. Vegetal charcoal for HORECA has many advantages
            over other types of charcoal, such as:
          </p>
          <ul>
            <li>
              It burns longer and hotter, producing less ash and smoke.
            </li>
            <li>
              It gives a natural and aromatic flavor to the food, enhancing its taste and quality.
            </li>
            <li>
              It is easy to light, handle, and store, saving time and money.
            </li>
            <li>
              It is safe and healthy, as it does not contain any chemicals or additives.
            </li>
          </ul>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap space-y-4">
          <Burbuja imagen={"/images/CharcoalGeneral.jpg"} etiqueta={"Charcoal"} link={"/products/bulk-category/bulk-charcoal/charcoal"} />
        </div>
      </section>
    </main>

  );
};

export default BulkCharcoal;
