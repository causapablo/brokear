import WavePeach from "../../public/icons/WavePeach";

const SecondWave = () => {
    return (
        <section className="pt-14 lg:pt-20">
      <WavePeach />
      <div className="bg-peach pt-10 lg:pt-0 pb-10">
        <div className="container mx-auto pl-36">
          <h4 className="bg-red text-white uppercase w-56 text-center font-semibold">
          Start right now to...
          </h4>
          <div className='flex items-center'>
            <div className="pr-36">
              {/* <h4 className="pt-10 container text-justify font-bold text-2xl w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
              Searching for high quality ingredients and trusted suppliers is a process that should not be taken lightly. 
              </h4> */}
              <ul className="list-disc pt-4 container text-justify font-base px-5 text-lg  lg:px-0 pb-10 lg:pb-0">
                <li className="marker:text-red">Save valuable time on other activities and allow us to search for your trusted ingredient suppliers.</li>
                <li className="marker:text-red">Work with certainty, with clear and orderly processes with our own supply chain.</li>
                <li className="marker:text-red">Have the best costs with a guaranteed quality.</li>
              </ul>
            </div>
            <div>
              <h4 className="container text-justify font-semibold text-2xl w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
              Once upon a time
              </h4>
              <p className="pt-5 container text-justify font-base text-lg w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
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
}
 
export default SecondWave;