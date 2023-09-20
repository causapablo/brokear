import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkPulsesSeeds = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Pulses and Seeds</h4>
        <p className="md:w-7/12 md:pt-6 pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 justify-center flex-wrap space-y-3">
          <Burbuja imagen={"/images/AdzukiGeneral.jpg"} etiqueta={"Adzuki Beans"} link={"/products/bulk-category/bulk-pulses-seeds/adzuki-beans"} />
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