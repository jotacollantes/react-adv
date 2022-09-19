import React from 'react'
import { ProductsButtons,ProductCard,ProductImage,ProductTitle } from '../components'




const product={
    id: '1',
    title: 'Coffe mug - card',
    img: './coffee-mug.png'

}

export const ShoppingPages = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap:'wrap'
        }}>

        </div>
        {/* Este Componente se converte en un Higher Order component porque va abarcar hijos */}
        <ProductCard product={product}>
          {/* Opcion 1: Sin propiedad */}
          
          
          <ProductImage/>
          <ProductTitle title={'Hola Mundo'}/>
          <ProductsButtons />
       
          
          {/* Opcion 2: Con propiedad */}

          <ProductCard.Image/>
          <ProductCard.Title title={'Opcion 2'}/>
          <ProductCard.Buttons/>




        </ProductCard>
        </div>
  )
}
