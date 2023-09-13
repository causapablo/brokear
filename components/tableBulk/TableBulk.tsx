import bulk from "../../public/bulkCategories.json";
const TableBulk = ({ name, countries, size, shelfLife, use, shippingStorage }: any) => {

  return (
    <section className="container mx-auto max-w-[1300px]">
      <div className="w-3/4 mx-auto">
        <h4 className="bg-red text-white w-fit px-1 text-lg font-Dancing">PRODUCT DATA</h4>
        <table className="table-auto border border-black mt-5 w-full ">
          <tbody className="">
            <tr className="border border-b-black bg-white">
              <td className="font-bold px-2 lg:px-5 py-2 w-[20%]">Botanical Name</td>
              <td className="italic">{name}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-bold px-2 lg:px-5 py-2">Origin Countries</td>
              <td className="italic">{countries}</td>
            </tr>
            <tr className="border border-b-black bg-white">
              <td className="font-bold px-2 lg:px-5 py-2">Pack Size</td>
              <td className="italic">{size}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-bold px-2 lg:px-5 py-2">Product Shelf Life</td>
              <td className="italic">{shelfLife}</td>
            </tr>
            <tr className="border border-b-black bg-white">
              <td className="font-bold px-2 lg:px-5 py-2">Product Use</td>
              <td className="italic">{use}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-bold px-2 lg:px-5 py-2">Shipping / Storage</td>
              <td className="italic">{shippingStorage}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default TableBulk;
