import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const chia = categories[2].products.chiaSeeds;
    
  return (
    <div>
      <Detalle title={chia?.title.eng} description={chia?.abstract.eng} name={chia?.name.eng} countries={chia?.countries.eng}
        size={chia?.size.eng} shelfLife={chia?.shelfLife.eng} use={chia?.use.eng} shippingStorage={chia?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
