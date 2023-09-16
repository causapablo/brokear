import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const lightRed = categories[2].products.lightRedKidneyBeans;
    
  return (
    <div>
      <Detalle title={lightRed?.title.eng} description={lightRed?.abstract.eng} name={lightRed?.name.eng} countries={lightRed?.countries.eng} imagen = {lightRed?.imagen}
        size={lightRed?.size.eng} shelfLife={lightRed?.shelfLife.eng} use={lightRed?.use.eng} shippingStorage={lightRed?.shippingStorage.eng} link = {lightRed?.link} />
    </div>
  )
}

export default Adzuki
