'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    emailjs.send('service_qifnwpj', 'template_9s6kye9', data, 'PJrudd64y-i-PSywv')
      .then(function (response) {
        toast.success("Mensaje enviado con éxito");
        window.location.reload()
      }, function (error) {
        toast.error("Fallo la entrega, probá de vuelta");
      })
    console.log(data);

  }

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
                Subscribe
              </h4>
            </div>
            <div className="flex flex-col pt-4 gap-2">
                <form onSubmit={handleSubmit(onSubmit)}>
              <div className='w-full text-center px-5'>
                <input 
                 {...register("suscriptionEmail")}
                type="email" 
                className='border border-[#618264] w-full h-[44px] rounded-sm p-2 focus:border-dashed focus:border-black' placeholder='Your email address...' style={{ "textAlign": 'center', "outline": "none" }} />
              </div>
              <button type="submit" className='mx-5 h-[44px] bg-red rounded-[3px] text-center flex justify-center items-center text-white font-semibold cursor-pointer hover:opacity-90' >
                Sign Me Up!
              </button>
                </form>
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
          <Link href="/" className="underline">Brokear</Link>
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
