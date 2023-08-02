import Image from "next/image";
import jams from "../../../public/images/mer.png";


const Dulces = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="pt-40 pl-10 flex">
          <Image
            src={jams}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-40 pt-20 text-center">
              DULCES Y MERMELADAS
            </h4>
            <p className="text-2xl pl-40 pt-10 text-center">
              Envasadas Marca Propia y Terceros
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dulces;
