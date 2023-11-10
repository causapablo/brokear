'use client'
import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

const BulkYerbaMate = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-2 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Yerba Mate</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            {isSpanish ? 'La yerba mate es una planta originaria de la región subtropical de América del Sur, con la que se elabora una bebida estimulante y aromática llamada mate. El mate se consume en varios países, especialmente en Argentina, Paraguay, Uruguay y el sur de Brasil, donde forma parte de la identidad cultural y social.' : 'Yerba mate is a plant native to the subtropical region of South America, which is used to make a stimulating and aromatic drink called mate. Mate is consumed in several countries, especially in Argentina, Paraguay, Uruguay and southern Brazil, where it is part of the cultural and social identity.'}
          </p>
          <p className="indent-4 text-justify">
            {isSpanish ? 'Algunos de sus efectos son mejorar el sistema inmunológico, favorecer la digestión, regular los niveles de colesterol y azúcar en sangre, estimular el metabolismo y el rendimiento físico e intelectual, y reducir el apetito y el estrés. La yerba mate es una infusión saludable, energética y social que se puede disfrutar en cualquier momento del día.' : 'Some of its effects are to improve the immune system, promote digestion, regulate cholesterol and blood sugar levels, stimulate metabolism and physical and intellectual performance, and reduce appetite and stress. Yerba mate is a healthy, energetic and social infusion that can be enjoyed at any time of the day.'}
          </p>
        </div>

<<<<<<< HEAD
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-2 md:gap-4">
          <Burbuja imagen={"/images/YerbaBulkGeneral.jpg"} etiqueta={"Bulk Yerba Mate"} link={"/products/bulk-category/bulk-yerba-mate/bulk"} />
          <Burbuja imagen={"/images/YerbaTraditionalGeneral.jpg"} etiqueta={"Traditional"} link={"/products/bulk-category/bulk-yerba-mate/traditional"} />
          <Burbuja imagen={"/images/YerbaOrganicGeneral.jpg"} etiqueta={"Organic"} link={"/products/bulk-category/bulk-yerba-mate/organic"} />
          <Burbuja imagen={"/images/YerbaEuropeanQualityGeneral.jpg"} etiqueta={"European Quality"} link={"/products/bulk-category/bulk-yerba-mate/european-quality"} />
=======
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-4">
          <Burbuja imagen={"/images/YerbaBulkGeneral.jpg"} etiqueta={isSpanish ? 'Yerba mate a granel' : "Bulk Yerba Mate"} link={"/products/bulk-category/bulk-yerba-mate/bulk"} />
          <Burbuja imagen={"/images/YerbaTraditionalGeneral.jpg"} etiqueta={isSpanish ? 'Tradicional' : "Traditional"} link={"/products/bulk-category/bulk-yerba-mate/traditional"} />
          <Burbuja imagen={"/images/YerbaOrganicGeneral.jpg"} etiqueta={isSpanish ? 'Orgánica' : "Organic"} link={"/products/bulk-category/bulk-yerba-mate/organic"} />
          <Burbuja imagen={"/images/YerbaEuropeanQualityGeneral.jpg"} etiqueta={isSpanish ? 'Calidad europea' : "European Quality"} link={"/products/bulk-category/bulk-yerba-mate/european-quality"} />
>>>>>>> translate
        </div>
      </section>
    </main>
  );
};

export default BulkYerbaMate;
