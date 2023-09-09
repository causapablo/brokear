import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const chickPeas = categories[2].products.chickPeas;
    
  return (
    <div>
      <Detalle title={chickPeas?.title.eng} description={chickPeas?.abstract.eng} name={chickPeas?.name.eng} countries={chickPeas?.countries.eng}
        size={chickPeas?.size.eng} shelfLife={chickPeas?.shelfLife.eng} use={chickPeas?.use.eng} shippingStorage={chickPeas?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
