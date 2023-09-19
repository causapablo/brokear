import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto  max-w-[1300px]">
        <div className="flex flex-col md:flex-row gap-20 px-3 lg:px-0">
          <div className="flex flex-col md:flex-grow-0 md:w-1/3 h-fit">
            <div className="">
              <h4 className="bg-red text-white text-center text-lg font-normal w-fit mx-auto px-4 font-Dancing">
                Company
              </h4>
            </div>

            <div className="py-4">
              <div className="flex">
                <Link href='/about' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  <p >
                    About Us
                  </p>
                </Link>
                <Link href='/why-us' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  <p>
                    Why us?
                  </p>
                </Link>
                <p className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  Careers
                </p>
                <p className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  Blog
                </p>
              </div>
              <div className="flex">
                <p className="text-white flex items-center justify-center text-[12px] py-1 basis-1/4">
                  LinkedIn
                </p>
                <Link href='/contact' className="text-white flex items-center justify-end text-[12px] py-1 basis-1/4">
                  <p>
                    Contact Us
                  </p>
                </Link>
                <Link href='/schedulecall' className="text-white flex items-center justify-center text-[12px] py-1 basis-1/2">
                  <p>
                    Schedule A Call
                  </p>
                </Link>

              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-grow-0 md:w-1/2 h-fit">
            <div className="col-span-5">
              <h4 className="bg-red text-white text-center text-lg font-light w-fit mx-auto px-4 font-Dancing">
                Products
              </h4>
            </div>
            <div className="py-4 text-[14px] font-Fitgree">
              <div className="grid grid-cols-2 md:flex">
                <p className="text-white flex items-center justify-center basis-1/6 py-1">
                  Yerba Mate
                </p>

                <p className="text-white flex items-center justify-center basis-1/6 py-1">
                  Tea
                </p>

                <p className="text-white flex items-center justify-center basis-1/2 py-1">
                  Pulses & Oil Seeds
                </p>

                

                <p className="text-white flex items-center justify-center basis-1/6 py-1">
                  Charcoal
                </p>
              </div>
              <div className="grid grid-cols-2 md:flex">
                <p className="text-white flex items-center justify-center  basis-1/4 py-1">
                  Trees
                </p>
                <p className="text-white flex items-center justify-center  basis-1/4 py-1">
                  Plants
                </p>
                <p className="text-white flex items-center justify-center basis-1/3 py-1">
                  Specimens for Export
                </p>
                <p className="text-white flex items-center justify-center basis-1/4 py-1">
                  Oils
                </p>
                {/* <p className="text-white flex items-center justify-center text-[12px]  basis-1/5 py-1">Organic</p>
                <p className="text-white flex items-center justify-start text-[12px]  basis-1/5 py-1">Vegan</p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-grow-0 md:w-1/3">
            <div className="col-span-5">
              <h4 className="bg-red text-white text-center text-lg font-normal w-fit mx-auto px-4 font-Dancing">
                Get in touch!
              </h4>
            </div>
            <div className="flex flex-col pt-4 gap-2">
              <Link href="/contacto">
                <button className="bg-white text-lightRed rounded-sm py-2 px-5 font-semibold w-full">
                  Contact Us
                </button>
              </Link>
              <button className='bg-red text-white rounded-sm py-2 px-5 font-semibold'>Schedule A Call</button>
              <Link href="/policies/privacy"><p className="text-white text-center text-[12px] hover:underline underline-offset-2">Privacy Policy</p></Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white text-[12px] pt-14">
          <p>© 2023 · </p>&nbsp;
          <a href="https://www.linkedin.com/in/pablocausa" target="_blank" className="underline">P</a>&nbsp;
          & &nbsp;
          <a href="https://www.linkedin.com/in/solana-romero" target="_blank" className="underline">S</a>
          &nbsp; · &nbsp;
          <a href="" target="_blank" className="underline">Brokear</a>
          &nbsp; · &nbsp;
          <Link href="/policies/terms"><p className="underline hover:underline underline-offset-2">Terms</p></Link>
          &nbsp; · &nbsp;
          <Link href="/policies/privacy"><p className="underline hover:underline underline-offset-2">Privacy</p></Link>
          &nbsp; · &nbsp;
          <Link href="/policies/accesibility"><p className="underline hover:underline underline-offset-2">Accesibility.</p></Link>
        </div>

      </div>
    </section>
  );
};

export default Footer;
