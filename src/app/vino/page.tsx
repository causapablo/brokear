import Image from "next/image";
import wine from "../../../public/images/wines.jpg";
import Link from "next/link";

const Vino = () => {
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
            src={wine}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-60 pt-20 text-center">VINO</h4>
            <p className="text-2xl pl-60 pt-10 text-center">
              Vino tinto
              <br />
              <br />
              Vino blanco
              <br />
              <br />
              Vino rosado
              <br />
              <br />
              Vino espumoso
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vino;
