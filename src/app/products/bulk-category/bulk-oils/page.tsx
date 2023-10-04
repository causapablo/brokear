import Link from "next/link";
import Burbuja from "../../../../../components/burbuja/Burbuja";
const BulkOils = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Oils</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Fitgree text-[17px] font-[500]">
          <p>
            Vegetable oils are oils that come from plants, such as seeds, nuts, fruits,
            and grains. They are used for human consumption, because they have many
            health benefits. Vegetable oils provide essential fatty acids, vitamin E,
            and antioxidants. They also help lower cholesterol, reduce inflammation,
            and prevent heart diseases. Some examples of vegetable oils are olive oil,
            sunflower oil, canola oil, soybean oil, and coconut oil. Each oil has a
            different flavor, smoke point, and nutritional value. Vegetable oils
            are good for cooking, baking, frying, and making salads. However, they
            should not be consumed too much, as they can cause obesity, diabetes,
            and liver problems.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-8">
          <Burbuja imagen={"/images/SoyOilGeneral.jpg"} etiqueta={"Soy Oil"} link={"/products/bulk-category/bulk-oils/soy-oil"} />
          <Burbuja imagen={"/images/SunflowerOilGeneral.jpg"} etiqueta={"Sunflower Oil"} link={"/products/bulk-category/bulk-oils/sunflower-oil"} />
          <Burbuja imagen={"/images/OliveOilGeneral.jpg"} etiqueta={"Olive Oil"} link={"/products/bulk-category/bulk-oils/olive-oil"} />
        </div>
      </section>
    </main>
  );
};

export default BulkOils;
