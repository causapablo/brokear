"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';


function GreenTea() {
    const gt = categories[1].products.greenTea;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? gt?.title.esp : gt?.title.eng} description={isSpanish ? gt?.abstract.esp : gt?.abstract.eng} 
        name={isSpanish ? gt?.name.esp : gt?.name.eng} countries={isSpanish ? gt?.countries.esp : gt?.countries.eng}
        size={isSpanish ? gt?.size.esp : gt?.size.eng} shelfLife={isSpanish ? gt?.shelfLife.esp : gt?.shelfLife.eng} 
        use={isSpanish ? gt?.use.esp : gt?.use.eng} shippingStorage={isSpanish ? gt?.shippingStorage.esp : gt?.shippingStorage.eng} 
        imagen = {gt?.imagen}
        link = {gt?.link} />
    </div>
  )
}

export default GreenTea
