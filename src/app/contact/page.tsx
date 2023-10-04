"use client";

import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    emailjs.send('', '', data, '')
      .then(function (response) {
        toast.success("Mensaje enviado con éxito");
        window.location.reload()
      }, function (error) {
        toast.error("Fallo la entrega, probá de vuelta");
      })
    console.log(data);

  }

  return (
    <section className="bg-gradient-to-b from-lightPink to-white pb-10">
      <div className="container mx-auto max-w-[770px] font-Fitgree px-3">
        <div className=" pt-10 lg:pt-20">
          <p className="bg-red text-white font-bold text-xl w-fit px-1 text-center uppercase">contact us</p>
          <h4 className="font-bold pt-5 text-[28px] md:text-3xl">We’d love to hear from you</h4>
          <p className="pt-3 md:pt-5 text-[17px] md:text-xl text-justify">
          Whether you need more info, a quote, or would like to request a sample of our high-quality ingredients, we’re here to help. Please fill out the form below and let us know how we can assist.
          </p>
          <p className="pt-5 text-[17px] md:text-xl text-justify">
          You can also connect with us by mail to stay up to date with our latest news and offerings, or <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09" target="_blank" className="text-lightRed hover:underline hover:underline-offset-2">schedule a call</Link> with one of our experts to discuss your specific needs.          
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              <div className="grid lg:grid-cols-2 gap-3 pt-20">
                <div className="flex flex-col">
                  <label className="font-bold">First name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                </div>

                <div className="flex flex-col">
                  <label className="font-bold">Last name</label>
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
                    <span className="text-red">This is a required field.</span>
                  )}
                </div>

                <div className="flex flex-col pt-5">
                  <label className="font-bold">Phone</label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="border border-lightRed opacity-40 px-8 py-2 mt-2" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-bold pt-5">Message <span className="text-red">*</span></label>
                <textarea
                  {...register("message", { required: true })}
                  className="border border-lightRed opacity-40 resize-none h-[200px] mt-4"></textarea>
                {errors.message && (
                  <span className="text-red ">This is a required field.</span>
                )}
                <button type="submit" className="bg-red text-white w-20 py-2 mt-4 rounded-sm hover:bg-lightRed">Submit</button>
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
