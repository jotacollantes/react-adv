import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";



// export interface ProductCardProps
// {
//     product: Product;
//     //*Definimos el children
//     children?: ReactElement | ReactElement[]//*Es opcional, el componente puede recibir un hijo o varios, si son varios se especifica como arreglo.
// }


//* Asi luce un producto
export interface Product {
    id: string;
    title:string;
    img?: string; // img? es opcional
}
//*  Creamos un contexto para poder compartir informacion desde el padre hacia los hijos.


//*Asi va a lucir la informacion del contexto
export interface ProductContextProps
{
counter :number;
increase : ()=> void;
dicrease: ()=> void;
product: Product,

}

export interface ProductCardHOCProps
{
 ( { children, product }: ProductCardProps):JSX.Element;
   //Title: ({ className,title }: {title: string; className?:string}) => JSX.Element;
   Title: ({ className,title }: ProductTitleProps) => JSX.Element;
   //Image: ({ className,img }: {img?: string | undefined; className?:string}) => JSX.Element;
   Image: ({ className,img }: ProductImageProps) => JSX.Element;
   //Buttons: ({className}:{className?: string}) => JSX.Element;
   Buttons: ({className}:ProductButtonsProps) => JSX.Element;
   
}

export interface onChangeArgs{
  product: Product;
  counter: number;
}

//* ProductInCart va a extender Product y que tendra todas sus propiedades y va a añadir el counter
export interface ProductInCart extends Product{
  counter: number;
  }