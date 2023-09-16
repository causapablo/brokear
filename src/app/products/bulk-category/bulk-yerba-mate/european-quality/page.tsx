import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function EuropeanQuality() {
  const eq = categories[0].products.europeanQuality;
  return (
    <div>
      <Detalle title={eq?.title.eng} description={eq?.abstract.eng} name={eq?.name.eng} countries={eq?.countries.eng}
        size={eq?.size.eng} shelfLife={eq?.shelfLife.eng} usa={eq?.size.eng} shippingStorage={eq?.shippingStorage.eng}
        imagen = {eq?.imagen} 
        link = {eq?.link} />
    </div>
  )
}

export default EuropeanQuality;
