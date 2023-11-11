'use client'
import React from 'react'
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';

function Sidebarblog() {

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
    <section>
      <div className='pt-[102px]' id='entero'>
        <div className='border relative mb-[52px] w-96 bg-white' id='nodoSuperior'>
          <ExportedImage className='absolute -top-[120px] left-[90px] hover:animate-wiggle rounded-full' src={"/images/LogoLanding.jpg"} alt='SidebarblogLogo' width={201} height={201} />
          <div className='space-y-4 pt-24 pb-8'>
            <h1 className='text-white bg-red w-fit px-1 mx-auto'>{isSpanish ? 'Tu fuente N°1 de ingredientes especiales' : 'Your #1 source of specialty ingredients'}</h1>
            <p className='w-fit mx-4 text-center text-[15px]'>{isSpanish ? 'Obtenemos e importamos materias primas especiales de alta calidad a través de nuestra gran red global. Experimenta la diferencia.' :'We source and import high-quality specialty raw ingredients through our large global network. Experience the difference.'}</p>
            <div className='flex flex-row gap-3 justify-center'>
              <Link href='/contact'>
                <button className='bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]'>{isSpanish ? 'Contáctanos' :'Contact Us'}</button>
              </Link>
              <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09">
                <button className='bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]'>{isSpanish ? 'Agendá una llamada' :'Schedule A Call'}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='border bg-[#B0D9B1] relative pb-5' id='nodoInferior'>
          <ExportedImage className='absolute transform -translate-x-1/2 left-1/2 -top-6 bg-white border border-black rounded-full' src={"/images/emailicon.png"} alt='icon' width={48} height={48} />
          <div className='space-y-4 pt-12'>
            <h1 className='text-center text-xl font-[700]'>{isSpanish ? 'Sigamos en contacto' :'Let s Keep in Touch'}</h1>
            <p className='text-center px-6 leading-relaxed'>{isSpanish ? 'Suscríbase para recibir las últimas actualizaciones y acontecimientos de Brokear.' :'Subscribe for the latest Brokear updates and happenings.'}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-4 gap-4">
                <div className='w-full text-center px-5'>
                  <input
                    {...register("suscriptionEmail", { required: true })}
                    type="email"
                    className='border border-[#618264] w-full h-[44px] rounded-sm p-2 focus:border-dashed focus:border-black' placeholder='Your email address...' style={{ "textAlign": 'center', "outline": "none" }} />
                    {errors.suscriptionEmail && (
                    <span className="text-red ">{isSpanish ? 'Campo requerido' : 'This is a required field.'}</span>
                  )}
                </div>
                <div className="w-full px-5">
                  <button type="submit" className='h-[44px] bg-red w-full rounded-[3px] text-center flex flex-wrap justify-center items-center text-white font-semibold cursor-pointer hover:opacity-90' >
                    {isSpanish ? '¡Inscrirme!' :'Sign Me Up!'}
                  </button>
                </div>
              </form>
            <Link href="/privacy"><p className="text-[#557A46] text-center text-[14px] underline underline-offset-2 mt-3">{isSpanish ? 'Políticas de privacidad' :'Privacy Policy'}</p></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebarblog
