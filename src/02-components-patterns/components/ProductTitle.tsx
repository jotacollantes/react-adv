import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

//* Defino una interfaz {title : string} que automaticamente define que el title es obligatorio. Como es solo una propiedad del interfaz la puedo crear en el argumento de la funcion
export const ProductTitle=({title}:{title : string})=> {

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
        <span className={styles.productDescription}>{(title)? title : product.title}</span>
    )
}