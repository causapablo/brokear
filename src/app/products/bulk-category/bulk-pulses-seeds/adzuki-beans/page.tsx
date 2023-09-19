import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const adzuki = categories[2].products.adzukiBeans;
    
  return (
    <div>
      <Detalle title={adzuki?.title.eng} description={adzuki?.abstract.eng} name={adzuki?.name.eng} countries={adzuki?.countries.eng} link = {adzuki?.link}
        size={adzuki?.size.eng} shelfLife={adzuki?.shelfLife.eng} use={adzuki?.use.eng} shippingStorage={adzuki?.shippingStorage.eng} imagen = {adzuki?.imagen}/>
    </div>
  )
}

export default Adzuki
