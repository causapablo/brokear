import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const beb = categories[2].products.blackEyeBeans;
    
  return (
    <div>
      <Detalle title={beb?.title.eng} description={beb?.abstract.eng} name={beb?.name.eng} countries={beb?.countries.eng} imagen = {beb?.imagen}
        size={beb?.size.eng} shelfLife={beb?.shelfLife.eng} use={beb?.use.eng} shippingStorage={beb?.shippingStorage.eng} link = {beb?.link}/>
    </div>
  )
}

export default Adzuki
