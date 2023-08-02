import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-peach to-white pt-32">
      <h4 className="bg-red text-white uppercase text-2xl lg:w-80 text-center lg:ml-20 font-bold">
        Nuestros productos
      </h4>
      <div className="flex flex-wrap justify-center pt-32">
        <Link href="/yerba">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 lg:mr-20 lg:ml-20 ml-14"
            style={{
              backgroundImage: `url(/images/yerba.png)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "15%",
              backgroundPositionY: "40%",
            }}
          >
            <p className="uppercase text-center text-white font-bold mt-24">
              yerba mate
            </p>
          </div>
        </Link>

        <Link href="/granos">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 mr-20 mt-20 ml-14 lg:ml-0 lg:mt-0"
            style={{
              backgroundImage: `url(/images/legumbres.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "15%",
              backgroundPositionY: "60%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">
              LEGUMBRES, GRANOS Y HORTALIZAS
            </p>
          </div>
        </Link>

        <Link href="/especias">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 mr-20 mt-20 ml-14 lg:ml-0 lg:mt-0"
            style={{
              backgroundImage: `url(/images/spices.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "20%",
              backgroundPositionY: "40%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">ESPECIAS</p>
          </div>
        </Link>

        <Link href="/dulces">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 mr-20 mt-20 ml-14 lg:ml-0 lg:mt-0"
            style={{
              backgroundImage: `url(/images/jams.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "15%",
              backgroundPositionY: "22%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">
              DULCES Y MERMELADAS
            </p>
          </div>
        </Link>

        <Link href="/alfajores">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 lg:mr-10 lg:ml-20 ml-14 mt-20"
            style={{
              backgroundImage: `url(/images/alfajores.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "35%",
              backgroundPositionY: "47%",
            }}
          >
            <p className="text-center text-black font-bold mt-24">ALFAJORES</p>
          </div>
        </Link>

        <Link href="/aceites">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 lg:mr-20 lg:ml-10 mt-20 ml-14"
            style={{
              backgroundImage: `url(/images/oil.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "45%",
              backgroundPositionY: "25%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">
              ACEITE DE SOJA, GIRASOL Y MANI
            </p>
          </div>
        </Link>

        <Link href="/vino">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 mr-20 lg:ml-0 mt-20 ml-14 "
            style={{
              backgroundImage: `url(/images/vinos.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "45%",
              backgroundPositionY: "25%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">VINO</p>
          </div>
        </Link>

        <Link href="harina">
          <div
            className="hover:-translate-y-1 hover:scale-110 duration-300 
        bg-origin-border rounded-full border-4 border-black w-60 h-60 mr-20 mt-20 ml-14 lg:ml-0"
            style={{
              backgroundImage: `url(/images/flour.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "60%",
              backgroundPositionY: "60%",
            }}
          >
            <p className="text-center text-white font-bold mt-24">HARINA</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
