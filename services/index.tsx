import axios from "axios";
import { ENDPOINTS } from "../Constant/Endpoints";
import { instanceAxios } from "../helpers/instanceAxios";
import { AxiosPromise } from "axios";

import { AxiosError } from "axios";


// Register

export const signUpUser=(values:object):AxiosPromise<any>=>{


    return instanceAxios({
        method:"POST",
        url:ENDPOINTS.SIGNUP,
    data:values
    })
}  

// export const signUpUser = async (formdata) => {
//   try {
//     const response = await axios.post("/api/auth/signup",formdata);
//     // response.data içinde sunucudan dönen veri bulunur
//     return response.data;
//   } catch (error) {
//     // Hata durumunda hata yakalanabilir
//     console.error("An error occurred:", error);
//     throw error; // Hatanın üst katmana taşınması için tekrar throw edilebilir
//   }
// };








// SignIn

export const signInUser=(values:any)=>{

    return instanceAxios({
        method:"POST",
        url:ENDPOINTS.SIGNIN,
        data:values
    })
}



// export const signInUser = async (values: object) => {
//     return axios.post('/api/auth/signin', values);
//   };
  



export const addCategory = async (newCategory: object) => {
  try {
    
    
const response = await instanceAxios({
method: "POST",
url: ENDPOINTS.CATEGORY,
data: newCategory,
    });
  
// console.log("categoryAddeddddddddddddd");
    
   
return response.data; 
  } 
  
catch (error) {
    
    
console.error("Error adding category:", error);
    
    
throw error; // Rethrow the error to handle it in the calling code
  }
};

  export const getCategory=()=>instanceAxios({
    method:"GET",
    url:ENDPOINTS.CATEGORY})
  
    //delete category

export const deleteCategory=(categoryId:string)=>instanceAxios({
  method:"DELETE",
  url:`${ENDPOINTS.CATEGORY}/${categoryId}`
})
   

    // Product

    export const addProduct=async (newProduct:object)=>{
try{
  const response=await instanceAxios({
    method:"POST",
    url:ENDPOINTS.PRODUCT,
    data:newProduct
  })

  console.log("product Addedddddddddddddddddd");
  
return response.data



}catch(err){
  console.log(err,"Error productttttttttttttt");
  
}

    }




    // ADD OFFER
    export const addOffer = async (newOffer: object) => {
      try {
        
        
    const response = await instanceAxios({
    method: "POST",
    url: ENDPOINTS.OFFER,
    data: newOffer,
        });
      
    console.log("offerAdddd");
        
       
    return response.data; 
      } 
      
    catch (error) {
        
        
    console.error("Error adding offer:", error);
        
        
    throw error; // Rethrow the error to handle it in the calling code
      }
    };


    export const getOffer=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.OFFER
    })


    export const deleteOffer=(itemId:string)=>instanceAxios({
      method:"DELETE",
      url:`${ENDPOINTS.OFFER}/${itemId}`
    })