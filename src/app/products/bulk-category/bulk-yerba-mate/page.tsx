import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkYerbaMate = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container mx-auto max-w-[1300px] pt-14 ">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Bulk Yerba Mate</h4>
        <p className="w-7/12 pt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 justify-center flex-wrap">
        <Burbuja imagen = {"/images/YerbaBulkGeneral.jpg"} etiqueta ={"Bulk Yerba Mate"} link = {"/products/bulk-category/bulk-yerba-mate/bulk"}/>
        <Burbuja imagen = {"/images/YerbaTraditionalGeneral.jpg"} etiqueta ={"Traditional"} link = {"/products/bulk-category/bulk-yerba-mate/traditional"}/>
        <Burbuja imagen = {"/images/YerbaOrganicGeneral.jpg"} etiqueta ={"Organic"} link = {"/products/bulk-category/bulk-yerba-mate/organic"}/>
        <Burbuja imagen = {"/images/YerbaEuropeanQualityGeneral.jpg"} etiqueta ={"European Quality"} link = {"/products/bulk-category/bulk-yerba-mate/european-quality"}/>
        </div>
      </section>
    </main>
  );
};

export default BulkYerbaMate;
