import React from 'react'

const OrderReceived = () => {
  return (
    <div className='w-full lg:bg-headerbg h-[515px] flex flex-col items-center pt-[74px] '>
      <div><img className=' w-[133px] h-[133px] lg:w-[200px] lg:h-[200px]' src="/icons/completed.svg" alt="completed" /></div>  
       <div className=' text-center'><p className=' text-[30px] roboto-medium font-medium text-modal_p '>Your order has been <br />
       received</p></div>
      
    </div>
  )
}

export default OrderReceived

