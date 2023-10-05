import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const Welcome = () => {

  // const { lang, setLang, translate } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-16 mb-5 container mx-auto max-w-[1300px]">
        <div className="flex items-center px-3">
          <div>
            <h2 className="bg-red text-white text-[13px] md:text-lg w-fit text-center py-1 font-Dancing uppercase md:px-2">
              Getting your product has never been so easy
            </h2>
            <p className=" lg:px-0 text-[32px] md:text-[38px] font-[600] font-Fitgree leading-tight">
              We specialize in sourcing and shipping top-notch specialty raw materials from all over the world
            </p>
            <p className="pt-5 lg:px-0 text-xl text-justify">
              Conecting the ingredients for your next sourcing project
            </p>
            <Link href='/about'>
              <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 mr-3 lg:ml-0 rounded-sm hover:text-peach">
                About Us
              </button>
            </Link>
            <Link href='/products'>
              <button className="border border-red text-red font-semibold mt-5 py-2 px-2 mb-6 lg:mb-0 md:ml-5 lg:ml-0 rounded-sm hover:text-peach">
                Our Products
              </button>
            </Link>
          </div>
        </div>
        <div className="py-6 lg:py-0">
          <ExportedImage src={"/images/LogoLanding.jpg"} alt="img" className="w-full px-3 md:mx-auto rounded-full" width={50} height={50}/>
        </div>
      </div>
    </section>

  );
}

export default Welcome;