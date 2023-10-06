import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkPulsesSeeds = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Pulses and Seeds</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">

            Pulses and oil seeds are two groups of crops that are characterized by their
            high content of proteins and vegetable oils. Pulses are dried legumes,
            such as beans, lentils, chickpeas, peas and lima beans. Oil seeds are oilseeds,
            such as sunflower, soybeans, canola, peanuts, mustard, flax, nigella, coconut
            and safflower.

          </p>
          <p className="indent-4 text-justify">
            Pulses are used as human
            and animal food, as green fertilizer and as a source of biofuels. Oil seeds
            are used to extract edible and industrial oils, to make flours and protein
            concentrates, to make soaps, cosmetics and paints, and to generate renewable
            energy.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-5">
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
          <Burbuja imagen={"/images/RunnerGeneral.jpg"} etiqueta={"Ruenner Peanuts"} link={"/products/bulk-category/bulk-pulses-seeds/runner-peanuts"} />
        </div>

      </section>
    </main>
  );
};

export default BulkPulsesSeeds;