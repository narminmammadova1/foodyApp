
import React from 'react'
import { LabelModal } from '../../Styled/Typography'
import { useRouter } from 'next/router'

import { withTranslation } from 'react-i18next';

import { useTranslation } from 'react-i18next';

  
  
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
        <div className=' w-[256px]  h-[474px] bg-main-purple rounded-[14px] p-10  ms-4 me-7
         '>
<div>
    <ul className='flex font-medium flex-col gap-6 text-[16px] text-text-sideBar '>
        <li className='flex gap-6 cursor-pointer '  onClick={()=>push("/admin")}> <img src="/icons/dashboard.svg" alt="a"/>
        {t("Dashboard")}</li>
        <li className='flex gap-6 cursor-pointer' onClick={()=>push("/admin/products")}><img src="/icons/products.svg" alt="" />
{t("Products")}
         </li>
        <li className='flex gap-6  cursor-pointer' onClick={()=>push("/admin/restuarants")}><img src="/icons/restaurants.svg" alt="" />
{t("Restaurants")}
        </li>
        <li className='flex gap-5  cursor-pointer'  onClick={()=>push("/admin/category")}><img src="/icons/category.svg" alt="" />
       {t("Category")}  </li>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push("/admin/orders")}><img src="/icons/orders.svg" alt="" />
        {t("Orders")}  </li>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>push("/admin/offer")}><img src="/icons/offer.svg" alt="" />
        {t("Offers")}  </li>
        <li className='flex gap-6 mt-6 cursor-pointer'><img src="/icons/logout.svg" alt="" />
       {t("Logout")}  </li>


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
