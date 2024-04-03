import Image from 'next/image'
import React from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useTranslation } from 'react-i18next'
 import { handlechange } from '../SideBar'
const AdminHeader = () => {

const {t,i18n}=useTranslation()
 




  const {isOpen,open,close}=useModal()

  const {isOpenLang,openLang}=useDropdownn()
  return (
<div>
<AdminModal onClose={close} isOpen={isOpen} btnText="Add Product" modalDescription="Add your Product description and necessary information"/>

    <div  className=' bg-dark-div flex items-center  px-[21px] py-[10px] rounded-b-[14px] mx-5 mb-4 justify-between '>

    <div>
      <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>
    </div>
    <div className='flex gap-5 items-center'>
      <button className='flex  justify-end  items-center bg-btn-pink rounded-[14px] px-3 h-[28px]  font-roboto text-white  font-[700] text-[10px]'  onClick={open}><img className='me-[3px]' src="/icons/plus.svg" alt=""  />ADD PRODUCT</button>
      <div className=' bg-dark-div relative w-[59px] flex flex-col items-center h-10' >
        <div  onClick={openLang}>
        <img className=' cursor-pointer'  src={`/icons/lang${i18n.language === 'en' ? 'en': i18n.language==="fr"  ? 'fr': 'az'}.svg`}  alt="flag"   />
        </div>
        {isOpenLang && <div className=''>
        <div  onClick={openLang} className=' text-14px roboto-medium z-30 flex flex-col w-[59px]  bg-dark-div relative  items-center py-1 font-medium'>
        <div  onClick={openLang}  className=' border-b-1 border-white py-4'  ><img src="/icons/langaz.svg" alt=""  onClick={()=>handlechange("az",i18n)}/></div>
        <div  className=' border-b-1 border-white py-4'  ><img src="/icons/langfr.svg" alt=""  onClick={()=>handlechange("fr",i18n)}/></div>
        <div  className=' border-b-1 border-white py-4'  ><img src="/icons/langen.svg" alt=""  onClick={()=>handlechange("en",i18n)}/></div>

        </div>
     </div> } 


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
