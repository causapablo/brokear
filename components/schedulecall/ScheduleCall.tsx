import Link from 'next/link'
import React from 'react'

function ScheduleCall() {
  return (
    <section className="bg-black py-20 text-white">
      <div className='container mx-auto max-w-[1000px]'>
        <div className='flex'>
          <div className='basis-3/5'>
            <h4 className=' bg-red text-lg w-60 text-center font-Dancing'>Experience The Difference</h4>
            <p className='py-1 text-[26px] font-bold'>Get in touch to find out more about how we can get you the best deal</p>
          </div>
          <div className='flex items-center basis-2/5'>
            <div className='mx-auto'>
              <Link href='/contacto'>
                <button className='bg-white text-lightRed rounded-sm py-2 px-5 mr-4 font-semibold'>Contact Us</button>
              </Link>
              <button className='bg-red text-white rounded-sm py-2 px-5 font-semibold'>Schedule A Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall
