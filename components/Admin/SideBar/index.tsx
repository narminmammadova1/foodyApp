
import React from 'react'
import { LabelModal } from '../../Styled/Typography'
import { useRouter } from 'next/router'





const SideBar = () => {

  const router=useRouter()
// const {push}=router

const handleNavigate = (route) => {
  router.push(route);
};


  return (
    <div>
        <div className=' w-[256px]  h-[474px] bg-main-purple rounded-[14px] p-10  ms-4 me-7
         '>
<div>
    <ul className='flex font-medium flex-col gap-6 text-[16px] text-text-sideBar '>
        <li className='flex gap-6 cursor-pointer '  onClick={()=>handleNavigate("/admin")}> <img src="/icons/dashboard.svg" alt="a"/>
          Dashboard</li>
        <li className='flex gap-6 cursor-pointer' onClick={()=>handleNavigate("/admin/products")}><img src="/icons/products.svg" alt="" />
          Products</li>
        <li className='flex gap-6  cursor-pointer' onClick={()=>handleNavigate("/admin/restuarants")}><img src="/icons/restaurants.svg" alt="" />
        Restaurants</li>
        <li className='flex gap-5  cursor-pointer'  onClick={()=>handleNavigate("/admin/category")}><img src="/icons/category.svg" alt="" />
          Category</li>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>handleNavigate("/admin/orders")}><img src="/icons/orders.svg" alt="" />
          Orders</li>
        <li className='flex gap-6  cursor-pointer'  onClick={()=>handleNavigate("/admin/offer")}><img src="/icons/offer.svg" alt="" />
          Offer</li>
        <li className='flex gap-6 mt-6 cursor-pointer'><img src="/icons/logout.svg" alt="" />
          Logout</li>
    </ul>
</div>

        </div>
      
    </div>
  )
}

export default SideBar
