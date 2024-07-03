

import React, { useState } from 'react';
import AdminHeader from '../../../components/Admin/Header';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import { isValidEmail, isValidPassword } from '../../../Constant/Regex/Regex';
import { signAdmin, signInUser, signUpUser } from '../../../services';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ROUTER } from '../../../Constant/Router';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useDropdownn } from '../../../shared/hooks/useDropdown';
import { handlechange } from '../../../components/Admin/SideBar';
import i18n from '../../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { FaRegEyeSlash } from "react-icons/fa";
import { BarLoader, CircleLoader, ClipLoader, GridLoader } from 'react-spinners';


const validate = (values: any) => {
  let errors: any = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!isValidPassword(values.password)) {
    errors.password = "Invalid password";
  }

  // if (values.email !== "admin11@gmail.com") {
  //   errors.email = ("This is not Admin email");
  // }

  if (values.password !== "admin111") {
    errors.password = ("This is not Admin password");
  }

  return errors;
};



const AdminLogin: NextPage = () => {
 
  const [loading, setLoading] = useState(false);

const {t,i18n}=useTranslation()
const { setIsAdmin,setIsUser,showPassword,isLoading,togglePassword,setShowPassword}=useGlobalContext() || {}

const { isOpenLang, openLang } = useDropdownn()

  const {push}=useRouter()


// const { mutate: signInAdminMutation } = useMutation({
//   mutationFn: signAdmin,
//   onSuccess: (data) => {
//     setLoading(false)
//     console.log("adminmutation data", data);
   
//     if (data && data.data.user && data.data.user.email === "admin111@gmail.com") {
    

      
//       localStorage.setItem("admin_accesToken", data?.data.user.access_token);
//       localStorage.setItem("admin_refreshToken", data?.data.user.refresh_token);

//       localStorage.setItem("admin_LoginDate", String(new Date().getTime()))
//       localStorage.setItem("isAdmin", "true"); 

//       setIsAdmin(true);
//       // setIsUser(false)
//       toast.success("Welcome Admin", { autoClose: 1000 });
//       setTimeout(() => {
//         push(ROUTER.ADMINPRODUCTS);
//       }, 500);
//     } else {
//       toast.error("You are not Admin", { autoClose: 1500 });
//     }
//   },
//   onError: (error) => {
//     setLoading(false)
//     toast.error("You are not Admin",{autoClose:1500})
//     console.error("An error occurred:", error);
//   }
// });







const { mutate: signInAdminMutation } = useMutation({
  mutationFn: signAdmin,
  onSuccess: (data) => {
    setLoading(false);
    console.log("adminmutation data", data);

    if (data && data.data.user && data.data.user.email === "admin111@gmail.com") {
      sessionStorage.setItem("admin_accessToken", data?.data.user.access_token);
    //  localStorage.setItem("admin_accessToken", data?.data.user.access_token);
    // localStorage.setItem("admin_refreshToken", data?.data.user.refresh_token);

      sessionStorage.setItem("admin_refreshToken", data?.data.user.refresh_token);
      // sessionStorage.setItem("admin_LoginDate", String(new Date().getTime()));
      sessionStorage.setItem("isAdmin", "true");
    //  localStorage.setItem("isAdmin", "true");


      setIsAdmin(true);
      toast.success("Welcome Admin", { autoClose: 1000 });
      setTimeout(() => {
        push(ROUTER.DASHBOARD);
      }, 500);
    } else {
      toast.error("You are not Admin", { autoClose: 1500 });
    }
  },
  onError: (error) => {
    setLoading(false);
    toast.error("You are not Admin", { autoClose: 1500 });
    console.error("An error occurred:", error);
  }
});


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: (values) => {
      setLoading(true)
      signInAdminMutation(values);
      console.log("welcomeeeeee");

      

    },
  });


  const isDisabled = !formik.values.email || formik.values.password!=="admin111" || !formik.values.password  || loading;

