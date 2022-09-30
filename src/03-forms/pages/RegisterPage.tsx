import React, {FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {
    
    
   const {formData,onChange,name,email,password1,password2,resetForm,isValidEmail}=useForm({
    //* El objeto que inicializa el useForm es el que le va a dar la apariencia o moldear al formulario y que se haga dinamico
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    
    const onSubmit=(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)

    }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={(event)=>{
            return onSubmit(event)
        }}>
            <input type="text" 
            placeholder='Name'
            value={name}
            name="name"
            onChange={(e)=> {
                return onChange(e)
            }}
            className={(name.trim().length<=0) ? 'has-error' : ''}
            />

            {
                //* If Corto
            //name.trim().length<=0 && <span>Este campo es necesario</span>
                //* Ternario
                (name.trim().length<=0) ? <span>Este campo es necesario</span> : ''
            }
            
            <input type="email" 
            placeholder='Email'
            value={email}
            name="email"
            onChange={(e)=> {
                return onChange(e)
            }}
            //className={(!isValidEmail(email)) ? 'has-error'  : ''}
            className={ `${ (!isValidEmail(email)) ? 'has-error'  : '' }` }
             />
              {
                
            //* If Corto
            //* !isValidEmail(email) && <span>Email no es valido</span>
                //* Ternario
                (!isValidEmail(email)) ? <span>Email no es valido</span> : ''
            }
            <input type="password" 
            placeholder='Password'
            value={password1}
            name="password1"
            onChange={(e)=> {
                return onChange(e)
            }}
            />
            {
                //* Ternario
                (password1.trim().length<=0) ? <span>Este campo es necesario</span> : ''
            }
            {
                ( password1.trim().length > 0 && password1.trim().length < 6) ? <span>La contraseña debe de ser de 6 caracteres</span> : ''
            }
            <input type="password" 
            placeholder='Retype Password'
            value={password2}
            name="password2"
            onChange={(e)=> {
                return onChange(e)
            }}
            
            />
            {
                //* Ternario
                (password2.trim().length<=0) ? <span>Este campo es necesario</span> : ''
            }
              {
                (password2.trim().length > 0 &&  password1!==password2) ? <span>Las contraseñas deben de ser iguales</span> : ''
            }
            <button type='submit'>Create</button>
            <button type='button' onClick={()=> {return resetForm()}}>Reset</button>
        </form>
    </div>
  )
}
