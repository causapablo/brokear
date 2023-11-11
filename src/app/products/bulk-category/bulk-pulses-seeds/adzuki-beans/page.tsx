"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const adzuki = categories[2].products.adzukiBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? adzuki?.title.esp : adzuki?.title.eng} description={isSpanish ? adzuki?.abstract.esp : adzuki?.abstract.eng} 
        name={isSpanish ? adzuki?.name.esp : adzuki?.name.eng} countries={isSpanish ? adzuki?.countries.esp : adzuki?.countries.eng} link = {adzuki?.link}
        size={isSpanish ? adzuki?.size.esp : adzuki?.size.eng} shelfLife={isSpanish ? adzuki?.shelfLife.esp : adzuki?.shelfLife.eng} 
        use={isSpanish ? adzuki?.use.esp : adzuki?.use.eng} shippingStorage={isSpanish ? adzuki?.shippingStorage.esp : adzuki?.shippingStorage.eng} imagen = {adzuki?.imagen}/>
    </div>
  )
}

export default Adzuki
