"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const beb = categories[2].products.blackEyeBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? beb?.title.esp : beb?.title.eng} description={isSpanish ? beb?.abstract.esp : beb?.abstract.eng} 
        name={isSpanish ? beb?.name.esp : beb?.name.eng} countries={isSpanish ? beb?.countries.esp : beb?.countries.eng} imagen = {beb?.imagen}
        size={isSpanish ? beb?.size.esp : beb?.size.eng} shelfLife={isSpanish ? beb?.shelfLife.esp : beb?.shelfLife.eng} 
        use={isSpanish ? beb?.use.esp : beb?.use.eng} shippingStorage={isSpanish ? beb?.shippingStorage.esp : beb?.shippingStorage.eng} link = {beb?.link}/>
    </div>
  )
}

export default Adzuki
