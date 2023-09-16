import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const darkRed = categories[2].products.darkRedKidneyBeans;
    
  return (
    <div>
      <Detalle title={darkRed?.title.eng} description={darkRed?.abstract.eng} name={darkRed?.name.eng} countries={darkRed?.countries.eng} imagen = {darkRed?.imagen}
        size={darkRed?.size.eng} shelfLife={darkRed?.shelfLife.eng} use={darkRed?.use.eng} shippingStorage={darkRed?.shippingStorage.eng} link = {darkRed?.link}/>
    </div>
  )
}

export default Adzuki
