'use client'
import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';
const BulkOils = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">{isSpanish ? 'Aceites' : 'Oils'}</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500]">
          <p className="indent-4 text-justify">
            {isSpanish ? 'Los aceites vegetales son aceites que provienen de plantas, como semillas, nueces, frutas y cereales. Se utilizan para el consumo humano, porque tienen muchos beneficios para la salud. Los aceites vegetales aportan ácidos grasos esenciales, vitamina E y antioxidantes. También ayudan a reducir el colesterol, reducir la inflamación y prevenir enfermedades cardíacas.' : 'Vegetable oils are oils that come from plants, such as seeds, nuts, fruits, and grains. They are used for human consumption, because they have many health benefits. Vegetable oils provide essential fatty acids, vitamin E, and antioxidants. They also help lower cholesterol, reduce inflammation, and prevent heart diseases.'}
          </p>
        </div>
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-5">
          <Burbuja imagen={"/images/SoyOilGeneral.jpg"} etiqueta={isSpanish ? 'Aceite de soja' :"Soy Oil"} link={"/products/bulk-category/bulk-oils/soy-oil"} />
          <Burbuja imagen={"/images/SunflowerOilGeneral.jpg"} etiqueta={isSpanish ? 'Aceite de girasol' : "Sunflower Oil"} link={"/products/bulk-category/bulk-oils/sunflower-oil"} />
          <Burbuja imagen={"/images/OliveOilGeneral.jpg"} etiqueta={isSpanish ? 'Aceite de oliva' : "Olive Oil"} link={"/products/bulk-category/bulk-oils/olive-oil"} />
        </div>
      </section>
    </main>
  );
};

export default BulkOils;
