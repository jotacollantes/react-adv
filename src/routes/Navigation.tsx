
import {
  BrowserRouter ,Routes,Route,NavLink,Navigate
} from 'react-router-dom';
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
            <NavLink to="/" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>About</NavLink>
            </li>
            <li>
            <NavLink to="/users" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Users</NavLink>
            </li>
            


          </ul>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Routes>

         <Route path="/about" element={<h1>Home</h1>} />
         <Route path="/users" element={<h1>About</h1>} />
         <Route path="/" element={<h1>Users</h1>} /> 
       


         {/* <Route path="/*" element={<Navigate to="" replace />} /> */}
         </Routes>
         
        
      </div>
    </BrowserRouter>
   
  );
}