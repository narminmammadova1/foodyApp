import React from 'react'
 
interface BtnCheckout {
  size:string | undefined
}
const BtnCheckout:React.FC<BtnCheckout> = ({size}) => {
  const btn_size=size==="small" ?"btn_small":"btn_large"
  const btn2_size=size==="small" ?"btn2_small":"btn2_large"

  return (
    <div className=''>
     <button  className={`${btn_size} roboto-medium font-medium bg-btnRed w-full text-white rounded-full h-[47px]`}><div className='flex  justify-between ps-6 items-center'><p>Checkout</p><div className={`w-[135px] h-[43px] rounded-full ${btn2_size} bg-white text-btnRed flex items-center justify-center`}><p>$37.40</p></div></div></button> 
    </div>
  )
}

export default BtnCheckout
