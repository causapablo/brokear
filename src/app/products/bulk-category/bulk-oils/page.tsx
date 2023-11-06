import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
const BulkOils = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-2 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Oils</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500]">
          <p className="indent-4 text-justify">
            Vegetable oils are oils that come from plants, such as seeds, nuts, fruits,
            and grains. They are used for human consumption, because they have many
            health benefits. Vegetable oils provide essential fatty acids, vitamin E,
            and antioxidants. They also help lower cholesterol, reduce inflammation,
            and prevent heart diseases.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-2 md:gap-6">
          <Burbuja imagen={"/images/SoyOilGeneral.jpg"} etiqueta={"Soy Oil"} link={"/products/bulk-category/bulk-oils/soy-oil"} />
          <Burbuja imagen={"/images/SunflowerOilGeneral.jpg"} etiqueta={"Sunflower Oil"} link={"/products/bulk-category/bulk-oils/sunflower-oil"} />
          <Burbuja imagen={"/images/OliveOilGeneral.jpg"} etiqueta={"Olive Oil"} link={"/products/bulk-category/bulk-oils/olive-oil"} />
        </div>
      </section>
    </main>
  );
};

export default BulkOils;
