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
      .then(function (response) {
        toast.success("Mensaje enviado con éxito");
        window.location.reload(false)
      }, function (error) {
        toast.error("Fallo la entrega, probá de vuelta");
      })
    console.log(data);

  }

  return (
    <section className="bg-gradient-to-b from-lightPink to-white">
      <div className="container mx-auto max-w-[770px] font-Fitgree">
        <div className="pt-40">
          <p className="bg-red text-white font-bold text-xl w-44 text-center uppercase">Contactános</p>
          <h4 className="font-bold pt-5 text-3xl">Nos encantaría escuchar de vos</h4>
          <p className="pt-5 text-xl text-justify">
            Whether you need more info, a quote, or would like to request a sample of our high-quality ingredients,
            we’re here to help. Please fill out the form below and let us know how we can assist.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              <div className="grid grid-cols-2 gap-3 pt-20">
                <div className="flex flex-col">
                  <label className="font-bold">Nombre</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                </div>

                <div className="flex flex-col">
                  <label className="font-bold">Apellido</label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                </div>

                <div className="flex flex-col pt-5">
                  <label className="font-bold">Email <span className="text-red">*</span></label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                  {errors.email && (
                    <span className="text-red">Campo requerido</span>
                  )}
                </div>

                <div className="flex flex-col pt-5">
                  <label className="font-bold">Teléfono</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-bold pt-5">Mensaje <span className="text-red">*</span></label>
                <textarea
                  {...register("message", { required: true })}
                  className="border border-lightRed opacity-40 resize-none h-[200px] mt-4"></textarea>
                {errors.mensaje && (
                  <span className="text-red pl-14">Campo requerido</span>
                )}
                <button type="submit" className="bg-red text-white w-20 py-2 mt-4 rounded-sm hover:bg-lightRed">Enviar</button>
              </div>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contacto;
