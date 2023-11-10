import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Adzuki() {
    const runner = categories[2].products.runnerPeanuts;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? runner?.title.esp : runner?.title.eng} description={isSpanish ? runner?.abstract.esp : runner?.abstract.eng} 
        name={isSpanish ? runner?.name.esp : runner?.name.eng} countries={isSpanish ? runner?.countries.esp : runner?.countries.eng} imagen = {runner?.imagen}
        size={isSpanish ? runner?.size.esp : runner?.size.eng} shelfLife={isSpanish ? runner?.shelfLife.esp : runner?.shelfLife.eng} 
        use={isSpanish ? runner?.use.esp : runner?.use.eng} shippingStorage={isSpanish ? runner?.shippingStorage.esp : runner?.shippingStorage.eng}
        link = {runner?.link} />
    </div>
  )
}

export default Adzuki
