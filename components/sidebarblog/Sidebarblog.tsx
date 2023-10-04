import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";


function Sidebarblog() {
  return (
    <section>
      <div className='pt-[102px]' id='entero'>
        <div className='border relative mb-[52px] bg-white' id='nodoSuperior'>
          <ExportedImage className='absolute -top-[103px] left-[75px] hover:animate-wiggle' src={"/images/SidebarblogLogo.png"} alt='SidebarblogLogo' width={201} height={182}/>
          <div className='space-y-4 pt-24 pb-8'>
            <h1 className='text-white bg-red w-fit px-1 mx-auto'>Your #1 source of specialty ingredients</h1>
            <p className='w-fit mx-4 text-center text-[15px]'>We source and import high-quality specialty raw ingredients through our large global network. Experience the difference.</p>
            <div className='flex flex-row gap-3 justify-center'>
              <Link href='/contacto'>
                <button className='bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]'>Contact Us</button>
              </Link>
              <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09">
                <button className='bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]'>Schedule A Call</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='border bg-[#B0D9B1] relative pb-5' id='nodoInferior'>
          <ExportedImage className='absolute transform -translate-x-1/2 left-1/2 -top-6 bg-white border border-black rounded-full' src={"/images/emailicon.png"} alt='icon' width={48} height={48} />
          <div className='space-y-4 pt-12'>
            <h1 className='text-center text-xl font-[700]'>Let s Keep in Touch</h1>
            <p className='text-center px-6 leading-relaxed'>Subscribe for the latest Brokear updates and happenings.</p>
            <div className='w-full text-center px-5'>
              <input type="text" className='border border-[#618264] w-full h-[44px] rounded-sm p-2 focus:border-dashed focus:border-black' placeholder='Your email address...' style={{"textAlign": 'center', "outline": "none"}}/>
            </div>
            <div className='mx-5 h-[44px] bg-[#618264] rounded-[3px] text-center flex justify-center items-center text-white font-semibold cursor-pointer hover:opacity-90' >
                Sign Me Up!
            </div>
            <Link href="/privacy"><p className="text-[#557A46] text-center text-[14px] underline underline-offset-2 mt-3">Privacy Policy</p></Link>



          </div>

        </div>
      </div>
    </section>
  )
}

export default Sidebarblog
