import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkYerbaMate = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-2 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Yerba Mate</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            Yerba mate is a plant native to the subtropical region of South America,
            which is used to make a stimulating and aromatic drink called mate.
            Mate is consumed in several countries, especially in Argentina, Paraguay,
            Uruguay and southern Brazil, where it is part of the cultural and social
            identity.
          </p>
          <p className="indent-4 text-justify">
            Some of its effects are to improve the immune system, promote digestion,
            regulate cholesterol and blood sugar levels, stimulate metabolism and physical
            and intellectual performance, and reduce appetite and stress. Yerba mate is
            a healthy, energetic and social infusion that can be enjoyed at any time of the day.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-2 md:gap-4">
          <Burbuja imagen={"/images/YerbaBulkGeneral.jpg"} etiqueta={"Bulk Yerba Mate"} link={"/products/bulk-category/bulk-yerba-mate/bulk"} />
          <Burbuja imagen={"/images/YerbaTraditionalGeneral.jpg"} etiqueta={"Traditional"} link={"/products/bulk-category/bulk-yerba-mate/traditional"} />
          <Burbuja imagen={"/images/YerbaOrganicGeneral.jpg"} etiqueta={"Organic"} link={"/products/bulk-category/bulk-yerba-mate/organic"} />
          <Burbuja imagen={"/images/YerbaEuropeanQualityGeneral.jpg"} etiqueta={"European Quality"} link={"/products/bulk-category/bulk-yerba-mate/european-quality"} />
        </div>
      </section>
    </main>
  );
};

export default BulkYerbaMate;
