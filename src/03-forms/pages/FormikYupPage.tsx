import React from 'react'
import {FormikErrors, useFormik} from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup' //* importo todo dentro de Yup


export const FormikYupPage = () => {

  
  //* Estructura del formulario
  const {handleChange,values,handleSubmit,errors,touched,handleBlur,getFieldProps} =useFormik({
    //* Asi va a lucir con 3 campos firstName, lastName,email
    initialValues: {
      firstName:'',
      lastName:'',
      email:''
    },
    validationSchema: Yup.object({
      firstName: Yup.string() //*tiene que ser string
                    .max(15,'debe de tener 15 caracteres o menos')
                    .required('Requerido'),
      lastName: Yup.string() //*tiene que ser string
                    .max(15,'debe de tener 15 caracteres o menos')
                    .required('Requerido'),
      email: Yup.string() //*tiene que ser string
                  .email() //*tiene que ser un email valido
                  .required('Requerido'),

    }),


   // validate,
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
        {/* Con handleSubmit le dice a Formik que meje el formulario, ejecute las validaciones y si todo esta bien ejecuta el onSubmit() */}
        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text"
            
            //* getFieldsProps nos proporciona las propiedades name,value, onBlur y on change
            // name="firstName"
            // onBlur={handleBlur}//* Cuando se pierde el foco
            // onChange={(e)=> {return handleChange(e)}}
            // value={values.firstName}
            {...getFieldProps('firstName')}

            />
             {
                //* Con expresion ternaria
                (touched.firstName && errors.firstName) ?<span>{errors.firstName}</span> : ''
              }
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            // name="lastName"
            // onBlur={handleBlur}//* Cuando se pierde el foco
            // onChange={(e)=> {return handleChange(e)}}
            // value={values.lastName}

            //* getFieldsProps nos proporciona las propiedades name,value, onBlur y on change
            // name="firstName"
            // onBlur={handleBlur}//* Cuando se pierde el foco
            // onChange={(e)=> {return handleChange(e)}}
            // value={values.firstName}
            {...getFieldProps('lastName')}
            />
             {
                //*con Expresion corta
                (touched.lastName) && (errors.lastName) && <span>{errors.lastName}</span> 
              }
            <label htmlFor="email">Email Address</label>
            
            <input
            type="email"
            // name="email"
            // onBlur={handleBlur}//* Cuando se pierde el foco
            // onChange={(e)=> {return handleChange(e)}}
            // value={values.email}

            //* getFieldsProps nos proporciona las propiedades name,value, onBlur y on change
            // name="firstName"
            // onBlur={handleBlur}//* Cuando se pierde el foco
            // onChange={(e)=> {return handleChange(e)}}
            // value={values.firstName}
            {...getFieldProps('email')}
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