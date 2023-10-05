import Link from "next/link";
import prod from "../../public/categoriesLanding.json";
import { BsArrowRight } from "react-icons/bs";
import Burbuja from "../burbuja/Burbuja";

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-peach to-white">
      <div className="container mx-auto max-w-[1300px] py-16">
        <div className="flex">
          <div className="basis-1/2">
            <h4 className="bg-red text-white uppercase text-sm lg:text-lg w-fit mx-auto px-1 font-Dancing">
              Featured Products
            </h4>
          </div>
          <div className="basis-1/2 items-center">
            <Link href="/products">
              <div className="flex justify-center group">
                <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer group-hover:text-[#01533e]">View All Products</p>
                <p className="pt-1 pl-3 text-red cursor-pointer group-hover:text-[#01533e]"><BsArrowRight className="font-bold" /></p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pt-11 pb-20 space-y-3">
          {
            prod.map((p, i) => (
              <Burbuja etiqueta={p.product} imagen={p.img} link={p.link} key={i} />
            ))
          }
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <h4 className="bg-red text-white uppercase text-sm lg:text-lg w-fit mx-auto px-1 font-Dancing">
              Featured Categories
            </h4>
          </div>
          <div className="basis-1/2 items-center">
            <Link href="/products">
              <div className="flex justify-center group">
                <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer group-hover:text-[#01533e]">View All Products</p>
                <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold group-hover:text-[#01533e]" /></p>
              </div>
            </Link>
          </div>
        </div>

        <div className="lg:flex lg:flex-row flex-col justify-center pt-10 lg:pl-0">
          <Link href='/products/bulk-category/bulk-yerba-mate' className="flex justify-center"><p className="border border-red text-red hover:text-peach cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 py-1">Yerba Mate</p></Link>
          <Link href="/products/bulk-category/bulk-tea" className="flex justify-center"><p className="border border-red text-red hover:text-peach cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Tea</p></Link>
          <Link href="/products/bulk-category/bulk-pulses-seeds" className="flex justify-center"><p className="border border-red text-red hover:text-peach cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Pulses & Oil Seeds</p></Link>
          <Link href="/products/bulk-category/bulk-oils" className="flex justify-center"><p className="border border-red text-red hover:text-peach cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Oils</p></Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
