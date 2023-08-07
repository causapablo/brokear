import Wave from '../../public/icons/Wave'


const Company = () => {
  return (
    <section className="pt-14 lg:pt-0">
      <Wave />
      <div className="bg-lightPink pt-10 lg:pt-0 pb-10">
        <div className="container mx-auto pl-14">
          <h4 className="bg-red text-white uppercase w-40 text-center font-semibold">
          The Best Deal
          </h4>
          <div className='flex'>
            <div>
              <h4 className="pt-10 container text-justify font-bold text-2xl w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
              Searching for high quality ingredients and trusted suppliers is a process that should not be taken lightly. 
              </h4>
              <p className="pt-4 container text-justify font-base px-5 text-lg w-3/4 lg:px-0 pb-10 lg:pb-0">
              Sometimes it's a journey that makes you wish you'd gone to the bottom of the ocean instead. 
              It's a journey that has you fighting the same battles in a never ending cycle. We all know that something must change, right? And now it has.
              </p>
            </div>
            <div>
              <h4 className="pt-10 container text-justify font-bold text-2xl w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
              Based in the heart of Argentina and supported by a global team
              </h4>
              <p className="pt-10 container text-justify font-base text-lg w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
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