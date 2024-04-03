import React from 'react'

const UserSidebar = () => {
  return (
    <div className='w-[325px] h-[515px] px-[53px] pt-[45px]  bg-headerbg'>
     <nav>

        <ul className='flex flex-col gap-[30px] font-mukta font-[600] text-[20px]  text-par3-text'>
            <li className='flex gap-3 items-center'><img src="/icons/profile.svg" alt="user" />Profile</li>
            <li className='flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="basket" />Your Basket</li>
            <li className='flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="order" />Your Orders</li>
            <li className='flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="checkout" />Checkout</li>
            <li className='flex gap-3 items-center'><img src="/icons/userbasket.svg" alt="logout" />Logout</li>
        </ul>
        </nav> 
    </div>
  )
}

export default UserSidebar
