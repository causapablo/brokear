"use client"
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';

function Adzuki() {
    const chia = categories[2].products.chiaSeeds;
    const isSpanish = useSelector(selectLanguage);

  return (
    <div>
      <Detalle title={isSpanish ? chia?.title.esp :chia?.title.eng} description={isSpanish ? chia?.abstract.esp : chia?.abstract.eng} 
        name={isSpanish ? chia?.name.esp : chia?.name.eng} countries={isSpanish ? chia?.countries.esp : chia?.countries.eng} imagen = {chia?.imagen}
        size={isSpanish ? chia?.size.esp : chia?.size.eng} shelfLife={isSpanish ? chia?.shelfLife.esp : chia?.shelfLife.eng} 
        use={isSpanish ? chia?.use.esp : chia?.use.eng} shippingStorage={isSpanish ? chia?.shippingStorage.esp : chia?.shippingStorage.eng} link = {chia?.link}/>
    </div>
  )
}

export default Adzuki
