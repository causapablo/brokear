"use client"
import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

const BulkPulsesSeeds = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
<<<<<<< HEAD
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-2 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Pulses and Seeds</h4>
=======
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">{isSpanish ? 'Legumbres y semillas' : 'Pulses and Seeds'}</h4>
>>>>>>> translate
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            {isSpanish ? 'Las legumbres y las semillas oleaginosas son dos grupos de cultivos que se caracterizan por su alto contenido en proteínas y aceites vegetales. Las legumbres, como frijoles, lentejas, garbanzos, guisantes y habas. Las semillas oleaginosas son semillas oleaginosas, como las de girasol, soja, canola, maní, mostaza, lino, nigella, coco y cártamo.' : 'Pulses and oil seeds are two groups of crops that are characterized by their high content of proteins and vegetable oils. Pulses are dried legumes, such as beans, lentils, chickpeas, peas and lima beans. Oil seeds are oilseeds, such as sunflower, soybeans, canola, peanuts, mustard, flax, nigella, coconut and safflower.'}
          </p>
          <p className="indent-4 text-justify">
            {isSpanish ? 'Las legumbres se utilizan como alimento humano y animal, como fertilizante verde y como fuente de biocombustibles. Las semillas oleaginosas se utilizan para extraer aceites comestibles e industriales, para elaborar harinas y concentrados de proteínas, para fabricar jabones, cosméticos y pinturas, y para generar energía renovable.' : 'Pulses are used as human and animal food, as green fertilizer and as a source of biofuels. Oil seeds are used to extract edible and industrial oils, to make flours and protein concentrates, to make soaps, cosmetics and paints, and to generate renewable energy.'}
          </p>
        </div>

<<<<<<< HEAD
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-2 md:gap-6">
          <Burbuja imagen={"/images/AdzukiGeneral.jpg"} etiqueta={"Adzuki Beans"} link={"/products/bulk-category/bulk-pulses-seeds/adzuki-beans"}/>
          <Burbuja imagen={"/images/AlubiaGeneral.jpg"} etiqueta={"Alubia Beans"} link={"/products/bulk-category/bulk-pulses-seeds/alubia-beans"} />
          <Burbuja imagen={"/images/BlackGeneral.jpg"} etiqueta={"Black Beans"} link={"/products/bulk-category/bulk-pulses-seeds/black-beans"} />
          <Burbuja imagen={"/images/BlackEyeGeneral.jpg"} etiqueta={"Black Eyed Beans"} link={"/products/bulk-category/bulk-pulses-seeds/black-eye-beans"} />
          <Burbuja imagen={"/images/ChiaGeneral.jpg"} etiqueta={"Chia Seeds"} link={"/products/bulk-category/bulk-pulses-seeds/chia-seeds"} />
          <Burbuja imagen={"/images/ChickpeasGeneral.jpg"} etiqueta={"Chickpeas"} link={"/products/bulk-category/bulk-pulses-seeds/chick-peas"} />
          <Burbuja imagen={"/images/CranberryGeneral.jpg"} etiqueta={"Cranberry Beans"} link={"/products/bulk-category/bulk-pulses-seeds/cranberry-beans"} />
          <Burbuja imagen={"/images/RedKidneyGeneral.jpg"} etiqueta={"Dark Red Kidney Beans"} link={"/products/bulk-category/bulk-pulses-seeds/dark-red-kidney-beans"} />
          <Burbuja imagen={"/images/GreenPeasGeneral.jpg"} etiqueta={"Greenpeas"} link={"/products/bulk-category/bulk-pulses-seeds/green-peas"} />
          <Burbuja imagen={"/images/LightKidneyGeneral.jpg"} etiqueta={"Light Red Kidney Beans"} link={"/products/bulk-category/bulk-pulses-seeds/light-red-kidney-beans"} />
          <Burbuja imagen={"/images/MungGeneral.jpg"} etiqueta={"Mung Beans"} link={"/products/bulk-category/bulk-pulses-seeds/mung-beans"} />
          <Burbuja imagen={"/images/PecanShellGeneral.jpg"} etiqueta={"Pecan in Shell"} link={"/products/bulk-category/bulk-pulses-seeds/pecan-in-shell"} />
          <Burbuja imagen={"/images/PecanWShellGeneral.jpg"} etiqueta={"Pecan Without Shell"} link={"/products/bulk-category/bulk-pulses-seeds/pecan-without-shell"} />
          <Burbuja imagen={"/images/PopcornGeneral.jpg"} etiqueta={"Popcorn"} link={"/products/bulk-category/bulk-pulses-seeds/popcorn"} />
          <Burbuja imagen={"/images/RunnerGeneral.jpg"} etiqueta={"Runner Peanuts"} link={"/products/bulk-category/bulk-pulses-seeds/runner-peanuts"} />
