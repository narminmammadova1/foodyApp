import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ROUTER } from '../../../Constant/Router'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { RestProps } from '../../../shared/interface'



interface RestaurantCardsProps{
  rest:RestProps
}

const RestaurantCards:React.FC<RestaurantCardsProps> = ({rest}) => {
const router=useRouter()
const {push}=router
const{selectedId,setSelectedId}=useGlobalContext() || {}





  return (
    <div className=' w-[235px] h-[345px] px-4 flex flex-col  justify-start bg-white boxShadow2'>
      <div 
        onClick={
          ()=>{
           
           push(`${ROUTER.RESTAURANTS}/${rest.id}`)
          }
} className=' flex   justify-center mt-4 cursor-pointer'>
     <Image  className='w-[174px] h-[161px]' width={1000} height={1000} src={rest?.img_url || ""} alt='soup'/> 
     </div>
     
     <p className='font-roboto font-[700] mt-0 text-[22px] letter3  text-modal_p'>{rest?.name}</p>
    

<div className='flex flex-wrap-reverse w-[174px] h-[70px] bg-red-800'>
  <p className='font-roboto font-[400] mt-0 text-par3-text text-base letter3' style={{ maxHeight: '70px', overflow: 'hidden' }}>{rest?.cuisine}</p>
</div>
     <div className='flex items-center justify-between'>
        <p className='font-roboto line font-[700] text-base  text-modal_p'>{rest?.delivery_price}$ Delivery</p>
        <button className=' bg-btnRed w-[78px] h-[31px] rounded-full  px-3 py-1 text-white font-roboto font-medium  text-base'>{rest.delivery_min} Min</button>
     </div>
    </div>
  )
}

export default RestaurantCards
