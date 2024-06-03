import { ReactNode } from "react";

 export interface RestProps {
   category_id: string;
   name: string;
   id: number |string ;
   img_url: string | undefined;
   address:string | undefined;
   delivery_price: number | string| undefined;
   delivery_min: number | string | undefined;
   cuisine: string | undefined;
 }
 
 export interface ProductProps{

    name?:string,
    id?:number |string;
    rest_id?:string;
    description?:string;
    price?:number;
    img_url?:string |undefined,
    created?:number
   

 }

 export interface UserDataProps{
    img_url?: string;
    fullname: string |undefined;
    email?: string;
    address?: string;
    phone?: number;
    id?: string;
    username?: string;
    creationTime?: string;

 }

// interface UserProps{
//     img_url?: string;
//     fullname?: string;
//     email?: string;
//     address?: string;
//     phone?: number;
//     id?: string;
//     username?: string;
//     creationTime?: string;
//  }
export interface CategoryDataProps {
   categoryData: { 
      id: string | number | undefined;
       name: string; 
       img_url: string }[] | undefined;
 }


 export interface CategoryProps{
   name:string,
   img_url:string,
   id: string | number 
 }

 export interface BasketProps{
   created:number,
   id:string | number,
   items:BasketPropsItem[],
   total_amount:number,
   total_item:number,
   total_count:number
 }


 export interface BasketPropsItem {
  id: string;
  name: string;
  price:number;
  amount?:number;
  count?:number;
  created?:number;
  description?:string;
  img_url?:string;
  rest_id?:string,
  items:any[]



 
}

export interface UserOrderProps{
  id:string ,
  amount:number,
  contact:number,
  products:any[] | undefined,
  created:number,
  customer_id:string,
  delivery_address:string,
  payment_method:string | number



}




export interface AnimatedProps{
  children:ReactNode
}