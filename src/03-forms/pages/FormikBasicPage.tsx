import React from 'react'
import {FormikErrors, useFormik} from 'formik'
import '../styles/styles.css'


export const FormikBasicPage = () => {

  interface FormValues {
      firstName:string,
      lastName:string,
      email:string
  }

  const validate =({firstName,lastName,email}: FormValues)=> {

    //*Cada vez que se toque una tequeda se renderiza el formulario y por ende se ejecuta la validacion.

      const errors: FormikErrors<FormValues> = {};
        
      //* Validamos el firstName
      if (!firstName)
        {
        //* Si no existe
        errors.firstName='Required'  
        }
        //* Si firstName es mayor a 15
        else if( firstName.length > 15) {
          errors.firstName='Must be 15 characters or less'  
        }
        //*Validamos el lastName
        if (!lastName)
        {
        //* Si no existe
          errors.lastName='Required'  
        }
        //* Si firstName es mayor a 10
        else if( lastName.length > 15) {
          errors.lastName='Must be 10 characters or less'  
        }

        //*Validamos el email
        if (!email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          errors.email = 'Invalid email address';
        }
        console.log("Errores: ", errors)
        // Va a devolver un objeto:
        // email: "Required"
        // firstName: "Required"
        // lastName:  "Required"
        return errors
  }
  //* Estructura del formulario
  const {handleChange,values,handleSubmit,errors,touched,handleBlur} =useFormik({
    //* Asi va a lucir con 3 campos firstName, lastName,email
    initialValues: {
      firstName:'',
      lastName:'',
      email:''
    },
    validate,
    //* onSubmit es el metodo que se va a disparar una vez que se hayan cumplido todas las reglas de validacion
    onSubmit:(values)=> {
      console.log(values)
    }
    
    }
  )

  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        {/* <form noValidate onSubmit={()=> {return handleSubmit()}}> */}
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text"
            name="firstName"
            onBlur={handleBlur}//* Cuando se pierde el foco
            onChange={(e)=> {return handleChange(e)}}
            value={values.firstName}
            />
             {
                //* Con expresion ternaria
                (touched.firstName && errors.firstName) ?<span>{errors.firstName}</span> : ''
              }
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            name="lastName"
            onBlur={handleBlur}//* Cuando se pierde el foco
            onChange={(e)=> {return handleChange(e)}}
            value={values.lastName}
            />
             {
                //*con Expresion corta
                (touched.lastName) && (errors.lastName) && <span>{errors.lastName}</span> 
              }
            <label htmlFor="email">Email Address</label>
            
            <input
            type="email"
            name="email"
            onBlur={handleBlur}//* Cuando se pierde el foco
            onChange={(e)=> {return handleChange(e)}}
            value={values.email}
            />
            {
                //*con Expresion corta
                (touched.email) && (errors.email) && <span>{errors.email}</span> 
              }
            <button type='submit'>Submit</button>
        </form>
    
    </div>

  )
}