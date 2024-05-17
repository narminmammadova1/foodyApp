import { useRouter } from 'next/router'
import React from 'react'
import { isActiveLink } from '../HeaderClient'
import { ROUTER } from '../../../Constant/Router'

const UserSidebar = () => {

  const router=useRouter()
  const {push}=router

  return (
    <div className='w-[325px] h-[515px] px-[39px] pt-[45px]  bg-headerbg'>
     <nav>

        <ul className='flex flex-col gap-[30px] font-mukta font-[600] text-[20px]  text-par3-text'>
          <div className={`${isActiveLink(ROUTER.PROFILE) ? "activeLink3" : ""}  flex justify-start ps-[18px]  h-[56px] `}>
            <li onClick={()=>push(ROUTER.PROFILE)} className="cursor-pointer flex gap-3 items-center"><img className=' text-mainRed' src="/icons/profile.svg" alt="user" />Profile</li>
            </div>
            <div className={`${isActiveLink(ROUTER.BASKET) ? "activeLink3" : ""}  flex justify-start ps-[18px]  h-[56px] `}>

            <li  onClick={()=>push(ROUTER.BASKET)} className=' cursor-pointer flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="basket" />Your Basket</li>
            </div>
            <div className={`${isActiveLink(ROUTER.ORDER) ? "activeLink3" : ""}  flex justify-start ps-[18px]  h-[56px] `}>

            <li  onClick={()=>push(ROUTER.ORDER)}  className='cursor-pointer flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="order" />Your Orders</li>
            </div>
            <div className={`${isActiveLink(ROUTER.CHECKOUT) ? "activeLink3" : ""}  flex justify-start ps-[18px]  h-[56px] `}>

            <li  onClick={()=>push(ROUTER.CHECKOUT)}  className='cursor-pointer flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="checkout" />Checkout</li>
            </div>

            <div className={`${isActiveLink(ROUTER.PROFILE) ? "activeLink3" : ""}  flex justify-start ps-[18px]  h-[56px] `}>

            <li  onClick={()=>push("/login")}  className='cursor-pointer flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="logout" />Logout</li>
            </div>

        </ul>
        </nav> 
    </div>
  )
}

export default UserSidebar
