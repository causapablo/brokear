"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Adzuki() {
    const greenPeas = categories[2].products.greenPeas;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? greenPeas?.title.esp : greenPeas?.title.eng} description={isSpanish ? greenPeas?.abstract.esp : greenPeas?.abstract.eng} 
        name={isSpanish ? greenPeas?.name.esp : greenPeas?.name.eng} countries={isSpanish ? greenPeas?.countries.esp : greenPeas?.countries.eng} imagen = {greenPeas?.imagen}
        size={isSpanish ? greenPeas?.size.esp : greenPeas?.size.eng} shelfLife={isSpanish ? greenPeas?.shelfLife.esp : greenPeas?.shelfLife.eng} 
        use={isSpanish ? greenPeas?.use.esp : greenPeas?.use.eng} shippingStorage={isSpanish ? greenPeas?.shippingStorage.esp : greenPeas?.shippingStorage.eng} link = {greenPeas?.link}/>
    </div>
  )
}

export default Adzuki
