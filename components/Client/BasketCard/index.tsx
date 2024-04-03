import React from 'react'
import BtnCheckout from '../BtnCheckout'

interface BasketCardProps{
  size: string | undefined;
  headtitle?: string | undefined
}

const BasketCard:React.FC<BasketCardProps> = ({size,headtitle}) => {

  const divSize=size=== "small" ? "basket_small" :"basket_large"

  const p_size=size==="small"?"p16_small":"p22_large"
  const p14_size=size==="small"?"p14_small":"p18_large"

  const img_size=size==="small"? "img_small" :"img_large"
const whitebtn_size=size==="small" ? "whitebtn_small" :"whitebtn_large"

const pad_size=size==="small"? "padding4":"padding8"


  return (
    <div className={` bg-headerbg size=" ${divSize}   flex flex-col justify-between  rounded boxShadow3  overflow-y-auto `}>
     <div className='pt-8'>
     <p className='font-mukta font-[600] text-modal_p text-[30px] letter3'>{headtitle}</p>
      <div className=' flex gap-[5px]  bg-orange-400'>

        <img src="/icons/basket2.svg" alt="basket" />
        <p className=' text-base  roboto-medium font-medium pt-3  text-btnRed'>3 items</p>
      </div>

      <div className='w-full bg-violet-800 '>
      <table className="w-full bg-sky-950">
 
  <tbody>
  

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    <tr className={`border-b justify-between flex ${pad_size} border-t `}>
      <td className='  bg-emerald-300'><div className={`flex  bg-red-400 ${img_size}`}><img src="/pngs/pizzahut.svg" alt="product" /></div></td>
      <td className=' bg-orange-700 '><p className={`${p_size} roboto-medium relative  bg-lime-900 font-medium text-modal_p`}>Papa John's Pizza Restaurant</p>
      <p className={`${p14_size}  roboto-medium font-medium  text-modal_p`}>$ 15.80</p></td>
      <td className='flex gap-[19px]   bg-yellow-900 '>

        <div className={` flex flex-col font-medium items-center ${whitebtn_size}  bg-white rounded-[50px]`}>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className=' text-inputPlaceholder'>2</p>

<img className='cursor-pointer '  src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-20px] me-3 cursor-pointer'>
          <img src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>

    
    {/* <tr className='border-b border-t  h-[99px] '>
      <td className=' flex justify-center  ps-2 items-center py-7'><img width="45px" height="45px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-[9px]'><p className='text-base  roboto-medium relative top-[-2px] font-medium text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm  roboto-medium font-medium  text-modal_p'>$ 15.80</p></td>
      <td className='flex gap-[19px] '>

        <div className=' flex flex-col  items-center pt-3  w-[29px] relative top-[-20px]  h-[70px] bg-white rounded-[50px]'>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className='text-base font-medium text-inputPlaceholder'>2</p>

<img className='cursor-pointer ' width="16px" height="16px" src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-30px] cursor-pointer'>
          <img width="20px" src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr> */}
 
 


   
    
  </tbody>
</table>



      </div>
      </div> 
      <div className='' >
      <BtnCheckout size={size} />
      </div>
    </div>
  )
}

export default BasketCard
