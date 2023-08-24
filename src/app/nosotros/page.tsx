import Image from "next/image";
import hoja from "../../../public/images/LogoIB.png";
import Wave from "../../../public/icons/Wave";
import Mision from "../../../public/icons/Mision";
import Vision from "../../../public/icons/Vision";
import Valores from "../../../public/icons/Valores";


const Nosotros = () => {
  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="lg:flex flex-wrap pt-44 justify-center">
        <div className="lg:ml-5">
          <Image src={hoja} alt="img" className="w-11/12" />
        </div>
        <div className="lg:w-3/6 ml-5 lg:ml-20">
          <h2 className="bg-red text-white text-xl mt-20 w-80 text-center py-1">
            SOBRE NOSOTROS
          </h2>
          <h3 className="font-bold text-xl lg:text-2xl pt-5">
            Toma asiento y déjanos que te contemos nuestra historia
          </h3>
          <p className="pt-5 text-lg w-[90%]">
            Somos una empresa joven, pero con amplia trayectoria en el
            desarrollo de mercados de productos y servicios.
            <br />
            <br />
            Desde un principio, nuestro objetivo ha sido establecer relaciones
            comerciales de confianza y de largo plazo, con proveedores y
            clientes locales e internacionales, brindando soluciones completas
            de comercialización en todas las etapas del proceso.
            <br />
            <br />
            En Brokear, ayudamos a los importadores y exportadores de todo el
            mundo a operar de manera segura. Generamos confianza en el comercio
            internacional.
          </p>
        </div>
      </div>

      <section className="pt-20">
        <Wave />
        <div className="bg-lightPink pt-12 pl-5 lg:pl-40 pb-20">
          <h4 className="bg-red text-white uppercase text-2xl w-40 text-center font-semibold">
            OBJETIVO
          </h4>
          <p className="pt-10 w-5/6 font-base text-xl">
            Facilitar las relaciones comerciales a largo plazo entre proveedores
            y clientes, desarrollando diferentes mercados y descubriendo
            oportunidades comerciales a escala global. Coordinamos el transporte
            y el transporte de mercancías, facilitamos la implementación de los
            contratos acordados para los exportadores y verificamos
            constantemente la calidad de los productos enviados, para garantizar
            que cada envío esté siempre satisfecho.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-peach to-white pt-32">
        <h4 className="bg-red text-white uppercase text-xl w-[50%] lg:w-[20%] text-center font-semibold ml-5 lg:ml-[40%]">
          QUIENES SOMOS
        </h4>
        <h4 className="text-2xl mt-3 font-bold ml-5 lg:ml-[41.5%]">
          HACIA DONDE VAMOS
        </h4>

        <div className=" lg:flex pt-20 px-10">
          <div className="pb-14">
            <Mision/>
            <h4 className="bg-red text-white font-semibold w-24 text-center text-2xl mt-10 mb-2">Misión</h4>
            <p className="w-[80%] text-xl">
              Generar valor en toda la cadena productiva, para brindar un
              servicio integral y oportuno en la comercialización a gran escala
              de productos argentinos de alta calidad, satisfaciendo las
              necesidades de la industria alimentaria nacional e internacional.
            </p>
          </div>
          <div className="pb-14">
            <Vision/>
            <h4 className="bg-red text-white font-semibold w-24 text-center text-2xl mt-10 mb-2">Visión</h4>
            <p className="w-[80%] text-xl">
              Nuestra visión es satisfacer las necesidades actuales y
              potenciales de nuestros clientes, desarrollando, modernizando y
              haciendo crecer nuestra cartera de proveedores estratégicos para
              satisfacer las tendencias del mercado.
            </p>
          </div>
          <div>
            <Valores/>
            <h4 className="bg-red text-white font-semibold w-28 text-center text-2xl mt-10 mb-2">Valores</h4>
            <p className="text-xl">
              Máximos estándares de calidad. Relaciones de largo plazo. 
              Procesos de mejora continua. Retroalimentación permanente con nuestros
              clientes.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Nosotros;
