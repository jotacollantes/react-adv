import { Suspense } from 'react';
import {
  BrowserRouter ,Routes,Route,NavLink,Navigate
} from 'react-router-dom';
// import { LazyPages1,LazyPages2,LazyPages3 } from '../01-lazyloads/pages';
import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    //* Nos permite mostrar un mensaje o ejecutar un componente, por defecto Suspense renderiza un componente {null}
    <Suspense fallback={<span>Loading.</span>} >
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
           
            {/* <li>
            <NavLink to="/lazy1" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Lazy 1</NavLink>
            </li>
            <li>
            <NavLink to="/lazy2" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Lazy 2</NavLink>
            </li>
            <li>
            <NavLink to="/lazy3" className={({isActive})=> {
              return (isActive) ? 'nav-active' :''
            }}>Lazy 3</NavLink>
            </li> */}
            {
              routes.map((ruta)=> {
                return <NavLink key={ruta.to} to={ruta.to} className={({isActive})=> {
                  return (isActive) ? 'nav-active' :''
                }}>{ruta.name}</NavLink>
              })
            }


          </ul>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Routes>

         {/* <Route path="lazy1" element={<LazyPages1/>} />
         <Route path="lazy2" element={<LazyPages2/>} />
         <Route path="lazy3" element={<LazyPages3/>} /> */}
         {
          routes.map((ruta)=> {

            return <Route key={ruta.path} path={ruta.path} element={<ruta.Component/>} />
          })
        } 


         <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
         </Routes>
         
        
      </div>
    </BrowserRouter>
    </Suspense>
  );
}