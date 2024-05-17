

import React from 'react';
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




// Form doğrulama fonksiyonu
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
 


const {isAdmin, setIsAdmin,showPassword,setShowPassword,togglePassword}=useGlobalContext() || {}

  const {push}=useRouter()


const { mutate: signInAdmin } = useMutation({
  mutationFn: signInUser,
  onSuccess: (data) => {
    console.log("adminmutation data", data);
    console.log("datauser adm mutat",data.data.user);
   
    if (data && data.data.user && data.data.user.email === "admin11@gmail.com") {
      localStorage.setItem("acces_token", data?.data.user.access_token);
      // localStorage.setItem("refresh_token", data?.data.user.access_token);
      localStorage.setItem("isAdmin", "true"); 

      setIsAdmin(true);
      toast.success("Welcome Admin", { autoClose: 1500 });
      setTimeout(() => {
        push(ROUTER.DASHBOARD);
      }, 2000);
    } else {
      toast.error("You are not Admin", { autoClose: 1500 });
    }
  },
  onError: (error) => {
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
      signInAdmin(values);
      console.log(values);
      console.log("welcomeeeeee");

      

    },
  });


  
  



  


  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className=' mt-[57px] ms-[37px]'><img src="/svgs/logo.svg" alt="" /></div>

        <div className='flex bg-dark-body items-center justify-center   h-screen'>
          <div className='flex  w-[830px] h-[411px] '>

            <div className='w-1/2 bg-login-gray  flex flex-col px-[53px] '>
              <div className=' m-auto'>
                <h1 className=' font-bold   text-4xl text-par-text  font-montserrat' >Welcome Admin</h1>
                <form className='flex flex-col font-roboto ' onSubmit={formik.handleSubmit}>
                  <input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder='email'
                    className='px-[40px]  font-normal text-par-text    mt-[48px] rounded-[4px]  bg-input-gray  h-[50px] text-[18px]'
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
              <Image className='w-[35px] h-[32px]' width={200} height={200} src="/icons/eyepassword.svg" alt="eye"/>
             </div>                                                  
                                                    
                                                    
                                                    </div>

                  {formik.errors.password && <div>{formik.errors.password}</div>}
  
                  <button type="submit" className='  bg-btn-pink  rounded-[4px] w-full  mt-[35px] font-bold text-white h-[50px]'>Sign in</button>
                </form>
              </div>
            </div>

            <div className='w-1/2 bg-white flex flex-col gap-2'>
              <div className='flex justify-end   '>
                <Image
                  width={100}
                  height={100}
                  alt='lang.svg'
                  src="/svgs/lang.svg"
                  className='w-[41px] h-[41px] mt-2 me-3'
                />
              </div>
              <div>
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