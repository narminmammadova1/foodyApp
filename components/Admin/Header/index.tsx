import Image from 'next/image'
import React from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'

const AdminHeader = () => {

  const {isOpen,open,close}=useModal()
  return (
<div>
<AdminModal onClose={close} isOpen={isOpen} modalDescription="Add your Product description and necessary information"/>

    <div  className=' bg-dark-div flex items-center  px-[21px] py-[10px] rounded-b-[14px] mx-5 mb-4 justify-between items-center'>

    <div>
      <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>
    </div>
    <div className='flex gap-5 items-center'>
      <button className='flex  justify-end  items-center bg-btn-pink rounded-[14px] px-3 h-[28px]  font-roboto text-white  font-[700] text-[10px]'  onClick={open}><img className='me-[3px]' src="/icons/plus.svg" alt=""  />ADD PRODUCT</button>
      <div>
        <img className=' cursor-pointer' src="/icons/lang.svg" alt="flag" />
      </div>
      <div className='flex justify-center items-center gap-4'>
        <img className=' cursor-pointer' src="/icons/avatar.svg" alt="avatar" />
        <p className=' text-text-header  font-roboto  font-medium  text-[16px]'>Admin</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AdminHeader
