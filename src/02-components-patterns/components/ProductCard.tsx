import { useProduct}  from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement, useContext } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductsButtons } from './ProductButtons';




//*Creamos el context para que este componente padre pueda compartir informacion a los componentes hijos

export const ProductContext =createContext({} as ProductContextProps)
//*Extraemos el provider (Higher Order Component) del contexto
const {Provider}=ProductContext


export interface Props
{
    product: Product;
    //*Definimos el children
    //*Es opcional, el componente puede recibir un hijo o varios, si son varios se especifica como arreglo.
    //children?: ReactElement | ReactElement[];
    children:(args: ProductCardHandlers) => JSX.Element;
    className?:string;
    style?: CSSProperties;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;
    initialValues?:InitialValues;

}


//* se va a recibir el objeto completo
export const ProductCard = ({children ,product,className,style,onChange,value,initialValues}:Props) => {
    //* Mando como argumento el onChange al custom Hook useProduct
    const {counter,increase,dicrease,maxCount,isMaxCountReached,
      reset}=useProduct({
      product: product,
      onChange: onChange,
      value: value,
      initialValues
      })
 

  return (
    // Para que los hijos puedan tener acceso a la informacion en el padre usamos el provider:
    <Provider value={
        {
            counter,
            increase,
            dicrease,
            product,
            maxCount
        }}>
         <div className={`${styles.productCard} ${className}`}
         style={style}
         >
       
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount:maxCount,
          product: product,
          increase: increase,
          dicrease: dicrease,
          reset: reset
        })}

        

    </div>
    </Provider>
   
  )
}

//*Para que estas propiedades puedan ser usadas en los hijos.
// ProductCard.Title=ProductTitle;
// ProductCard.Image=ProductImage;
// ProductCard.Buttons=ProductsButtons