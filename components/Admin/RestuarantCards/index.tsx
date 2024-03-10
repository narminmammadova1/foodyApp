import Image from 'next/image'
import React from 'react'

const RestuarantCards = () => {
  return (
    <div>
    <div className=' bg-white w-[247px] h-[83px]  flex gap-5 justify-between rounded-md'>
        <div  className='w-1/3 overflow-hidden  object-cover ps-3 rounded-md '>
            <Image className='object-cover w-full h-full   ' width={247} height={83} src="/svgs/papaJohns.svg" alt='papaJohns'/>
        </div>

<div className=' font-roboto flex flex-col justify-center '>
    <h2 className='font-[18px]'>Papa John's</h2>
    <p className=' text-par3-text font-[14px]'>Pizza</p>
    </div>
<div className='flex flex-col justify-between py-1'>
    <img src="/icons/delete.svg" alt="delete" />
    <img src="/icons/edit.svg" alt="edit" />

</div>
      
    </div>
    </div>
  )
}

export default RestuarantCards
