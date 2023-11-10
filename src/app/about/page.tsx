'use client'
import Wave from "../../../public/icons/Wave";
import ScheduleCall from "../../../components/schedulecall/ScheduleCall";
import Profile from "../../../components/profile/Profile";
import Team from "../../../components/team/Team";
import ExportedImage from "next-image-export-optimizer";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/translateSlice';


const Nosotros = () => {
  const isSpanish = useSelector(selectLanguage);
  return (
    <section>
      <div className="bg-gradient-to-b from-peach to-white" id="main">
        <div className="container mx-auto max-w-[1300px] pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 px-3">
            <div className="mx-auto">
              <ExportedImage src={"/images/LogoTractor.jpg"} alt="img" className=" hidden md:flex rounded-full" width={573} height={573} />
            </div>
            <div className="flex items-center justify-center pt-0 md:pt-5">
              <div>
                <h2 className="bg-red text-white text-base w-fit px-1 text-center py-1 font-Dancing">
                  {isSpanish ?'Sobre nosotros' : 'ABOUT US'}
                </h2>
                <h3 className="font-bold text-xl lg:text-2xl mt-3 mb-5">
                  {isSpanish ? 'Tomá asiento y déjanos que te contemos nuestra historia' : 'Sit back and let us tell you our story'}
                </h3>
                <div className="space-y-6 font-normal text-[19px]">
                  <p>
                    {isSpanish ? 'Somos proveedores incondicionales que estamos dispuestos a hacer lo que sea necesario para encontrar el ingrediente mágico que estás buscando.' : 'We are sourcing experts who are willing to do whatever it takes to find the perfect ingredient you’re looking for.'}
                  </p>
                  <p>
                    {isSpanish ? 'Hemos obtenido ingredientes de todo el mundo y nos hemos pasado la vida mejorando las cadenas de suministro de algunas de las marcas favoritas de América.' : 'We’ve sourced ingredients from around the world and dedicated our lives to improving the supply chains of some of the world most popular brands.'}
                  </p>
                  <p>
                    {isSpanish ? '¿Pero dónde empezó todo? Cuando estábamos hasta aquí con las deficiencias de la industria.' : 'But how did it all start? When we get tired of the limitations of the industry.'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave />
      <div className="bg-lightPink -mt-1" id="">
        <div className="container mx-auto max-w-[1300px] px-3 lg:px-0">
          <h4 className="bg-red px-2 py-1 text-white text-base uppercase w-fit text-center font-medium font-Dancing">
            {isSpanish ? 'Nuestro liderazgo' : 'Our Leadership'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-4 text-black">
            <div>
              <h4 className="text-justify font-bold md:text-[30px] text-[28px] pt-2 px-2 lg:px-0">
                {isSpanish ? 'El comienzo de algo verdaderamente excepcional' : 'The start of something truly exceptional.'}
              </h4>
              <p className="font-base text-lg pt-2 px-2 lg:px-0">
                {isSpanish ? 'Como director de operaciones, Joaquín observó cómo los proveedores cambiaban los precios, la calidad y los plazos de entrega por capricho.  Con tanto en juego, sabía que tenía que haber una manera mejor.  Se asoció con su compañera Eugenia para iniciar Brokear, una empresa basada en datos pero impulsada por las relaciones.' : 'As COO, Joaquin watched as vendors changed up pricing, quality, and lead times on a whim. With so much at stake, he knew there had to be a better way. He partnered with fellow Eugenia to start Brokear, a company that is data-informed but relationship-driven.'}
              </p>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full">
                <h4 className="text-xl px-2 lg:px-0">
                  {isSpanish?'Ahora tienen la misión de crear el proveedor que siempre soñaron con encontrar.':'Now they’re on a mission to create the supplier they always dreamed of finding.'}
                </h4>
                <p className="text-xl px-2 lg:px-0">
                  {isSpanish ? 'Trabajamos estrechamente con nuestros clientes para diseñar una cadena de suministro que tenga sentido para su negocio. Aportamos años de experiencia para encontrar la mejor oferta para su empresa. Más sobre nosotros y lo que nos hace diferentes.' : 'We work closely with our clients to design a supply chain that makes sense for their business. We bring years of experience to find the best deal for your company. More about us and what makes us different.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="background" className="py-36 bg-gradient-to-b from-lightPink to-white -mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto max-w-[1300px] px-3 lg:px-0">
          <Profile
            img={"/images/JoacoPerfil.jpg"}
            nombre="Joaquin Sipowicz"
            cargo="CEO"
            bio={isSpanish ? 'Joaquín nació y creció en Córdoba.  Estudió en la Universidad de Villa María, donde obtuvo la licenciatura en Comercio Exterior en 2018;  Luego de adquirir experiencia trabajando en diversas empresas, Joaquín unió fuerzas con Eugenia para cofundar Brokear, una empresa dinámica e innovadora;  La misión de Brokear es brindar soluciones accesibles y transparentes a individuos y empresas.' : "Joaquin was born and raised in Córdoba. He studied at the Universidad de Villa Maria, where he obtained a degree in Foreign Trade in 2018.; After gaining experience working in various companies, Joaquin joined forces with Eugenia to co-found Brokear, a dynamic and innovative company.; Brokear's mission is to provide accessible and transparent solutions to individuals and businesses."}
            funFact={isSpanish ? 'Joaquín es un entusiasta del padel, trotamundos y amante de la naturaleza.  Ya sea en la cancha, explorando nuevos horizontes o relajándose en el campo, abraza las diversas experiencias de la vida con pasión y entusiasmo.' : "Joaquin is a paddle enthusiast, globe-trotter, and nature lover. Whether on the court, exploring new horizons, or unwinding in the countryside, he embraces life's diverse experiences with passion and enthusiasm."} />
          <Profile
            img={"/images/EugePerfil.jpg"}
            nombre="Eugenia Doblack"
            cargo="CEO"
            bio={isSpanish ? 'Eugenia, cordobesa, cofundó Brokear junto a Joaquín ya que eran compañeros de estudios en la Universidad de Villa María;  Su compromiso inquebrantable con la transparencia y la accesibilidad en las finanzas refleja los valores que aprecia;  Con raíces en Córdoba, la misión de Eugenia en la vida se refleja en la misión de Brokear de brindar soluciones de primer nivel y generar un impacto positivo en sus clientes y la industria.' :"Eugenia, a Cordoban native, co-founded Brokear alongside Joaquin as they were partners of studies at Universidad de Villa María.; Her unwavering commitment to transparency and accessibility in finance reflects the values she holds dear.; With roots in Córdoba, Eugenia's mission in life is mirrored in Brokear's mission to provide top-notch solutions and make a positive impact on her clients and the industry."}
            funFact={isSpanish ? 'Le apasionan los viajes, la naturaleza y los paisajes, y es una auténtica master chef en la cocina.  Sus comidas no sólo son deliciosas;  son obras de arte culinarias.' :"She has a passion for traveling, nature, and landscapes, and she's a true master chef in the kitchen. Her meals are not just delicious; they are culinary works of art."} />
        </div>
      </div>
      <ScheduleCall />
      <div className="bg-gradient-to-b from-lightPink to-white pb-20">
        <div className="container mx-auto max-w-[1300px]">
          <div id="header" className="py-20 text-center space-y-4">
            <h4 className="bg-red text-white uppercase text-lg w-fit mx-auto py-1 px-2 font-Dancing">
              {isSpanish ? 'Nuestro equipo' : 'Our Team'}
            </h4>
            <h4 className="text-2xl w-fit mx-auto font-bold">
              {isSpanish? 'Resolver la cadena de suministro actual requiere un equipo verdaderamente global' : 'Solving today’s supply chain requires a truly global team'}
            </h4>
            <p className="text-lg w-fit mx-auto">
              {isSpanish ? 'Contamos con miembros del equipo en Argentina, España, Estados Unidos y más países.' :'We have team members in Argentina, Spain, USA and more countries.'}
            </p>
          </div>
          <div id="container">
            <div className="grid md:grid-cols-2 gap-16 px-3">
              <Team img={"/images/FlorenciaPerfil.jpg"} nombre="Florencia Silva" cargo="Account Manager" bio="" />
              <Team img={"/images/DoblakPerfil.jpg"} nombre="Juan Cruz Doblack" cargo="Marketing & Research" bio="" />
            </div>
          </div>
        </div>
      </div>
      <Wave />
      <div id="pictureSection" className="-mt-1">
        <div className="bg-gradient-to-b from-lightPink to-white pb-14 pt-28">
          <div className="container mx-auto max-w-[1300px]">
            <div id="header" className="pb-14">
              <h4 className="bg-red text-white uppercase w-fit mx-auto font-Dancing py-1 px-2">
               {isSpanish ? 'Mejor juntos' : 'better together'}
              </h4>
              <p className="text-2xl w-fit mx-auto font-bold py-4 text-center">
                {isSpanish ? "Totalmente distribuidos, siempre conectados." : 'Fully distributed, always connected.'}
              </p>
            </div>
            <div id="container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center px-3">
              <ExportedImage src={"/images/Company1.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company2.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company3.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company4.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company5.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company6.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company7.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company8.jpg"} alt="img" width={558} height={561} />
              <ExportedImage src={"/images/Company9.jpg"} alt="img" width={558} height={561} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
