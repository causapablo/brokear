import Image from "next/image";
import wine from "../../../public/images/wines.jpg";

const Vino = () => {
  return (
    <main>
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="pt-40 lg:pl-10 flex flex-wrap">
          <Image
            src={wine}
            alt="img"
            className="rounded-xl border-4 border-black lg:w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl lg:pl-60 pt-20 text-center">VINO</h4>
            <p className="text-2xl lg:pl-60 pt-10 text-center">
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
