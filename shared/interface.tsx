

 
 
 export interface RestProps {
   category_id: string;
   name: string;
   id: number |string ;
   img_url: string | undefined;
   delivery_price: number;
   delivery_min: number;
   cuisine: string;
 }
 
 export interface ProductProps{

    name?:string,
    id?:number |string;
    rest_id?:string;
    description?:string;
    price?:number;
    img_url?:string |undefined,
    


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
       name: string; img_url: string }[] | undefined;
 }


 export interface CategoryProps{
   name:string,
   img_url:string,
   id: string | number 
 }