import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const greenPeas = categories[2].products.greenPeas;
    
  return (
    <div>
      <Detalle title={greenPeas?.title.eng} description={greenPeas?.abstract.eng} name={greenPeas?.name.eng} countries={greenPeas?.countries.eng}
        size={greenPeas?.size.eng} shelfLife={greenPeas?.shelfLife.eng} use={greenPeas?.use.eng} shippingStorage={greenPeas?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
