import Link from 'next/link'
import React from 'react'

function ScheduleCall() {
  return (
    <section className="bg-black py-20 text-white flex">
      <div className='pl-40'>
        <h4 className=' bg-red text-lg w-60 text-center'>Experience The Difference</h4>
        <p className='pt-5 text-2xl font-bold w-2/3'>Get in touch to find out more about how we can get you the best deal</p>
      </div>
      <div className='pt-6'>
        <Link href='/contacto'>
          <button className='bg-white text-lightRed rounded-sm py-2 px-5 mr-4'>Contact Us</button>
        </Link>
        <button className='bg-red text-white rounded-sm py-2 px-5'>Schedule A Call</button>
      </div>
    </section>
  )
}

export default ScheduleCall
