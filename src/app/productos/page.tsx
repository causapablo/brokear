import React from 'react'
import categorias from '../../../public/categorias.json';
import mate from '../../../public/images/mate.jpg';
import te from '../../../public/images/especias.jpg';
import spices from '../../../public/images/spices.jpg';
import oil from '../../../public/images/oil.jpg';
import granos from '../../../public/images/granos.png';
import Burbuja from '../../../components/burbuja/Burbuja';

function Productos() {
    const src = ['/images/mate.jpg', '/images/especias.jpg', '/images/spices.jpg', '/images/oil.jpg', '/images/granos.png'];

    return (
        <div className='bg-gradient-to-b from-peach to-white pt-32'>
            <section className='container mx-auto max-w-[1333px]'>
                <h1 className='bg-red font-Poppins text-white inline-block px-[10px] py-1 text-[20px] font-[700]'>Bulk Products</h1>
                <p></p>
                <div className="grid grid-cols-2 gap-4 pt-2">

                    <div>
                        <p className='font-Fitgree text-[17px] text-justify font-[500]'>
                            Here you’ll find a wide selection of specialty raw ingredients ranging from coconut products and plant-based proteins to sweeteners and additives. You can also browse by organic, halal, kosher, and vegan subcategories. Looking for something not listed?
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='pt-4'>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            categorias.map((cat, i) => (
                                <Burbuja etiqueta = {cat.category} imagen = {src[i]}/>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Productos
