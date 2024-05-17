import axios from "axios";
import { ENDPOINTS } from "../Constant/Endpoints";
import { instanceAxios } from "../helpers/instanceAxios";
import { AxiosPromise } from "axios";

import { AxiosError } from "axios";
import { CategoryDataProps } from "../shared/interface";


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
        data:values,
      
    })
}

// update user

// export const editUser=(userData:object)=>{
//   // const accessToken = localStorage.getItem("acces_token");
//   return instanceAxios({
//     method:"PUT",
//     url:ENDPOINTS.USER,
//     data:userData,
//     // headers:{
//     //   Authorization:`Bearer ${accessToken}`
//     // }
//   })

// }


// export const editUser = (userData: object) => {

//   return axios.put(ENDPOINTS.USER, userData, {
  
//   });
// }


export const editUser = (userData: object) => {
  return instanceAxios.put(ENDPOINTS.USER, userData); // instanceAxios kullanarak isteği yap
}

 



export const getUser = async () => {
  try {
    const response = await instanceAxios.get(ENDPOINTS.USER);
    return response.data;
  } catch (error) {
    console.error("getUser error:", error);
    throw error;
  }
};


// export const getUser = async () => {
//   let userAccessToken;
//   if (typeof window !== 'undefined') {
//     userAccessToken = localStorage.getItem("user_accesToken");
//   }

//   if (!userAccessToken) {
//     throw new Error('Access token not found');
//   }

//   try {
//     const response = await instanceAxios({
//       method: "GET",
//       url: ENDPOINTS.USER,
//       headers: {
//         Authorization: `Bearer ${userAccessToken}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("getUser error:", error);
//     throw error;
//   }
// };



// export const signInUser = async (values: object) => {
//     return axios.post('/api/auth/signin', values);
//   };
  
// export const addOffer: (
//   newOffer:object ) => AxiosPromise = (newOffer) => {
//   return instanceAxios({
//     method: "POST",
//     url: ENDPOINTS.OFFER,
//     data: newOffer,
//   });
// };






// export const addCategory = async (newCategory: object) => {
//   try {
    
    
// const response = await instanceAxios({
// method: "POST",
// url: ENDPOINTS.CATEGORY,
// data: newCategory,
//     });
  
// // console.log("categoryAddeddddddddddddd");
    
   
// return response.data; 
//   } 
  
// catch (error) {
    
    
// console.error("Error adding category:", error);
    
    
// throw error; // Rethrow the error to handle it in the calling code
//   }
// };




export const addCategory = async (newCategory: object) => {
    const accessToken = localStorage.getItem("acces_token");

   return  instanceAxios({
      method:"POST",
      url: ENDPOINTS.CATEGORY,
      data:newCategory,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
   
};









  export const getCategory=()=>instanceAxios({
    method:"GET",
    url:ENDPOINTS.CATEGORY})
  
    //delete category

export const deleteCategory=async (categoryId:string)=>{

  const accessToken = localStorage.getItem("acces_token");

  
 return instanceAxios({

  method:"DELETE",
  url:`${ENDPOINTS.CATEGORY}/${categoryId}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
}) 

  
}


// export const editCategory = (editedCategory:any)=> {
//   return instanceAxios({
//     method: "PUT",
//     url: `${ENDPOINTS.CATEGORY}/${editedCategory.id}`,
//     data: editedCategory,
//   });
// };
   

// export const editCategory = (editedCategory:CategoryDataProps) => {
//   return instanceAxios({
//     method: "PUT",
//     url: `${ENDPOINTS.CATEGORY}/${editedCategory.id}`,
//     data: editedCategory,
//   });
// };

// export const editCategory=async(editCategoryId:string)=>{
//   try{
//     const accessToken = localStorage.getItem("acces_token");


//     const response=await instanceAxios({
//       method:"PUT",
//       url: `${ENDPOINTS.CATEGORY}/${editCategoryId}`,
//       data:editCategoryId,
//       headers:{Authorization:`Bearer ${accessToken}`}
//     })
//  return response.data }
//  catch(err){
//   console.log("error service edit");
  
//  }
// }



// export const editCategory = async (editCategoryId: string) => {
//     const accessToken = localStorage.getItem("access_token");

// return instanceAxios({
//       method: "PUT",
//       url: `${ENDPOINTS.CATEGORY}/${editCategoryId}`,
//       data: { categoryId: editCategoryId }, // Veriyi nesne olarak gönder
//       headers: { Authorization: `Bearer ${accessToken}` }
//     });

  
// };


    // Product

    export const addProduct=async (newProduct:object)=>{
  const accessToken = localStorage.getItem("acces_token");

 return instanceAxios({
    method:"POST",
    url:ENDPOINTS.PRODUCT,
    data:newProduct,
    headers:{Authorization:`Bearer ${accessToken}`}
  })

  console.log("product Addedddddddddddddddddd");

    }


    export const getProduct=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.PRODUCT
    })

//delete Product


export const deleteProduct = async (productId: string) => {
    const accessToken = localStorage.getItem("acces_token");

   return instanceAxios({
      method: "DELETE",
      url: `${ENDPOINTS.PRODUCT}/${productId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
};





    //   ADD OFFER
    export const addOffer = async (newOffer: object) => {
    
        const accessToken = localStorage.getItem("acces_token");

        
  return instanceAxios({
    method: "POST",
    url: ENDPOINTS.OFFER,
    data: newOffer,
    headers:{Authorization:`Bearer ${accessToken}`}
        });
      
    console.log("offer Adddd");
    };

///////////////////////////////////////
    export const getOffer=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.OFFER
    })


    //


    export const deleteOffer = async (itemId: string) => {
    
        const accessToken = localStorage.getItem("acces_token");
      return instanceAxios({
          method: "DELETE",
          url: `${ENDPOINTS.OFFER}/${itemId}`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    };
     
    //Add restaurant

    export const addRestaurant = async (newRest: object) => {
        const accessToken = localStorage.getItem("acces_token");

   return  instanceAxios({
    method: "POST",
    url: ENDPOINTS.RESTUARANT,
    data: newRest,
    headers:{Authorization:`Bearer ${accessToken}`}
        });
      
    console.log("Restaurant addeddddddd");
      
    };


    //Get Restaurants

    export const getRestaurant=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.RESTUARANT
    })


    export const getRestaurantById=(restId:string|number)=>instanceAxios({
      method:"GET",
      url:`${ENDPOINTS.RESTUARANT}/${restId}`
    })

    // export const getRestaurantById = (
    //   restaurantID: string | number
    // ): AxiosPromise<RestaurantSingleApiResponse> =>
    //   instanceAxios({
    //     method: "GET",
    //     url: `${ENDPOINTS.RESTAURANT}/${restaurantID}`,
    //   });




    export const deleteRestaurant=(restId:string|number)=>{
      const accessToken = localStorage.getItem("acces_token");
      return  instanceAxios({
        method:"DELETE",
        url:`${ENDPOINTS.RESTUARANT}/${restId}`
      })
    }




