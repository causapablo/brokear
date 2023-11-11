'use client'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Organic() {
  const organic = categories[0].products.organic;
  const isSpanish = useSelector(selectLanguage);

  return (
    <div>
      <Detalle title={isSpanish ? organic?.title.esp : organic?.title.eng} description={isSpanish ? organic?.abstract.esp : organic?.abstract.eng} 
        name={isSpanish ? organic?.name.esp : organic?.name.eng} countries={isSpanish ? organic?.countries.esp : organic?.countries.eng} link = {organic?.link}
        size={isSpanish ? organic?.size.esp : organic?.size.eng} shelfLife={isSpanish ? organic?.shelfLife.esp : organic?.shelfLife.eng} 
        usa={isSpanish ? organic?.size.esp : organic?.size.eng} shippingStorage={isSpanish ? organic?.shippingStorage.esp : organic?.shippingStorage.eng} imagen = {organic?.imagen}  />
    </div>
  )
}

export default Organic
