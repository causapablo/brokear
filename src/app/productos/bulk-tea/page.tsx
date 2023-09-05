import Image from "next/image";
import te from "../../../../public/images/te.jpg";
import icon from "../../../../public/images/icon.png";
import Link from "next/link";
import TableBulk from "../../../../components/tableBulk/TableBulk";
import Faq from "../../../../components/faq/Faq";
import Benefits from "../../../../components/benefits/Benefits";
import Manufacturing from "../../../../components/manufacturing/Manufacturing";
import { GiCheckMark } from "react-icons/gi";


const Te = () => {
  return (
    <main className="pb-20 bg-gradient-to-b from-lightPink to-white">
      <div className="container mx-auto max-w-[1300px]">
        <div className="pt-40 lg:pl-20 flex flex-wrap">
          <Image
            src={te}
            alt="img"
            className="rounded-full border-4 border-black lg:w-[40%]"
          />

          <div className="flex-col lg:w-6/12">
            <h4 className="font-bold text-4xl lg:pl-40 pt-10 text-center uppercase">
              Tea
            </h4>
            <p className="text-lg lg:pl-40 pt-10 px-5 lg:px-0">
            Es una bebida milenaria y versátil, que se puede disfrutar en cualquier momento del día. El té tiene propiedades antioxidantes, estimulantes y relajantes, y se puede combinar con diferentes ingredientes para crear sabores únicos. El té que ofrecemos es de origen argentino, seleccionado entre las mejores plantaciones del mundo, y procesado con técnicas de ultima generación.
            </p>
            <Link href="/contacto">
              <button className="bg-red text-white ml-[27%] mt-10 px-1 py-1 rounded-sm font-semibold">
                Contact for Quote
              </button>
            </Link>
          </div>
        </div>
        <TableBulk />

        <section className="bg-peach mt-20 pt-10 lg:w-8/12 mx-auto pb-5 px-5">
          <h4 className="bg-red text-white font-bold uppercase w-fit lg:mx-auto px-1">
            Production & Sourcing
          </h4>
          <p className="text-lg lg:px-20 pt-10 ">
            In imperdiet at nibh non efficitur. Suspendisse ac pharetra sapien.
            Vivamus sodales eros vel magna vehicula, at placerat erat cursus.
            Nam rutrum pellentesque mauris at iaculis. Donec pretium sed diam ac
            dictum. Proin pretium velit quis ipsum consequat, quis viverra
            mauris volutpat. Praesent accumsan enim sit amet libero egestas
            sollicitudin. Fusce ut velit sed turpis scelerisque congue. Aliquam
            hendrerit aliquet quam in pellentesque. Ut vestibulum neque lacinia
            eleifend tristique. Mauris quis mauris ligula. Aliquam venenatis
            dignissim urna sit amet volutpat.
          </p>
          <div className="flex-col lg:flex lg:flex-row lg:px-20 pt-10">
            <div className="pr-40 pb-4">
              <p className="font-bold text-xl">Applications</p>
              <ul className="list-image-none">
                <div className="flex pb-2 pt-3">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
              </ul>
            </div>
            <div>
              <p className="font-bold text-xl">Functionality</p>
              <ul className="list-image-none">
                <div className="flex pb-2 pt-3">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
                <div className="flex pb-2">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red px-3">lorem</li>
                </div>
              </ul>
            </div>
          </div>
        </section>

        <Benefits />
        <Manufacturing />

        <section className="flex-col lg:flex lg:flex-row mx-auto lg:ml-80 pt-10 pb-20 items-center">
          <div>
            <Image src={icon} alt="img" className="" />
          </div>
          <div className="pt-20">
            <h4 className="font-bold text-2xl px-3 lg:px-0">
              Main producing countries and Harvest time
            </h4>
            <p className="lg:w-7/12 px-3 lg:px-0 text-xl pt-5 lg:pt-0">
              The main producing countries of beetroot powder are India, China
              and France. Its harvest time is 55-70 days after planting around
              late spring to fall.
            </p>
          </div>
        </section>

        <Faq />

        <section className="lg:pl-96 pl-10 pt-14 items-center">
          <div className="flex-col lg:flex lg:flex-row ">
            <p className="font-bold text-xl px-5 lg:px-0 pb-5 lg:pb-0">
              Have more questions or interested in a quote?
            </p>
            <Link href="/contacto">
              <button className="bg-red text-white w-fit px-3 py-2 rounded-sm font-semibold ml-20 ">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
        <div className="divide-y-2 divide-[#e9c5c5] flex flex-col w-3/5 ml-[23%]">
          <span className="text-white">d</span>
          <span className="text-white">d</span>
        </div>
        <section className="container mx-auto pt-14 items-center">
          <div className="flex items-center justify-center pb-10">
            <h4 className="bg-red text-white font-medium text-lg w-fit px-1 ">
              RELATED PRODUCTS
            </h4>
          </div>
          <div className="flex-col lg:flex lg:flex-row">
            <div
              className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
              w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer mb-5"
              style={{
                backgroundImage: `url(/images/beans.jpg)`,
                aspectRatio: "1",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20%",
                backgroundPositionY: "40%",
              }}
            >
              <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                Learn more
              </p>
            </div>
            <div
              className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
              w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer mb-5"
              style={{
                backgroundImage: `url(/images/aceite.png)`,
                aspectRatio: "1",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "90%",
                backgroundPositionY: "15%",
              }}
            >
              <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                learn more
              </p>
            </div>
            <div
              className="hover:brightness-75 bg-origin-border rounded-full border-4 border-black 
              w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
              style={{
                backgroundImage: `url(/images/tree.jpg)`,
                aspectRatio: "1",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20%",
                backgroundPositionY: "40%",
              }}
            >
              <p className="uppercase text-[#D8D9DA] bg-red font-bold mx-auto brightness-200">
                learn more
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Te;
