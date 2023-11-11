import Wave from '../../public/icons/Wave'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';

const Company = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <section className="">
      <Wave/>
      <div className="bg-lightPink -mt-1">
        <div className="px-2 xl:px-0 container mx-auto max-w-[1300px] pb-14">
          <h4 className="bg-red text-white uppercase w-fit text-center px-1 py-1 mb-2 font-Grotesk">
            {isSpanish? 'El mejor trato' : 'The Best Deal'}
          </h4>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 text-black leading-8 md:leading-tight'>
            <div>
              <h4 className="font-bold text-2xl mb-4 lg:px-0">
                {isSpanish? 'Buscar ingredientes de alta calidad y proveedores confiables es un proceso que no debe tomarse a la ligera' :'Searching for high quality ingredients and trusted suppliers is a process that shouldnt be taken lightly'}
              </h4>
              <p className="font-base text-lg font-Grotesk lg:px-0">
                {isSpanish ? 'A veces es un viaje que te hace desear haber ido al fondo del óceano. Es un viaje que te hace luchar las mismas batallas en un ciclo sin fin. Todos sabemos que algo debe cambiar, ¿no?  ' :'Sometimes it s a journey that makes you wish you d gone to the bottom of the ocean instead. It s a journey that has you fighting the same battles in a never ending cycle. We all know that something must change, right? '} 
                <span className='font-extrabold'>{isSpanish? 'Ahora lo hace' :'Now it has.'}</span>
              </p>
            </div>
            <div className='flex flex-col'>
              <h4 className="font-bold text-2xl mb-4 lg:px-0">
                {isSpanish? 'Con sede en el corazón de la Argentina y respaldado por un equipo global' :'Based in the heart of Argentina and supported by a global team'}
              </h4>
              <p className="font-base text-lg lg:px-0">
                {isSpanish? 'Trabajamos estrechamente con nuestros clientes para diseñar una cadena de suministro que tenga sentido para su negocio.  Aportamos años de experiencia para encontrar la mejor oferta para su empresa.':'We work closely with our clients to design a supply chain that makes sense for their business. We bring years of experience to find the best deal for your company.'} <Link href="/about"><span className='text-red hover:underline underline-offset-2'>{isSpanish ? 'Más sobre nosotros' :'More about us'}</span></Link> {isSpanish? 'y lo que' :'and what'} <Link href="/why-us"><span className='text-red hover:underline underline-offset-2'>{isSpanish ? 'nos hace diferente' : 'makes us different'}</span></Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Company;