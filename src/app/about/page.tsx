import Image from "next/image";
import hoja from "../../../public/images/logo.png";
import profile from "../../../public/images/profile.jpg";
import profile2 from "../../../public/images/profilePic.jpg";
import meet from "../../../public/images/meet.jpg";
import view from "../../../public/images/landscape.jpg";
import Wave from "../../../public/icons/Wave";
import WavePeach from "../../../public/icons/WavePeach";
import ScheduleCall from "../../../components/schedulecall/ScheduleCall";
import Profile from "../../../components/profile/Profile";
import Team from "../../../components/team/Team";


const Nosotros = () => {
  return (
    <section>
      <div className="bg-gradient-to-b from-lightPink to-white" id="main">
        <div className="container mx-auto max-w-[1300px] pt-32 pb-12">
          <div className="grid grid-cols-2">
            <div className="">
              <Image src={hoja} alt="img" className="" />
            </div>
            <div className="flex items-center justify-center">
              <div>
                <h2 className="bg-red text-white text-base w-fit px-1 text-center py-1 font-Dancing">
                  ABOUT US
                </h2>
                <h3 className="font-bold text-xl lg:text-2xl mt-3 mb-5">
                  Take a seat and let us tell you our story
                </h3>
                <div className="space-y-6 font-normal text-[19px]">
                  <p>
                    We are die-hard sourcerers (yep, it’s a word) who are willing to do
                    whatever it takes to find the magical ingredient you’re looking for.
                  </p>
                  <p>
                    We’ve sourced ingredients from across the globe and spent our lives
                    improving supply chains for some of America’s favorite brands.
                  </p>
                  <p>
                    But where did it all begin? When we’d had up to here with the
                    shortcomings of the industry.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave />
      <div className="bg-lightPink" id="">
        <div className="container mx-auto max-w-[1300px]">
          <h4 className="bg-red px-2 py-1 text-white text-base uppercase w-fit text-center font-normal font-Dancing">
            Our Leadership
          </h4>
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h4 className="text-justify font-bold text-[30px]">
                The start of something truly exceptional.
              </h4>
              <p className="font-base text-lg">
                As COO of Nuts.com, Eran watched as vendors changed up pricing,
                quality, and lead times on a whim. With so much at stake, he
                knew there had to be a better way. He partnered with fellow
                Nuts.com alumni Aalap to start Ingredient Brothers, a company
                that is data-informed but relationship-driven.
              </p>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full">
                <h4 className="text-xl">
                  Now they’re on a mission to create the supplier they always
                  dreamed of finding.
                </h4>
                <p className="text-xl">
                  We work closely with our clients to design a supply chain that
                  makes sense for their business. We bring years of experience to
                  find the best deal for your company. More about us and what
                  makes us different.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="background" className="py-16 bg-gradient-to-b from-lightPink via-white to-peach">
        <div className="grid grid-cols-2 gap-16 container mx-auto max-w-[1300px]">
          <Profile />
          <Profile />
        </div>
      </div>
      <ScheduleCall />
      <div className="bg-gradient-to-b from-peach to-white pb-20">
        <div className="container mx-auto max-w-[1300px]">
          <div id="header" className="py-20 text-center space-y-4">
            <h4 className="bg-red text-white uppercase text-lg w-fit mx-auto py-1 px-2 font-Dancing">
              Our Team
            </h4>
            <h4 className="text-2xl w-fit mx-auto font-bold">
              Solving today’s supply chain requires a truly global team
            </h4>
            <p className="text-lg w-fit mx-auto">
              We have team members in the USA, Colombia, Argentina, South Africa,
              and the Philippines.
            </p>
          </div>
          <div id="container">
            <div className="grid grid-cols-2 gap-16">
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
              <Team />
            </div>
          </div>
        </div>
      </div>
      <div id="pictureSection" className="">
        <WavePeach />
        <div className="bg-gradient-to-b from-peach via-white to-[#fff5f5] pb-14">
          <div className="container mx-auto max-w-[1300px]">
            <div id="header" className="pb-14">
              <h4 className="bg-red text-white uppercase w-fit mx-auto font-Dancing">
                better together
              </h4>
              <p className="text-2xl w-fit mx-auto font-bold">
                Fully distributed, always connected.
              </p>
            </div>
            <div id="container" className="grid grid-cols-3 gap-2 justify-center">
            <Image src={meet} alt="img" />
            <Image src={meet} alt="img" />
            <Image src={meet} alt="img" />
            <Image src={view} alt="img"/>
            <Image src={view} alt="img"/>
            <Image src={view} alt="img"/>
            <Image src={meet} alt="img"/>
            <Image src={meet} alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
