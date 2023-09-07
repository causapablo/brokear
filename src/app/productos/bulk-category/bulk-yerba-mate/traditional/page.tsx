import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Traditional() {
  const traditional = categories[0].products.packaged;
  return (
    <div>
      <Detalle title={traditional?.title.eng} description={traditional?.abstract.eng} name={traditional?.name.eng} countries={traditional?.countries.eng}
        size={traditional?.size.eng} shelfLife={traditional?.shelfLife.eng} usa={traditional?.size.eng} shippingStorage={traditional?.shippingStorage.eng} />
    </div>
  )
}

export default Traditional
