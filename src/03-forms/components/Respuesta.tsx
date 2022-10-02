import React from 'react'

interface Props {
   firstName: string,
   lastName: string,
   email: string,
   terms: boolean,
   jobType: string 
}

export const Respuesta = (props: any) => {
  return (
    <div>
      <h1>Respuesta</h1>
      <h2>{<span>{JSON.stringify(props, null, 2)}</span>}</h2>

    </div>
  )
}
