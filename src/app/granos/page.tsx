import Image from "next/image";
import granos from "../../../public/images/legumbres.jpg";
import Link from "next/link";

const Granos = () => {
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
            src={granos}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-10 text-center">
              LEGUMBRES, GRANOS Y HORTALIZAS
            </h4>
            <p className="text-2xl pl-10 pt-10 text-center">
              Garbanzo
              <br />
              <br />
              Poroto negro
              <br />
              <br />
              Poroto navy
              <br />
              <br />
              Poroto rojo oscuro
              <br />
              <br />
              Chia Poroto mung
              <br />
              <br />
              Coriandro Alpiste
              <br />
              <br />
              Expeller de Soja
              <br />
              <br />
              Ajo blanco y morado
              <br />
              <br />
              Soja NO GMO
              <br />
              <br />
              Mani Arveja
              <br />
              <br />
              Girasol aceitero Cebada
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Granos;
