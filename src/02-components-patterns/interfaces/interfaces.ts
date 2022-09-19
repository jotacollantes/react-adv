import { ReactElement } from "react";

export interface ProductCardProps
{
    product: Product;
    //*Definimos el children
    children?: ReactElement | ReactElement[]//*Es opcional, el componente puede recibir un hijo o varios, si son varios se especifica como arreglo.
}
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
product: Product
}

export interface ProductCardHOCProps
{
 ( { children, product }: ProductCardProps):JSX.Element;
   Title: ({ title }: {title: string;}) => JSX.Element;
   Image: ({ img }: {img?: string | undefined;}) => JSX.Element;
   Buttons: () => JSX.Element;
}