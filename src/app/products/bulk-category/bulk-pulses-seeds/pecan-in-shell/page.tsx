"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const pecanShell = categories[2].products.pecanInShell;
    const isSpanish = useSelector(selectLanguage);
    
  return (
    <div>
      <Detalle title={isSpanish ? pecanShell?.title.esp : pecanShell?.title.eng} description={isSpanish ? pecanShell?.abstract.esp : pecanShell?.abstract.eng} 
        name={isSpanish ? pecanShell?.name.esp : pecanShell?.name.eng} countries={isSpanish ? pecanShell?.countries.esp : pecanShell?.countries.eng} imagen = {pecanShell?.imagen}
        size={isSpanish ? pecanShell?.size.esp : pecanShell?.size.eng} shelfLife={isSpanish ? pecanShell?.shelfLife.esp : pecanShell?.shelfLife.eng} 
        use={isSpanish ? pecanShell?.use.esp : pecanShell?.use.eng} shippingStorage={isSpanish ? pecanShell?.shippingStorage.esp : pecanShell?.shippingStorage.eng} link = {pecanShell?.link}/>
    </div>
  )
}

export default Adzuki
