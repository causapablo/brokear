import Link from "next/link";
import React from "react";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkCharcoal = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Charcoal</h4>
        <p className="md:w-7/12 md:pt-6 pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 justify-center flex-wrap space-y-4">
        <Burbuja imagen={"/images/CharcoalGeneral.jpg"} etiqueta={"Charcoal"} link={"/products/bulk-category/bulk-charcoal/charcoal"} />
        </div>
      </section>
    </main>
    
  );
};

export default BulkCharcoal;
