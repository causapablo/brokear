import WavePeach from "../../public/icons/WavePeach";

const SecondWave = () => {
  return (
    <section className="">
    <WavePeach />
    <div className="bg-peach">
      <div className="container mx-auto max-w-[1300px]">

        <div className='flex'>
          <div className="basis-3/5">
            <h4 className="bg-red text-white uppercase w-fit text-center font-semibold h-[32px] flex items-center px-2">
              Start right now to...
            </h4>
            <ul className="list-disc font-base text-lg pl-5 flex flex-col py-3 space-y-2">
              <li className="marker:text-red">Save valuable time on other activities and allow us to search for your trusted ingredient suppliers.</li>
              <li className="marker:text-red">Work with certainty, with clear and orderly processes with our own supply chain.</li>
              <li className="marker:text-red">Have the best costs with a guaranteed quality.</li>
            </ul>
          </div>
          <div className="basis-2/5 pl-10">
            <h4 className="font-semibold text-2xl">
              Once upon a time
            </h4>
            <p className="font-base text-lg py-2">
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
