import Image from 'next/image'
import React from 'react'

const RestaurantCards = () => {
  return (
    <div className=' w-[235px] h-[345px] px-4 flex flex-col  justify-start bg-white boxShadow2'>
     <Image width={1000} height={1000} src="pngs/soup.svg" alt='soup'/> 
     <p className='font-roboto font-[700] mt-0 text-[22px] letter3  text-modal_p'>Coffe Mania</p>
     <p className='font-roboto font-[400] mt-0 text-par3-text  text-base letter3'>chinese, sea-food, thai, lebanese, caribbean</p>
     <div className='flex items-center justify-between'>
        <p className='font-roboto line font-[700] text-base  text-modal_p'>$5 Delivery</p>
        <button className=' bg-btnRed w-[78px] h-[31px] rounded-full  px-3 py-1 text-white font-roboto font-medium  text-base'>09 Min</button>
     </div>
    </div>
  )
}

export default RestaurantCards
