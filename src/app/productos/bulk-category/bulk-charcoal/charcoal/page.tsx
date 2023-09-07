import React from 'react'
import categorias from '../../../../../../public/categorias.json';
import Detalle from '../../../../../../components/detalle/Detalle';
function Charcoal() {
    const charcoal = categorias[categorias.length - 1].products.charcoal;
  return (
    <main>
      <Detalle title={charcoal?.title.eng} description={charcoal?.abstract.eng} name={charcoal?.name.eng} countries={charcoal?.countries.eng}
        size={charcoal?.size.eng} shelfLife={charcoal?.shelfLife.eng} usa={charcoal?.size.eng} shippingStorage={charcoal?.shippingStorage.eng} />
    </main>
  )
}

export default Charcoal
