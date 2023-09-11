import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Organic() {
  const organic = categories[0].products.organic;
  return (
    <div>
      <Detalle title={organic?.title.eng} description={organic?.abstract.eng} name={organic?.name.eng} countries={organic?.countries.eng}
        size={organic?.size.eng} shelfLife={organic?.shelfLife.eng} usa={organic?.size.eng} shippingStorage={organic?.shippingStorage.eng} />
    </div>
  )
}

export default Organic
