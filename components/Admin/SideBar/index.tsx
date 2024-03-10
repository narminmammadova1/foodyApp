
import React from 'react'
import { LabelModal } from '../../Styled/Typography'

const SideBar = () => {
  return (
    <div>
        <div className=' w-[256px]  h-[474px] bg-main-purple rounded-[14px] p-8 mt-5 mx-4
         '>
<div>
    <ul className='flex flex-col gap-6  font-roboto text-text-sideBar '>
        <li className='flex gap-5'> <img src="/icons/dashboard.svg" alt="a" />
          Dashboard</li>
        <li className='flex gap-5'><img src="/icons/products.svg" alt="" />
          Products</li>
        <li className='flex gap-5'><img src="/icons/restaurants.svg" alt="" />
        Restaurants</li>
        <li className='flex gap-5'><img src="/icons/category.svg" alt="" />
          Category</li>
        <li className='flex gap-5'><img src="/icons/orders.svg" alt="" />
          Orders</li>
        <li className='flex gap-5'><img src="/icons/offer.svg" alt="" />
          Offer</li>
        <li className='flex gap-5'><img src="/icons/logout.svg" alt="" />
          Logout</li>
    </ul>
</div>

        </div>
      
    </div>
  )
}

export default SideBar
