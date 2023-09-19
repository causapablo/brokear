import React from 'react'
import categories from '../../../../../../public/categorias.json'
import Detalle from '../../../../../../components/detalle/Detalle';
function SunflowerOil() {
    const sunflower = categories[3].products.sunflowerOil;
    
  return (
    <div>
      <Detalle title={sunflower?.title.eng} description={sunflower?.abstract.eng} name={sunflower?.name.eng} countries={sunflower?.countries.eng}
        size={sunflower?.size.eng} shelfLife={sunflower?.shelfLife.eng} use={sunflower?.use.eng} shippingStorage={sunflower?.shippingStorage.eng} 
        imagen = {sunflower?.imagen}
        link = {sunflower?.link}/>
    </div>
  )
}

export default SunflowerOil
