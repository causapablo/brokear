"use client";

import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dotenv from 'dotenv';

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    emailjs.send('service_v0i504i', 'template_3qe54lp', data, 'dTwc7sMrSbni_ZCkC')
    .then(function(response) {
      toast.success("Mensaje enviado con éxito");
            window.location.reload(false)
    }, function(error) {
      toast.error("Fallo la entrega, probá de vuelta");
    })
    console.log(data);

  }

  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="pt-40">
        <p className="bg-red text-white font-bold text-xl w-44 text-center uppercase ml-20">Contactános</p>
        <h4 className="font-bold ml-20 pt-5 text-3xl">Nos encantaría escuchar de vos</h4>
        <p className="w-[500px] ml-20 pt-5">
          Ya sea que necesites más información o una cotización, estamos acá para
          ayudarte. Por favor completá este formulario y dejanos saber como
          podemos asistirte.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
          <div className="flex flex-col w-[700px] h-[800px]">
            <div className="flex flex-wrap pt-20 justify-center">
                <div className="flex flex-col pr-5">
                    <label className="font-bold">Nombre</label>
                    <input 
                    type="text" 
                    {...register("name")} 
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2"/>
                </div>
                
                <div className="flex flex-col ">
                    <label className="font-bold">Apellido</label>
                    <input 
                    type="text" 
                    {...register("lastName")} 
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2"/>
                </div>
                
                <div className="flex flex-col pr-5 pt-5">
                    <label className="font-bold">Email <span className="text-red">*</span></label>
                    <input 
                    type="email" 
                    {...register("email", { required: true })} 
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2"/>
                    {errors.email && (
                      <span className="text-red">Campo requerido</span>
                    )}
                </div>
                
               <div className="flex flex-col pt-5">
                 <label className="font-bold">Teléfono</label>
                 <input 
                 type="text" 
                 {...register("phone")} 
                 className="border border-lightRed opacity-40 px-8 py-2 mt-2"/>
               </div>
            </div>
            
            <label className="font-bold pl-14 pt-5">Mensaje <span className="text-red">*</span></label>
            <textarea 
            {...register("message", { required: true })}
            className="border border-lightRed opacity-40 ml-14 w-[590px] px-8  py-10 mt-2"></textarea>
            {errors.mensaje && (
              <span className="text-red pl-14">Campo requerido</span>
            )}
            <button type="submit" className="bg-red text-white mt-5 w-20 py-2 font-bold ml-14 rounded-sm hover:bg-lightRed">Enviar</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
