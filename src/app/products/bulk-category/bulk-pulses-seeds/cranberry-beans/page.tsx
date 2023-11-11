"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const cranberry = categories[2].products.cranberryBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? cranberry?.title.esp : cranberry?.title.eng} description={isSpanish ? cranberry?.abstract.esp : cranberry?.abstract.eng} 
        name={isSpanish ? cranberry?.name.esp : cranberry?.name.eng} countries={isSpanish ? cranberry?.countries.esp : cranberry?.countries.eng} imagen = {cranberry?.imagen}
        size={isSpanish ? cranberry?.size.esp : cranberry?.size.eng} shelfLife={isSpanish ? cranberry?.shelfLife.esp : cranberry?.shelfLife.eng} 
        use={isSpanish ? cranberry?.use.esp : cranberry?.use.eng} shippingStorage={isSpanish ? cranberry?.shippingStorage.esp : cranberry?.shippingStorage.eng} link = {cranberry?.link}/>
    </div>
  )
}

export default Adzuki
