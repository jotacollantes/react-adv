import { lazy,LazyExoticComponent } from "react"
import { NoLazy } from "../01-lazyloads/pages/NoLazy"
//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyloads/pages"

type JSXComponent=()=>JSX.Element
interface Route {
    to: string,
    path:string,
    name: string,
    //*El componente puede ser de tipo LazyExoticComponent que devuelve un JSX component o puede ser un JSX Component tradicional
    Component: LazyExoticComponent<JSXComponent>|JSXComponent
}

//*Para cambiar el nombre a los chuncks (pedazos de la aplicacion)
const LazyLayout=lazy(()=>import(/* webpackChunkName: "LazyPage1" */'../01-lazyloads/layout/LazyLayout'))


export const routes: Route[]=[
{
    //to: '/lazyload/*',
    //path: '/lazyload/',
    path: '/lazyload/*',
    to: '/lazyload/',
    
    Component: LazyLayout,
    name:'Lazy Layout Dashboard'
},
{
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name:'No Lazy'
}
]