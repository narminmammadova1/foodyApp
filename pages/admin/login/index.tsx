
  

import React from 'react';
import AdminHeader from '../../../components/Admin/Header';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import { isValidEmail } from '../../../Constant/Regex/Regex';
import { signInUser, signUpUser } from '../../../services';
import { useMutation } from 'react-query';
import axios from 'axios';






const AdminLogin: NextPage = () => {
 

  let validate = (values:any) => {
    let errors = {
      email:"",
      password:""
    };
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = "Password is required"
    }


 return errors

    }

  
 
  const { mutate: signUpAdmin } = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      console.log("mt data", data);
    },
    onError: (error) => {
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
      signUpAdmin(values);
      console.log(values);
      console.log("welcomeee");
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
          <div className='flex w-[830px] h-[411px] '>
            <div className='w-1/2 bg-login-gray  flex flex-col px-[53px] '>
              <div className=' m-auto'>
                <h1 className=' font-bold   text-4xl  text-par-text  font-montserrat' >Welcome Admin</h1>
                <form className='flex flex-col font-roboto ' onSubmit={formik.handleSubmit}>
                  <input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder='email'
                    className='px-[40px]  font-normal   mt-[48px] rounded-[4px]  bg-input-gray  h-[50px] text-[18px]'
                  />
                  {formik.errors.email && <div>{formik.errors.email}</div>}
                  <input
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Password'
                    className='px-[40px] font-normal  text-[18px]  bg-input-gray mt-[26px]  rounded-[4px] h-[50px]'
                    type="password"
                  />
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