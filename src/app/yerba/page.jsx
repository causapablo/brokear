import Image from "next/image";
import mate from "../../../public/images/mate.jpg";
import Link from "next/link";

const Yerba = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-lightPink to-white">
        <div className="pt-40 lg:pl-10 flex flex-wrap">
          <Image
            src={mate}
            alt="img"
            className="rounded-xl border-4 border-black lg:w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl lg:pl-40 pt-20 text-center uppercase">
              Yerba mate
            </h4>
            <p className="text-2xl lg:pl-40 pt-10 text-center">
              Envasada Marca Propia y Terceros
              <br />
              <br />
              A Granel
              <br />
              <br />
              Derivados
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Yerba;
