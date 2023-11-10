"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Adzuki() {
    const ab = categories[2].products.alubiaBeans;
    const isSpanish = useSelector(selectLanguage);
      
  return (
    <div>
      <Detalle title={isSpanish ? ab?.title.esp : ab?.title.eng} description={isSpanish ? ab?.abstract.esp : ab?.abstract.eng} 
        name={isSpanish ? ab?.name.esp : ab?.name.eng} countries={isSpanish ? ab?.countries.esp : ab?.countries.eng} imagen = {ab?.imagen}
        size={isSpanish ? ab?.size.esp : ab?.size.eng} shelfLife={isSpanish ? ab?.shelfLife.esp : ab?.shelfLife.eng} 
        use={isSpanish ? ab?.use.esp : ab?.use.eng} shippingStorage={isSpanish ? ab?.shippingStorage.esp : ab?.shippingStorage.eng} link = {ab?.link}/>
    </div>
  )
}

export default Adzuki
