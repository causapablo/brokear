'use client'
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/translateSlice';

function Terms() {

  const isSpanish = useSelector(selectLanguage);

  return (
    <div className=''>
      <h1 className='font-Grotesk text-[32px] md:text-[38px] font-semibold px-2 lg:px-0'>{isSpanish ? 'Términos y condiciones' : 'Terms & Conditions'}</h1>
      <div className='space-y-8'>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold px-2 lg:px-0'>{isSpanish ? '1. Términos' : '1. Terms'}</h2>
          <p className='text-[18px] leading-relaxed px-2 lg:px-0'>
            {isSpanish ? 'Al acceder a este sitio web, aceptas estar sujeto a los Términos y condiciones de uso de este sitio web, a todas las leyes y regulaciones aplicables, y aceptas que sos responsable del cumplimiento de las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio. Los materiales contenidos en este sitio web están protegidos por las leyes de derechos de autor y marcas comerciales aplicables.' : 'By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold px-2 lg:px-0'>{isSpanish ? '2. Licencia de uso' : '2. Use License'}</h2>
          <div className='space-y-6'>
            <p className='text-[18px] leading-relaxed px-2 lg:px-0'>
              {isSpanish ? 'Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Brokear para visualización transitoria personal y no comercial únicamente. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes:' : 'Permission is granted to temporarily download one copy of the materials (information or software) on Brokear’ web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:'}
            </p>
            <ul className='list-disc pl-7 text-[16px] md:text-[18px] leading-relaxed space-y-2'>
              <li className="marker:text-red">{isSpanish ? 'modificar o copiar los materiales.' : 'modify or copy the materials.'}</li>
              <li className="marker:text-red">{isSpanish ? 'utilizar los materiales para cualquier fin comercial o para cualquier exhibición pública (comercial o no comercial).' : 'use the materials for any commercial purpose, or for any public display (commercial or non-commercial).'}</li>
              <li className="marker:text-red">{isSpanish ? 'intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de Brokear.' : 'attempt to decompile or reverse engineer any software contained on Brokear’s web site.'}</li>
              <li className="marker:text-red">{isSpanish ? 'eliminar cualquier copyright u otras anotaciones de propiedad de los materiales.' : 'remove any copyright or other proprietary notations from the materials.'}</li>
              <li className="marker:text-red">{isSpanish ? 'transferir los materiales a otra persona o “replicar” los materiales en cualquier otro servidor.' : 'transfer the materials to another person or “mirror” the materials on any other server.'}</li>
            </ul>
            <p className='text-[18px] leading-relaxed px-2 lg:px-0'>
              {isSpanish ? 'Esta licencia finalizará automáticamente si violas cualquiera de estas restricciones y Brokear podrá cancelarla en cualquier momento. Al finalizar la visualización de estos materiales o al finalizar esta licencia, debes destruir cualquier material descargado que tenga en su poder, ya sea en formato electrónico o impreso.' : 'This license shall automatically terminate if you violate any of these restrictions and may be terminated by Brokear at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.'}
            </p>
          </div>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>3. Disclaimer</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'Los materiales del sitio web de Brokear se proporcionan "tal cual". Brokear no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, entre otras, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos. Además, Brokear no garantiza ni hace ninguna declaración con respecto a la exactitud, los resultados probables o la confiabilidad del uso de los materiales en su sitio web de Internet o de otro modo en relación con dichos materiales o en cualquier sitio vinculado a este sitio.' : 'The materials on Brokear’ web site are provided “as is”. Brokear makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Brokear does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>{isSpanish ? '4. Limitaciones' : '4. Limitations'}</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'En ningún caso Brokear o sus proveedores serán responsables de los daños (incluidos, entre otros, los daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio de Internet de Brokear. , incluso si Brokear o un representante autorizado de Brokear han sido notificados oralmente o por escrito de la posibilidad de dicho daño. Debido a que algunas jurisdicciones no permiten limitaciones a las garantías implícitas o limitaciones de responsabilidad por daños consecuentes o incidentales, es posible que estas limitaciones no se apliquen a usted.' : 'In no event shall Brokear or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Brokear’ Internet site, even if Brokear or a Brokear authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>{isSpanish ? '5. Revisiones y erratas' : '5. Revisions and Errata'}</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'Los materiales que aparecen en el sitio web de Brokear podrían incluir errores técnicos, tipográficos o fotográficos. Brokear no garantiza que ninguno de los materiales de su sitio web sea exacto, completo o actual. Brokear puede realizar cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Brokear no asume ningún compromiso de actualizar los materiales.' : 'The materials appearing on Brokear’ web site could include technical, typographical, or photographic errors. Brokear does not warrant that any of the materials on its web site are accurate, complete, or current. Brokear may make changes to the materials contained on its web site at any time without notice. Brokear does not, however, make any commitment to update the materials.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>6. Links</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'Brokear no ha revisado todos los sitios vinculados a su sitio web de Internet y no es responsable del contenido de dichos sitios vinculados. La inclusión de cualquier vínculo no implica aprobación del sitio por parte de Brokear. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.' : 'Brokear has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Brokear of the site. Use of any such linked web site is at the user’s own risk.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>{isSpanish ? '7. Modificaciones de los términos de uso del sitio' : '7. Site Terms of Use Modifications'}</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'Brokear puede revisar estos términos de uso de su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión vigente en ese momento de estos Términos y condiciones de uso.' : 'Brokear may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.'}
          </p>
        </div>
        <div>
          <h2 className='font-Grotesk text-[24px] md:text-[26px] font-semibold'>{isSpanish ? 'Ley vigente' :'8. Governing Law'}</h2>
          <p className='text-[16px] md:text-[18px] leading-relaxed'>
            {isSpanish ? 'Cualquier reclamo relacionado con el sitio web de Brokear se regirá por las leyes de Argentina sin tener en cuenta sus disposiciones sobre conflicto de leyes.' : 'Any claim relating to Brokear’ web site shall be governed by the laws of Argentina without regard to its conflict of law provisions.'}
          </p>
        </div>
        <p className='text-[18px] leading-relaxed lg:px-0'>{isSpanish ? 'Términos y Condiciones Generales aplicables al Uso de un Sitio Web.' : 'General Terms and Conditions applicable to Use of a Web Site.'}</p>
      </div>
      
    </div>
  )
}

export default Terms
