"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';
function Adzuki() {
    const bb = categories[2].products.blackBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? bb?.title.esp : bb?.title.eng} description={isSpanish ? bb?.abstract.esp : bb?.abstract.eng} 
        name={isSpanish ? bb?.name.esp : bb?.name.eng} countries={isSpanish ? bb?.countries.esp : bb?.countries.eng} imagen = {bb?.imagen}
        size={isSpanish ? bb?.size.esp : bb?.size.eng} shelfLife={isSpanish ? bb?.shelfLife.esp : bb?.shelfLife.eng} 
        use={isSpanish ? bb?.use.esp : bb?.use.eng} shippingStorage={isSpanish ? bb?.shippingStorage.esp : bb?.shippingStorage.eng} link = {bb?.link}/>
    </div>
  )
}

export default Adzuki
