import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function GreenTea() {
    const gt = categories[1].products.greenTea;
    
  return (
    <div>
      <Detalle title={gt?.title.eng} description={gt?.abstract.eng} name={gt?.name.eng} countries={gt?.countries.eng}
        size={gt?.size.eng} shelfLife={gt?.shelfLife.eng} use={gt?.use.eng} shippingStorage={gt?.shippingStorage.eng} 
        imagen = {gt?.imagen}
        link = {gt?.link} />
    </div>
  )
}

export default GreenTea
