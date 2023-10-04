import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkTea = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Tea</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Fitgree text-[17px] font-[500]">
          <p>
            Black tea and green tea are two types of infusions that are obtained from
            the same plant, Camellia sinensis. The difference between the two lies
            in the degree of oxidation that the leaves suffer during processing.
            Black tea is the most oxidized, giving it a darker color and more intense
            flavor. Green tea undergoes a heat treatment that prevents oxidation,
            preserving its green color and milder flavor.
          </p>
          <p>
            Black tea and green tea have different uses and customs depending on the
            culture and region where they are consumed. For example, in China, green
            tea is the most popular and is drunk throughout the day, without adding
            anything to it. In Japan, green tea is associated with the tea ceremony,
            a ritual of harmony and respect. In India, black tea is mixed with spices
            and milk, giving rise to masala chai, a comforting and aromatic drink.
            In England, black tea is accompanied with milk and sugar, and is served
            at the famous five o&apos;clock.
          </p>
          <p>
            Black tea and green tea have health benefits, although in different ways.
            Black tea contains more caffeine, making it more stimulating and energizing.
            It also helps improve circulation, prevent cavities and reduce stress.
            Green tea has more antioxidants, making it more protective against cellular
            aging, cancer and cardiovascular diseases. In addition, it promotes digestion,
            metabolism and fat burning. Both teas are diuretic, cleansing and hydrating.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-8">
          <Burbuja imagen={"/images/BlackTeaGeneral.jpg"} etiqueta={"Black Tea"} link={"/products/bulk-category/bulk-tea/black-tea"} />
          <Burbuja imagen={"/images/GreenTeaGeneral.jpg"} etiqueta={"Green Tea"} link={"/products/bulk-category/bulk-tea/green-tea"} />
        </div>
      </section>
    </main>
  );
};

export default BulkTea;
