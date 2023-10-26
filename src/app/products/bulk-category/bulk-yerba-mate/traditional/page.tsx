'use client'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Traditional() {
  const trdt = categories[0].products.packaged;
  const isSpanish = useSelector(selectLanguage);


  return (
    <div>
      <Detalle title={isSpanish ? trdt?.title.esp : trdt?.title.eng} description={isSpanish ? trdt?.abstract.esp : trdt?.abstract.eng} 
        name={isSpanish ? trdt?.name.esp : trdt?.name.eng} countries={isSpanish ? trdt?.countries.esp : trdt?.countries.eng} link = {trdt?.link}
        size={isSpanish ? trdt?.size.esp : trdt?.size.eng} shelfLife={isSpanish ? trdt?.shelfLife.esp : trdt?.shelfLife.eng} 
        usa={isSpanish ? trdt?.size.esp : trdt?.size.eng} shippingStorage={isSpanish ? trdt?.shippingStorage.esp :trdt?.shippingStorage.eng} imagen = {trdt?.imagen} />
    </div>
  )
}

export default Traditional
