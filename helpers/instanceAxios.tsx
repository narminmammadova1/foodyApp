// // import axios, { AxiosError } from "axios";


// // export const instanceAxios=axios.create({
// //     baseURL:"/api/"
// // })



// // instanceAxios.interceptors.request.use(
// //     (config) => {
// //       return config;
// //     },
// //     (err: AxiosError) => {
// //       return Promise.reject(err);
// //     }
// //   );


// // asagidski refresh token ucun

// // import axios from 'axios';

// // const instanceAxios = axios.create({
// //   baseURL: 'API_BASE_URL', // API Base URL
// // });

// // // Request interceptor
// // instanceAxios.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem('user_accesToken');
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }
// //     return config;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

// // // Response interceptor
// // instanceAxios.interceptors.response.use(
// //   (response) => {
// //     return response;
// //   },
// //   (error) => {
// //     if (error.response && error.response.status === 401) {
// //       // Token expired, logout the user
// //       localStorage.removeItem('user_accesToken');
// //       localStorage.removeItem('user_LoginDate');
// //       localStorage.removeItem('isUser');
// //       setIsUser(false); // Assuming setIsUser function is available and set the state properly
// //       push('/user-login'); // Redirect to login page
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // export default instanceAxios;




// // import axios from 'axios';
// // import { useRouter } from 'next/router';
// // import { useGlobalContext } from '../Context/GlobalContext';

// // const instanceAxios = axios.create({
// //  baseURL:"/api/"
// // });

// // instanceAxios.interceptors.request.use(
// //   (config) => {
// //     let userAccessToken;
// //     if (typeof localStorage !== 'undefined') {
// //       userAccessToken = localStorage.getItem("user_accesToken");
// //     }

// //     if (userAccessToken) {
// //       config.headers.Authorization = `Bearer ${userAccessToken}`;
// //     }
    
// //     return config;
// //   },
// //   // (error) => {
// //   //   return Promise.reject(error);
// //   // }

// //   (error) => {
// //         if (error.response && error.response.status === 401) {
// //     //     // Token expired, logout the user
// //          localStorage.removeItem('user_accesToken');
// //           localStorage.removeItem('user_LoginDate');
// //        localStorage.removeItem('isUser');
// //        const router=useRouter()
// // const {push}=router
// // push("/login")
// // const {setIsUser}=useGlobalContext()
// //          setIsUser(false); // Assuming setIsUser function is available and set the state properly
// //       }
// //         return Promise.reject(error);
// //        }
// // );

// // export { instanceAxios };






// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useGlobalContext } from '../Context/GlobalContext';

// const instanceAxios = axios.create({
//  baseURL:"/api/"
// });

// instanceAxios.interceptors.request.use(
//   (config) => {
//     let userAccessToken;
//     if (typeof localStorage !== 'undefined') {
//       userAccessToken = localStorage.getItem("user_accesToken");
//     }

//     if (userAccessToken) {
//       config.headers.Authorization = `Bearer ${userAccessToken}`;
//     }
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instanceAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Token expired, logout the user
//       localStorage.removeItem('user_accesToken');
//       localStorage.removeItem('user_LoginDate');
//       localStorage.removeItem('isUser');
//       const router = useRouter();
//       router.push("/login");
//       const { setIsUser,setIsAdmin } = useGlobalContext() ||{};
//       setIsUser(false); // Assuming setIsUser function is available and set the state properly
//     }
//     return Promise.reject(error);
//   }
// );

// export { instanceAxios };













// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useGlobalContext } from '../Context/GlobalContext';

// const instanceAxios = axios.create({
//  baseURL: "/api/"
// });

// instanceAxios.interceptors.request.use(
//   (config) => {
//     let userAccessToken;
//     let adminAccessToken;
//     if (typeof localStorage !== 'undefined') {
//       userAccessToken = localStorage.getItem("user_accesToken");
//       adminAccessToken = localStorage.getItem("admin_accesToken");
//     }

//     if (adminAccessToken) {
//       config.headers.Authorization = `Bearer ${adminAccessToken}`;
//     } else if (userAccessToken) {
//       config.headers.Authorization = `Bearer ${userAccessToken}`;
//     }
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );



// instanceAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {


    
// const router = useRouter();
// const pathname = router.pathname;

//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('user_accesToken');
//       localStorage.removeItem('admin_accesToken');
//       // localStorage.removeItem('user_LoginDate');
//       localStorage.removeItem('isUser');
//       localStorage.removeItem('isAdmin'); 
     
//       const { setIsUser, setIsAdmin } = useGlobalContext() || {};

