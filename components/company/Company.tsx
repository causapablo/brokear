import Wave from '../../public/icons/Wave'


const Company = () => {
  return (
    <section className="">
      <Wave />
      <div className="bg-lightPink">
        <div className=" container mx-auto max-w-[1300px] pb-14">
          <h4 className="bg-red text-white uppercase w-fit text-center font-semibold px-3 py-1 mb-2">
          The Best Deal.
          </h4>
          <div className='grid grid-cols-2 gap-16'>
            <div>
              <h4 className="font-bold text-2xl">
              Searching for high quality ingredients and trusted suppliers is a process that should not be taken lightly 
              </h4>
              <p className="font-base text-lg">
              Sometimes it's a journey that makes you wish you'd gone to the bottom of the ocean instead. 
              It's a journey that has you fighting the same battles in a never ending cycle. We all know that something must change, right? <span className='font-extrabold'>Now it has.</span> 
              </p>
            </div>
            <div className='flex flex-col justify-between'>
              <h4 className="font-bold text-2xl">
              Based in the heart of Argentina and supported by a global team
              </h4>
              <p className="font-base text-lg">
              We work closely with our clients to design a supply chain that makes sense for their business. 
              We bring years of experience to find the best deal for your company. More about us and what makes us different.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Company;