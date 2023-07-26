import Image from "next/image";
import flour from "../../../public/images/flour.jpg";
import Link from "next/link";

const Harina = () => {
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
            src={flour}
            alt="img"
            className="rounded-xl border-4 border-black w-[50%]"
          />

          <div className="flex-col">
            <h4 className="font-bold text-4xl pl-60 pt-20 text-center">HARINA</h4>
            <p className="text-2xl pl-60 pt-10 text-center">
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