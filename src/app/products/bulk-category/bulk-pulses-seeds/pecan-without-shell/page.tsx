"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const pecanWShell = categories[2].products.pecanWithout;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? pecanWShell?.title.esp : pecanWShell?.title.eng} description={isSpanish ? pecanWShell?.abstract.esp : pecanWShell?.abstract.eng} 
        name={isSpanish ? pecanWShell?.name.esp : pecanWShell?.name.eng} countries={isSpanish ? pecanWShell?.countries.esp : pecanWShell?.countries.eng} imagen = {pecanWShell?.imagen}
        size={isSpanish ? pecanWShell?.size.esp : pecanWShell?.size.eng} shelfLife={isSpanish ? pecanWShell?.shelfLife.esp : pecanWShell?.shelfLife.eng} 
        use={isSpanish ? pecanWShell?.use.esp : pecanWShell?.use.eng} shippingStorage={isSpanish ? pecanWShell?.shippingStorage.esp : pecanWShell?.shippingStorage.eng} link = {pecanWShell?.link} />
    </div>
  )
}

export default Adzuki
