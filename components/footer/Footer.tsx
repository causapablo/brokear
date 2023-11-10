'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/translateSlice';


const Footer = () => {

  const isSpanish = useSelector(selectLanguage);
  
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    emailjs.send('service_qifnwpj', 'template_9s6kye9', data, 'PJrudd64y-i-PSywv')
      .then(function (response) {
        router.push('/confirmed')
        // toast.success("Mensaje enviado con éxito");
        
      }, function (error) {
        // toast.error("Fallo la entrega, probá de vuelta");
      })
  }
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto  max-w-[1300px]">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 px-3 lg:px-0">
          <div className="flex flex-col md:flex-grow-0 md:w-1/3 h-fit">
            <div className="">
              <h4 className="bg-red text-white text-center text-lg font-normal w-fit mx-auto px-4 font-Dancing">
                {isSpanish ? 'Empresa' : 'Company'}
              </h4>
            </div>

            <div className="py-4">
              <div className="flex-col">
                <p >
                  <Link href='/about' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                    {isSpanish ? 'Sobre nosotros' :'About Us'}
                  </Link>
                </p>
                <p>
                  <Link href='/why-us' className="text-white flex items-center justify-center text-[12px] basis-1/4 py-1">
                    {isSpanish ? '¿Por qué nosotros?' :'Why us?'}
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
                    {isSpanish ? 'Contactanos' :'Contact Us'}
                  </Link>
                </p>
                <p>
                  <Link href='https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09' className="text-white flex items-center justify-center text-[12px] py-1 basis-1/2">
                    {isSpanish ? 'Agendá una llamada' : 'Schedule A Call'}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-grow-0 md:w-1/3 h-fit">
            <div className="col-span-5">
              <h4 className="bg-red text-white text-center text-lg font-light w-fit mx-auto px-4 font-Dancing">
                {isSpanish ? 'Productos' : 'Products'}
              </h4>
            </div>
            <div className="py-4 text-[12px] font-Grotesk">
              <div className="flex-col">

                <p className="text-white flex items-center justify-center basis-1/3 py-1">
                  <Link href="/products/bulk-category/bulk-charcoal">
                    {isSpanish ? 'Carbón' :'Charcoal'}
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-1/3  py-1">
                  <Link href="/products/bulk-category/bulk-tea">
                    {isSpanish ? 'Té' : 'Tea'}
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-1/3  py-1">
                  <Link href="/products/bulk-category/bulk-oils">
                    {isSpanish ? 'Aceites' : 'Oils'}
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center basis-2/5 py-1">
                  <Link href="/products/bulk-category/bulk-yerba-mate">
                    Yerba Mate
                  </Link>
                </p>
                <p className="text-white flex items-center justify-center  basis-2/5 py-1">
                  <Link href="/products/bulk-category/bulk-pulses-seeds">
                    {isSpanish ? 'Legumbres y semillas oleaginosas' : 'Pulses & Oil Seeds'}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-grow-0 md:w-1/3">
            <div className="col-span-5">
              <h4 className="bg-red text-white text-center text-lg font-normal w-fit mx-auto px-4 font-Dancing">
                {isSpanish ? 'Suscribite' : 'Subscribe'}
              </h4>
            </div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-4 gap-4">
                <div className='w-full text-center px-5'>
                  <input
                    {...register("suscriptionEmail")}
                    type="email"
                    className='border border-[#618264] w-full h-[44px] rounded-sm p-2 focus:border-dashed focus:border-black' placeholder='Your email address...' style={{ "textAlign": 'center', "outline": "none" }} />
                </div>
                <div className="w-full px-5">
                  <button type="submit" className='h-[44px] bg-red w-full rounded-[3px] text-center flex flex-wrap justify-center items-center text-white font-semibold cursor-pointer hover:opacity-90' >
                    {isSpanish ? '¡Inscribirme!' : 'Sign Me Up!'}
                  </button>
                </div>
              </form>
              <Link href="/policies/privacy"><p className="text-white text-center text-[12px] hover:underline underline-offset-2 mt-2">{isSpanish ? 'Política de privacidad' : 'Privacy Policy'}</p></Link>
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
          <Link href="/policies/terms"><p className="underline hover:underline underline-offset-2">{isSpanish ? 'Términos' : 'Terms'}</p></Link>
          &nbsp; · &nbsp;
          <Link href="/policies/privacy"><p className="underline hover:underline underline-offset-2">{isSpanish ? 'Privacidad' : 'Privacy'}</p></Link>
          &nbsp; · &nbsp;
          <Link href="/policies/accesibility"><p className="underline hover:underline underline-offset-2">{isSpanish ? 'Accesibilidad' : 'Accesibility.'}</p></Link>
        </div>

      </div>
    </section>
  );
};

export default Footer;
