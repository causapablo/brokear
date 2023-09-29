import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function OliveOil() {
    const olive = categories[3].products.oliveOil;
    
  return (
    <div>
      <Detalle title={olive?.title.eng} description={olive?.abstract.eng} name={olive?.name.eng} countries={olive?.countries.eng}
        size={olive?.size.eng} shelfLife={olive?.shelfLife.eng} use={olive?.use.eng} shippingStorage={olive?.shippingStorage.eng}
        imagen = {olive?.imagen}
        link = {olive?.link} />
    </div>
  )
}

export default OliveOil