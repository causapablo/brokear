import bulk from "../../public/bulkCategories.json";
const TableBulk = () => {
  return (
    <section className="container mx-auto max-w-[1300px] pt-20 lg:pl-60">
      <h4 className="bg-red text-white w-fit px-1 text-lg ml-2 lg:ml-0">PRODUCT DATA</h4>
      <table className="table-auto border border-black mt-10 lg:w-9/12">
        <tbody className="">
          <tr className="border border-b-black bg-white">
            <td className="font-bold px-2 lg:px-5 py-1">Botanical Name</td>
            <td className="italic">lorem ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td className="font-bold px-2 lg:px-5 py-1">Origin Countries</td>
            <td className="italic">lorem </td>
          </tr>
          <tr className="border border-b-black bg-white">
            <td className="font-bold px-2 lg:px-5 py-1">Pack Size</td>
            <td className="italic">lorem ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td className="font-bold px-2 lg:px-5 py-1">Product Shelf Life</td>
            <td className="italic">lorem ipsu</td>
          </tr>
          <tr className="border border-b-black bg-white">
            <td className="font-bold px-2 lg:px-5 py-1">Product Use</td>
            <td className="italic">lorem ipsu, lorem, ipsu, lorem ipus, lorem, ipus, lorem ipsu, 
            lorem, ipsu, lorem ipus, lorem, ipsu, lorem ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td className="font-bold px-2 lg:px-5 py-1" width="50%">Shipping / Storage</td>
            <td className="italic">lorem</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableBulk;
