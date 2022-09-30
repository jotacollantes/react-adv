import { ChangeEvent, useState } from "react";


//*Recibimos como argumento el objeto que viene desde el componente que usa el Custom Hook
//* No es puede especificar el argumento initForm como any porque luego no se puede saber que es lo que viene. Creamos el tipo de dato T dentro de <> que es generico que indica al custom Hook que va a recibir algo y que es del tipo de dato que viene desde donde es invocado el custom hook. El initForm va a moldear el formulario.

export const useForm = <T>(initForm : T) => {

    const [formData, setFormData] = useState(initForm)
      //* devinir el argumento evento del tipo React.ChangeEvent<HTMLInputElement> me va a permitir acceder a las propiedades el argumento por ejemplo event.target.value o event.target.value con la ayuda de VSCode
  
    const onChange =(event: ChangeEvent<HTMLInputElement>)=> {
        //console.log(event.target.value);
        setFormData((prev)=>{
            return {
            ...prev,
            [event.target.name]: event.target.value
            }
        } )
    }
    const resetForm =()=> {
        setFormData({
            ...initForm
        })
    }

    const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

    return {
        //*hago spread de todo lo que venga en el initForm que es lo que moldea al formulario y que se asigna al estado formData.
        ...formData, //* Exparso email,nombre, password1,password2
        formData: formData,
        onChange: onChange,
        resetForm: resetForm,
        isValidEmail: isValidEmail
        }
}