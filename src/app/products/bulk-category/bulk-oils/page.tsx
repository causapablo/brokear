import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
const BulkOils = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Oils</h4>
        <p className="md:w-7/12 md:pt-6 pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-8">
          <Burbuja imagen={"/images/SoyOilGeneral.jpg"} etiqueta={"Soy Oil"} link={"/products/bulk-category/bulk-oils/soy-oil"} />
          <Burbuja imagen={"/images/SunflowerOilGeneral.jpg"} etiqueta={"Alubia Beans"} link={"/products/bulk-category/bulk-oils/sunflower-oil"} />
        </div>
      </section>
    </main>
  );
};

export default BulkOils;
