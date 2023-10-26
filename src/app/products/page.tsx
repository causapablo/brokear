'use client'
import categorias from "../../../public/categorias.json";
import Burbuja from "../../../components/burbuja/Burbuja";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/translateSlice';
function Productos() {

  const isSpanish = useSelector(selectLanguage);

  return (
    <div className="bg-gradient-to-b from-lightPink to-white pt-12 pb-10">
      <section className="container mx-auto max-w-[1300px]">
        <h1 className="bg-red text-white inline-block px-[10px] py-1 text-[20px] font-normal ml-4 lg:ml-0 font-Grotesk">
          {isSpanish ? 'Productos' : 'Products'}
        </h1>
        <div className="lg:grid lg:grid-cols-2 gap-4 pt-5 px-3 lg:px-0">
          <div>
            <p className="font-Grotesk text-[17px] font-[500] indent-4 text-justify">
              {isSpanish ? 'Aquí encontrarás una amplia selección de ingredientes crudos especiales que van desde productos de la yerba mate y proteínas de origen vegetal hasta carbón. También puede buscar por subcategorías orgánica, aceites, legumbres y semillas oleaginosas y te.' : 'Here you’ll find a wide selection of specialty raw ingredients ranging from yerba mate and plant-based proteins to charcoal. You can also browse by organic, oils, pulses & oils seeds, and te subcategories.'}<span> <Link href='/contact' className="text-red hover:underline underline-offset-1">{isSpanish ? '¿Buscando algo que no está en la lista?' : 'Looking for something not listed?'}</Link></span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="pt-10 px-2">
          <div className="flex flex-wrap justify-start gap-6">
            {categorias.map((cat, i) => (
              <Burbuja etiqueta={isSpanish ? cat.categoryES : cat.categoryEN} imagen={cat.img} link={cat.link} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
