import React, { useState } from 'react'
import { json } from 'react-router-dom'
import { ProductsButtons,ProductCard,ProductImage,ProductTitle } from '../components'
import { products } from '../data/products'
// import { useShoppingCart } from '../hooks/useShoppingCart'
//import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product=products[0]
export const ShoppingPages = () => {
    
return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        //Asigamos un objeto con el count y maxCount al initialValues
        initialValues={{count: 4, maxCount:10}}
        >

          {
            ({reset,isMaxCountReached,count,maxCount})=> (<>
            <ProductImage className="custom-image" style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title="Titulo producto" className=" text-bold"/>
          <ProductsButtons className='custom-buttons'/>
          {console.log("is MaxCount", isMaxCountReached)}
          <h1>{`${(isMaxCountReached) ? "Llego al maximo" : "" }`}</h1>
          <button onClick={()=> {
            return reset()
          }}>Reset</button>
          
          <h3>{count}</h3>
          <h3>{maxCount}</h3>
          
          
          
            </>)
          }
          
          </ProductCard>
      <div>
        
      </div>
    </div>
   
  )
}
