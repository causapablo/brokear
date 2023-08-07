import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-peach to-white pt-32">
      <h4 className="bg-red text-white uppercase text-lg lg:w-80 text-center lg:ml-20">
       Featured Products
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

        
      </div>
    </section>
  );
};

export default Products;
