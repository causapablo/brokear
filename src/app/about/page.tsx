import Wave from "../../../public/icons/Wave";
import ScheduleCall from "../../../components/schedulecall/ScheduleCall";
import Profile from "../../../components/profile/Profile";
import Team from "../../../components/team/Team";
import ExportedImage from "next-image-export-optimizer";

const Nosotros = () => {
  
  return (
    <section>
      <div className="bg-gradient-to-b from-peach to-white" id="main">
        <div className="container mx-auto max-w-[1300px] pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 px-3">
            <div className="mx-auto">
              <ExportedImage src={"/images/LogoPrincipalJoacoEuge.png"} alt="img" className="" width={642} height={573}/>
            </div>
            <div className="flex items-center justify-center pt-5">
              <div>
                <h2 className="bg-red text-white text-base w-fit px-1 text-center py-1 font-Dancing">
                  ABOUT US
                </h2>
                <h3 className="font-bold text-xl lg:text-2xl mt-3 mb-5">
                  Sit back and let us tell you our story
                </h3>
                <div className="space-y-6 font-normal text-[19px]">
                  <p>
                    We are sourcing experts who are willing to do whatever it takes to find
                    the perfect ingredient you’re looking for.
                  </p>
                  <p>
                    We’ve sourced ingredients from around the world and dedicated our lives
                    to improving the supply chains of some of the world most popular brands.
                  </p>
                  <p>
                    But how did it all start? When we get tired of the limitations of the industry.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave/>
      <div className="bg-lightPink -mt-1" id="">
        <div className="container mx-auto max-w-[1300px] px-3 lg:px-0">
          <h4 className="bg-red px-2 py-1 text-white text-base uppercase w-fit text-center font-medium font-Dancing">
            Our Leadership
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-4 text-black">
            <div>
              <h4 className="text-justify font-bold md:text-[30px] text-[28px] pt-2 px-2 lg:px-0">
                The start of something truly exceptional.
              </h4>
              <p className="font-base text-lg pt-2 px-2 lg:px-0">
                As COO, Joaquin watched as vendors changed up pricing,
                quality, and lead times on a whim. With so much at stake, he
                knew there had to be a better way. He partnered with fellow
                Eugenia to start Brokear, a company that is data-informed but relationship-driven.
              </p>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full">
                <h4 className="text-xl px-2 lg:px-0">
                  Now they’re on a mission to create the supplier they always
                  dreamed of finding.
                </h4>
                <p className="text-xl px-2 lg:px-0">
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
      <div id="background" className="py-36 bg-gradient-to-b from-lightPink to-white -mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto max-w-[1300px] px-3 lg:px-0">
          <Profile img={"/images/JoacoPerfil.jpg"} nombre="Joaquin Sipowicz" cargo="CEO" bio ="" />
          <Profile img={"/images/EugePerfil.jpg"} nombre="Eugenia Doblack" cargo="CEO" bio ="" />
        </div>
      </div>
      <ScheduleCall />
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="container mx-auto max-w-[1300px]">
          <div id="header" className="py-20 text-center space-y-4">
            <h4 className="bg-red text-white uppercase text-lg w-fit mx-auto py-1 px-2 font-Dancing">
              Our Team
            </h4>
            <h4 className="text-2xl w-fit mx-auto font-bold">
              Solving today’s supply chain requires a truly global team
            </h4>
            <p className="text-lg w-fit mx-auto">
              We have team members in Argentina, South Africa, Philippines and more countries.
            </p>
          </div>
          <div id="container">
            <div className="grid md:grid-cols-2 gap-16 px-3">
              <Team img={"/images/FlorenciaPerfil.jpg"} nombre="Florencia Silva" cargo="Account Manager" bio =""/>
              <Team img={"/images/DoblakPerfil.jpg"} nombre="Juan Cruz Doblack" cargo="DEO" bio =""/>
              <Team img={"/images/SolanaPerfil.jpg"} nombre="Solana Romero" cargo="Software Developer" bio =""/>
              <Team img={"/images/PabloPerfil.jpg"} nombre="Pablo Causa" cargo="Software Developer" bio =""/>
            </div>
          </div>
        </div>
      </div>
      <Wave/>
      <div id="pictureSection" className="-mt-1">
        <div className="bg-gradient-to-b from-lightPink to-white pb-14 pt-28">
          <div className="container mx-auto max-w-[1300px]">
            <div id="header" className="pb-14">
              <h4 className="bg-red text-white uppercase w-fit mx-auto font-Dancing py-1 px-2">
                better together
              </h4>
              <p className="text-2xl w-fit mx-auto font-bold py-4 text-center">
                Fully distributed, always connected.
              </p>
            </div>
            <div id="container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center px-3">
              <ExportedImage src={"/images/Company1.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company2.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company3.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company4.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company5.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company6.jpg"} alt="img" width={558} height={561} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
