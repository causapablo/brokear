'use client'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function EuropeanQuality() {
  const eq = categories[0].products.europeanQuality;
  const isSpanish = useSelector(selectLanguage);

  return (
    <div>
      <Detalle title={isSpanish ? eq?.title.esp : eq?.title.eng} description={isSpanish ? eq?.abstract.esp : eq?.abstract.eng} 
        name={isSpanish ? eq?.name.esp : eq?.name.eng} countries={isSpanish ? eq?.countries.esp : eq?.countries.eng}
        size={isSpanish ? eq?.size.esp : eq?.size.eng} shelfLife={isSpanish ? eq?.shelfLife.esp : eq?.shelfLife.eng} 
        usa={isSpanish ? eq?.size.esp : eq?.size.eng} shippingStorage={isSpanish ? eq?.shippingStorage.esp : eq?.shippingStorage.eng}
        imagen = {eq?.imagen} 
        link = {eq?.link} />
    </div>
  )
}

export default EuropeanQuality;
