import { ProductCard as  ProductCardHOC} from './ProductCard';

import {ProductTitle} from './ProductTitle';
import {ProductImage} from './ProductImage';
import {ProductsButtons} from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';


export {ProductTitle} from './ProductTitle';
export {ProductImage} from './ProductImage';
export {ProductsButtons} from './ProductButtons';


//* Volvemos a exportar un nuevo objeto que se va a llamar ProductCard, no va a afectar a la declaracion que esta en el import porque este esta con un alias.

// Defino la interface ProductCardHOCProps que tendra la definicion del tipo en los argumentos que recibe el componente y el tipo de valor que retorna  y la definicion del tipo en los valores de title, Image, Buttons que retorna. La definicion de la interface es basada en la misma informacion que proporciona el componente ProductCard

// (({ children, product }: ProductCardProps) => JSX.Element) & {
//     Title: ({ title }: {
//         title: string;
//     }) => JSX.Element;
//     Image: ({ img }: {
//         img?: string | undefined;
//     }) => JSX.Element;
//     Buttons: () => JSX.Element;

//La interface es opcional
export const ProductCard:ProductCardHOCProps =Object.assign(ProductCardHOC,{

//*asigno las nuevas propiedades
Title: ProductTitle,
Image: ProductImage,
Buttons: ProductsButtons,
})