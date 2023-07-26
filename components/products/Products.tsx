import Image from "next/image";
import Link from "next/link";
import yerba from "../../public/images/yerba.png";
import leg from "../../public/images/granos.png";
import especias from "../../public/images/especias.jpg";
import mer from "../../public/images/mer.png";
import alfajor from "../../public/images/alfajores.jpg";
import aceite from "../../public/images/aceite.png";
import vinos from "../../public/images/vinos.jpg";
import harina from "../../public/images/harina.jpg";


const Products = () => {
    return (
      <section className="bg-gradient-to-b from-peach to-white pt-32 py-96">
      <h4 className="bg-red text-white uppercase text-2xl w-80 text-center ml-20 font-bold">Nuestros productos</h4>
      <div className="flex pt-32">
        <Link href='/yerba'>
          <div className="absolute left-14 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black ">
              <Image
                src={yerba}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative uppercase bottom-32 text-center text-white font-bold">
              Yerba mate
            </p>
          </div>
        </Link>

        <Link href='/granos'>
          <div className="absolute left-96 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
              <Image
                src={leg}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold w-60">
              LEGUMBRES, GRANOS Y HORTALIZAS
            </p>
          </div>
        </Link>

        <Link href='/especias'>
          <div className="absolute left-1/2 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
            <Image
                src={especias}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold">ESPECIAS</p>
          </div>
        </Link>

        <Link href='/dulces'>
          <div className="absolute left-[75%] hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
              <Image
                src={mer}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold">
              DULCES Y MERMELADAS
            </p>
          </div>
        </Link>

        <Link href='/alfajores'>
          <div className="absolute top-[280%] left-14 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
            <Image
                src={alfajor}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-black font-bold">ALFAJORES</p>
          </div>
        </Link>

        <Link href='/aceites'>
          <div className="absolute top-[280%] left-96 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
              <Image
                src={aceite}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold w-60">
              ACEITE DE SOJA, GIRASOL Y MANI
            </p>
          </div>
        </Link>

        <Link href='/vino'>
          <div className="absolute top-[280%] left-1/2 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
              <Image
                src={vinos}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold">
              VINO
            </p>
          </div>
        </Link>

        <Link href='harina'>
          <div className="absolute top-[280%] left-[75%] hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="bg-origin-border rounded-full border-4 border-black">
            <Image
                src={harina}
                alt="img"
                className="rounded-full h-60 w-60 opacity-70"
              />
            </div>
            <p className="relative bottom-32 text-center text-white font-bold">HARINA</p>
          </div>
        </Link>
      </div>
    </section>
    );
}
 
export default Products
