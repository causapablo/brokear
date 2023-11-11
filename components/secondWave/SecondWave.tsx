import Link from "next/link";
import WavePeach from "../../public/icons/WavePeach";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';

const SecondWave = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <section className="">
    <WavePeach />
    <div className="bg-peach -mt-1">
      <div className="container mx-auto max-w-[1300px]">

        <div className='flex flex-col lg:flex-row pb-10 px-3 md:px-0 '>
          <div className="basis-3/5 px-2">
            <h4 className="bg-red text-white uppercase w-fit text-center p-1 flex items-center font-Dancing">
              {isSpanish ? 'Empeza ya a...' : 'Start right now...'}
            </h4>
            <ul className="list-disc font-base text-lg pl-5 flex flex-col py-3 space-y-2 px-2 lg:pl-5 text-black">
              <li className="marker:text-black">{isSpanish ? 'Ahorrá tiempo valorable en otras actividades y permítenos buscar tus proveedores de confianza' : 'Saving valuable time on other activities and allow us to search for your trusted inglightext-blackient suppliers.'}</li>
              <li className="marker:text-black">{isSpanish ? 'Trabajamos con certeza, con procesos claros y ordenados con nuestra propia cadena de suministros' : 'Working with certainty, with clear and orderly processes with our own supply chain.'}</li>
              <li className="marker:text-black">{isSpanish ? 'Tené los mejores costos con una calidad garantizada' : 'Having the best costs with a guaranteed quality.'}</li>
            </ul>
          </div>
          <div className="basis-2/5 lg:pl-10 text-black">
            <h4 className="font-semibold text-2xl px-2 lg:px-0">
              {isSpanish ? 'Érase una vez' : 'Once upon a time'}
            </h4>
            <p className="font-base text-lg py-2 px-2 lg:px-0">
              {isSpanish ? 'Estábamos en tus zapatos, buscando proveedores confiables y que estén siempre presentes. Como resultado, hemos evolucionado hasta convertirnos en un proveedor que se alinea con los objetivos de nuestros clientes, y nos convertimos en el proveedor que siempre buscamos pero nunca encontramos.' : 'We were in your shoes, looking for reliable suppliers and consistently showing up. As a result, we have evolved into a supplier that is aligned with the goals of our clients, and have become the supplier we seek but never find.'}&nbsp;<span className="underline underline-offset-1 text-red cursor-pointer"><Link href={'/about'}>{isSpanish ? 'Leé nuestra historia.' : 'Read our story'}</Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
  );
};

export default SecondWave;
