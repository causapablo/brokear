import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto  max-w-[1300px]">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 px-3 lg:px-0">
          <div className="flex flex-col md:flex-grow-0 md:w-1/3 h-fit">
            <div className="">
              <h4 className="bg-red text-white text-center text-lg font-normal w-fit mx-auto px-4 font-Dancing">
                Company
              </h4>
            </div>

            <div className="py-4">
              <div className="flex-col">
                <p >
                  <Link href='/about' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link href='/why-us' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                    Why us?
                  </Link>
                </p>
                {/* <p className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  Careers
                </p>
                <p className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                  Blog
                </p>
                <p className="text-white flex items-center justify-center text-[12px] py-1 basis-1/4">
                  LinkedIn
                </p> */}
                <p>
                  <Link href='/contact' className="text-white flex items-center justify-center text-[12px] py-1 basis-1/4">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link href='https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09' className="text-white flex items-center justify-center text-[12px] py-1 basis-1/2">
                    Schedule A Call
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-grow-0 md:w-1/3 h-fit">
            <div className="col-span-5">
              <h4 className="bg-red text-white text-center text-lg font-light w-fit mx-auto px-4 font-Dancing">
                Products
              </h4>
            </div>
            <div className="py-4 text-[12px] font-Fitgree">
              <div className="flex-col">

                <p className="text-white flex items-center justify-center basis-1/3 py-1">
                  <Link href="/products/bulk-category/bulk-charcoal">
                    Charcoal
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-1/3  py-1">
                  <Link href="/products/bulk-category/bulk-tea">
                    Tea
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-1/3  py-1">
                  <Link href="/products/bulk-category/bulk-oils">
                    Oils
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-2/5 py-1">
                  <Link href="/products/bulk-category/bulk-yerba-mate">
                    Yerba Mate
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center  basis-2/5 py-1">
                  <Link href="/products/bulk-category/bulk-pulses-seeds">
                    Pulses & Oil Seeds
                  </Link>
                </p>
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
              <Link href="/contact">
                <button className="bg-white text-red rounded-sm py-2 px-5 font-semibold w-full hover:brightness-75">
                  Contact Us
                </button>
              </Link>
              <button className='bg-red text-white w-full rounded-sm  font-semibold hover:brightness-75'><Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09" target="_blank" className="w-full"><p className="py-2 px-5">Schedule A Call</p></Link></button>

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
