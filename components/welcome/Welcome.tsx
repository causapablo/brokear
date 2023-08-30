import Image from "next/image";
import logo from "../../public/images/LogoIB.png";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="grid grid-cols-2 pt-16 container mx-auto max-w-[1300px]">
        <div className="">
          <h2 className="bg-red text-white text-lg mt-20 lg:w-96 text-center py-1 font-Poppins">
          Getting your product has never been so easy
          </h2>
          <p className="pt-5 px-5 lg:px-0 text-3xl font-bold text-justify">
          We specialize in sourcing and shipping top-notch specialty raw materials from all over the world.
          </p>
          <p className="pt-5 px-5 lg:px-0 text-xl text-justify">
          Conecting the ingredients for your next sourcing project
          </p>
          <Link href='/nosotros'>
            <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 ml-5 mr-5 lg:ml-0 rounded-sm hover:text-lightRed">
            About Us
            </button>
          </Link>
          <Link href='/nosotros'>
            <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 ml-5 lg:ml-0 rounded-sm hover:text-lightRed">
            Our Products
            </button>
          </Link>
        </div>
        <div className="">
          <Image src={logo} alt="img" className="w-11/12 mx-auto" />
        </div>
      </div>
    </section>

  );
}

export default Welcome;