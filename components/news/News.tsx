import React from 'react'
import Image from 'next/image'
function News({ urlImagen, titulo }: any) {
  return (
    <div className=''>
      <div className=''>
        <Image src={urlImagen} alt='Imagen de noticia' className='lg:w-[417px] lg:h-[238px]' width="417" height="238" />
        <p className='font-extrabold text-[17px] my-2 hover:text-red hover:underline underline-offset-1 text-center cursor-pointer'>{titulo}</p>
      </div>

    </div>
  )
}

export default News
