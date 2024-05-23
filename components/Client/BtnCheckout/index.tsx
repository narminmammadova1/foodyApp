import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { ROUTER } from '../../../Constant/Router';
 
interface BtnCheckout {
  size:string | undefined;
  total_price:number |undefined;
  onClick:()=>void
}
const BtnCheckout:React.FC<BtnCheckout> = ({size,total_price,onClick}) => {

 
  const btn_size=size==="small" ?"btn_small":"btn_large"
  const btn2_size=size==="small" ?"btn2_small":"btn2_large"

  return (
    <div className=''>
     <button  onClick={onClick} className={`${btn_size} roboto-medium font-medium bg-btnRed w-full text-white rounded-full h-[47px]`}><div className='flex  justify-between ps-6 items-center'><p>Checkout</p><div className={`w-[135px] h-[43px] rounded-full ${btn2_size} bg-white text-btnRed flex items-center justify-center`}><p>${total_price}</p></div></div></button> 
    </div>
  )
}

export default BtnCheckout
