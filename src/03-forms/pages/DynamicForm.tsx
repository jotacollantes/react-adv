import {Formik,Form} from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
//console.log(formJson)

//*Declaramos el initialValues que es un objeto que se va a crear de manera dinamica
const initialValues: {[key: string]: any} ={};
//const initialValues:any={}

//* va a iterar por cada objeto (inputs) del array que se encuentra en el fomrJson.json
for (const input of formJson) {
  //*Si la campo value viene especificado en el JSON lo tengo que emparegar con el campo name para poder crear el initValues
  initialValues[input.name]=input.value
}
//console.log(initialValues)

export const DynamicForm = () => {
  return (
    <div>
      
      <h1>DynamicForm</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={
        (values)=> {
        console.log(values)
      }
    }
      >
        {
          ({handleReset})=> (
            <Form noValidate>
              
            {
              formJson.map( ({name,label,placeholder,type,options}) => {

                if(type==='input' || type==='password' || type==='email')
                {
                  return <MyTextInput key={name} label={label} name={name} placeholder={placeholder} type={type as any }/>  
                }
                else if (type==='select'){
                    return  <MySelect key={name} label={label} name={name} >
                      <option value="">Select an option</option>
                      {
                        //* le especifico ? porque puede venir undefined porque no en todos los elementos del formJason viene especificado el select
                      options?.map(({id,nombre})=> {
                          return (<option key={id} value={id}>{nombre}</option>)
                      })}
                    </MySelect>
                }
                
                })
            }  
            {/* <span>Hola Mundo</span> */}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
            </Form>
            
          )
            
        
        }

      </Formik>
      </div>
  )
}
