'use client'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';


function Bulk() {
    const bulk = categories[0].products.bulk;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? bulk?.title.esp : bulk?.title.eng} description={isSpanish ? bulk?.abstract.esp : bulk?.abstract.eng} 
        name={isSpanish ? bulk?.name.esp : bulk?.name.eng} countries={isSpanish ? bulk?.countries.esp : bulk?.countries.eng} link = {bulk?.link}
        size={isSpanish ? bulk?.size.esp : bulk?.size.eng} shelfLife={isSpanish ? bulk?.shelfLife.esp : bulk?.shelfLife.eng} 
        use={isSpanish ? bulk?.use.esp : bulk?.use.eng} shippingStorage={isSpanish ? bulk?.shippingStorage.esp : bulk?.shippingStorage.eng} imagen = {bulk?.imagen}  />
    </div>
  )
}

export default Bulk
