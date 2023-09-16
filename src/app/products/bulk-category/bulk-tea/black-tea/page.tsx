import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function BlackTea() {
    const bt = categories[1].products.blackTea;
    
  return (
    <div>
      <Detalle title={bt?.title.eng} description={bt?.abstract.eng} name={bt?.name.eng} countries={bt?.countries.eng}
        size={bt?.size.eng} shelfLife={bt?.shelfLife.eng} use={bt?.use.eng} shippingStorage={bt?.shippingStorage.eng}
        imagen = {bt?.imagen}
        link = {bt?.link} />
    </div>
  )
}

export default BlackTea
