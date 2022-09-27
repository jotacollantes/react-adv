import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";



interface useProductArgs{
    product: Product;
    onChange?:(args:onChangeArgs)=> void;
    value?:number;
    initialValues?: InitialValues

}
export const useProduct = ({product,onChange,value=0,initialValues}: useProductArgs)=> {
    //Si initialValues tiene un valor se asigna este caso contrasio se asiga el valor que viene en el props value (que por defecto en caso de no venir tiene el valor 0)
    
    //console.log("Value y counter fuera del useEffect: ",value , counter))
    const [counter,setCounter]=useState<number>(initialValues?.count || value)
    //console.log("Value y counter fuera del useEffect: ",value , counter)
    
    const isMounted=useRef(false)
    //console.log(initialValues?.count)
    const increase=()=> {
        //console.log('Increase isControlled: ',isControlled.current)
        
        if(initialValues?.maxCount)
        { 
            console.log(counter, initialValues.maxCount)
            if (counter === initialValues.maxCount)
            {
                
                return;
            }
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
        


        //*Para no mandar el valor anterior
        const newValue=counter -1
        setCounter(newValue);
        if(onChange){
                //* Emito el onChange con el producto y el contador   
                onChange({product:product ,counter:newValue})
        }   
    }

        const reset = ()=>
        {
            setCounter(initialValues?.count || value);   
        }


    ///*Cuando el Value Cambia o el Componente que usa este customhook se reenderiza por primera vez se ejecuta este useEffect
    useEffect(() => {
    //console.log("Entro por primera vez")

      //*Cambio el estado con setCounter
      //*En este momento cuando se esta renderizando por primera vez el isMounted se mantendra en false y por ende se cumple la condicion de que es falso y se sale del useEfect sin ejecutar la funcion setCounter que actualiza el estado. Con esto podemos mostrar el count que viene en el initialValues en los botones.
       if (!isMounted.current) return; 

      setCounter(value)
    
     
    }, [value])

    useEffect(() => {
        //*Cambio el isMounted a true
      //console.log("Value y counter dentro del useEffect: ",value, counter)
       isMounted.current=true; 
}, [])
    
    
    return {
        counter,
        setCounter,
        increase,
        dicrease,
        value,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: initialValues?.maxCount===counter,
        reset: reset

    }

}
