import Link from "next/link";
import prod from "../../public/categoriesLanding.json";
import ProductsLanding from "../productsLanding/productsLanding";
import { BsArrowRight } from "react-icons/bs";

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-peach to-white pt-32">
      <div className="flex justify-around">
        <h4 className="bg-red text-white uppercase text-sm lg:text-lg lg:w-60 text-center lg:ml-20 px-1 lg:px-0">
         Featured Products
        </h4>
          <Link href="/productos">
        <div className="flex">
            <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer hover:text-lightRed">View All Products</p>
              <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold hover:text-lightRed"/></p>
        </div>
          </Link>
      </div>
      <div className="flex flex-wrap justify-center pt-32 gap-20">
        {
          prod.map((p,i) =>(
            <ProductsLanding cat={p.product} img={p.img} link={p.link} key={i}/>
          ))
        }
      </div>
      <div className="flex justify-around pt-40">
        <h4 className="bg-red text-white uppercase text-sm lg:text-lg lg:w-60 text-center lg:ml-20 px-1 lg:px-0">
         Featured Categories
        </h4>
          <Link href="/productos">
        <div className="flex">
            <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer hover:text-lightRed">View All Categories</p>
              <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold hover:text-lightRed"/></p>
        </div>
          </Link>
      </div>
      <div className="lg:flex lg:flex-row flex-col justify-center pt-10 pl-14 lg:pl-0">
        <p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 py-1">Yerba Mate & Tea</p>
        <p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Nuts & Seeds</p>
        <p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Plant Based Protein</p>
        <p className="border border-red text-red hover:text-lightRed cursor-pointer font-medium mr-3 rounded text-center w-56 h-8 mt-5 lg:mt-0 py-1">Organic</p>
      </div>      
    </section>
  );
};

export default Products;
