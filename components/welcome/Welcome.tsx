import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/translateSlice';

const Welcome = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 mb-5 container mx-auto max-w-[1300px]">
        <div className="flex items-center px-3">
          <div>
            <h2 className="bg-red text-white text-[13px] md:text-lg w-fit text-center py-1 font-Dancing uppercase px-1 md:px-2">
<<<<<<< HEAD
              Getting your product is easy now
            </h2>
            <p className="lg:px-0 mt-4 text-[32px] md:text-[38px] font-[600] font-Grotesk leading-8 md:leading-tight ">
              We specialize in sourcing and shipping top-notch specialty raw materials from all over the world
=======
              {isSpanish ? 'Obtener tu producto nunca fue tan fácil' : 'Getting your product has never been so easy'}
            </h2>
            <p className="f lg:px-0 text-[32px] md:text-[38px] font-[600] font-Grotesk leading-8 md:leading-tight ">
              {isSpanish ? 'Nos especializamos en el abastecimiento y envío de materias primas especiales de primer nivel desde todo el mundo' :'We specialize in sourcing and shipping top-notch specialty raw materials from all over the world'}
>>>>>>> translate
            </p>
            <p className="pt-5 lg:px-0 text-xl text-justify">
              {isSpanish ? 'Conectando los ingredientes para su próximo proyecto de abastecimiento' : 'Conecting the ingredients for your next sourcing project'}
            </p>
            <Link href='/about'>
              <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 mr-3 lg:ml-0 rounded-sm hover:text-peach">
                {isSpanish ? 'Sobre nosotros' : 'About Us'}
              </button>
            </Link>
            <Link href='/products'>
              <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 md:ml-5 lg:ml-0 rounded-sm hover:text-peach">
                {isSpanish? 'Nuestros productos' : 'Our Products'}
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:py-0">
          <ExportedImage src={"/images/LogoLanding.jpg"} alt="img" className="w-11/12 mx-auto rounded-full brightness-75" width={50} height={50}/>
        </div>
      </div>
    </section>

  );
}

export default Welcome;