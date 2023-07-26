import Image from "next/image";
import alfajor from "../../../public/images/alfajor.jpg";
import Link from "next/link";

const Alfajores = () => {
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
            src={alfajor}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-20 pt-20 text-center">
              ALFAJORES
            </h4>
            <p className="text-2xl pl-20 pt-10 text-center">
              Tradicionales de Chocolate y Dulce de leche
              <br />
              <br />
              Maicena dulce de leche y coco
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Alfajores;
