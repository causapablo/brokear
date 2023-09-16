import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const pecanWShell = categories[2].products.pecanWithout;
    
  return (
    <div>
      <Detalle title={pecanWShell?.title.eng} description={pecanWShell?.abstract.eng} name={pecanWShell?.name.eng} countries={pecanWShell?.countries.eng} imagen = {pecanWShell?.imagen}
        size={pecanWShell?.size.eng} shelfLife={pecanWShell?.shelfLife.eng} use={pecanWShell?.use.eng} shippingStorage={pecanWShell?.shippingStorage.eng} link = {pecanWShell?.link} />
    </div>
  )
}

export default Adzuki
