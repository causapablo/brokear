import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const mung = categories[2].products.mungBeans;
    
  return (
    <div>
      <Detalle title={mung?.title.eng} description={mung?.abstract.eng} name={mung?.name.eng} countries={mung?.countries.eng}
        size={mung?.size.eng} shelfLife={mung?.shelfLife.eng} use={mung?.use.eng} shippingStorage={mung?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
