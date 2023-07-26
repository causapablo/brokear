import Image from "next/image";
import especias from "../../../public/images/spices.jpg";
import Link from "next/link";

const Especias = () => {
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
            src={especias}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-60 text-center">ESPECIAS</h4>
            <p className="text-2xl pl-60 pt-10 text-center">
              Ajo
              <br />
              <br />
              Anis
              <br />
              <br />
              Canela
              <br />
              <br />
              Cebolla
              <br />
              <br />
              Comino
              <br />
              <br />
              Laurel
              <br />
              <br />
              Oregano
              <br />
              <br />
              Pimienta
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Especias;
