

const Footer = () => {
    return (
      <section className="bg-black mt-80 py-5">
      <div className="flex justify-center m-5">
        <div className="flex pr-10">
          <div className="flex flex-col">
            <h4 className="bg-red text-white text-center text-lg font-semibold">Company</h4>
            <p className="text-white">About Us</p>
            <p className="text-white">Why us?</p>
            <p className="text-white">Careers</p>
            <p className="text-white">Blog</p>
            <p className="text-white">LinkedIn</p>
            <p className="text-white">Contact Us</p>
            <p className="text-white">Schedule A Call</p>
            <p className="text-white">Products</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h4 className="bg-red text-white text-center text-lg font-semibold">Products</h4>
            <p className="text-white">Additives</p>
            <p className="text-white">Coconut</p>
            <p className="text-white">Fruit & Veg</p>
            <p className="text-white">Nuts & Seeds</p>
            <p className="text-white">Plant Based Protein</p>
            <p className="text-white">Sweeteners</p>
            <p className="text-white">Halal</p>
            <p className="text-white">Kosher</p>
            <p className="text-white">Organic</p>
            <p className="text-white">Vegan</p>
          </div>
        </div>
      </div>
      <p className="text-white text-center py-2">© 2023 · &nbsp;
      <a href="https://www.linkedin.com/in/pablocausa" target="_blank" className="underline">P</a>
      &
      <a href="https://www.linkedin.com/in/solana-romero" target="_blank" className="underline">S</a>
      &nbsp; · &nbsp; 
      <a href="" target="_blank" className="underline">Brokear</a>
      </p>
    </section>
    );
}
 
export default Footer;