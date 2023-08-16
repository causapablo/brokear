import Image from "next/image";
import hoja from "../../../public/images/logo.png";
import profile from "../../../public/images/profile.jpg";
import profile2 from "../../../public/images/profilePic.jpg";
import meet from "../../../public/images/meet.jpg";
import view from "../../../public/images/landscape.jpg";
import Wave from "../../../public/icons/Wave";
import WavePeach from "../../../public/icons/WavePeach";
import ScheduleCall from "../../../components/schedulecall/ScheduleCall";


const Nosotros = () => {
  return (
    <section className="">
      <div className="bg-gradient-to-b from-lightPink to-white lg:flex flex-wrap pt-44 justify-center">
        <div className="lg:ml-5 mt-14">
          <Image src={hoja} alt="img" className="" />
        </div>
        <div className="lg:w-3/6 ml-5 lg:ml-20">
          <h2 className="bg-red text-white text-xl mt-20 w-40 text-center py-1">
            ABOUT US
          </h2>
          <h3 className="font-bold text-xl lg:text-2xl pt-5">
            Take a seat and let us tell you our story
          </h3>
          <p className="pt-5 text-lg w-[90%] font-medium">
            We are die-hard sourcerers (yep, it’s a word) who are willing to do
            whatever it takes to find the magical ingredient you’re looking for.
            <br />
            <br />
            We’ve sourced ingredients from across the globe and spent our lives
            improving supply chains for some of America’s favorite brands.
            <br />
            <br />
            But where did it all begin? When we’d had up to here with the
            shortcomings of the industry.
          </p>
        </div>
      </div>

      <section className="pt-40">
        <Wave />
        <div className="bg-lightPink pt-12 pl-5 lg:pl-40 pb-20">
          <h4 className="bg-red text-white uppercase text-2xl w-56 text-center font-semibold">
            Our Leadership
          </h4>
          <div className="lg:flex lg:flex-row flex-col">
            <div>
              <h4 className="pt-10 container text-justify font-bold text-2xl lg:w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
                The start of something truly exceptional.
              </h4>
              <p className="lg:pt-4 container text-justify font-base px-5 text-lg lg:w-3/4 lg:px-0 pb-10 lg:pb-20">
                As COO of Nuts.com, Eran watched as vendors changed up pricing,
                quality, and lead times on a whim. With so much at stake, he
                knew there had to be a better way. He partnered with fellow
                Nuts.com alumni Aalap to start Ingredient Brothers, a company
                that is data-informed but relationship-driven.
              </p>
            </div>
            <div>
              <h4 className="lg:pt-10 pt-5 container text-justify text-xl lg:w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
                Now they’re on a mission to create the supplier they always
                dreamed of finding.
              </h4>
              <p className="lg:pt-10 container text-justify font-base text-xl lg:w-3/4 px-5 lg:px-0 pb-10 lg:pb-0">
                We work closely with our clients to design a supply chain that
                makes sense for their business. We bring years of experience to
                find the best deal for your company. More about us and what
                makes us different.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-row flex-col">
            <div className="pt-20">
              <div className="flex">
                <Image
                  src={profile}
                  alt="img"
                  className="rounded-full w-36 h-36 border-4 border-orange"
                />
                <div className="flex-col">
                  <h5 className="bg-red text-white w-32 h-6 text-center">
                    lorem ipsu
                  </h5>
                  <p>Chief Operating Officer</p>
                  <p>IN</p>
                </div>
              </div>
              <p className="w-9/12">
                A New Jersey native, Aalap moved with his parents to their
                hometown in India. He spent his college years working in the
                local textile manufacturing sector.
                <br />
                In 2015, he moved back to Jersey to join Carlo’s Bake Shop. He
                then spent time at Marley Spoon. Here he was tasked with
                building out a just-in-time vendor model to support their
                explosive growth.
                <br />
                In 2017, Aalap joined Eran at Nuts.com, where he worked to
                re-energize their highest-performing product categories and
                drove significant margin improvements and SKU expansion.
                <br />
                In 2020, Aalap took an opportunity to run operations for Simply
                Gum. He successfully navigated through COVID and the
                aftereffect, having to rapidly double capacity as they launched
                their products into Target and other major retail chains.
                <br />
                Fun Fact: Aalap has a passion for vintage British motorcycles,
                gardening & woodworking
              </p>
            </div>
            <div className="pt-20">
              <div className="flex">
                <Image
                  src={profile}
                  alt="img"
                  className="rounded-full w-36 h-36 border-4 border-orange"
                />
                <div className="flex-col">
                  <h5 className="bg-red text-white w-32 h-6 text-center">
                    lorem ipsu
                  </h5>
                  <p>Chief Executive Officer</p>
                  <p>IN</p>
                </div>
              </div>
              <p className="w-9/12">
                Eran grew up watching his father grow a successful import
                business that was built on integrity and customer service.
                <br />
                A South African transplant, Eran started his career at Deloitte.
                From there, he came to New York to pursue his MBA at Columbia
                ’14.
                <br />
                Eran was an early employee at Plated, where he focused on
                building planning and sourcing programs. The team’s collective
                efforts led to a $300M sale to Albertsons.
                <br />
                He then went on to join Nuts.com, one of the world’s largest
                nuts and specialty ingredient e-commerce companies. He was
                quickly elevated to COO and quadrupled the company’s capacity to
                support growth in 2020.
                <br />
                Fun Fact: Eran took a gap during college to attend culinary
                school, where he solidified his love of food.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScheduleCall />

      <section className="bg-gradient-to-b from-peach to-white pt-32 pb-40">
        <h4 className="bg-red text-white uppercase text-xl w-[50%] lg:w-40 text-center font-semibold ml-5 lg:ml-[44%]">
          Our Team
        </h4>
        <h4 className="text-2xl mt-3 font-bold ml-5 lg:ml-[28%]">
          Solving today’s supply chain requires a truly global team
        </h4>
        <p className="text-lg mt-3 ml-5 lg:ml-[25%]">
          We have team members in the USA, Colombia, Argentina, South Africa,
          and the Philippines.
        </p>

        <div className="lg:flex flex-wrap justify-center pt-20 px-10">
          <div className="pb-14  w-5/12 mr-10">
            <div className="flex ">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
          <div className="pb-14 w-5/12 mr-10">
            <div className="flex ">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
          <div className=" w-5/12 mr-10 pb-14">
            <div className="flex">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
          <div className=" w-5/12 mr-10 pb-14">
            <div className="flex">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
          <div className=" w-5/12 mr-10 pb-14">
            <div className="flex">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
          <div className=" w-5/12 mr-10 pb-14">
            <div className="flex">
              <Image
                src={profile2}
                alt="img"
                className="rounded-full w-36 h-36 border-4 border-orange"
              />
              <div className="flex-col">
                <h5 className="bg-red text-white w-32 h-6 text-center">
                  lorem ipsu
                </h5>
                <p>Chief Executive Officer</p>
                <p>IN</p>
              </div>
            </div>
            <p className="">
              Joshah is an Industrial Engineer working in the Food Industry,
              sourcing various products from around the world and establishing
              partnerships with suppliers. As Supply Chain Specialist, Joshah
              takes on locating and partnering with different suppliers to make
              their products readily available for all our customers. Fun fact:
              Joshah enjoys playing the cello, baking bread, and surfing in his
              free time.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-14 lg:pt-20">
        <WavePeach />
        <div className="bg-gradient-to-b from-peach to-white pt-10 lg:pt-0">
          <h4 className="bg-red text-white uppercase w-48 text-center font-semibold ml-20 lg:ml-[43%] ">
            better together
          </h4>
          <p className="font-bold text-3xl pb-20 px-1 lg pl-10 lg:pl-[32%] pt-3">
            Fully distributed, always connected.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="mr-10 mb-10">
              <Image src={meet} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={meet} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={meet} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
            <div className="mr-10 mb-10">
              <Image src={view} alt="img" className="w-96 h-80" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Nosotros;
