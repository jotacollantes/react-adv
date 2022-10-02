
import {
  BrowserRouter ,Routes,Route,NavLink,Navigate
} from 'react-router-dom';


import {Anime,FormikAbstractation,FormikBasicPage,FormikComponents,FormikYupPage,RegisterPage,RegisterFormikPage,Children, DynamicForm} from '../03-forms/pages'





// import { LazyPages1,LazyPages2,LazyPages3 } from '../01-lazyloads/pages';
import logo from '../logo.svg';




export const Navigation = () => {
  return (
    //* Nos permite mostrar un mensaje o ejecutar un componente, por defecto Suspense renderiza un componente {null}
   
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
           
            <li>
            <NavLink to="/register" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Register</NavLink>
            </li>
            <li>
            <NavLink to="/formik-basic" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Formik</NavLink>
            </li>

            <li>
            <NavLink to="/formik-yup" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Formik Yup</NavLink>
            </li>

            <li>
            <NavLink to="/formik-components" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Formik Components</NavLink>
            </li>


            <li>
            <NavLink to="/formik-abstractation" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Formik Abstractation</NavLink>
            </li>

            <li>
            <NavLink to="/register-formik-page" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Register Formik Page</NavLink>
            </li>


            <li>
            <NavLink to="/dynamic-form" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Dynamic Form</NavLink>
            </li>

            <li>
            <NavLink to="/users" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Users</NavLink>
            </li>

            <li>
            <NavLink to="/anime" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Anime</NavLink>
            </li>
            <li>
            <NavLink to="/children" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Children</NavLink>
            </li>
            


          </ul>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Routes>
         <Route path="/register" element={<RegisterPage/>} />
         <Route path="/formik-basic" element={<FormikBasicPage/>} />
         <Route path="/formik-yup" element={<FormikYupPage/>} />
         <Route path="/formik-components" element={<FormikComponents/>} />
         <Route path="/formik-abstractation" element={<FormikAbstractation/>} />
         <Route path="/register-formik-page" element={<RegisterFormikPage/>} />
         <Route path="/dynamic-form" element={<DynamicForm/>} />
         <Route path="/users" element={<h1>About</h1>} />
         <Route path="/anime" element={<Anime/>} /> 
         <Route path="/children" element={<Children/>} /> 
         {/* <Route path="/*" element={<Navigate to="" replace />} /> */}
         </Routes>
         
        
      </div>
    </BrowserRouter>
   
  );
}