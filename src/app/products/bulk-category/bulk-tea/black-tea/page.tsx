"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function BlackTea() {
    const bt = categories[1].products.blackTea;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? bt?.title.esp : bt?.title.eng} description={isSpanish ? bt?.abstract.esp : bt?.abstract.eng} 
        name={isSpanish ? bt?.name.esp : bt?.name.eng} countries={isSpanish ? bt?.countries.esp : bt?.countries.eng}
        size={isSpanish ? bt?.size.esp : bt?.size.eng} shelfLife={isSpanish ? bt?.shelfLife.esp : bt?.shelfLife.eng} 
        use={isSpanish ? bt?.use.esp : bt?.use.eng} shippingStorage={isSpanish ? bt?.shippingStorage.esp : bt?.shippingStorage.eng}
        imagen = {bt?.imagen}
        link = {bt?.link} />
    </div>
  )
}

export default BlackTea
