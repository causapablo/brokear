import Image from "next/image";
import Wave from "../../../public/icons/Wave";
import ScheduleCall from "../../../components/schedulecall/ScheduleCall";
import WaveWhite from "../../../public/icons/WaveWhite";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const Porque = () => {
  return (
    <main className="">
      <section className="">
        <div id="background">
          <div className="container mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 px-3">
            <div id="img">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="img1" width="1" height="1" className="border-2 border-black">
                    <image
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMaxYMax slice"
                      href="/images/especias.jpg"

                    />
                  </pattern>
                </defs>
                <path
                  fill="url(#img1)"
                  d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div id="container" className="flex items-center">
              <div className="space-y-4">
                <h4 className="bg-red text-white w-fit text-xl px-1 font-Dancing">WHY CHOOSE US?</h4>
                <p className="text-4xl font-bold">We are experts at managing end-to-end procurement cycles</p>
                <p className="text-xl ">
                  Our team has expertise in managing all of your sourcing and
                  replenishment needs. Years of experience as customers and
                  suppliers have taught us how to tackle any challenge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Wave />
          <div id="background" className="bg-red">
            <div id="container" className="container mx-auto max-w-[1300px] pb-20 px-3">
              <div className="pb-3">
                <h4 className="bg-white text-black w-fit px-2 py-1 text-lg font-Grotesk font-medium">OUR EXPERTISE</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-lightPink">
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">Global Sourcing Network</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    We source from the most reliable and affordable vendors on the
                    globe.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">Inventory Management</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    We help you manage your stock to optimize your inventory
                    costs.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">Regulatory Support</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    We take care of all the documentation and compliance
                    validation.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">Logistics Solutions</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    We search for solutions that solve the actual challenges
                    you’re facing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScheduleCall />
        <div id="background" className="bg-gradient-to-b from-lightPink to-white pt-[70px]">
          <div id="container" className="container mx-auto max-w-[1300px] pb-8 px-3">
            <div className="pb-3">
              <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">INDUSTRY CHALLENGES</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4 text-[18px]">
                <p className="font-bold text-2xl">Out with the old, in with the new</p>
                <p className="">
                  Finding the right ingredients isn’t a cut-and-dry exercise where
                  you can sit back and relax while everything falls into place.
                  It’s a journey that requires commitment, where challenges are
                  overcome at every turn.{" "}
                </p>
              </div>
              <div className="space-y-4 text-[18px]">
                <p className="font-bold text-2xl">What’s the difference in our approach?</p>
                <p className="">
                  When you have a strategic supply partner that understands the
                  kinks and challenges of the procurement cycle, you better get a
                  book and a cup of tea ready for all the time we’re about to open
                  up for you.
                </p>
              </div>
            </div>
          </div>
          <WaveWhite />
        </div>
        <div id="background">
          <div id="container" className="container mx-auto max-w-[1300px] px-3 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div id="acordionLeft">
                <div className="pb-6">
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">YOUR STRUGGLES</h4>
                </div>

                <div>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Time consuming searches
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        To find the best supplier of raw ingredients, buyers have
                        to scour the endless halls of Google, sifting through
                        every possible contact to find a reliable supplier.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Supply chain uncertainty
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Constantly working in uncertainty, being left in the dark
                        when your ingredients are stuck in a container that can’t
                        reach you due to logistics, regulations, or the end of the
                        world as we know it.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Middle person blues
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Having to work through a broker that does nothing more
                        than act as a middle person passing along messages, not
                        adding any real value to the journey.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Reacting firefighting
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        “Firefighting” all the time, being reactive to problems in
                        the supply chain that requires last-minute scurrying about
                        for ways to fix the leaks in the supply chain boat.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Pricing troubles, from one end to other
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Being pressured to reduce costs instead of being able to
                        build relationships with suppliers. And then having to
                        deal with fluctuating prices that are “out of everyone’s
                        hands”.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        (BARELY) Standard quality assurance
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Having to worry about standard quality assurance checks
                        not really living up to the standards they proclaim to
                        test, leading to recalls and health risks.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div id="acordionRight">
                <div className="pb-6">
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">OUR SERVICES</h4>
                </div>

                <div>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Remove the redundancy
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We cut out the “waste” … in every sense of the word. We
                        create a more sustainable sourcing solution that does away
                        with the “middle person concept”, offering you a reliable
                        sourcing solution.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Direct line to vendors
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We offer clients a direct line to ingredients, instead of
                        extending the supply chain even further. By building
                        relationships with our vendors, we give you immediate
                        access to long-standing relationships.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        We ve got your back, for the long run
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We’re not a transaction-based company, we’re in it for the
                        long-term relationships that enable us to become strategic
                        partners.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Proactive inventory planning
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We help you plan your inventory optimally, helping you
                        reduce costs and minimize redundant stock-on-hand, by
                        taking real-world factors into consideration, from natural
                        events to logistic struggles.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Competitive pricing, all around
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        As large-scale importers, we’re able to offer a more
                        affordable answer to your ingredient woes, helping you to
                        create more competitive prices in your turn. We make our
                        prices even more competitive by using historical data and
                        multiple pricing sources to formulate the final price.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        Quality assurance
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        To make sure you get the best product, we have installed
                        our own quality checks to get you the most reliable
                        ingredients for your end product.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="background" className="bg-gradient-to-b from-white to-lightPink">
          <div id="container" className="container mx-auto max-w-[1300px] py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-3">
              <div id="col1" className="col-span-1">
                <div className="pb-3">
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">WE ARE NOT DIFFERENT</h4>
                </div>
                <div className="space-y-6">
                  <p className="font-bold text-2xl">Not everyone gets the memo</p>
                  <p className="text-[18px]">
                    Weather events, logistical holdups, and worldwide pandemics that
                    result in everyone stocking up on toilet paper and
                    post-apocalyptic fiction as guidebooks – things don’t always go
                    according to plan.
                  </p>
                  <p className="text-[18px]">
                    But that’s nothing more than a bump in the road when you’re
                    working with Brokear.
                  </p>
                  <p className="text-[18px]">
                    We don’t leave you in the dark. We’re committed to transparent
                    service, so you know immediately when plans change, and you’re
                    part of the course-corrected journey from the start.
                  </p>
                </div>
              </div>
              <div id="col2" className=" flex flex-wrap items-end col-span-1 ">
                <div
                  className="border relative flex items-end w-full lg:w-fit bg-white h-[70%]"
                >
                  
                    <ExportedImage
                      className="absolute -top-[110px] lg:-top-[120px] transform -translate-x-1/2 lg:-translate-x-0 left-1/2 lg:left-[200px] hover:animate-wiggle"
                      src={"/images/SidebarblogLogo.png"}
                      alt="SidebarblogLogo"
                      width={201}
                      height={182}
                    />
                  

                  <div className="space-y-4 flex flex-col pb-5 pt-52 lg:pt-0">
                    <h1 className="text-white bg-red w-fit px-2 py-1 mx-auto font-Dancing ">
                      Your #1 source of specialty ingredients
                    </h1>
                    <p className="w-fit mx-4 text-center text-[19px] ">
                      We source and import high-quality specialty raw ingredients
                      through our large global network. Experience the difference.
                    </p>
                    <div className="flex flex-row gap-3 justify-center">
                      <Link href="/contacto">
                        <button className="bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]">
                          Contact Us
                        </button>
                      </Link>
                      <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09">
                        <button className="bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]">
                          Schedule A Call
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Porque;
