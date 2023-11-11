"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const chickPeas = categories[2].products.chickPeas;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? chickPeas?.title.esp : chickPeas?.title.eng} description={isSpanish ? chickPeas?.abstract.esp : chickPeas?.abstract.eng} 
        name={isSpanish ? chickPeas?.name.esp : chickPeas?.name.eng} countries={isSpanish ? chickPeas?.countries.esp : chickPeas?.countries.eng} imagen = {chickPeas?.imagen}
        size={isSpanish ? chickPeas?.size.esp : chickPeas?.size.eng} shelfLife={isSpanish ? chickPeas?.shelfLife.eng : chickPeas?.shelfLife.eng} 
        use={isSpanish ? chickPeas?.use.esp : chickPeas?.use.eng} shippingStorage={isSpanish ?chickPeas?.shippingStorage.esp : chickPeas?.shippingStorage.eng} link = {chickPeas?.link}/>
    </div>
  )
}

export default Adzuki
