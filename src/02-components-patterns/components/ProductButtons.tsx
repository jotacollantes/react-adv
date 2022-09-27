import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
// interface ProductsButtonsProps {
//     counter: number;
//     increase: () => void;
//     dicrease:  () => void;
// }

export interface Props {
    className?: string;
    style?: CSSProperties 
}

export const ProductsButtons = ({className,style}: Props)=>{

    //*Uso la informacion de metodos y propiedades que esta anunciada por el contexto
    const {counter,increase,dicrease,maxCount,product}=useContext(ProductContext)
    //console.log("Maximo Count en botones: ",maxCount)
    const isMaxReached = useCallback(
      () => {
        if(counter===maxCount){
            return true
        }
       else{
            return false
       }
      },
      [counter,maxCount],
    )
    //console.log('isMaxReached: ', isMaxReached())
 

    return (
        <div className={`${styles.buttonsContainer} ${className}`}
        style={style}
        >
            <button
            onClick={()=>{
                return dicrease()
            }}
            className={styles.buttonMinus}
            > - </button>
            <div className={styles.countLabel}> {counter} </div>
            
            <button
             onClick={()=>{
                return increase()
            }}
            
            className={`${styles.buttonAdd} ${(isMaxReached())? styles.disabled : ''}`}> + </button>
        </div>
    )
}