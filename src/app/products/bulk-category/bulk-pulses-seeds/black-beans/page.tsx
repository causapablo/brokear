import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const bb = categories[2].products.blackBeans;
    
  return (
    <div>
      <Detalle title={bb?.title.eng} description={bb?.abstract.eng} name={bb?.name.eng} countries={bb?.countries.eng}
        size={bb?.size.eng} shelfLife={bb?.shelfLife.eng} use={bb?.use.eng} shippingStorage={bb?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
