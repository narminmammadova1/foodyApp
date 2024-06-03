
import React from 'react'
import { LabelModal } from '../../Styled/Typography'
import Router, { useRouter } from 'next/router'

import { withTranslation } from 'react-i18next';

import { useTranslation } from 'react-i18next';
import { isActiveLink } from '../../Client/HeaderClient';
import { ROUTER } from '../../../Constant/Router';
import i18n from "../../../next.config"
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useQueryClient } from 'react-query';
import { QUERIES } from '../../../Constant/Queries';
import Image from 'next/image';
import { useDropdownn } from '../../../shared/hooks/useDropdown';
  
export const handlechange =(language:string,i18n:any)=>{
  i18n.changeLanguage(language)
     }
     interface SideBarProp{
      isNavbar?:boolean,
      closeSidebar?:()=>void
     }

const SideBar:React.FC<SideBarProp>= ({isNavbar,closeSidebar}) => {
   const {setIsAdmin,setSelectedId,setDefaultText,setIdForFilter}=useGlobalContext() || {}
  const {t,i18n}=useTranslation()

  const router=useRouter()
const {push}=router
console.log("langggg",router);
console.log("isAdmin:", setIsAdmin); 

const queryClient=useQueryClient()
const restoreDefaulttext=()=>{
  setDefaultText("Restauranttt Type")
}
  return (
    <div>
        <div className={` w-[256px]  bg-main-purple ${isNavbar ? "rounded-0 min-h-svh  " :"rounded-[14px] h-[474px]"}  py-10  ms-4 me-7
        `}>
<div>
  {isNavbar && <div className='flex ps-6 mb-8  '>
    <Image onClick={closeSidebar} className=' w-[24px] h-[24px] cursor-pointer' width={100} height={100} alt="logo" src="/icons/arrowBack.svg"/>

    <Image className=' cursor-pointer' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>

    </div>}
    <ul className='flex font-medium flex-col gap-6 text-[16px] text-text-sideBar '>
      <div className= {`${isActiveLink(ROUTER.DASHBOARD) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className= {`  flex gap-6 cursor-pointer` }  onClick={()=>push(ROUTER.DASHBOARD)}> <img src="/icons/dashboard.svg" alt="a"/>
        {t("Dashboard")}</li>
        </div>
        <div  className= {`${isActiveLink(ROUTER.ADMINPRODUCTS) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6 cursor-pointer' onClick={()=>{
                  push(ROUTER.ADMINPRODUCTS)
                  setIdForFilter && setIdForFilter("")
// restoreDefaulttext()
        }}><img src="/icons/products.svg" alt="" />
{t("Products")}
         </li>
         </div>
         <div  className= {`${isActiveLink(ROUTER.ADMINRESTAURANTS) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer' onClick={()=>{
          setIdForFilter && setIdForFilter("")

          push(ROUTER.ADMINRESTAURANTS)}}><img src="/icons/restaurants.svg" alt="" />
{t("Restaurants")}
        </li>
        </div >
        <div  className= {`${isActiveLink(ROUTER.ADMINCATEGORY) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-5  cursor-pointer'  onClick={()=>push(ROUTER.ADMINCATEGORY)}><img src="/icons/category.svg" alt="" />
       {t("Category")}  </li>
       </div>
       <div  className= {`${isActiveLink(ROUTER.ADMINORDERS) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push(ROUTER.ADMINORDERS)}><img src="/icons/orders.svg" alt="" />
        {t("Orders")}  </li>
        </div>
        <div  className= {`${isActiveLink(ROUTER.ADMINHISTORY) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push(ROUTER.ADMINHISTORY)}><img src="/icons/orders.svg" alt="" />
        {t("History")}  </li>
        </div>
        <div  className= {`${isActiveLink(ROUTER.ADMINOFFER) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push(ROUTER.ADMINOFFER)}><img src="/icons/offer.svg" alt="" />
        {t("Offers")}  </li>
        </div>
        <div  className= {` ms-4 ps-6 `}>
        <li className='flex gap-6 mt-6 cursor-pointer' onClick={()=>{
          push(ROUTER.ADMIN_LOGIN)
          localStorage.removeItem("admin_accesToken")
          localStorage.removeItem("refresh_token")
          localStorage.setItem('isAdmin',"false");


          }}><img src="/icons/logout.svg" alt="" />
       {t("Logout")}  </li>
       </div>


         
    </ul>
    {/* <button onClick={()=>handlechange("az",i18n)}> click</button> */}
</div>

        </div>
      
    </div>
  )




}

export default SideBar
