import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Traditional() {
  const trdt = categories[0].products.packaged;
  return (
    <div>
      <Detalle title={trdt?.title.eng} description={trdt?.abstract.eng} name={trdt?.name.eng} countries={trdt?.countries.eng} link = {trdt?.link}
        size={trdt?.size.eng} shelfLife={trdt?.shelfLife.eng} usa={trdt?.size.eng} shippingStorage={trdt?.shippingStorage.eng} imagen = {trdt?.imagen} />
    </div>
  )
}

export default Traditional
