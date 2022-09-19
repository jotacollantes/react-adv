import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage=({img=''})=> {
    //*Obtenemos el valor de la imagen extrayendo el product del contexto
    const {product} =useContext(ProductContext)
    let imgToShow: string;

    //* si la imagen viene de las props, esa es la imagen
    if (img){
        imgToShow=img
    }else if (product.img)
        imgToShow=product.img
        else {
            imgToShow=noImage
        }

    
    return (
        //* un string vacion en un operador ternario es considerado false
        // <img className={styles.productImg} src={img ? img : noImage}alt="Product image" />
        <img className={styles.productImg} src={imgToShow}alt="Product image" />
    )
}