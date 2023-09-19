import WavePeach from "../../public/icons/WavePeach";

const SecondWave = () => {
  return (
    <section className="">
    <WavePeach />
    <div className="bg-peach">
      <div className="container mx-auto max-w-[1300px]">

        <div className='flex flex-col lg:flex-row pb-10 px-3 md:px-0 '>
          <div className="basis-3/5 px-2">
            <h4 className="bg-red text-white uppercase w-fit text-center h-[32px] flex items-center font-Dancing">
              Start right now...
            </h4>
            <ul className="list-disc font-base text-lg pl-5 flex flex-col py-3 space-y-2 px-2 lg:px-0">
              <li className="marker:text-red">Saving valuable time on other activities and allow us to search for your trusted ingredient suppliers.</li>
              <li className="marker:text-red">Working with certainty, with clear and orderly processes with our own supply chain.</li>
              <li className="marker:text-red">Having the best costs with a guaranteed quality.</li>
            </ul>
          </div>
          <div className="basis-2/5 lg:pl-10">
            <h4 className="font-semibold text-2xl px-2 lg:px-0">
              Once upon a time
            </h4>
            <p className="font-base text-lg py-2 px-2 lg:px-0">
              We were in your shoes, looking for reliable suppliers and consistently showing up.
              As a result, we have evolved into a supplier that is aligned with the goals of our clients, and have become the supplier we seek but never find.
              &nbsp; <span className="underline underline-offset-1 text-red cursor-pointer">Read our story</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
  );
};

export default SecondWave;
