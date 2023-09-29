import Wave from '../../public/icons/Wave'
import Link from 'next/link';

const Company = () => {
  return (
    <section className="">
      <Wave />
      <div className="bg-[#193330]">
        <div className="px-2 xl:px-0 container mx-auto max-w-[1300px] pb-14">
          <h4 className="bg-red text-white uppercase w-fit text-center px-3 py-1 mb-2 font-Dancing">
            The Best Deal
          </h4>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div>
              <h4 className="font-bold text-2xl mb-4 px-2 lg:px-0 text-white">
                Searching for high quality ingredients and trusted suppliers is a process that shouldnt be taken lightly
              </h4>
              <p className="font-base text-lg font-Grotesk px-2 lg:px-0 text-white" >
                Sometimes it s a journey that makes you wish you d gone to the bottom of the ocean instead.
                It s a journey that has you fighting the same battles in a never ending cycle. We all know that something must change, right? <span className='font-extrabold'>Now it has.</span>
              </p>
            </div>
            <div className='flex flex-col'>
              <h4 className="font-bold text-2xl mb-4 px-2 lg:px-0 text-white">
                Based in the heart of Argentina and supported by a global team
              </h4>
              <p className="font-base text-lg px-2 lg:px-0 text-white">
                We work closely with our clients to design a supply chain that makes sense for their business.
                We bring years of experience to find the best deal for your company. <Link href="#"><span className='text-red hover:underline underline-offset-2'>More about us</span></Link> and what <Link href="#"><span className='text-red hover:underline underline-offset-2'>makes us different</span></Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Company;