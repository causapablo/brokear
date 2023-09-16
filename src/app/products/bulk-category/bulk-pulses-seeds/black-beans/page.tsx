import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
import { BiBadgeCheck } from 'react-icons/bi';
function Adzuki() {
    const bb = categories[2].products.blackBeans;
    
  return (
    <div>
      <Detalle title={bb?.title.eng} description={bb?.abstract.eng} name={bb?.name.eng} countries={bb?.countries.eng} imagen = {bb?.imagen}
        size={bb?.size.eng} shelfLife={bb?.shelfLife.eng} use={bb?.use.eng} shippingStorage={bb?.shippingStorage.eng} link = {bb?.link}/>
    </div>
  )
}

export default Adzuki
