import Image from 'next/image'
import React from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'

const AdminHeader = () => {

  const {isOpen,open,close}=useModal()
  return (
<div>
<AdminModal onClose={close} isOpen={isOpen}/>

    <div  className=' bg-dark-div flex items-center  px-[10px] py-[10px] rounded-b-[14px] mx-4 justify-between items-center'>

    <div>
      <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>
    </div>
    <div className='flex gap-5'>
      <button className='flex  justify-end items-center bg-btn-pink rounded-[14px] px-4 font-roboto text-white  text-[10px]'  onClick={open}><img src="/icons/plus.svg" alt=""  />ADD PRODUCT</button>
      <div>
        <img className=' cursor-pointer' src="/icons/lang.svg" alt="flag" />
      </div>
      <div className='flex justify-center items-center gap-5'>
        <img className=' cursor-pointer' src="/icons/avatar.svg" alt="avatar" />
        <p className=' text-text-header  font-roboto  font-medium  text-[16px]'>Admin</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AdminHeader
