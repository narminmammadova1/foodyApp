// import React from 'react'

// const EmptyBasket:React.FC = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default EmptyBasket




import React from 'react'
import BtnCheckout from '../BtnCheckout'
import Image from 'next/image';
import { colors } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

interface BasketCardProps{
  size: string | undefined;
  headtitle?: string | undefined
}

const EmptyBasket:React.FC<BasketCardProps> = ({size,headtitle}) => {

  const divSize=size=== "small" ? "basket_small" :"basket_large"

//   const p_size=size==="small"?"p16_small":"p22_large"
//   const p14_size=size==="small"?"p14_small":"p18_large"

//   const img_size=size==="small"? "img_small" :"img_large"
// const whitebtn_size=size==="small" ? "whitebtn_small" :"whitebtn_large"

const pad_size=size==="small"? "padding4":"padding8"
const btn_size=size==="small" ?"btn_small":"btn_large"
const btn2_size=size==="small" ?"btn2_small":"btn2_large"
const {t}=useTranslation()
  return (
    <div className={` bg-headerbg size=" ${divSize}   flex flex-col justify-between  rounded boxShadow3  overflow-y-auto `}>
     <div className='pt-2'>
     <p className='font-mukta font-[600] text-modal_p text-[30px] letter3'>{headtitle}</p>
      <div className=' flex gap-[5px] '>

        <img src="/icons/basketiconempty.svg" alt="basket" />
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
 
<Image className='w-[263px] h-[236px]' width={200} height={200} src="/icons/emptybasket.svg" alt="emptybasket"/>
<p className='  font-roboto letter3 font-medium  text-[40px] text-btn-cncl'>OPPS!</p>
<p  className=' font-roboto font-medium text-[40px] text-btn-cncl'>{t("Basket Empty")}</p>
      </div>
      </div> 
      {/* <div className='' >
      <BtnCheckout color="btn-cncl" size={size} />
      </div> */}

<div className=''>
     <button  className={`${btn_size} roboto-medium font-medium bg-btn-cncl w-full text-white rounded-full h-[47px]`}><div className='flex  justify-between ps-6 items-center'><p>{t("Checkout")}</p><div className={`w-[135px] h-[43px] rounded-full ${btn2_size} bg-white text-btn-cncl flex items-center justify-center`}><p>$0.00</p></div></div></button> 
    </div>
    </div>
  )
}

export default EmptyBasket

