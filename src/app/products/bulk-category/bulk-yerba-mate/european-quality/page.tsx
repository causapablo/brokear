import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function EuropeanQuality() {
  const europeanQuality = categories[0].products.europeanQuality;
  return (
    <div>
      <Detalle title={europeanQuality?.title.eng} description={europeanQuality?.abstract.eng} name={europeanQuality?.name.eng} countries={europeanQuality?.countries.eng}
        size={europeanQuality?.size.eng} shelfLife={europeanQuality?.shelfLife.eng} usa={europeanQuality?.size.eng} shippingStorage={europeanQuality?.shippingStorage.eng} />
    </div>
  )
}

export default EuropeanQuality;
