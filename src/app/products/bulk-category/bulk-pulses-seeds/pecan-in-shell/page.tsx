import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function Adzuki() {
    const pecanShell = categories[2].products.pecanInShell;
    
  return (
    <div>
      <Detalle title={pecanShell?.title.eng} description={pecanShell?.abstract.eng} name={pecanShell?.name.eng} countries={pecanShell?.countries.eng}
        size={pecanShell?.size.eng} shelfLife={pecanShell?.shelfLife.eng} use={pecanShell?.use.eng} shippingStorage={pecanShell?.shippingStorage.eng} />
    </div>
  )
}

export default Adzuki
