
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MainClient from '../../components/Client/MainClient'
import RedHeader from '../../components/Client/RedHeader'
import Image from 'next/image'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ROUTER } from '../../Constant/Router'
import { QueryClient, useMutation, useQueryClient } from 'react-query'
import { signInUser } from '../../services'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { useGlobalContext } from '../../Context/GlobalContext'
import { QUERIES } from '../../Constant/Queries'

const LoginPage: NextPage = () => {
  const router = useRouter()
  const { push } = router
  const { isBasket, setIsBasket, isAvatar, letters, setIsAvatar, userData,setIsAdmin, isName, setLetters, setIsName, isLoginBtn, setIsLoginBtn, setIsUser, showPassword, setShowPassword, togglePassword } = useGlobalContext() || {}

  const queryClient = useQueryClient()
  useEffect(() => {
    const userToken = localStorage.getItem("user_accesToken")
    if (userToken) {
      setIsAvatar(true)
      setIsBasket(true)
      setIsLoginBtn(false)
      setIsUser(true)
    }
  }, [])
  useEffect(() => {
    console.log("userData controllllllllllllllllllllll",userData);
  }, []);

  useEffect(() => {
    if (letters && userData) {
      const userFullname = userData?.fullname;
      const lettersArr = userFullname?.toUpperCase().split(' ');
      const userLetters = lettersArr?.map((item) => item[0]).join("");
      setLetters(userLetters);
    }
  }, [letters,userData]);
  const { mutate: signInUserMutation } = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      console.log("SignIn user mutate ugurlu", data?.data.user);
      toast.success("sisteme daxil oldunuz", { autoClose: 2000 })

      localStorage.setItem("user_accesToken", data?.data.user.access_token);
      localStorage.setItem("user_LoginDate", String(new Date().getTime()))
      localStorage.setItem("isUser", "true")
      setIsUser(true)
      // localStorage.setItem("user_refreshToken", data?.data.user.access_token);
      setIsAvatar(true)
      setIsBasket(true)
      setIsLoginBtn(false)
      setIsUser(true)
      setIsAdmin(false);
      queryClient.invalidateQueries(QUERIES.User)
      push("/")


    },
    onError: (error) => {
      console.log(error, "signin user error ");
      toast.error("xeta mutationda")

    }
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      localStorage.removeItem("admin_accessToken");  // Clear admin token if any

      signInUserMutation(values)
    }
  })

  return (
    <>
      <Head>
        <title>Login|Desktop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainClient>
        <RedHeader />
        <div className='flex  mt-7 '>
          <div className='leftt w-2/3 bg-mainRed rounded-[4px]'>
            <Image width={1000} height={1000} src="/pngs/member.svg" alt='png' />
          </div>
          <div className='rightt w-1/2 flex flex-col px-10 '>
            <div>
              <div className='flex mt-24 mb-[72px] gap-[65px] justify-center'>
                <button onClick={() => push(ROUTER.USER_LOGIN)} className=' text-mainRed font-roboto  font-[600] text-[30px] letter3'>Login</button>
                <button onClick={() => push(ROUTER.USER_REGISTER)} className='  text-par3-text font-roboto  font-[400] text-[30px] letter3'>Register</button>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <label className=' text-modal_p text-[20px] font-[500] ' htmlFor="">Username</label>
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className=' font-roboto font-[400] text-modal_p h-[68px] w-full mb-7 bg-lightPink  mt-4 ps-6 rounded-[5px]  text-[18px]  ' type="email" placeholder='username' />

                <label className=' text-modal_p  text-[20px] font-[500] ' htmlFor="">Password</label>
                <div className='flex relative items-center'>
                  <input
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className=' font-roboto font-[400] text-modal_p h-[68px] w-full bg-lightPink  mt-4 ps-6 rounded-[5px]  text-[18px]  '
                    type={`${showPassword ? "text" : "password"}`} placeholder='password' />
                  <div onClick={togglePassword} className=' cursor-pointer absolute right-4 top-8 '>
                    <Image className='w-[35px] h-[32px]' width={200} height={200} src="/icons/eye.svg" alt="eye" />
                  </div>
                </div>
                <button className='mt-[72px] bg-mainRed h-[68px] w-full text-white rounded-[5px] text-[22px]' type="submit">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </MainClient>
    </>
  )
}

export default LoginPage