import bulk from "../../public/bulkCategories.json";
const TableBulk = () => {
  return (
    <section>
      <h4 className="bg-red text-white">PRODUCT DATA</h4>
      <table className="table-auto border border-black">
        <tbody className="">
          <tr className="border border-b-black">
            <td className="font-bold">Botanical Name</td>
            <td>lorem ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td>Origin Countries</td>
            <td>lorem </td>
          </tr>
          <tr className="border border-b-black">
            <td>Pack Size</td>
            <td>lorem ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td>Product Shelf Life</td>
            <td>lorem ipsu</td>
          </tr>
          <tr className="border border-b-black">
            <td>Product Use</td>
            <td>lorem ipsu, lorem, ipsu</td>
          </tr>
          <tr className="bg-lightPink border border-b-black">
            <td>Shipping / Storage</td>
            <td>lorem</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableBulk;
