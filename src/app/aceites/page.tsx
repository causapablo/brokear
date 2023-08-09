import Image from "next/image";
import oil from "../../../public/images/aceite.png";


const Aceites = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="pt-40 lg:pl-10 flex flex-wrap">
          <Image
            src={oil}
            alt="img"
            className="rounded-xl border-4 border-black lg:w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl lg:pl-20 pt-20 text-center">
            ACEITE DE SOJA, GIRASOL Y MANI
            </h4>
            <p className="text-2xl lg:pl-20 pt-10 text-center">
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
