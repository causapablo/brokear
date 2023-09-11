import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const runner = categories[2].products.runnerPeanuts;
    
  return (
    <div>
      <Detalle title={runner?.title.eng} description={runner?.abstract.eng} name={runner?.name.eng} countries={runner?.countries.eng}
        size={runner?.size.eng} shelfLife={runner?.shelfLife.eng} use={runner?.use.eng} shippingStorage={runner?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
