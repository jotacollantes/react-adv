import React from 'react'
import { ProductsButtons,ProductCard,ProductImage,ProductTitle } from '../components'
import '../styles/custom-styles.css'




const product={
    id: '1',
    title: 'Coffe mug - card',
    img: './coffee-mug.png'

}

export const ShoppingPages = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap:'wrap'
        }}>

        </div>
        {/* Este Componente se converte en un Higher Order component porque va abarcar hijos */}
        <ProductCard product={product} className="bg-dark text-white">
        {/* Opcion 1: Con propiedad  */}

          <ProductCard.Image className="custom-image" style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductCard.Title className="text-bold" title={'Opcion 1'}/>
          <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>

            {/* Opcion 2: Sin propiedad basada en hijos*/}
          
          <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title={'Opcion 2'} className=" text-bold"/>
          <ProductsButtons className='custom-buttons'/>
        </ProductCard>

          <ProductCard product={product}
          style={{backgroundColor:'#70D1F8'}}
            >
          <ProductImage
          style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}
          />
          <ProductTitle title='opcion con styles'
          style={{fontWeight: 'bold'}} />
          <ProductsButtons style={{
            display:'flex',
            justifyContent:'end'
          }}/>
        </ProductCard>
        </div>
  )
}
