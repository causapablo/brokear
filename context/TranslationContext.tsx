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
      'desc1': 'Para encontrar el mejor proveedor de materias primas, los compradores tienen que recorrer los interminables pasillos de Google, examinando todos los contactos posibles para encontrar un proveedor confiable.'
      
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
