import axios from "axios";
import { ENDPOINTS } from "../Constant/Endpoints";
import { instanceAxios } from "../helpers/instanceAxios";
import { AxiosPromise } from "axios";

import {  RestProps } from "../shared/interface";


// Register

export const signUpUser=(values:object):AxiosPromise<any>=>{


    return instanceAxios({
        method:"POST",
        url:ENDPOINTS.SIGNUP,
    data:values
    })
}  


// SignIn

export const signInUser=(values:any)=>{

    return instanceAxios({
        method:"POST",
        url:ENDPOINTS.SIGNIN,
        data:values,
      
    })
}

// update user


export const editUser = (userData: object) => {
  
  return instanceAxios.put(ENDPOINTS.USER, userData); 
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


export const addCategory = async (newCategory: object) => {
  const accesToken = localStorage.getItem("admin_accesToken");

   return  instanceAxios({
      method:"POST",
      url: ENDPOINTS.CATEGORY,
      data:newCategory,
        headers: {
          Authorization: `Bearer ${accesToken}`,
        },
      }
    );
   
};

  export const getCategory=()=>instanceAxios({
    method:"GET",
    url:ENDPOINTS.CATEGORY})
  
    //delete category

export const deleteCategory=async (categoryId:string)=>{

  const accesToken = localStorage.getItem("admin_accesToken");

  
 return instanceAxios({

  method:"DELETE",
  url:`${ENDPOINTS.CATEGORY}/${categoryId}`,
  headers: {
    Authorization: `Bearer ${accesToken}`,
  },
}) 

  
}


export const editCategory = (editedCategory:any)=> {
  const accesToken = localStorage.getItem("admin_accesToken");

  return instanceAxios({
    method: "PUT",
    url: `${ENDPOINTS.CATEGORY}/${editedCategory.id}`,
    data: editedCategory,
    headers:{Authorization:`Bearer ${accesToken}`}

  });
};
   


    // Product

    export const addProduct=async (newProduct:object)=>{
      const accesToken = localStorage.getItem("admin_accesToken");

 return instanceAxios({
    method:"POST",
    url:ENDPOINTS.PRODUCT,
    data:newProduct,
    headers:{Authorization:`Bearer ${accesToken}`}
  })

  console.log("product Addedddddddddddddddddd");

    }


    export const getProduct=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.PRODUCT
    })

//delete Product


export const deleteProduct = async (productId: string) => {
  const accesToken = localStorage.getItem("admin_accesToken");

   return instanceAxios({
      method: "DELETE",
      url: `${ENDPOINTS.PRODUCT}/${productId}`,
      headers: {
        Authorization: `Bearer ${accesToken}`,
      },
    });
};





    //   ADD OFFER
    export const addOffer = async (newOffer: object) => {
    
      const accesToken = localStorage.getItem("admin_accesToken");

        
  return instanceAxios({
    method: "POST",
    url: ENDPOINTS.OFFER,
    data: newOffer,
    headers:{Authorization:`Bearer ${accesToken}`}
        });
      
    };

///////////////////////////////////////
    export const getOffer=()=>instanceAxios({
      method:"GET",
      url:ENDPOINTS.OFFER
    })


    //


    export const deleteOffer = async (itemId: string) => {
    
      const accesToken = localStorage.getItem("admin_accesToken");
      return instanceAxios({
          method: "DELETE",
          url: `${ENDPOINTS.OFFER}/${itemId}`,
          headers: {
            Authorization: `Bearer ${accesToken}`,
          },
        });
    };
     
    //Add restaurant

    export const addRestaurant = async (newRest: object) => {
      const accesToken = localStorage.getItem("admin_accesToken");

   return  instanceAxios({
    method: "POST",
    url: ENDPOINTS.RESTUARANT,
    data: newRest,
    headers:{Authorization:`Bearer ${accesToken}`}
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

    


    export const deleteRestaurant=(restId:string|number)=>{
      const accesToken = localStorage.getItem("admin_accesToken");
      return  instanceAxios({
        method:"DELETE",
        url:`${ENDPOINTS.RESTUARANT}/${restId}`,
        headers:{Authorization:`Bearer ${accesToken}`}
      })
    }



export const editRestaurant=(restData:RestProps)=>{

  const accesToken = localStorage.getItem("admin_accesToken");
   return instanceAxios({
    method:"PUT",
    url:`${ENDPOINTS.RESTUARANT}/${restData.id}`,
    data:restData,
    headers:{Authorization:`Bearer ${accesToken}`}

   })

}






    export const getBasket=()=>{
      const accesToken = localStorage.getItem("user_accesToken");
      return instanceAxios({
        method:"GET",
        url:ENDPOINTS.BASKET,
        headers:{Authorization:`Bearer ${accesToken}`}
      })
    }

    export const addBasket=async (productId:any)=>{
      const accesToken = localStorage.getItem("user_accesToken");

return instanceAxios({
  method:"POST",
  url:`${ENDPOINTS.BASKET}/add`,
  data:{product_id:productId},
  headers:{Authorization:`Bearer ${accesToken}`}

})
    }
export const deleteBasket=async(productId:number|string)=>{
  const accesToken = localStorage.getItem("user_accesToken");
return instanceAxios({
  method:"DELETE",
  url:`${ENDPOINTS.BASKET}/delete`,
  data:{product_id:productId},

  headers:{Authorization:`Bearer ${accesToken}`}
})


}


export const clearBasket=async (basketId:number |string)=>{

  const accesToken = localStorage.getItem("user_accesToken");
  return instanceAxios({

    method:"DELETE",
    url:`${ENDPOINTS.BASKET}/clear`,
    data:{basket_id:basketId},
    headers:{Authorization:`Bearer ${accesToken}`}
  })

}


export const deleteBasketItem=async(productId:number|string)=>{
  const accesToken = localStorage.getItem("user_accesToken");
return instanceAxios({
  method:"DELETE",
 

  url: `${ENDPOINTS.BASKET}/${productId}`,

  data:{product_id:productId},

  headers:{Authorization:`Bearer ${accesToken}`}
})
}



export const addOrder=(orders:object)=>{
  const accesToken = localStorage.getItem("user_accesToken");

return instanceAxios({
  method:"POST",
  url:`${ENDPOINTS.ORDER}`,
  data:orders,
  headers: { Authorization: `Bearer ${accesToken}` }


})

}

export const getUserOrder=()=>{

  const accesToken = localStorage.getItem("user_accesToken");


  return instanceAxios({
    method:"GET",
    url:`${ENDPOINTS.ORDER}/user`,
    
    headers:{Authorization:`Bearer ${accesToken}`}
  })

}

export const deleteUserOrder=(orderId:string)=>{


  // const accesToken = localStorage.getItem("user_accesToken");

  return instanceAxios({
    method:"DELETE",
    url:ENDPOINTS.ORDER,
    data:{order_id:orderId},
    // headers:{Authorization:`Bearer ${accesToken}`}
  })

}



export const getOrder=()=>{

  const accesToken = localStorage.getItem("admin_accesToken");


return instanceAxios({

  method:"GET",
  url:ENDPOINTS.ORDER,
  headers:{Authorization:`Bearer ${accesToken}`}

})


}

export const getOrderHistory=()=>{

  const accesToken = localStorage.getItem("admin_accesToken");

  return instanceAxios({

    method:"GET",
    url:ENDPOINTS.HISTORY
  })
}


