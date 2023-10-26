"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../../redux/translateSlice';

function Adzuki() {
    const darkRed = categories[2].products.darkRedKidneyBeans;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? darkRed?.title.esp : darkRed?.title.eng} description={isSpanish ? darkRed?.abstract.esp : darkRed?.abstract.eng} 
        name={isSpanish ? darkRed?.name.esp : darkRed?.name.eng} countries={isSpanish ? darkRed?.countries.esp : darkRed?.countries.eng} imagen = {darkRed?.imagen}
        size={isSpanish ? darkRed?.size.esp : darkRed?.size.eng} shelfLife={isSpanish ? darkRed?.shelfLife.esp : darkRed?.shelfLife.eng} 
        use={isSpanish ? darkRed?.use.esp : darkRed?.use.eng} shippingStorage={isSpanish ? darkRed?.use.esp : darkRed?.use.eng} link = {darkRed?.link}/>
    </div>
  )
}

export default Adzuki
