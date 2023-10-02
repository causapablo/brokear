// TranslationContext.js

import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation debe ser utilizado dentro de un TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  const translations = {
    es: {
      'tituloLanding': 'Obtener tu producto nunca fue tan fácil',
      'subtitloLanding': 'Nos especializamos en el abastecimiento y envío de materias primas de primer nivel, desde todo el mundo',
      'subtitulo2': 'Conectando los ingredientes para tu próximo proyecto de abastecimiento',
      'aboutUsButton': 'Sobre nosotros',
      'ourProductsButton': 'Nuestros productos',
      'tratoPinkWave': 'El mejor trato',
      'titulo1PinkWave': 'La búsqueda de ingredientes de alta calidad y proveedores confiables es un proceso que no debería tomarse a la ligera',
      'explicacion1PinkWave': 'A veces es un viaje que te hace desear haber ido al fondo del óceano. Es un viaje que te hace luchas las mismas batallas en un ciclo sin fin. Todos sabemos que algo debe cambiar, ¿no?, Ahora lo hace',
      'titulo2PinkWave': 'Con sede en el corazón de la Argentina y respaldado por un equipo global',
      'diferencia': 'Experimenta la diferencia',
      'tituloDiferencia': 'Ponte en contacto para obtener más información sobre como podemos ofrecerte el mejor trato',
      'contactUsButton': 'Contactános',
      'programarLlamada': 'Programá una llamada',
      'prodDestacados': 'Productos destacados',
      'verTodosProd': 'Ver Todos los Productos',
      'catDestacados': 'Categorias destacadas',
      'yerbaAndTeCat': 'Yerba Mate & Te',
      'nuecesYSemCat': 'Nueces y Semillas',
      'veganoCat': 'Proteína Plant Based ',
      'organico': 'Organico',
      'empezaYa': 'Empeza ya a...',
      'punto1': 'Ahorrá tiempo valorable en otras actividades y permítenos buscar tus proveedores de confianza',
      'punto2': 'Trabajamos con certeza, con proceso claros y ordenados con nuestra propia cadena de suministros',
      'punto3': 'Tené los mejores costos con una calidad garantizada',
      'erase': 'Érase una vez',
      'explicacionErase': 'Estábamos en tus zapatos, buscando proveedores confiables y que estén siempre presentes. Como resultado, hemos evolucionado hasta convertirnos en un proveedor que se alinea con los objetivos de nuestros clientes, y nos convertimos en el proveedor que siempre buscamos pero nunca encontramos.',
      'leeHist': 'leé nuestra historia.',
      'ponteCont': 'Ponte en contacto',
      'tituloNosotros': 'Sobre nosotros',
      'subtituloNosotros': 'Tomá asiento y déjanos que te contemos nuestra historia',
      'subtitulo2NosotrosA': 'Somos proveedores incondicionales que estamos dispuestos a hacer lo que sea necesario para encontrar el ingrediente mágico que estás buscando.',
      'subtitulo2NostrosB': 'Hemos obtenido ingredientes de todo el mundo y nos hemos pasado la vida mejorando las cadenas de suministro de algunas de las marcas favoritas de América.',
      'subtitulo2NosotrosC': '¿Pero dónde empezó todo? Cuando estábamos hasta aquí con las deficiencias de la industria.',
      'liderPinkWave': 'Nuestro liderazgo',
      'tituloLiderPinkWave': 'El comienzo de algo verdaderamente excepcional',
      'mejorJuntos': 'Mejor juntos',
      'tituloMejorJuntos': 'Totalmente distribuidos, siempre conectados.',
      'porque': 'Por qué elegirnos a nosotros',
      'tituloPorque': 'Somos expertos en gestionar ciclos de adquisiciones de principio a fin.',
      'subtituloPorque': 'Nuestro equipo tiene experiencia en la gestión de todas sus necesidades de abastecimiento y reabastecimiento. Años de experiencia como clientes y proveedores nos han enseñado a afrontar cualquier reto.',
      'expPorque': 'NUESTRA EXPERIENCIA',
      'exp2Porque': 'Nuestra experiencia',
      'redPorque': 'Red de abastecimiento global',
      'tituloRedPorque': 'Nos abastecemos de los proveedores más confiables y asequibles del mundo.',
      'inventorioPorque': 'La gestión del inventario',
      'tituloInventorioPorque': 'Te ayudamos a gestionar tu stock para optimizar tus costos de inventario.',
      'soportePorque': 'Soporte regulatorio',
      'tituloSoporte': 'Nos encargamos de toda la documentación y validación de cumplimiento.',
      'solucionPorque': 'Soluciones Logísticas',
      'tituloSolucion': 'Buscamos soluciones que resuelvan los desafíos reales que enfrenta.',
      'industriaPorque': 'Desafíos de la industria',
      'tituloIndustra1': "Fuera con lo viejo, dentro con lo nuevo",
      'subtituloIndustria1': 'Encontrar los ingredientes adecuados no es un ejercicio sencillo en el que puedas sentarte y relajarte mientras todo encaja. Es un viaje que requiere compromiso, donde los desafíos se superan en cada paso.',
      'tituloIndustria2': '¿Cuál es la diferencia en nuestro enfoque?',
      'subtituloIndustria2': 'Cuando tiene un socio de suministro estratégico que comprende los problemas y desafíos del ciclo de adquisiciones, será mejor que tenga listo un libro y una taza de té para todo el tiempo que estamos a punto de brindarle.',
      'problemasPorque': 'TUS PROBLEMAS',
      'drop1': 'Búsquedas que consumen mucho tiempo',
      'desc1': 'Para encontrar el mejor proveedor de materias primas, los compradores tienen que recorrer los interminables pasillos de Google, examinando todos los contactos posibles para encontrar un proveedor confiable.',
      'drop2': 'Incertidumbre en la cadena de suministro',
      'desc2': 'Trabajando constantemente en la incertidumbre, quedándote en la oscuridad cuando tus ingredientes quedan atrapados en un contenedor que no puede llegar a ti debido a la logística, las regulaciones o el fin del mundo tal como lo conocemos.',
      'drop3': 'Depresión de la persona intermediaria',
      'desc3': 'Tener que trabajar a través de un corredor que no hace más que actuar como intermediario que transmite mensajes, sin agregar ningún valor real al viaje.',
      'drop4': 'Lucha contra incendios reactiva',
      'desc4': '“Apagar incendios” todo el tiempo, reaccionando a problemas en la cadena de suministro que requieren buscar en el último momento formas de arreglar las fugas en el barco de la cadena de suministro.',
      'drop5': 'Problemas de precios, de un extremo a otro',
      'desc5': 'Ser presionado para reducir costos en lugar de poder establecer relaciones con los proveedores. Y luego tener que lidiar con precios fluctuantes que están “fuera del alcance de todos”.',
      'drop6': '(APENAS) Garantía de calidad estándar',
      'desc6': 'Tener que preocuparse porque los controles de control de calidad estándar no cumplen realmente con los estándares que proclaman probar, lo que genera retiros del mercado y riesgos para la salud.',
      'serviciosPorque': 'NUESTROS SERVICIOS',
      '1drop': 'Eliminar la redundancia',
      '1desc': 'Eliminamos el “desperdicio”… en todos los sentidos de la palabra. Creamos una solución de abastecimiento más sostenible que elimina el “concepto de intermediario” y le ofrece una solución de abastecimiento confiable.',
      '2drop': 'Línea directa con proveedores',
      '2desc': 'Ofrecemos a nuestros clientes una línea directa con los ingredientes, en lugar de ampliar aún más la cadena de suministro. Al establecer relaciones con nuestros proveedores, le brindamos acceso inmediato a relaciones duraderas.',
      '3drop': 'Te respaldamos a largo plazo',
      '3desc': 'No somos una empresa basada en transacciones, estamos en esto por las relaciones a largo plazo que nos permitan convertirnos en socios estratégicos.',
      '4drop': 'Planificación de inventario proactiva',
      '4desc': 'Le ayudamos a planificar su inventario de manera óptima, ayudándolo a reducir costos y minimizar el stock disponible redundante, tomando en consideración factores del mundo real, desde desastres naturales hasta problemas logísticos.',
      '5drop': 'Precios competitivos en todos los aspectos',
      '5desc': 'Como importadores a gran escala, podemos ofrecer una respuesta más asequible a sus problemas con los ingredientes, ayudándole a su vez a crear precios más competitivos. Hacemos que nuestros precios sean aún más competitivos utilizando datos históricos y múltiples fuentes de precios para formular el precio final.',
      '6drop': 'Seguro de calidad',
      '6desc': 'Para asegurarnos de que obtenga el mejor producto, hemos instalado nuestros propios controles de calidad para brindarle los ingredientes más confiables para su producto final.',
      'diferentesPorque': 'SOMOS DIFERENTES',
      'tituloDiferente': 'No todos reciben la nota',
      'subtituloDiferente1': 'Los fenómenos meteorológicos, los retrasos logísticos y las pandemias mundiales que hacen que todo el mundo se abastezca de papel higiénico y ficción postapocalíptica como guías: las cosas no siempre salen según lo planeado.',
      'subtituloDiferente2': 'Pero eso no es más que un obstáculo en el camino cuando trabajas con Brokear',
      'subtituloDiferente3': 'No te dejamos en la oscuridad. Estamos comprometidos con un servicio transparente, para que vos sepas inmediatamente cuando cambian los planes y seas parte del viaje desde el principio.',
      'contact': 'Contactanos',
      'tituloContact': 'Nos encantaría oír de vos',
      'subtituloContact': 'Ya sea que necesite más información, una cotización o desee solicitar una muestra de nuestros ingredientes de alta calidad, estamos aquí para ayudarlo. Complete el siguiente formulario y háganos saber cómo podemos ayudarlo.',
      'subtituloContact2': 'También puede conectarse con nosotros en',
      'linkedinContact': 'Linkedin',
      'subtituloContact3': 'para mantenerse actualizado con nuestras últimas noticias y ofertas,',
      'llamadaContact': 'o programá una llamada',
      'subtituloContact4': 'con uno de nuestros expertos para analizar sus necesidades específicas.',
      'nombreContact': 'Nombre',
      'apellidoContact': 'Apellido',
      'telContact': 'Teléfono',
      'mesContact': 'Mensaje',
      'submitContact': 'Enviar'
      
    },
    en: {
      'tituloLanding': 'Getting your product has never been so easy',
      'Esto es una prueba de traducción': 'This is a translation test',
    },
  };

  const translate = (text) => {
    if (translations[lang] && translations[lang][text]) {
      return translations[lang][text];
    } else {
      return text;
    }
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
