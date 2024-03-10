import React from 'react'
import Image from 'next/image'
const ProductCards = () => {
  return (
    <>
      <div className=' bg-white rounded-[5px] h-[273px]  w-[196px] flex flex-col justify-center px-5'>
        <div className=' w-[163px] h-[163px]'>
        <Image className=' w-full  object-cover' width={100} height={100} src="/pngs/productImg.png" alt='product'/>
        </div>
        <div className='flex justify-between items-end '>
            <div className=' flex flex-col justify-between  '>
        <p className=' font-medium text-lg  text-text-darkk'>Marqarita</p>
        <p className=' text-par2-text'>Papa Jojn's</p>
        <p className=' text-par-blue-text'>$16</p>
        </div>
        <div className='flex justify-end gap-1'>

            <img src="/icons/edit.svg" alt="" />
            <img src="/icons/delete.svg" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductCards
