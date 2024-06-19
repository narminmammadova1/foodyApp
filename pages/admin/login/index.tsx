

import React, { useState } from 'react';
import AdminHeader from '../../../components/Admin/Header';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import { isValidEmail, isValidPassword } from '../../../Constant/Regex/Regex';
import { signInUser, signUpUser } from '../../../services';
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

  if (values.password !== "admin11") {
    errors.password = ("This is not Admin password");
  }

  return errors;
};



const AdminLogin: NextPage = () => {
 
  const [loading, setLoading] = useState(false);

const {t,i18n}=useTranslation()
const { setIsAdmin,showPassword,togglePassword}=useGlobalContext() || {}

const { isOpenLang, openLang } = useDropdownn()

  const {push}=useRouter()


const { mutate: signInAdmin } = useMutation({
  mutationFn: signInUser,
  onSuccess: (data) => {
    setLoading(false)
    console.log("adminmutation data", data);
   
    if (data && data.data.user && data.data.user.email === "admin11@gmail.com") {
     

      
      localStorage.setItem("admin_accesToken", data?.data.user.access_token);
      localStorage.setItem("admin_refreshToken", data?.data.user.refresh_token);

      localStorage.setItem("admin_LoginDate", String(new Date().getTime()))
      localStorage.setItem("isAdmin", "true"); 

      setIsAdmin(true);
      toast.success("Welcome Admin", { autoClose: 1500 });
      setTimeout(() => {
        push(ROUTER.DASHBOARD);
      }, 1000);
    } else {
      toast.error("You are not Admin", { autoClose: 1500 });
    }
  },
  onError: (error) => {
    setLoading(false)
    toast.error("You are not Admin",{autoClose:1500})
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
      signInAdmin(values);
      console.log(values);
      console.log("welcomeeeeee");

      

    },
  });


  const isDisabled = !formik.values.email || !formik.values.password && !loading;


  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className=' mt-[57px] ms-[37px]'><img src="/svgs/logo.svg" alt="" /></div>

        <div className='w-full flex mt-[110px] lg:mt-0 bg-dark-body items-center justify-center   h-screen'>
          <div className='flex flex-col-reverse lg:flex lg:flex-row w-[830px] items-center h-[411px] '>

            <div className='w-1/2  lg:bg-login-gray mx-auto h-full flex flex-col  '>
              <div className='  items-end justify-center m-auto' >
                <h1 className=' font-bold text-[24px]   lg:text-4xl text-par-text  font-montserrat' >{t("Welcome Admin")}</h1>
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
                    className='px-[40px] font-normal text-par-text  text-[18px]  bg-input-gray mt-[26px]  rounded-[4px] h-[50px]'
                    type={`${showPassword? "text" :"password"}`}    
                                  />

 <div onClick={togglePassword} className=' cursor-pointer absolute right-4 top-8 '>
              <Image className='w-[35px] h-[32px]' width={200} height={200} src="/icons/eyePassword.svg" alt="eye"/>
             </div>                                                  
                                                    
                                                    
 </div>

 {formik.errors.password && <div>{formik.errors.password}</div>}
  
                  <button type="submit"                 disabled={isDisabled}
 className='   bg-btn-pink  rounded-[4px] w-full   mt-[35px] font-bold text-white h-[50px]'>{loading ? "loading..." :" Sign In"}</button>
                </form>
              </div>
            </div>

            <div className='w-1/2 h-full relative lg:bg-white flex   flex-col gap-2'>
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
                  className=' w-[346px] h-[303px] m-auto'
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