//   if (isLoading ) {
//     return <div className=' w-full h-screen fixed  justify-center items-center flex m-auto bg-black'>    <CircleLoader color="#36D7B7" loading={true} />
//  </div>;
//     }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className=' mt-[57px] ms-[37px]'><img src="/svgs/logo.svg" alt="" /></div>

        <div className='w-full flex lg:mt-0 bg-dark-body items-center justify-center   h-screen'>
          <div className='flex flex-col-reverse lg:flex lg:flex-row lg:w-[830px] items-center h-[411px] '>

            <div className='  lg:w-1/2  lg:bg-login-gray mx-auto h-full flex flex-col  '>
              <div className='  items-end justify-center m-auto' >
                <h1 className=' font-bold text-[24px] text-center  lg:text-4xl text-par-text  font-montserrat' >{t("Welcome Admin")}</h1>
                <form className='flex flex-col font-roboto ' onSubmit={formik.handleSubmit}>
                  <input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder='email'
                    className='px-[40px]   font-normal text-par-text    mt-[48px] rounded-[4px]  bg-input-gray  h-[50px] text-[18px]'
                  />
                  {formik.errors.email && <div>{formik.errors.email}</div>}
                  <div className='flex relative'>
                  <input
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Password'
                    className='px-[40px] font-normal  text-par-text   text-[18px]  bg-input-gray mt-[26px]  rounded-[4px] h-[50px]'
                    type={`${showPassword? "text" :"password"}`}    
                                  />

 <div onClick={togglePassword} className=' cursor-pointer absolute right-4 top-10 '>
  <div className=' '>
              <Image className={` ${ showPassword ?"block"  :"hidden"} w-[32px] h-[20px] lg:w-[35px] lg:h-[32px]`} width={200} height={200} src="/icons/eye.svg" alt="eye"/>
             
             <FaRegEyeSlash className={` ${ showPassword ?"hidden"  :"block"}  text-modal_p w-[32px] h-[20px] lg:w-[35px] lg:h-[32px]`} />

              </div>
             </div>                                                  
                                                    
                                                    
 </div>

 {formik.errors.password && <div>{formik.errors.password}</div>}
  
                  <button type="submit"              
 className={`   bg-btn-pink cursor-pointer  rounded-[4px] w-full ${isDisabled ? "disabled" : ""}   mt-[35px] font-bold text-white h-[50px]`}>{t(loading ? "loading..." :"Sign In")}</button>
                </form>
              </div>
            </div>

            <div className=' px-14 lg:px-0 lg:w-1/2 h-full relative lg:bg-white flex   flex-col gap-2'>
              <div>
              <div onClick={openLang} className='flex justify-end   '>
                <Image
                  width={100}
                  height={100}
                  alt='lang.svg'
                  src={`/icons/lang${i18n.language === 'en' ? 'en' : i18n.language === "fr" ? 'fr' : 'az'}.svg`}
                  className='w-[41px] h-[41px] mt-2 me-3'
                />

              </div>


              
{isOpenLang &&
                <div onClick={openLang} className=' text-14px w-[60px] right-0 top-10 roboto-medium z-50 flex flex-col mt-2 bg-white absolute items-center py-1 font-medium'>
                 
                 
                  <div onClick={openLang} className=' border-b-1 border-white py-4'  ><img  onClick={()=>handlechange("az",i18n)}src="/icons/langaz.svg" alt="" 
                  /></div>
                  <div className=' border-b-1 border-white py-4'  ><img onClick={()=>handlechange("fr",i18n)} src="/icons/langfr.svg" alt="" 
                  />
                  </div>
                  <div className=' border-b-1 border-white py-4'  ><img onClick={()=>handlechange("en",i18n)} src="/icons/langen.svg" alt="" 
                   /></div>

                </div>
              }
              </div>

              <div className=' z-30'>
                <Image
                  width={100}
                  height={100}
                  alt='log.svg'
                  src="/svgs/loginImg.svg"
                  className=' w-[174px] h-[153px ] lg:w-[346px] lg:h-[303px] m-auto'
                />
              </div>
            </div>



          </div>
        </div>
      </Layout>
    </>

  )
}

export default AdminLogin;