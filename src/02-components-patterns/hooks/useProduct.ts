import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";



interface useProductArgs{
    product: Product;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;

}
export const useProduct = ({product,onChange,value=0}: useProductArgs)=> {
    const [counter,setCounter]=useState(value)
    
    
    //* Aqui deseamos obtener un valor booleano true o false, onChange devuelve una funcion o undefined onChange: ((args: onChangeArgs) => void) | undefined
    //* !! significa doble negacion que es un true
    //* isControlled va a devolver un booleano
    //console.log(onChange)
    const isControlled = useRef(!!onChange)
    

   

    const increase=()=> {
        //console.log('Increase isControlled: ',isControlled.current)

        if(isControlled.current){

            console.log(value)
            return onChange!({product:product ,counter: 1})
        }

        //*Para no mandar el valor anterior
        const newValue=counter +1
        setCounter(newValue);
    if(onChange){

             //* Emito el onChange con el producto y el contador   
             onChange({product:product ,counter:newValue})
    }   
}
        
    
    const dicrease=()=> {
        //console.log('Dicrease isControlled: ',isControlled.current)


        if (counter===0) return false;
        if(isControlled.current){

            console.log(value)
            return onChange!({product:product ,counter: -1})
        }


        //*Para no mandar el valor anterior
        const newValue=counter -1
        setCounter(newValue);
        if(onChange){
                //* Emito el onChange con el producto y el contador   
                onChange({product:product ,counter:newValue})
        }   
    }

    ///*Cuando el Value Cambia se ejecuta el useEffect
    useEffect(() => {
        //*Cambio el estado con setCounter
      setCounter(value)
    
     
    }, [value])
    
    
    return {
        counter,
        setCounter,
        increase,
        dicrease,
        value
    }

}
