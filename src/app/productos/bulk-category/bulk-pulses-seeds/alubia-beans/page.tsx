import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const ab = categories[2].products.alubiaBeans;
    
  return (
    <div>
      <Detalle title={ab?.title.eng} description={ab?.abstract.eng} name={ab?.name.eng} countries={ab?.countries.eng}
        size={ab?.size.eng} shelfLife={ab?.shelfLife.eng} use={ab?.use.eng} shippingStorage={ab?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
