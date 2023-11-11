"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function SoyOil() {
    const soy = categories[3].products.soyOil;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? soy?.title.esp : soy?.title.eng} description={isSpanish ? soy?.abstract.esp : soy?.abstract.eng} 
        name={isSpanish ? soy?.name.esp : soy?.name.eng} countries={isSpanish ? soy?.countries.esp : soy?.countries.eng}
        size={isSpanish ? soy?.size.esp : soy?.size.eng} shelfLife={isSpanish ? soy?.shelfLife.esp : soy?.shelfLife.eng} 
        use={isSpanish ? soy?.use.esp : soy?.use.eng} shippingStorage={isSpanish ? soy?.shippingStorage.esp : soy?.shippingStorage.eng}
        imagen = {soy?.imagen}
        link = {soy?.link} />
    </div>
  )
}

export default SoyOil
