"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const lightRed = categories[2].products.lightRedKidneyBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? lightRed?.title.esp : lightRed?.title.eng} description={isSpanish ? lightRed?.abstract.esp : lightRed?.abstract.eng} 
        name={isSpanish ? lightRed?.name.esp : lightRed?.name.eng} countries={isSpanish ? lightRed?.countries.esp : lightRed?.countries.eng} imagen = {lightRed?.imagen}
        size={isSpanish ? lightRed?.size.esp : lightRed?.size.eng} shelfLife={isSpanish ? lightRed?.shelfLife.esp : lightRed?.shelfLife.eng} 
        use={isSpanish ? lightRed?.use.esp : lightRed?.use.eng} shippingStorage={isSpanish ? lightRed?.shippingStorage.esp : lightRed?.shippingStorage.eng} link = {lightRed?.link} />
    </div>
  )
}

export default Adzuki
