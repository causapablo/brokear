import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Bulk() {
    const bulk = categories[0].products.bulk;
    
  return (
    <div>
      <Detalle title={bulk?.title.eng} description={bulk?.abstract.eng} name={bulk?.name.eng} countries={bulk?.countries.eng} link = {bulk?.link}
        size={bulk?.size.eng} shelfLife={bulk?.shelfLife.eng} use={bulk?.use.eng} shippingStorage={bulk?.shippingStorage.eng} imagen = {bulk?.imagen}  />
    </div>
  )
}

export default Bulk
