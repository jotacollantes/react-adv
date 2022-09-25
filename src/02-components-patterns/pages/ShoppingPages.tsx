import React, { useState } from 'react'
import { json } from 'react-router-dom'
import { ProductsButtons,ProductCard,ProductImage,ProductTitle } from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
//import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'


export const ShoppingPages = () => {
    const {shoppingCart,setShoppingCart,onProductCountChange} = useShoppingCart()


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
        

           {
            products.map((product)=>(
              <ProductCard key={product.id} product={product} className="bg-dark text-white"
              //* onChange esta emitiendo (args(counter, product)) de la misma manera que lo hace evento onChange de un input Form

              onChange={(event)=> { 
                return onProductCountChange(event)}
              }

                //* Si no es nulo (?) se obtiene el valor del counter, si es nulo se asigna 0
              value={shoppingCart[product.id]?.counter||0}  
              >
          <ProductImage className="custom-image" style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title={'Opcion 2'} className=" text-bold"/>
          <ProductsButtons className='custom-buttons'/>
          </ProductCard>
            ))
            }

            <div className="shopping-cart">
            {
             //* Object permite leer las proiedades del opbjeto y tambien permite usar el map. No se puede hacer con el map directamente porque no es on arreglo 
             //*Este map es especial porque se va a barrer un objeto. La firma indica que los argumentos son un array de pares de valores: callbackfn: (value: [string, ProductInCart]) => {}
            Object.entries(shoppingCart).map(([key,product]) => {
              return (<ProductCard
                //*Propiedad especial de react, no se define en las propiedades.
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{width:'100px'}}
                onChange={(event)=> { 
                
                  return onProductCountChange(event)}
                }
                value={product.counter}
            >
          <ProductImage className="custom-image" style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title={'Opcion 2'} className=" text-bold"/>
          <ProductsButtons className='custom-buttons'
            style={{
              display:'flex',
              justifyContent:'center'
            }}
          />
          </ProductCard>)
            })
          }
              
            
          
            </div>
            
      <div>
        <code>
          {/* {JSON.stringify(shoppingCart,null,5)} */}
        </code>
      </div>
    </div>
   
  )
}
