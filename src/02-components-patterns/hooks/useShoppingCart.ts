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
    console.log({counter})
   //*Actualizo el estado
    setShoppingCart((currentShoppingCart)=>{
      if(counter===0){
        //*Borramos la propiedad con el id del producto y propagamos el objeto sin la propiedad eliminada
        delete currentShoppingCart[product.id]
        return {...currentShoppingCart}
      }
      return {
        ...currentShoppingCart,
        [product.id]:{...product,counter : counter}
      }
     })
    
  
  }


    return {
        shoppingCart,
        setShoppingCart,
        onProductCountChange
}

}