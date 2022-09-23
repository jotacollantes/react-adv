import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

//* Defino una interfaz {title : string} que automaticamente define que el title es obligatorio. Como es solo una propiedad del interfaz la puedo crear en el argumento de la funcion

export interface Props {
    title : string;
    className?: string;
    style?: CSSProperties 
}
export const ProductTitle=({title,className,style}:Props)=> {

    const {product}= useContext(ProductContext)

    // let titleToShow;

    // if (title){
    //     titleToShow=title
    // }
    // else
    // {
    //     titleToShow=product.title
    // }
    return (
        <span className={`${styles.productDescription} ${className}`}
        style={style}>
            {(title)? title : product.title}
    </span>
    )
}