"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/translateSlice';

const Contacto = () => {

  const isSpanish = useSelector(selectLanguage);

  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    emailjs.send('service_qifnwpj', 'template_ip4cjkq', data, 'PJrudd64y-i-PSywv')
      .then(function (response) {
        setSend(true)
      }, function (error) {

      })
    console.log(data);

  }

  return (
    <section className="bg-gradient-to-b from-lightPink to-white pb-10">
      <div className="container mx-auto max-w-[770px] font-Grotesk px-3">
        <div className=" pt-10 lg:pt-20">
          <p className="bg-red text-white font-bold text-xl w-fit px-1 text-center uppercase">{isSpanish ? 'Contactanos' : 'contact us'}</p>
          <h4 className="font-bold pt-5 text-[28px] md:text-3xl">{isSpanish ? 'Nos encantaría oír de vos' : 'We’d love to hear from you'}</h4>
          <p className="pt-3 md:pt-5 text-[17px] md:text-xl text-justify">
            {isSpanish ? 'Ya sea que necesites más información, una cotización o desees solicitar una muestra de nuestros ingredientes de alta calidad, estamos aquí para ayudarte. Completá el siguiente formulario y hacenos saber cómo podemos ayudarte.' : 'Whether you need more info, a quote, or would like to request a sample of our high-quality ingredients, we’re here to help. Please fill out the form below and let us know how we can assist.'}
          </p>
          <p className="pt-5 text-[17px] md:text-xl text-justify">
            {isSpanish ? 'También puedes conectarte con nosotros por correo para mantenerte actualizado con nuestras últimas noticias y ofertas, o' : 'You can also connect with us by mail to stay up to date with our latest news and offerings, or'} <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09" target="_blank" className="text-red hover:underline hover:underline-offset-2">{isSpanish ? 'agendá una llamada' : 'schedule a call'}</Link> {isSpanish ? 'con uno de nuestros expertos para discutir tus necesidades específicas.' : 'with one of our experts to discuss your specific needs.'}
          </p>
          {
            !send ? <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="">
                <div className="grid lg:grid-cols-2 gap-3 pt-20">
                  <div className="flex flex-col">
                    <label className="font-bold">{isSpanish ? 'Nombre' : 'First name'}</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="border border-lightRed px-8 py-2 mt-2" />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">{isSpanish ? 'Apellido' :'Last name'}</label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className="border border-lightRed px-8 py-2 mt-2" />
                  </div>

                  <div className="flex flex-col pt-5">
                    <label className="font-bold">Email <span className="text-red">*</span></label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="border border-lightRed px-8 py-2 mt-2" />
                    {errors.email && (
                      <span className="text-red">{isSpanish ? 'Campo requerido' : 'This is a required field.'}</span>
                    )}
                  </div>

                  <div className="flex flex-col pt-5">
                    <label className="font-bold">{isSpanish ? 'Teléfono' : 'Phone'}</label>
                    <input
                      type="text"
                      {...register("phone")}
                      className="border border-lightRed px-8 py-2 mt-2" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-bold pt-5">{isSpanish ? 'Mensaje' : 'Message'} <span className="text-red">*</span></label>
                  <textarea
                    {...register("message", { required: true })}
                    className="border border-lightRed resize-none h-[200px] mt-4 p-4 text-black"></textarea>
                  {errors.message && (
                    <span className="text-red ">{isSpanish ? 'Campo requerido' : 'This is a required field.'}</span>
                  )}
                  <button type="submit" className="bg-red text-white w-20 py-2 mt-4 rounded-sm hover:bg-lightRed">{isSpanish ? 'Enviar' :'Submit'}</button>
                </div>
                <ToastContainer />
              </div>
            </form>
              :
              <div className="space-y-3 pt-12 pb-20">
                <p className="text-[17px] font-bold md:text-[19px]">
                  {isSpanish ? 'Formulario enviado exitosamente, ¡gracias!' : 'Form submitted successfully, thank you!'}
                </p>
                <p className="text-[17px] md:text-[19px]">
                  {isSpanish ? 'Un miembro de nuestro equipo se pondrá en contacto en breve.' : 'A member of our team will be in touch shortly.'}
                </p>
              </div>
          }
        </div>
      </div>

    </section>
  );
};

export default Contacto;
