"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const mung = categories[2].products.mungBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? mung?.title.esp : mung?.title.eng} description={isSpanish ? mung?.abstract.esp : mung?.abstract.eng} 
        name={isSpanish ? mung?.name.esp : mung?.name.eng} countries={isSpanish ? mung?.countries.esp : mung?.countries.eng} imagen = {mung?.imagen}
        size={isSpanish ? mung?.size.esp : mung?.size.eng} shelfLife={isSpanish ? mung?.shelfLife.esp : mung?.shelfLife.eng} 
        use={isSpanish ? mung?.use.esp : mung?.use.eng} shippingStorage={isSpanish ? mung?.shippingStorage.esp : mung?.shippingStorage.eng}  link = {mung?.link}/>
    </div>
  )
}

export default Adzuki
