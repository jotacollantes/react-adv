import { useState } from "react";

export const useProduct = ()=> {
    const [counter,setCounter]=useState(0)

    const increase=()=> {
        
        setCounter(counter +1);
    }
    
    const dicrease=()=> {
    
        if (counter===0) return false;
        setCounter(counter -1);
    }
    
    return {
        counter,
        setCounter,
        increase,
        dicrease
    }

}
