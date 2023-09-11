import Link from "next/link";
import prod from "../../public/categoriesLanding.json";
import ProductsLanding from "../productsLanding/productsLanding";
import { BsArrowRight } from "react-icons/bs";

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
            <Link href="/productos">
              <div className="flex justify-center">
                <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer hover:text-lightRed">View All Products</p>
                <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold hover:text-lightRed" /></p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-11 pb-20">
          {
            prod.map((p, i) => (
              <ProductsLanding cat={p.product} img={p.img} link={p.link} key={i} />
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
            <Link href="/productos">
              <div className="flex justify-center">
                <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer hover:text-lightRed">View All Products</p>
                <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold hover:text-lightRed" /></p>
              </div>
            </Link>
          </div>
        </div>
      
      <div className="lg:flex lg:flex-row flex-col justify-center pt-10 pl-14 lg:pl-0">
        <Link href='/products/bulk-category/bulk-yerba-mate'><p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 py-1">Yerba Mate</p></Link>
        <Link href="/products/bulk-category/bulk-tea"><p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Tea</p></Link>
        <Link href="/products/bulk-category/bulk-pulses-seeds"><p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Pulses & Oil Seeds</p></Link>
        <Link href="/products/bulk-category/bulk-oils"><p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Oils</p></Link>
      </div>      
      </div>
    </section>
  );
};

export default Products;
