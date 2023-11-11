'use client'
import bulk from "../../public/bulkCategories.json";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';
const TableBulk = ({ name, countries, size, shelfLife, use, shippingStorage }: any) => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <section className="container mx-auto max-w-[1300px]">
      <div className=" px-3 lg:w-3/4 mx-auto">
        <h4 className="bg-red text-white w-fit px-1 text-lg font-Dancing">{isSpanish ? 'DATOS DEL PRODUCTO' : 'PRODUCT DATA'}</h4>
        <table className="table-auto border border-black mt-5 w-full ">
          <tbody className="">
            <tr className="border border-b-black bg-white">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2 w-[45%] lg:w-[20%]">{isSpanish ? 'Nombre botánico' : 'Botanical Name'}</td>
              <td className="italic">{name}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2">{isSpanish ? 'Países de origen' : 'Origin Countries'}</td>
              <td className="italic">{countries}</td>
            </tr>
            <tr className="border border-b-black bg-white">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2">{isSpanish ? 'Tamaño del paquete' : 'Pack Size'}</td>
              <td className="italic">{size}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2">{isSpanish ? 'Vida útil del producto' : 'Product Shelf Life'}</td>
              <td className="italic">{shelfLife}</td>
            </tr>
            <tr className="border border-b-black bg-white">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2">{isSpanish ? 'Uso del producto' : 'Product Use'}</td>
              <td className="italic">{use}</td>
            </tr>
            <tr className="bg-lightPink border border-b-black">
              <td className="font-semibold lg:font-bold px-2 lg:px-5 py-2">{isSpanish ? 'Envío / Almacenamiento' :'Shipping / Storage'}</td>
              <td className="italic">{shippingStorage}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default TableBulk;
