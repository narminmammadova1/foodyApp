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
  





//   export const addCategory=(newCategory) => {
//     return instanceAxios({
//       method: "POST",
//       url: ENDPOINTS.CATEGORY,
//       data: newCategory,
//     });
//   };

export const addCategory = () => {
    // Add category logic
    console.log('Category addeddddddddddddddddddddddddd');
    close(); // Modalı kapat
  };