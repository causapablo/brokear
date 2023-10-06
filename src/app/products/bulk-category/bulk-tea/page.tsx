import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkTea = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container md:mx-auto max-w-[1300px] pt-14 px-3 lg:px-0">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Tea</h4>
        <div className="md:w-9/12 md:pt-6 pt-4 font-Grotesk text-[17px] font-[500] space-y-2">
          <p className="indent-4 text-justify">
            Black tea and green tea are two types of infusions that are obtained from
            the same plant, Camellia sinensis. The difference between the two lies
            in the degree of oxidation that the leaves suffer during processing.
            Black tea is the most oxidized, giving it a darker color and more intense
            flavor. Green tea undergoes a heat treatment that prevents oxidation,
            preserving its green color and milder flavor.
          </p>
          <p className="indent-4 text-justify">
            Black tea and green tea have different uses and customs depending on the
            culture and region where they are consumed.
          </p>
        </div>

        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-5">
          <Burbuja imagen={"/images/BlackTeaGeneral.jpg"} etiqueta={"Black Tea"} link={"/products/bulk-category/bulk-tea/black-tea"} />
          <Burbuja imagen={"/images/GreenTeaGeneral.jpg"} etiqueta={"Green Tea"} link={"/products/bulk-category/bulk-tea/green-tea"} />
        </div>
      </section>
    </main>
  );
};

export default BulkTea;
