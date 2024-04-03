
import React from 'react'
import { LabelModal } from '../../Styled/Typography'
import { useRouter } from 'next/router'

import { withTranslation } from 'react-i18next';

import { useTranslation } from 'react-i18next';
import { isActiveLink } from '../../Client/HeaderClient';
import { ROUTER } from '../../../Constant/Router';

  
  
export const handlechange =(language:string,i18n:any)=>{
  i18n.changeLanguage(language)
     }

const SideBar:React.FC = () => {
 
  const {t,i18n}=useTranslation()

  const router=useRouter()
const {push}=router

console.log("langggg",router);



  return (
    <div>
        <div className={` w-[256px]  h-[474px] bg-main-purple rounded-[14px] py-10  ms-4 me-7
        `}>
<div>
    <ul className='flex font-medium flex-col gap-6 text-[16px] text-text-sideBar '>
      <div className= {`${isActiveLink(ROUTER.DASHBOARD) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className= {`  flex gap-6 cursor-pointer` }  onClick={()=>push(ROUTER.DASHBOARD)}> <img src="/icons/dashboard.svg" alt="a"/>
        {t("Dashboard")}</li>
        </div>
        <div  className= {`${isActiveLink(ROUTER.ADMINPRODUCTS) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6 cursor-pointer' onClick={()=>push(ROUTER.ADMINPRODUCTS)}><img src="/icons/products.svg" alt="" />
{t("Products")}
         </li>
         </div>
         <div  className= {`${isActiveLink(ROUTER.ADMINRESTAURANTS) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer' onClick={()=>push(ROUTER.ADMINRESTAURANTS)}><img src="/icons/restaurants.svg" alt="" />
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
        <div  className= {`${isActiveLink(ROUTER.ADMINOFFER) ? "activeLink" : ""} ms-4 ps-6 `}>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push(ROUTER.ADMINOFFER)}><img src="/icons/offer.svg" alt="" />
        {t("Offers")}  </li>
        </div>
        <div  className= {` ms-4 ps-6 `}>
        <li className='flex gap-6 mt-6 cursor-pointer'><img src="/icons/logout.svg" alt="" />
       {t("Logout")}  </li>
       </div>


          <li className='flex gap-6 mt-6 cursor-pointer'><img src="/icons/logout.svg" alt="" />
          aktivdil:{i18n.language}</li>
    </ul>
    <button onClick={()=>handlechange("az",i18n)}> click</button>
</div>

        </div>
      
    </div>
  )




}

export default SideBar
