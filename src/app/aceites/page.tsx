import Image from "next/image";
import oil from "../../../public/images/oil.jpg";
import Link from "next/link";

const Aceites = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <Link href="/">
          <button className="bg-red text-white py-1 px-5 mt-14 ml-20 hover:bg-white hover:text-red duration-300">
            Inicio
          </button>
        </Link>
        <div className="pt-20 pl-10 flex">
          <Image
            src={oil}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-20 pt-20 text-center">
            ACEITE DE SOJA, GIRASOL Y MANI
            </h4>
            <p className="text-2xl pl-20 pt-10 text-center">
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

export default Aceites;
