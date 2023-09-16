import Link from "next/link";
import React from "react";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkCharcoal = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container mx-auto max-w-[1300px] pt-14 h-full ">
        <div id="header">
          <div className="py-3">
            <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">Bulk Charcoal</h4>
          </div>
          <div className="flex flex-row">
            <p className="basis-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
              suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
              quas quam similique, qui facilis. Illo sit similique omnis numquam
              rem.
            </p>
            <div className="basis-1/4">

            </div>
          </div>
        </div>


        <div id="container" className="pt-16 pb-10 flex justify-start">
        <Burbuja imagen = {"/images/CharcoalGeneral.jpg"} etiqueta ={"Charcoal"} link = {"/products/bulk-category/bulk-charcoal/charcoal"}/>
        </div>

      </section>
    </main>
  );
};

export default BulkCharcoal;
