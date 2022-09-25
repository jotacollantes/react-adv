import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart= ()=> {


//*useState son hooks genericos y se puede especificar el tipo entre <>.
  //*useStae sera del tipo object
  //* [key:string] significa que van a venir varios productos o sea x cantidad de key.
  
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart}>({})

   
//*Desestructuro el event {counter,product}
  const onProductCountChange=({counter,product}:{counter:number, product: Product})=> {
    //console.log('onProductCountChange: ',counter, product)
    //console.log({counter})
   //*Actualizo el estado
    setShoppingCart((currentShoppingCart)=>{
      //* almacenamos en productInCart el producto (con toda la informacion) con el id especificado si es que este existe en el carrito  currentShoppingCart, si no existe creamos un producto nuevo {...product,count:0}

      
      const productInCart: ProductInCart=currentShoppingCart[product.id] || {...product,counter:0}
      //* si el articulo ya esta seleccionado y al menos hay uno, se le incrementa el counter
      if(Math.max(productInCart.counter + counter,0)>0){
        productInCart.counter += counter //* puede ser +1 o -1
        return {
          ...currentShoppingCart,
          [product.id]:productInCart
        }
      }
      //Si no se ejecuta lo anterior es porque ha ido eliminando las cantidades en el item
      delete currentShoppingCart[product.id]
      return {...currentShoppingCart}



      // if(counter===0){
      //   //*Borramos la propiedad con el id del producto y propagamos el objeto sin la propiedad eliminada
      //   delete currentShoppingCart[product.id]
      //   return {...currentShoppingCart}
      // }
      // return {
      //   ...currentShoppingCart,
      //   [product.id]:{...product,counter : counter}
      // }
     })
    
  
  }


    return {
        shoppingCart,
        setShoppingCart,
        onProductCountChange
}

}