import {Formik,Form} from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup' //* importo todo dentro de Yup
//console.log(formJson)

//*Declaramos el initialValues que es un objeto que se va a crear de manera dinamica
const initialValues: {[key: string]: any} ={};
const requirefields: {[key: string]: any} ={};
//const initialValues:any={}

//* va a iterar por cada objeto (inputs) del array que se encuentra en el fomrJson.json
for (const input of formJson) {
  //*Si la campo value viene especificado en el JSON lo tengo que emparegar con el campo name para poder crear el initValues
  initialValues[input.name]=input.value
  //*Si no esta especificado la propiedad validations continua con la siguiente iteracion del input of formJson
  if(!input.validations) continue;
          let schema=Yup.string()
          //*En caso de existir la propiedad validatios se ejecuta el siguiente bucle
          for (const rule of input.validations) {
            if(rule.type==='required'){
              //*Reasignamos lo que tenemos en schema
                schema=schema.required('Este campo es requerido')
                //console.log('Schema: ',schema)    
            }
            //*Otras Reglas
            if(rule.type==='minLength'){
              //*Reasignamos lo que tenemos en schema
                //*Si no existe el value del minLength se asigna un valor min por defecto de 2 caracteres
                schema=schema.min((rule as any).value|| 2,` Este campo debe de ser de ${(rule as any).value|| 2}`)
                //console.log('Schema: ',schema)    
            }

            if(rule.type==='email'){
              //*Reasignamos lo que tenemos en schema
                
                schema=schema.email('Debe de ser un correo valido')
                //console.log('Schema: ',schema)    
            }
            
          }
        
    requirefields[input.name]=schema;
}
//console.log('Initial Values:', initialValues)
//console.log( requirefields)


const validationsSchema=Yup.object({...requirefields})
//console.log(validationsSchema)
export const DynamicForm = () => {
  return (
    <div>
      
      <h1>DynamicForm</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationsSchema}
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
