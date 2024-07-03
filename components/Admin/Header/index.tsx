import Image from 'next/image'
import React, { useState } from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useTranslation } from 'react-i18next'
 import SideBar, { handlechange } from '../SideBar'

 import i18n from "../../../next.config"
import ProductModal from '../../Modals/ProductModal'
import { useSpring,animated } from '@react-spring/web'
import { useRouter } from 'next/router'
import { ROUTER } from '../../../Constant/Router'

const AdminHeader = () => {

const {t,i18n}=useTranslation()
 
const[isNavbar,setIsNavbar]=useState(true)
const {isOpen,open,close,isOpenProductModal,openProductModal,closeProductModal}=useModal()

const router=useRouter()
const {push}=router

  const {isOpenLang,openLang,openSidebar,isOpenSidebar,closeSidebar}=useDropdownn()


 
  const sidebarAnimation = useSpring({
    transform: isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 300, friction: 30 },
  })
  return (
<div>
<ProductModal   onClose={closeProductModal} isOpen={isOpenProductModal} />

    <div  className=' bg-dark-div mx-0 flex items-center   px-[21px] py-[10px] rounded-b-[14px]  lg:mx-5 mb-4 justify-between '>
<div className='flex-col relative'>
<div className=' flex'>
  <Image onClick={openSidebar}  className='w-[26px] h-[24px]   lg:hidden'  width={1000} height={1000} src="/icons/navbar.svg" alt='nav'/>
  <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>

</div>
{isOpenSidebar && <animated.div style={sidebarAnimation} className='fixed w-full lg:hidden top-0 z-50'>
<div className=' relative left-[-40px]'>
<SideBar isNavbar={isNavbar} closeSidebar={closeSidebar}/>
</div>

</animated.div>}

</div>
    <div>
      {/* <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/> */}
    </div>
    <div className='flex gap-5 items-center'>
      <button className='hidden  lg:block  justify-end  items-center bg-btn-pink rounded-[14px] px-3 h-[28px]  font-roboto text-white  font-[700] text-[10px]'  onClick={openProductModal}><div className='flex'><img className='me-[3px]' src="/icons/plus.svg" alt=""  /> {t(" ADD PRODUCT")}</div></button>

      <div className=' bg-dark-div relative w-[59px] flex flex-col items-center h-10' >
        <div className=''  onClick={openLang}>
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
      <button className=' justify-end  items-center bg-btn-pink rounded-full  w-[40px] h-[40px]  font-roboto text-white  font-[700] text-[20px] lg:hidden'    onClick={openProductModal}>+</button>

        <img className=' cursor-pointer' src="/icons/avatar.svg" alt="avatar" />
        <p className='hidden lg:block text-text-header  font-roboto  font-medium  text-[16px]'>{t("Admin")}</p>
      </div>
    </div>
    </div> 
    {/* <SideBar isNavbar/> */}

    </div>

  )
}

export default AdminHeader
