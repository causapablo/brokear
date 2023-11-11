'use client'
import categorias from '../../../../../../public/categorias.json';
import Detalle from '../../../../../../components/detalle/Detalle';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/translateSlice';
function Charcoal() {
  const charcoal = categorias[categorias.length - 1].products.charcoal;

  const isSpanish = useSelector(selectLanguage);

  return (
    <main>
      <Detalle title={isSpanish ? charcoal?.title.esp : charcoal?.title.eng} description={isSpanish ? charcoal?.abstract.esp : charcoal?.abstract.eng} 
        name={isSpanish ? charcoal?.name.esp : charcoal?.name.eng} countries={isSpanish ? charcoal?.countries.esp : charcoal?.countries.eng}
        size={isSpanish ? charcoal?.size.esp : charcoal?.size.eng} shelfLife={isSpanish ? charcoal?.shelfLife.esp : charcoal?.shelfLife.eng} 
        use={charcoal?.use.eng} shippingStorage={charcoal?.shippingStorage.eng}
        imagen = {charcoal?.imagen}
        link = {charcoal?.link} />
    </main>
  )
}

export default Charcoal
