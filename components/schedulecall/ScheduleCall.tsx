import Link from 'next/link'
import React from 'react'

function ScheduleCall() {
  return (
    <section className="bg-black py-20 text-white">
      <div className='container mx-auto max-w-[1000px] px-3 lg:px-0'>
        <div className='lg:flex'>
          <div className='basis-3/5'>
            <h4 className=' bg-red text-lg w-60 text-center font-Dancing'>Experience The Difference</h4>
            <p className='py-1 text-[26px] font-bold'>Get in touch to find out more about how we can get you the best deal</p>
          </div>
          <div className='flex pt-8 md:pt-0 md:items-center basis-2/5'>
            <div className='md:mx-auto'>
              <Link href='/contacto'>
                <button className='bg-white text-red rounded-sm py-2 px-5 mr-4 font-semibold hover:brightness-75'>Contact Us</button>
              </Link>
              <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09" target='_blank'>
                <button className='bg-red text-white rounded-sm py-2 px-5 font-semibold hover:brightness-75'>Schedule A Call</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall
