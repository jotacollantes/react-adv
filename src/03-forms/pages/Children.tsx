import { render } from '@testing-library/react';
import React, { useState } from 'react'

interface Args {
   numTimes: number;
   children: (arg0: number) => any;// puede ser un JSX.Element 
}

export const Children = () => {
    

    const [mostrar, setMostrar] = useState<JSX.Element>()
    
    const repeat= (args: Args)=> {
        
        let items = [];
        for (let i = 0; i < args.numTimes; i++) {
          items.push(args.children(i));
        }
        console.log(items)
        //return <div>{items}</div>
        setMostrar(<div>{items}</div>)
        
      }
      


      const listOfTenThings=()=> {
           
        return (
            //Se envia como argumento al componente Repeat el prom numTimes y como children se  envia una funcion callback

        // <Repeat numTimes={10}>
        //       {(index) => <div key={index}>This is item {index} in the list</div>}
        // </Repeat>

       //*Se envia como argumento a la funcion repeat un objeto con las propiedades numTimes y  children que es una funcion callback
        repeat({
            numTimes:10,
            children: (index) => <div key={index}>This is item {index} in the list</div>})
            );
      }


  return (

    <>
    <div>
    {
        (!mostrar) && <button onClick={listOfTenThings}>Dar Click</button>
    }
    
    
    
    
    
    <h1>{mostrar}</h1>
    </div>
    </>
    
  )
}
