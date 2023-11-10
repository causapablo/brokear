"use client"
import Burbuja from "../../../../../components/burbuja/Burbuja";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

const BulkTea = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
<<<<<<< HEAD
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-2 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Tea</h4>
=======
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">{isSpanish ? 'Té' : 'Tea'}</h4>
>>>>>>> translate
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            {isSpanish ? 'El té negro y el té verde son dos tipos de infusiones que se obtienen de la misma planta, Camellia sinensis. La diferencia entre ambos radica en el grado de oxidación que sufren las hojas durante el procesamiento. El té negro es el más oxidado, dándole un color más oscuro y un sabor más intenso. El té verde se somete a un tratamiento térmico que evita la oxidación, conservando su color verde y su sabor más suave.' : 'Black tea and green tea are two types of infusions that are obtained from the same plant, Camellia sinensis. The difference between the two lies in the degree of oxidation that the leaves suffer during processing. Black tea is the most oxidized, giving it a darker color and more intense flavor. Green tea undergoes a heat treatment that prevents oxidation, preserving its green color and milder flavor.'}
          </p>
          <p className="indent-4 text-justify">
            {isSpanish ? 'El té negro y el té verde tienen diferentes usos y costumbres dependiendo de la cultura y región donde se consumen.' : 'Black tea and green tea have different uses and customs depending on the culture and region where they are consumed.'}
          </p>
        </div>

<<<<<<< HEAD
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-2 md:gap-6">
          <Burbuja imagen={"/images/BlackTeaGeneral.jpg"} etiqueta={"Black Tea"} link={"/products/bulk-category/bulk-tea/black-tea"} />
          <Burbuja imagen={"/images/GreenTeaGeneral.jpg"} etiqueta={"Green Tea"} link={"/products/bulk-category/bulk-tea/green-tea"} />
=======
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-5">
          <Burbuja imagen={"/images/BlackTeaGeneral.jpg"} etiqueta={isSpanish ? 'Té negro' : "Black Tea"} link={"/products/bulk-category/bulk-tea/black-tea"} />
          <Burbuja imagen={"/images/GreenTeaGeneral.jpg"} etiqueta={isSpanish ? 'Té verde' : "Green Tea"} link={"/products/bulk-category/bulk-tea/green-tea"} />
>>>>>>> translate
        </div>
      </section>
    </main>
  );
};

export default BulkTea;
