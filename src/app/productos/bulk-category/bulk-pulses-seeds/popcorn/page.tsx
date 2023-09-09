import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const popcorn = categories[2].products.popcorn;
    
  return (
    <div>
      <Detalle title={popcorn?.title.eng} description={popcorn?.abstract.eng} name={popcorn?.name.eng} countries={popcorn?.countries.eng}
        size={popcorn?.size.eng} shelfLife={popcorn?.shelfLife.eng} use={popcorn?.use.eng} shippingStorage={popcorn?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
