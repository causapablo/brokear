import Image from "next/image";
import flour from "../../../public/images/harina.jpg";


const Harina = () => {
    return (
        <main>
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="pt-40 lg:pl-10 flex flex-wrap">
          <Image
            src={flour}
            alt="img"
            className="rounded-xl border-4 border-black lg:w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl lg:pl-60 pt-20 text-center">HARINA</h4>
            <p className="text-2xl lg:pl-60 pt-10 text-center">
            Producción directa de molino
              <br />
              <br />
              Derivados
            </p>
          </div>
        </div>

      </div>
    </main>
    );
}
 
export default Harina;