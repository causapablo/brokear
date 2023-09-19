import Burbuja from "../../../../../components/burbuja/Burbuja";

const BulkTea = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container mx-auto max-w-[1300px] pt-14 ">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Bulk Tea</h4>
        <p className="w-7/12 pt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 justify-center flex-wrap gap-8">
          <Burbuja imagen = {"/images/BlackTeaGeneral.jpg"} etiqueta ={"Black Tea"} link = {"/products/bulk-category/bulk-tea/black-tea"}/>
          <Burbuja imagen = {"/images/GreenTeaGeneral.jpg"} etiqueta ={"Green Tea"} link = {"/products/bulk-category/bulk-tea/green-tea"}/>
        </div>
      </section>
    </main>
  );
};

export default BulkTea;
