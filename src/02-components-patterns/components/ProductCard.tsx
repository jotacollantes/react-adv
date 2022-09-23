import { useProduct}  from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement, useContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
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
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: CSSProperties
}


//* se va a recibir el objeto completo
export const ProductCard = ({children ,product,className,style}:Props) => {

    const {counter,increase,dicrease}=useProduct()
 

  return (
    // Para que los hijos puedan tener acceso a la informacion en el padre usamos el provider:
    <Provider value={
        {
            counter,
            increase,
            dicrease,
            product
        }}>
         <div className={`${styles.productCard} ${className}`}
         style={style}
         >
       
        {children}

        

    </div>
    </Provider>
   
  )
}

//*Para que estas propiedades puedan ser usadas en los hijos.
// ProductCard.Title=ProductTitle;
// ProductCard.Image=ProductImage;
// ProductCard.Buttons=ProductsButtons