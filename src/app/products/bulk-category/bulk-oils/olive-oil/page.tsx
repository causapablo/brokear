'use client'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function OliveOil() {
    const olive = categories[3].products.oliveOil;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? olive?.title.esp : olive?.title.eng} description={isSpanish? olive?.abstract.esp : olive?.abstract.eng} 
        name={isSpanish ? olive?.name.esp : olive?.name.eng} countries={isSpanish ? olive?.countries.esp : olive?.countries.eng}
        size={isSpanish ? olive?.size.esp : olive?.size.eng} shelfLife={isSpanish ? olive?.shelfLife.esp : olive?.shelfLife.eng} 
        use={isSpanish ? olive?.use.esp : olive?.use.eng} shippingStorage={isSpanish ? olive?.shippingStorage.esp : olive?.shippingStorage.eng}
        imagen = {olive?.imagen}
        link = {olive?.link} />
    </div>
  )
}

export default OliveOil