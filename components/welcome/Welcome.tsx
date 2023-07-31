import Image from "next/image";
import logo from "../../public/images/LogoIB.png";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="bg-gradient-to-b from-lightPink to-white ">
      <div className="flex flex-wrap pt-20 justify-center">
        <div className="lg:w-3/6 lg:mr-20">
          <h2 className="bg-red text-white text-2xl mt-20 lg:w-80 text-center py-1 font-Poppins ">
            Bienvenidos a Brokear
          </h2>
          <p className="pt-5 px-5 lg:px-0 text-xl font-bold text-justify">
            Brokear Productos & Servicios Argentina fue fundada a mediados
            de 2021 en la ciudad de Cordoba, Argentina. Somos una empresa
            joven, pero con amplia trayectoria en el desarrollo de mercados
            de productos y servicios. Desde un principio, nuestro objetivo
            ha sido establecer relaciones comerciales de confianza y de
            largo plazo, con proveedores y clientes locales e
            internacionales, brindando soluciones completas de
            comercialización en todas las etapas del proceso.
          </p>
          <Link href='/nosotros'>
            <button className="border border-red text-red mt-5 py-2 px-2 mb-6 lg:mb-0 ml-5 lg:ml-0 rounded-sm hover:text-lightRed">
              Descubre Brokear
            </button>
          </Link>
        </div>
        <div className="">
          <Image src={logo} alt="img" className="w-11/12" />
        </div>
      </div>
    </section>

  );
}

export default Welcome;