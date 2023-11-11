"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function SunflowerOil() {
    const sunflower = categories[3].products.sunflowerOil;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? sunflower?.title.esp : sunflower?.title.eng} description={isSpanish ? sunflower?.abstract.esp : sunflower?.abstract.eng} 
        name={isSpanish ? sunflower?.name.esp : sunflower?.name.eng} countries={isSpanish ? sunflower?.countries.esp : sunflower?.countries.eng}
        size={isSpanish ? sunflower?.size.esp : sunflower?.size.eng} shelfLife={isSpanish ? sunflower?.shelfLife.esp : sunflower?.shelfLife.eng} 
        use={isSpanish ? sunflower?.use.esp : sunflower?.use.eng} shippingStorage={isSpanish ? sunflower?.shippingStorage.esp : sunflower?.shippingStorage.eng} 
        imagen = {sunflower?.imagen}
        link = {sunflower?.link}/>
    </div>
  )
}

export default SunflowerOil
