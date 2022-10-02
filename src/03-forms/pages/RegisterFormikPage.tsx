import React, { useState } from 'react'
import {Formik,Form} from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup' //* importo todo dentro de Yup
import {MyTextInput,MySelect,MyCheckBox} from '../components'
import { Respuesta } from '../components/Respuesta'


interface typeForm {
  firstName: string,
  email: string,
  password: string 
  rePassword: string 
}



export const RegisterFormikPage = () => {

  
  //* Estructura del formulario
  // const {handleChange,values,handleSubmit,errors,touched,handleBlur,getFieldProps} =useFormik({
  //   //* Asi va a lucir con 3 campos firstName, lastName,email
  //   initialValues: {
  //     firstName:'',
  //     lastName:'',
  //     email:''
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string() //*tiene que ser string
  //                   .max(15,'debe de tener 15 caracteres o menos')
  //                   .required('Requerido'),
  //     lastName: Yup.string() //*tiene que ser string
  //                   .max(15,'debe de tener 15 caracteres o menos')
  //                   .required('Requerido'),
  //     email: Yup.string() //*tiene que ser string
  //                 .email() //*tiene que ser un email valido
  //                 .required('Requerido'),

  //   }),
  //  // validate,
  //   //* onSubmit es el metodo que se va a disparar una vez que se hayan cumplido todas las reglas de validacion
  //   onSubmit:(values)=> {
  //     console.log(values)
  //   }
  // })

  const [mostrarForm, setMostrarForm] = useState<boolean>(false)
  const [mostrarValues, setMostrarValues] = useState<typeForm>()


  
return (
    
<>
{
  
    (!mostrarForm) && <div>
    <h1>Register Formik Page</h1>

  {/* El componente padre <Formik/> recibe como props el initValues, el onSubmit, el validationSchema y el children que es una funcion que devuelve un JSX  */}
  <Formik initialValues={{
  firstName: '',
  email: '',
  password: '', 
  rePassword: '' 
}} onSubmit=
{
 (values)=>{
  console.log(values)
  //alert(JSON.stringify(values, null, 2));
  setMostrarForm(true)
  setMostrarValues(values)
}
} 
validationSchema={ Yup.object({
  firstName: Yup.string() //*tiene que ser string
                .min(5,'debe de tener 5 caracteres o mas')  
                .max(15,'debe de tener 15 caracteres o menos')  
                .required('Requerido'),
  
  email: Yup.string() //*tiene que ser string
              .email() //*tiene que ser un email valido
              .required('Requerido'),
  password: Yup.string() //*tiene que ser string
              .min(6,'debe de tener 6 caracteres o mas')
              .required('Requerido'),
  rePassword: Yup.string() //*tiene que ser string
              .min(6,'debe de tener 6 caracteres o mas')
              .required('Requerido')
              .oneOf([Yup.ref('password'), null], 'Passwords deben coincidir')
              
  

})}
>

   {/* CHILDREN de un Higher Order Component como los es el compnent <Formik>*/}
  {
    //* El Componente <Formik/> que es el Higher Order Component expone el objeto formik (que se puede desestructurar {}) que esta como argumento en la funcion children que devuelve un JSX Element
    ({handleReset})=>(
    <Form >

    <MyTextInput label='First Name' name='firstName' placeholder='First Name' />
    <MyTextInput label='Email' name='email' type='email' placeholder='john@google.com' />
    <MyTextInput label='Password' name='password' type="password" />
    <MyTextInput label='Re-password' name='rePassword' type="password" />
    <button type='submit'>Submit</button>
     <button type='button' onClick={handleReset}>Reset</button>
     </Form>
    )

    
  }

  </Formik>
</div>
   }
    
   {
    
    (mostrarForm) && <><Respuesta props={mostrarValues} /></>
   }
</>
)
}