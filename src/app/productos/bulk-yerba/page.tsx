import Image from "next/image";
import mate from "../../../../public/images/mate.jpg";
import Link from "next/link";
import TableBulk from "../../../../components/tableBulk/TableBulk";
import Faq from "../../../../components/faq/Faq";
import { GiCheckMark } from "react-icons/gi";

const Yerba = () => {
  return (
    <main>
      <div className="">
        <div className="pt-40 lg:pl-10 flex flex-wrap">
          <Image
            src={mate}
            alt="img"
            className="rounded-xl border-4 border-black lg:w-[40%]"
          />

          <div className="flex-col w-6/12">
            <h4 className="font-bold text-4xl lg:pl-40 pt-10 text-center uppercase">
              Yerba mate
            </h4>
            <p className="text-lg lg:pl-40 pt-10 text-center ">
              In imperdiet at nibh non efficitur. Suspendisse ac pharetra
              sapien. Vivamus sodales eros vel magna vehicula, at placerat erat
              cursus. Nam rutrum pellentesque mauris at iaculis. Donec pretium
              sed diam ac dictum. Proin pretium velit quis ipsum consequat, quis
              viverra mauris volutpat. Praesent accumsan enim sit amet libero
              egestas sollicitudin. Fusce ut velit sed turpis scelerisque
              congue. Aliquam hendrerit aliquet quam in pellentesque. Ut
              vestibulum neque lacinia eleifend tristique. Mauris quis mauris
              ligula. Aliquam venenatis dignissim urna sit amet volutpat.
            </p>
            <Link href="/contacto">
              <button className="bg-red text-white">Contact for Quote</button>
            </Link>
          </div>
        </div>
        <TableBulk />

        <section className="bg-peach">
          <h4 className="bg-red text-white uppercase">Production & Sourcing</h4>
          <p className="text-lg lg:pl-40 pt-10 text-center ">
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
          <div className="flex">
            <div>
              <p>Applications</p>
              <ul className="list-image-none">
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
              </ul>
            </div>
            <div>
              <p>Functionality</p>
              <ul className="list-image-none">
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
                <div className="flex">
                  <span>
                    <GiCheckMark className="text-lightRed" />
                  </span>
                  <li className="marker:text-red">lorem</li>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <Faq />
        <section className="flex">
          <p>Have more questions or interested in a quote?</p>
          <Link href="/contacto">
            <button>Contact us</button>
          </Link>
        </section>
        <section>
          <h4>RELATED PRODUCTS</h4>
          <div className="flex">
            <div
              className="hover:-translate-y-1 hover:scale-110 hover:brightness-75 duration-300 bg-origin-border 
                      rounded-full border-4 border-black w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
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
              className="hover:-translate-y-1 hover:scale-110 hover:brightness-75 duration-300 bg-origin-border 
                      rounded-full border-4 border-black w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
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
              className="hover:-translate-y-1 hover:scale-110 hover:brightness-75 duration-300 bg-origin-border 
                      rounded-full border-4 border-black w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
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

export default Yerba;
