import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function SoyOil() {
    const soy = categories[3].products.soyOil;
    
  return (
    <div>
      <Detalle title={soy?.title.eng} description={soy?.abstract.eng} name={soy?.name.eng} countries={soy?.countries.eng}
        size={soy?.size.eng} shelfLife={soy?.shelfLife.eng} use={soy?.use.eng} shippingStorage={soy?.shippingStorage.eng} />
    </div>
  )
}

export default SoyOil
