import React from 'react'
import {Formik,Form} from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup' //* importo todo dentro de Yup
import {MyTextInput,MySelect,MyCheckBox} from '../components'

export const FormikAbstractation = () => {

  
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

  return (
    <div>
        <h1>Formik Abstractation</h1>

      {/* El componente padre <Formik/> recibe como props el initValues, el onSubmit, el validationSchema y el children que es una funcion que devuelve un JSX  */}
      <Formik initialValues={{
      firstName:'',
      lastName:'',
      email:'',
      terms: false,
      jobType:''
    }} onSubmit={(values)=> {
        console.log(values)
    }} 
    validationSchema={ Yup.object({
      firstName: Yup.string() //*tiene que ser string
                    .max(15,'debe de tener 15 caracteres o menos')  
                    .required('Requerido'),
      lastName: Yup.string() //*tiene que ser string
                    .max(15,'debe de tener 15 caracteres o menos')
                    .required('Requerido'),
      email: Yup.string() //*tiene que ser string
                  .email() //*tiene que ser un email valido
                  .required('Requerido'),
      terms: Yup.boolean() //* Tiene que ser un boolean
                  //* uno de esos valores tiene que ser [true],
                  .oneOf([true],'Debe de aceptar las condiciones') ,
      jobType: Yup.string()
                  //* No puede ser un elemento en este caso it-jr
                  .notOneOf(['it-jr'],'Esta opcion no esta habilitada')
                  .required('Requerido'),

    })}>

       {/* CHILDREN de un Higher Order Component como los es el compnent <Formik>*/}
      {
        //* El Componente <Formik/> que es el Higher Order Component expone el objeto formik (que se puede desestructurar {}) que esta como argumento en la funcion children que devuelve un JSX Element
        (formik)=>(
        <Form >

          <MyTextInput label='First Name' name='firstName' placeholder='First Name' />
          <MyTextInput label='Last Name' name='lastName' placeholder='Last Name' />
          <MyTextInput label='Email' name='email' type="email" placeholder='john@google.com' />



        
        <MySelect label='Job Type' name='jobType' >
          <option value="">Pick Something</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="it-senior">It Senior</option>
          <option value="it-jr">It Jr.</option>
          </MySelect>
          
          <MyCheckBox label='Terms & Conditions' name='terms'/>
        
        <button type='submit'>Submit</button>
    </Form>
        )

        
      }

      </Formik>

        
        
    
    </div>

  )
}