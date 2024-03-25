import React from 'react'
import BtnCheckout from '../BtnCheckout'

interface BasketCardProps{}

const BasketCard:React.FC<BasketCardProps> = () => {
  return (
    <div className=' bg-headerbg w-[397px] max-h-[547px] flex flex-col justify-between rounded boxShadow3  overflow-y-auto ps-[9px]  pe-4 pb-6'>
     <div>
      <div className=' flex gap-[5px] py-3  '>

        <img src="/icons/basket2.svg" alt="basket" />
        <p className=' text-base font-roboto font-[550] pt-3  text-btnRed'>3 items</p>
      </div>

      <div className=''>
      <table className=" w-full">
 
  <tbody>
    <tr className='border-b border-t  h-[99px] '>
      <td className=' flex justify-center  ps-2 items-center py-7'><img width="45px" height="45px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-[9px]'><p className='text-base  roboto-medium relative top-[-2px] font-medium text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm  roboto-medium font-medium  text-modal_p'>$ 15.80</p></td>
      <td className='flex gap-[19px] '>

        <div className=' flex flex-col  items-center pt-3  w-[29px] relative top-[-20px]  h-[70px] bg-white rounded-[50px]'>
       
         <img className='cursor-pointer '  src="/icons/plus3.svg" alt="plus" />
         
          <p className='text-base font-medium text-inputPlaceholder'>2</p>

<img className='cursor-pointer ' width="16px" height="16px" src="/icons/minus3.svg" alt="minus" />      
  </div>
        <div className=' relative top-[-30px]'>
          <img width="20px" src="/icons/delete3.svg" alt="del" />
        </div>
        </td> 
   

    </tr>


   
    
  </tbody>
</table>



      </div>
      </div> 
      <div >
      <BtnCheckout/>
      </div>
    </div>
  )
}

export default BasketCard
