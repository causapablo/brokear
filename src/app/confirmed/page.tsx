import React from 'react'
import Burbuja from '../../../components/burbuja/Burbuja'
import prod from '../../../public/categoriesLanding.json'
function Confirmed() {
    return (
        <section className="bg-gradient-to-b from-lightPink to-white pb-10">
            <div className="container mx-auto max-w-[770px] font-Grotesk px-3">
                <div className=" pt-10 lg:pt-20 space-y-6">
                    <h1 className='text-[32px] md:text-[38px] font-extrabold'>Subscription confirmed</h1>
                    <p className='text-[17px] md:text-[19px]'>Your subscription to our list has been confirmed.</p>
                    <p className='text-[17px] md:text-[19px] font-extrabold'>Thank you for subscribing!</p>
                </div>
                <div className='pt-20'>
                    <h4 className="bg-red text-white uppercase text-sm lg:text-lg w-fit px-1 font-Dancing">
                        Take a look to our products...
                    </h4>
                    <div className="flex flex-wrap justify-center pt-11 pb-20 gap-3">
                        {
                            prod.map((p, i) => (
                                <Burbuja etiqueta={p.product} imagen={p.img} link={p.link} key={i} />
                            ))
                        }
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Confirmed
