import React from 'react'
import ButtonRed from '../ButtonRed'
import { useRouter } from 'next/router'
import { ROUTER } from '../../../Constant/Router'
import Image from 'next/image'
import { isActiveLink } from '../HeaderClient'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useGlobalContext } from '../../../Context/GlobalContext'


interface NavbarMobileProps{
    closeSidebar:()=>void
}
const NavbarMobile:React.FC<NavbarMobileProps> = ({closeSidebar}) => {
    // const {openSidebar,isOpenSidebar,}=useDropdownn()
const { isUser, setIsUser,profilImg,letters}=useGlobalContext() || {}
    const router=useRouter()
    const {push}= router
  return (
<div className='w-full h-[1044px]  z-50 flex'>

    

    <div className='bg-white  w-4/5'>
    <div className='ps-4 pt-4 '>
        <Image onClick={closeSidebar} className='w-[16.33px] h-[16.92.px]' width={200} height={200} src="/icons/x2.svg" alt='close'/>
    </div>

<div className=' mt-[112px] h-[41px] flex items-center justify-center '>
{isUser ? (<div className=' flex gap-2 items-center'> <div  className=' w-10 h-10 cursor-pointer rounded-full object-cover text-white flex justify-center items-center font-roboto roboto-medium bg-avatarColor '>
                {profilImg ? <img className=' w-10 h-10 rounded-full' src={profilImg} /> : <span>{letters}</span>}
              </div>
              <p className='text-base font-medium  font-roboto-medium text-blackli'>Nermin Memmedova</p> </div>) :
              (<div className='w-[127px]'>
              <ButtonRed onClick={()=>{
    push(ROUTER.USER_REGISTER)
}} btnText="Sign Up"/>
</div>)}

</div>

      <div className='px-4 mt-[93px]'>
        <ul className='flex-col gap-4 text-lg font-roboto text-headerUl roboto-medium'>
            <li  className={`${isActiveLink(ROUTER.HOME) ? "activeLink2" : ""} cursor-pointer `} onClick={()=>{
                push(ROUTER.HOME)
            }}>Home</li>
            <li  className={`${isActiveLink(ROUTER.RESTAURANTS) ? "activeLink2" : ""} cursor-pointer `}  onClick={()=>{
                push(ROUTER.RESTAURANTS)
            }}>Restaurants</li>

<li  className={`${isActiveLink(ROUTER.RESTAURANTS) ? "activeLink2" : ""} ${isUser ? "flex" : "hidden"} cursor-pointer  `}  onClick={()=>{
                push(ROUTER.PROFILE)
            }}>Profile</li>
              <li  className={`${isActiveLink(ROUTER.BASKET) ? "activeLink2" : ""} ${isUser ? "flex" : "hidden"} cursor-pointer `}  onClick={()=>{
                push(ROUTER.BASKET)
            }}>Your Basket</li>
              <li  className={`${isActiveLink(ROUTER.ORDER) ? "activeLink2" : ""} ${isUser ? "flex" : "hidden"} cursor-pointer `}  onClick={()=>{
                push(ROUTER.ORDER)
            }}>Your Orders</li>
              <li  className={`${isActiveLink(ROUTER.CHECKOUT) ? "activeLink2" : ""} ${isUser ? "flex" : "hidden"} cursor-pointer `}  onClick={()=>{
                push(ROUTER.CHECKOUT)
            }}>Checkout</li>
            <li  className={`${isActiveLink(ROUTER.ABOUTus) ? "activeLink2" : ""} cursor-pointer `}  onClick={()=>{
                push(ROUTER.ABOUTus)
            }}>About Us</li>
            <li  className={`${isActiveLink(ROUTER.HOWITWORKS) ? "activeLink2" : ""} cursor-pointer `}  onClick={()=>{
                push(ROUTER.HOWITWORKS)
            }}>How It Works</li>
            <li className={`${isActiveLink(ROUTER.FAQS) ? "activeLink2" : ""} cursor-pointer `}   onClick={()=>{
                push(ROUTER.FAQS)
            }}>Fags</li>

             <li className={`${isActiveLink(ROUTER.FAQS) ? "activeLink2" : ""} cursor-pointer mt-[58px] `}   onClick={()=>{
                setIsUser(false)
                push(ROUTER.HOME)
            }}>Logout</li>
            
            

        </ul>
      </div>



    </div>

    <div className='w-1/5  bg-slate-500 opacity-25 '>

       
    </div> 
    </div>




  )
}

export default NavbarMobile
