import Link from 'next/link'
import React from 'react'

function ScheduleCall() {
  return (
    <section className="bg-black py-20 text-white lg:flex lg:flex-row flex-col">
      <div className='lg:pl-40 pl-5'>
        <h4 className=' bg-red text-lg w-fit px-1 text-center font-Dancing'>Experience The Difference</h4>
        <p className='pt-5 text-2xl font-bold lg:w-2/3 px-1 lg:px-0'>Get in touch to find out more about how we can get you the best deal</p>
      </div>
      <div className='pt-6 pl-5 lg:pl-0'>
        <Link href='/contacto'>
          <button className='bg-white text-lightRed rounded-sm py-2 px-5 mr-4 font-semibold'>Contact Us</button>
        </Link>
        <button className='bg-red text-white rounded-sm py-2 px-5 font-semibold'>Schedule A Call</button>
      </div>
    </section>
  )
}

export default ScheduleCall
