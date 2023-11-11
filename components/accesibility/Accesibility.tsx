'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';

function Accesibility() {

  const isSpanish = useSelector(selectLanguage);

  return (
    <div>
      <h1 className='font-Grotesk text-[32px] md:text-[38px] font-semibold'>{isSpanish ? 'Declaración de accesibilidad' : 'Accessibility Statement'}</h1>
      <div className='text-[17px] md:text-[18px] space-y-5'>
        <p>{isSpanish ? 'Brokear se compromete a proporcionar un sitio web que sea accesible para todos los usuarios, incluidos aquellos con discapacidades. Nos esforzamos por seguir el estándar de nivel AA de las Pautas de accesibilidad al contenido web (WCAG) 2.1, que proporciona recomendaciones para hacer que el contenido web sea más accesible para las personas con discapacidades.' : 'Brokear is committed to providing a website that is accessible to all users, including those with disabilities. We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standard, which provides recommendations for making web content more accessible to people with disabilities.'}</p>
        <p>{isSpanish ? 'Nuestro sitio web está diseñado para ser compatible con tecnologías de asistencia, como lectores de pantalla, y hemos implementado varias funciones para mejorar la accesibilidad, que incluyen:' : 'Our website is designed to be compatible with assistive technologies such as screen readers, and we have implemented several features to improve accessibility, including:'}
        </p>
        <ul className='list-disc pl-7 px-2 lg:px-0'>
          <li className="marker:text-red"><span className='font-bold'>{isSpanish ? 'Texto alternativo para imágenes:' : 'Alternative text for images:'} </span>{isSpanish ? 'Proporcionamos texto alternativo para todas las imágenes de nuestro sitio web, que puede ser leído por lectores de pantalla y otras tecnologías de asistencia. Esto garantiza que los usuarios que no pueden ver imágenes aún puedan comprender su contenido y contexto.' : 'We provide alternative text for all images on our website, which can be read by screen readers and other assistive technologies. This ensures that users who cannot see images can still understand their content and context.'}</li>
          <li className="marker:text-red"><span className='font-bold'>{isSpanish ? 'Navegación clara y consistente:' : 'Clear and consistent navigation:'} </span>{isSpanish ? 'Hemos diseñado la navegación de nuestro sitio web para que sea clara y consistente en todo el sitio, facilitando a los usuarios encontrar el contenido que necesitan.' : 'We have designed our website’s navigation to be clear and consistent throughout the site, making it easier for users to find the content they need.'}</li>
          <li className="marker:text-red"><span className='font-bold'>{isSpanish ? 'Formularios accesibles por teclado:' : 'Keyboard accessible forms:'} </span>{isSpanish ? 'Nos hemos asegurado de que todos los formularios de nuestro sitio web se puedan navegar y completar usando solo un teclado, de modo que los usuarios que no pueden usar un mouse o un panel táctil aún puedan interactuar con nuestro sitio.' : 'We have made sure that all forms on our website can be navigated and filled out using only a keyboard, so that users who cannot use a mouse or touchpad can still interact with our site.'}</li>
          <li className="marker:text-red"><span className='font-bold'>{isSpanish ? 'Esquema de colores de alto contraste:' : 'High-contrast color scheme:'} </span>{isSpanish ? 'Hemos implementado una combinación de colores de alto contraste en nuestro sitio web para facilitar la lectura del contenido a los usuarios con baja visión.' : 'We have implemented a high-contrast color scheme on our website to make it easier for users with low vision to read the content.'}</li>
          <li className="marker:text-red"><span className='font-bold'>{isSpanish ? 'Enlaces descriptivos:' : 'Descriptive links:'} </span>{isSpanish ? 'Utilizamos enlaces descriptivos en todo nuestro sitio web, lo que facilita a los usuarios comprender adónde los llevará un enlace antes de hacer clic en él.' : 'We use descriptive links throughout our website, making it easier for users to understand where a link will take them before clicking on it.'}</li>
        </ul>
        <p>{isSpanish ? 'Entendemos que la accesibilidad es un proceso continuo y trabajamos continuamente para mejorar la experiencia del usuario para todos los visitantes de nuestro sitio. Esto incluye pruebas y evaluaciones periódicas de la accesibilidad de nuestro sitio web, así como capacitación de nuestro personal sobre las mejores prácticas de accesibilidad.' : 'We understand that accessibility is an ongoing process, and we are continually working to improve the user experience for all visitors to our site. This includes regular testing and evaluation of our website’s accessibility, as well as training our staff on best practices for accessibility.'}
        </p>
        <p>
          {isSpanish ? 'Si tiene algún comentario o sugerencia sobre cómo podemos mejorar la accesibilidad, no dude en' : 'If you have any feedback or suggestions on how we can improve accessibility, please don’t hesitate to'} <Link href="/contact"><span className='underline underline-offset-1 text-red'>{isSpanish ? 'contactarnos' : 'contact us'}</span></Link> . {isSpanish ? 'Estamos comprometidos a garantizar que nuestro sitio web sea accesible para todos los usuarios y apreciamos sus comentarios para ayudarnos a lograr este objetivo.' : 'We are committed to ensuring that our website is accessible to all users, and we appreciate your input in helping us achieve this goal.'}
        </p>
      </div>
    </div>
  )
}

export default Accesibility