//       if (pathname.startsWith('/admin')) {
//         setIsAdmin && setIsAdmin(false);
//         router.push("/admin/login"); 
//       } else {
//         setIsUser && setIsUser(false);
//         router.push("/login"); 
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export { instanceAxios };











// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useGlobalContext } from '../Context/GlobalContext';

// const instanceAxios = axios.create({
//   baseURL: "/api/"
// });

// instanceAxios.interceptors.request.use(
//   (config) => {
//     const userAccessToken = localStorage.getItem("user_accesToken");
//     const adminAccessToken = localStorage.getItem("admin_accesToken");

//     if (adminAccessToken) {
//       config.headers.Authorization = `Bearer ${adminAccessToken}`;
//     } else if (userAccessToken) {
//       config.headers.Authorization = `Bearer ${userAccessToken}`;
//     }
    
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// const refreshToken = async () => {
//   const userRefreshToken = localStorage.getItem("user_refreshToken");
//   const adminRefreshToken = localStorage.getItem("admin_refreshToken");

//   try {
//     if (adminRefreshToken) {
//       const response = await axios.post('/api/auth/refresh', { refresh_token: adminRefreshToken });
//       const { access_token, refresh_token } = response.data;
//       localStorage.setItem("admin_accesToken", access_token);
//       if (refresh_token) {
//         localStorage.setItem("admin_refreshToken", refresh_token);
//       }
//       return access_token;
//     } else if (userRefreshToken) {
//       const response = await axios.post('/api/auth/refresh', { refresh_token: userRefreshToken });
//       const { access_token, refresh_token } = response.data;
//       localStorage.setItem("user_accesToken", access_token);
//       if (refresh_token) {
//         localStorage.setItem("user_refreshToken", refresh_token);
//       }
//       return access_token;
//     }
//   } catch (error) {
//     throw new Error("No refresh token available or refresh failed");
//   }
// };

// instanceAxios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // const router = useRouter();
//     // const { setIsUser, setIsAdmin } = useGlobalContext() || {};

//     if (error.response && error.response.status === 401) {
//       try {
//         const newAccessToken = await refreshToken();
//         error.config.headers.Authorization = `Bearer ${newAccessToken}`;
//         return instanceAxios(error.config);
//       } catch (refreshError) {
//         localStorage.removeItem('user_accesToken');
//         localStorage.removeItem('admin_accesToken');
//         localStorage.removeItem('user_refreshToken');
//         localStorage.removeItem('admin_refreshToken');
//         localStorage.removeItem('isUser');
//         localStorage.removeItem('isAdmin');

//         if (error.config.url.includes('/admin')) {
//           setIsAdmin && setIsAdmin(false);
//           // router.push("/admin/login"); 
//         } else {
//           setIsUser && setIsUser(false);
//           // router.push("/login"); 
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export { instanceAxios };








import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: "/api/"
});

instanceAxios.interceptors.request.use(
  (config) => {
    const userAccessToken = localStorage.getItem("user_accesToken");
    const adminAccessToken = localStorage.getItem("admin_accesToken");

    if (adminAccessToken) {
      config.headers.Authorization = `Bearer ${adminAccessToken}`;
    } else if (userAccessToken) {
      config.headers.Authorization = `Bearer ${userAccessToken}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

const refreshToken = async () => {
  const userRefreshToken = localStorage.getItem("user_refreshToken");
  const adminRefreshToken = localStorage.getItem("admin_refreshToken");

  try {
    if (adminRefreshToken) {
      const response = await axios.post('/api/auth/refresh', { refresh_token: adminRefreshToken });
      const { access_token, refresh_token } = response.data;
      localStorage.setItem("admin_accesToken", access_token);
      if (refresh_token) {
        localStorage.setItem("admin_refreshToken", refresh_token);
      }
      return access_token;
    } else if (userRefreshToken) {
      const response = await axios.post('/api/auth/refresh', { refresh_token: userRefreshToken });
      const { access_token, refresh_token } = response.data;
      localStorage.setItem("user_accesToken", access_token);
      if (refresh_token) {
        localStorage.setItem("user_refreshToken", refresh_token);
      }
      return access_token;
    }
  } catch (error) {
    throw new Error("No refresh token available or refresh failed");
  }
};

instanceAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken();
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return instanceAxios(error.config);
      } catch (refreshError) {
        localStorage.removeItem('user_accesToken');
        localStorage.removeItem('admin_accesToken');
        localStorage.removeItem('user_refreshToken');
        localStorage.removeItem('admin_refreshToken');
      }
    }
    return Promise.reject(error);
  }
);

export { instanceAxios };