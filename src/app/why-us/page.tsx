'use client'
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
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/translateSlice';

const Porque = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <main className="">
      <section className="">
        <div id="background">
          <div className="container mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-2">
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
            <div id="container" className="flex items-center px-3">
              <div className="space-y-4">
                <h4 className="bg-red text-white w-fit text-xl px-1 font-Dancing uppercase">{isSpanish ? 'Por qué elegirnos a nosotros?' : 'WHY CHOOSE US?'}</h4>
                <p className=" text-2xl md:text-4xl font-bold lg:px-0">{isSpanish ? 'Somos expertos en gestionar ciclos de adquisiciones de principio a fin' : 'We are experts at managing end-to-end procurement cycles'}</p>
                <p className="text-xl lg:px-0 pb-5 lg:pb-0">
                  {isSpanish ? 'Nuestro equipo tiene experiencia en la gestión de todas sus necesidades de abastecimiento y reabastecimiento. Años de experiencia como clientes y proveedores nos han enseñado a afrontar cualquier reto.' : 'Our team has expertise in managing all of your sourcing and replenishment needs. Years of experience as customers and suppliers have taught us how to tackle any challenge.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Wave />
          <div id="background" className="bg-lightPink -mt-1">
            <div id="container" className="container mx-auto max-w-[1300px] pb-20 px-3">
              <div className="pb-3">
                <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Grotesk font-medium">{isSpanish ? 'NUESTRA EXPERIENCIA' : 'OUR EXPERTISE'}</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black">
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">{isSpanish ? 'Red de abastecimiento global' : 'Global Sourcing Network'}</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    {isSpanish ? 'Nos abastecemos de los proveedores más confiables y asequibles del mundo.' : 'We source from the most reliable and affordable vendors on the globe.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">{isSpanish ? 'La gestión del inventario' : 'Inventory Management'}</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    {isSpanish ? 'Te ayudamos a gestionar tu stock para optimizar tus costos de inventario' : 'We help you manage your stock to optimize your inventory costs.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">{isSpanish ? 'Soporte regulatorio' : 'Regulatory Support'}</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    {isSpanish ? 'Nos encargamos de toda la documentación y validación de cumplimiento.' : 'We take care of all the documentation and compliance validation.'}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-[23px]">{isSpanish ? 'Soluciones logísticas' : 'Logistics Solutions'}</p>
                  <p className="text-[17px] font-Figtree leading-relaxed">
                    {isSpanish ? 'Buscamos soluciones que resuelvan los desafíos reales que enfrenta.' : 'We search for solutions that solve the actual challenges you’re facing.'}
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
              <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing uppercase">{isSpanish ? 'Desafíos de la industria' : 'INDUSTRY CHALLENGES'}</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4 text-[18px]">
                <p className="font-bold text-2xl lg:px-0">{isSpanish ? 'Fuera lo viejo, adentro lo nuevo' : 'Out with the old, in with the new'}</p>
                <p className="lg:px-0">
                  {isSpanish ? 'Encontrar los ingredientes adecuados no es un ejercicio sencillo en el que puedas sentarte y relajarte mientras todo encaja. Es un viaje que requiere compromiso, donde los desafíos se superan en cada paso.' : 'Finding the right ingredients isn’t a cut-and-dry exercise where you can sit back and relax while everything falls into place. It’s a journey that requires commitment, where challenges are overcome at every turn.'}{" "}
                </p>
              </div>
              <div className="space-y-4 text-[18px]">
                <p className="font-bold text-2xl lg:px-0">{isSpanish ? '¿Cuál es la diferencia en nuestro enfoque?' : 'What’s the difference in our approach?'}</p>
                <p className="lg:px-0">
                  {isSpanish ? 'Cuando tienes un socio de suministro estratégico que comprende los problemas y desafíos del ciclo de adquisiciones, será mejor que tengas listo un libro y una taza de té para todo el tiempo que estamos a punto de brindarte.' :'When you have a strategic supply partner that understands the kinks and challenges of the procurement cycle, you better get a book and a cup of tea ready for all the time we’re about to open up for you.'}
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
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">{isSpanish ? 'TUS PROBLEMAS' : 'YOUR STRUGGLES'}</h4>
                </div>

                <div>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        {isSpanish ? 'Búsquedas que consumen mucho tiempo' : 'Time consuming searches'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Para encontrar el mejor proveedor de materias primas, los compradores tienen que recorrer los interminables pasillos de Google, examinando todos los contactos posibles para encontrar un proveedor confiable.' : 'To find the best supplier of raw ingredients, buyers have to scour the endless halls of Google, sifting through every possible contact to find a reliable supplier.'}
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
                        {isSpanish ? 'Incertidumbre en la cadena de suministro' : 'Supply chain uncertainty'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Trabajando constantemente en la incertidumbre, quedándote en la oscuridad cuando tus ingredientes quedan atrapados en un contenedor que no puede llegar a ti debido a la logística, las regulaciones o el fin del mundo tal como lo conocemos.' : 'Constantly working in uncertainty, being left in the dark when your ingredients are stuck in a container that can’t reach you due to logistics, regulations, or the end of the world as we know it.'}
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
                        {isSpanish ? 'Depresión de la persona intermediaria' : 'Middle person blues'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Tener que trabajar a través de un corredor que no hace más que actuar como intermediario que transmite mensajes, sin agregar ningún valor real al viaje.' : 'Having to work through a broker that does nothing more than act as a middle person passing along messages, not adding any real value to the journey.'}
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
                        {isSpanish ? 'Lucha contra incendios reactivos' : 'Reacting firefighting'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? '“Apagar incendios” todo el tiempo, reaccionando a problemas en la cadena de suministro que requieren buscar en el último momento formas de arreglar las fugas en el barco de la cadena de suministro.' : '“Firefighting” all the time, being reactive to problems in the supply chain that requires last-minute scurrying about for ways to fix the leaks in the supply chain boat.'}
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
                        {isSpanish ? 'Problemas de precios, de un extremo a otro' : 'Pricing troubles, from one end to other'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Ser presionado para reducir costos en lugar de poder establecer relaciones con los proveedores. Y luego tener que lidiar con precios fluctuantes que están “fuera del alcance de todos”.' : 'Being pressured to reduce costs instead of being able to build relationships with suppliers. And then having to deal with fluctuating prices that are “out of everyone’s hands”.'}
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
                        {isSpanish ? '(APENAS) Garantía de calidad estándar' : '(BARELY) Standard quality assurance'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Tener que preocuparse porque los controles de control de calidad estándar no cumplen realmente con los estándares que proclaman probar, lo que genera retiros del mercado y riesgos para la salud.' : 'Having to worry about standard quality assurance checks not really living up to the standards they proclaim to test, leading to recalls and health risks.'}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div id="acordionRight">
                <div className="pb-6">
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">{isSpanish ? 'NUESTROS SERVICIOS' : 'OUR SERVICES'}</h4>
                </div>

                <div>
                  <Accordion sx={{ backgroundColor: "#fff" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "700" }}>
                        {isSpanish ? 'Eliminar la redundancia' : 'Remove the redundancy'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Eliminamos el “desperdicio”… en todos los sentidos de la palabra. Creamos una solución de abastecimiento más sostenible que elimina el “concepto de intermediario” y le ofrece una solución de abastecimiento confiable.' : 'We cut out the “waste” … in every sense of the word. We create a more sustainable sourcing solution that does away with the “middle person concept”, offering you a reliable sourcing solution.'}
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
                        {isSpanish ? 'Línea directa con proveedores' : 'Direct line to vendors'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Ofrecemos a nuestros clientes una línea directa con los ingredientes, en lugar de ampliar aún más la cadena de suministro. Al establecer relaciones con nuestros proveedores, le brindamos acceso inmediato a relaciones duraderas.' : 'We offer clients a direct line to ingredients, instead of extending the supply chain even further. By building relationships with our vendors, we give you immediateaccess to long-standing relationships.'}
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
                        {isSpanish ? 'Te respaldamos a largo plazo' : 'We ve got your back, for the long run'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'No somos una empresa basada en transacciones, estamos en esto por las relaciones a largo plazo que nos permitan convertirnos en socios estratégicos.' : 'We’re not a transaction-based company, we’re in it for the long-term relationships that enable us to become strategic partners.'}
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
                        {isSpanish ? 'Planificación de inventario proactiva' :'Proactive inventory planning'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Te ayudamos a planificar tu inventario de manera óptima, ayudándote a reducir costos y minimizar el stock disponible redundante, tomando en consideración factores del mundo real, desde desastres naturales hasta problemas logísticos.' :'We help you plan your inventory optimally, helping you reduce costs and minimize redundant stock-on-hand, by taking real-world factors into consideration, from natural events to logistic struggles.'}
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
                        {isSpanish ? 'Precios competitivos en todos los aspectos' : 'Competitive pricing, all around'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Como importadores a gran escala, podemos ofrecer una respuesta más asequible a sus problemas con los ingredientes, ayudándote a su vez a crear precios más competitivos. Hacemos que nuestros precios sean aún más competitivos utilizando datos históricos y múltiples fuentes de precios para formular el precio final.' : 'As large-scale importers, we’re able to offer a more affordable answer to your ingredient woes, helping you to create more competitive prices in your turn. We make our prices even more competitive by using historical data and multiple pricing sources to formulate the final price.'}
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
                        {isSpanish ? 'Seguro de calidad' : 'Quality assurance'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {isSpanish ? 'Para asegurarnos de que obtengas el mejor producto, hemos instalado nuestros propios controles de calidad para brindarte los ingredientes más confiables para tu producto final.' : 'To make sure you get the best product, we have installed our own quality checks to get you the most reliable ingredients for your end product.'}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div id="col1">
                <div className="pb-3 px-3 md:px-0">
                  <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">{isSpanish ? 'NO SOMOS DIFERENTES' :'WE ARE NOT DIFFERENT'}</h4>
                </div>
                <div className="space-y-6">
                  <p className="font-bold text-2xl px-2 lg:px-0">{isSpanish ? 'No todos reciben la nota' : 'Not everyone gets the memo'}</p>
                  <p className="text-[18px] px-2 lg:px-0">
                    {isSpanish ? 'Los fenómenos meteorológicos, los retrasos logísticos y las pandemias mundiales que hacen que todo el mundo se abastezca de papel higiénico y ficción postapocalíptica como guías: las cosas no siempre salen según lo planeado.' :'Weather events, logistical holdups, and worldwide pandemics that result in everyone stocking up on toilet paper and post-apocalyptic fiction as guidebooks – things don’t always go according to plan.'}
                  </p>
                  <p className="text-[18px] px-2 lg:px-0">
                    {isSpanish ? 'Pero eso no es más que un obstáculo en el camino cuando trabajas con Brokear' : 'But that’s nothing more than a bump in the road when you’re working with Brokear.'}
                  </p>
                  <p className="text-[18px] px-2 lg:px-0">
                    {isSpanish ? 'No te dejamos en la oscuridad. Estamos comprometidos con un servicio transparente, para que vos sepas inmediatamente cuando cambian los planes y seas parte del viaje desde el principio.' : 'We don’t leave you in the dark. We’re committed to transparent service, so you know immediately when plans change, and you’re part of the course-corrected journey from the start.'}
                  </p>
                </div>
              </div>
              <div id="col2" className=" flex flex-wrap items-end col-span-1 px-3">
                <div
                  className="border relative flex items-end w-full lg:w-fit bg-white h-[75%]"
                >
                  
                    <ExportedImage
                      className="absolute -top-[120px] rounded-full lg:-top-[120px] lg:-translate-x-0 left-[85px] lg:left-[200px] hover:animate-wiggle"
                      src={"/images/LogoLanding.jpg"}
                      alt="SidebarblogLogo"
                      width={201}
                      height={182}
                    />
                  

                  <div className="space-y-4 flex flex-col pb-5 pt-52 lg:pt-0">
                    <h1 className="text-white bg-red w-fit px-2 py-1 mx-auto font-Dancing ">
                      {isSpanish ? 'Tu fuente número uno de ingredientes especiales' :'Your #1 source of specialty ingredients'}
                    </h1>
                    <p className="w-fit mx-4 text-center text-[19px] ">
                      {isSpanish ? 'Obtenemos e importamos materias primas especiales de alta calidad a través de nuestra gran red global. Experimenta la diferencia.' : 'We source and import high-quality specialty raw ingredients through our large global network. Experience the difference.'}
                    </p>
                    <div className="flex flex-row gap-3 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]">
                          {isSpanish ? 'Contáctanos' : 'Contact Us'}
                        </button>
                      </Link>
                      <Link href="https://calendly.com/joaquin-sipowicz/30min?back=1&month=2023-09">
                        <button className="bg-[#D0E7D2] text-red hover:brightness-75 border border-red rounded-[3px] py-2 px-5 font-semibold w-fit hover:opacity-[0.85]">
                          {isSpanish ? 'Agenda una llamada' : 'Schedule A Call'}
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
