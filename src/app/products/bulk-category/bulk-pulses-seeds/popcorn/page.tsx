"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Adzuki() {
    const popcorn = categories[2].products.popcorn;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? popcorn?.title.esp : popcorn?.title.eng} description={isSpanish ? popcorn?.abstract.esp : popcorn?.abstract.eng} 
        name={isSpanish ? popcorn?.name.esp : popcorn?.name.eng} countries={isSpanish ? popcorn?.countries.esp : popcorn?.countries.eng} imagen = {popcorn?.imagen}
        size={isSpanish ? popcorn?.size.esp : popcorn?.size.eng} shelfLife={isSpanish ? popcorn?.shelfLife.esp : popcorn?.shelfLife.eng} 
        use={isSpanish ? popcorn?.use.esp : popcorn?.use.eng} shippingStorage={isSpanish ? popcorn?.shippingStorage.esp : popcorn?.shippingStorage.eng}
        link = {popcorn?.link} />
    </div>
  )
}

export default Adzuki