=======
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-5">
          <Burbuja imagen={"/images/AdzukiGeneral.jpg"} etiqueta={isSpanish ? 'Porotos adzuki' : "Adzuki Beans"} link={"/products/bulk-category/bulk-pulses-seeds/adzuki-beans"}/>
          <Burbuja imagen={"/images/AlubiaGeneral.jpg"} etiqueta={isSpanish ? 'Porotos alubia' : "Alubia Beans"} link={"/products/bulk-category/bulk-pulses-seeds/alubia-beans"} />
          <Burbuja imagen={"/images/BlackGeneral.jpg"} etiqueta={isSpanish ? 'Porotos negro' : "Black Beans"} link={"/products/bulk-category/bulk-pulses-seeds/black-beans"} />
          <Burbuja imagen={"/images/BlackEyeGeneral.jpg"} etiqueta={isSpanish ? 'Porotos ojo negro' :"Black Eyed Beans"} link={"/products/bulk-category/bulk-pulses-seeds/black-eye-beans"} />
          <Burbuja imagen={"/images/ChiaGeneral.jpg"} etiqueta={isSpanish ? 'Semilla de chia' : "Chia Seeds"} link={"/products/bulk-category/bulk-pulses-seeds/chia-seeds"} />
          <Burbuja imagen={"/images/ChickpeasGeneral.jpg"} etiqueta={isSpanish ? 'Garbanzos' : "Chickpeas"} link={"/products/bulk-category/bulk-pulses-seeds/chick-peas"} />
          <Burbuja imagen={"/images/CranberryGeneral.jpg"} etiqueta={isSpanish ? 'Porotos cargamanto' : "Cranberry Beans"} link={"/products/bulk-category/bulk-pulses-seeds/cranberry-beans"} />
          <Burbuja imagen={"/images/RedKidneyGeneral.jpg"} etiqueta={isSpanish ? 'Porotos rojo' : "Dark Red Kidney Beans"} link={"/products/bulk-category/bulk-pulses-seeds/dark-red-kidney-beans"} />
          <Burbuja imagen={"/images/GreenPeasGeneral.jpg"} etiqueta={isSpanish ? 'Arvejas' : "Greenpeas"} link={"/products/bulk-category/bulk-pulses-seeds/green-peas"} />
          <Burbuja imagen={"/images/LightKidneyGeneral.jpg"} etiqueta={isSpanish ? 'Poroto rojo claro' : "Light Red Kidney Beans"} link={"/products/bulk-category/bulk-pulses-seeds/light-red-kidney-beans"} />
          <Burbuja imagen={"/images/MungGeneral.jpg"} etiqueta={isSpanish ? 'Porotos mung' : "Mung Beans"} link={"/products/bulk-category/bulk-pulses-seeds/mung-beans"} />
          <Burbuja imagen={"/images/PecanShellGeneral.jpg"} etiqueta={isSpanish ? 'Nuez pecana con cáscara' : "Pecan in Shell"} link={"/products/bulk-category/bulk-pulses-seeds/pecan-in-shell"} />
          <Burbuja imagen={"/images/PecanWShellGeneral.jpg"} etiqueta={isSpanish ? 'Nuez pecana sin cáscara' : "Pecan Without Shell"} link={"/products/bulk-category/bulk-pulses-seeds/pecan-without-shell"} />
          <Burbuja imagen={"/images/PopcornGeneral.jpg"} etiqueta={isSpanish ? 'Palomita de maíz' : "Popcorn"} link={"/products/bulk-category/bulk-pulses-seeds/popcorn"} />
          <Burbuja imagen={"/images/RunnerGeneral.jpg"} etiqueta={isSpanish ? 'Maní Ruenner' : "Ruenner Peanuts"} link={"/products/bulk-category/bulk-pulses-seeds/runner-peanuts"} />
>>>>>>> translate
        </div>

      </section>
    </main>
  );
};

export default BulkPulsesSeeds;