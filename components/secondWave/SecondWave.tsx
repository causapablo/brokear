import Link from "next/link";
import WavePeach from "../../public/icons/WavePeach";

const SecondWave = () => {
  return (
    <section className="pt-14 lg:pt-20">
      <WavePeach />
      <div className="bg-peach pt-10 lg:pt-0 pb-10 items-center">
        <div className="container mx-auto lg:pl-36 pl-10">
          <h4 className="bg-red text-white uppercase w-fit px-2 text-center font-semibold">
            Start right now to...
          </h4>
          <div className="lg:flex lg:flex-row flex-col ">
            <div className="lg:pr-36 px-1">
              <ul className="list-disc pt-4 font-lg text-lg lg:px-0 pb-10 lg:pb-0">
                <li className="marker:text-red">
                  Save valuable time on other activities and allow us to search
                  for your trusted ingredient suppliers.
                </li>
                <li className="marker:text-red">
                  Work with certainty, with clear and orderly processes with our
                  own supply chain.
                </li>
                <li className="marker:text-red">
                  Have the best costs with a guaranteed quality.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-2xl lg:w-3/4 pb-5 lg:pb-0">
                Once upon a time
              </h4>
              <p className="font-base text-lg lg:w-3/4 px-2 lg:px-0 pb-10 lg:pb-0">
                We were in your shoes, looking for reliable suppliers and
                consistently showing up. As a result, we have evolved into a
                supplier that is aligned with the goals of our clients, and have
                become the supplier we seek but never find. &nbsp;{" "}
                <Link href="/nosotros">
                  <span className="underline underline-offset-1 text-red cursor-pointer">
                    Read our story
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default SecondWave;
