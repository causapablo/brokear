'use client'
import Link from "next/link";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../redux/translateSlice';
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkCharcoal = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">{isSpanish ? 'Carbón' : 'Charcoal'}</h4>
        <div className="md:w-7/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            {isSpanish ? 'El carbón vegetal para HORECA es un producto de alta calidad que puede utilizarse para asar, ahumar y cocinar alimentos en hoteles, restaurantes y servicios de catering.' : 'Vegetal charcoal for HORECA is a high-quality product that can be used for grilling, smoking, and cooking food in hotels, restaurants, and catering services.'}
          </p>
          <p className="indent-4 text-justify">
            {isSpanish ? 'Está elaborado a partir de diferentes especies de maderas duras o semiduras como Quebracho Blanco, Itin, Garabato, Guayacán, Mistol, Quebracho Colorado, etc. Estas maderas provienen de bosques sustentables y procesadas con el mínimo impacto ambiental.' : 'It is made from different species of hard or semi-hard woods such as Quebracho Blanco, Itin, Garabato, Guayacán, Mistol, Quebracho Colorado, etc. These woods are sourced from sustainable forests and processed with minimal environmental impact.'}
          </p>
          <p className="indent-4 text-justify">
            {isSpanish ? 'El carbón vegetal para HORECA tiene muchas ventajas frente a otros tipos de carbón, como por ejemplo:' : 'Vegetal charcoal for HORECA has many advantages over other types of charcoal, such as:'}
          </p>
          <ul className="list-disc pl-4">
            <li className="marker:text-red">
              {isSpanish ? 'Quema más tiempo y con más calor, produciendo menos cenizas y humo.' : 'It burns longer and hotter, producing less ash and smoke.'}
            </li>
            <li className="marker:text-red">
              {isSpanish ? 'Aporta un sabor natural y aromático a los alimentos, potenciando su sabor y calidad.' : 'It gives a natural and aromatic flavor to the food, enhancing its taste and quality.'}
            </li>
            <li className="marker:text-red">
              {isSpanish ? 'Es fácil de encender, manipular y almacenar, ahorrando tiempo y dinero.' : 'It is easy to light, handle, and store, saving time and money.'}
            </li>
            <li className="marker:text-red">
              {isSpanish ? 'Es seguro y saludable, ya que no contiene productos químicos ni aditivos.' : 'It is safe and healthy, as it does not contain any chemicals or additives.'}
            </li>
          </ul>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap space-y-4">
          <Burbuja imagen={"/images/CharcoalGeneral.jpg"} etiqueta={isSpanish ? 'Carbón' : "Charcoal"} link={"/products/bulk-category/bulk-charcoal/charcoal"} />
        </div>
      </section>
    </main>

  );
};

export default BulkCharcoal;
