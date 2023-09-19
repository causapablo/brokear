import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const cranberry = categories[2].products.cranberryBeans;
    
  return (
    <div>
      <Detalle title={cranberry?.title.eng} description={cranberry?.abstract.eng} name={cranberry?.name.eng} countries={cranberry?.countries.eng} imagen = {cranberry?.imagen}
        size={cranberry?.size.eng} shelfLife={cranberry?.shelfLife.eng} use={cranberry?.use.eng} shippingStorage={cranberry?.shippingStorage.eng} link = {cranberry?.link}/>
    </div>
  )
}

export default Adzuki
