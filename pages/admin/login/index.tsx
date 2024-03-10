import React from 'react'
import AdminHeader from '../../../components/Admin/Header'
import Image from 'next/image'

const AdminLogin = () => {
  return (
    <>    
     <AdminHeader/>
    <div className='flex bg-dark-body items-center justify-center   h-screen'>
    <div className='flex w-[830px] h-[411px] '>
        <div className='w-1/2 bg-login-gray  flex flex-col px-[53px] '>
          <div className=' m-auto'>
            <h1 className=' font-bold   text-4xl mb-[25px] text-par-text  font-montserrat'>Welcome Admin</h1>
            <form className='flex flex-col gap-5 font-roboto ' action="">
                <input placeholder='Username' className='px-[40px]  font-normal   mt-[25px] rounded-[4px]  bg-input-gray  h-[50px] text-[18px]' type="text" />
                <input placeholder='Password' className='px-[40px]   bg-input-gray rounded-[4px] h-[50px]' type="password" />
                <button className='  bg-btn-pink  rounded-[4px] w-full  mt-[14px] font-bold text-white h-[50px]'>Sign in</button>


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
            className='w-[41px] h-[41px] mt-3 me-3'
            />
            </div>
            <div>
            <Image
            width={100}
            height={100}
            alt='lang.svg'
            src="/svgs/loginImg.svg"
            className=' w-[346px] h-[303px] m-auto'
            />
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default AdminLogin
