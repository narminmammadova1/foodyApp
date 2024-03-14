import React from 'react'
import Image from 'next/image'
import DeleteModal from '../../Modals/DeleteModal'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'



const ProductCards = () => {

   const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}=useModal()
  return (
    <>
        <AdminModal modalDescription="
Edit your Product description and necessary information" modalTitle='Edit Product' btnText="Update Product" img isOpen={isOpen} onClose={close} />
      <div className=' bg-white rounded-[5px] h-[273px]  w-[196px] flex flex-col justify-center  px-4'>
        <div className=' w-[163px] h-[163px]'>
        <Image className=' w-full  object-cover' width={100} height={100} src="/pngs/productImg.png" alt='product'/>
        </div>
        <DeleteModal isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal}/>
    
        <div className='flex justify-between items-end  '>
            <div className=' flex flex-col justify-between  font-medium  '>
        <p className=' text-lg  text-text-darkk'>Marqarita</p>
        <p className=' text-par2-text text-[14px]'>Papa John's</p>
        <p className=' text-par-blue-text text-[12px] mt-2'>$16</p>
        </div>
        <div className='flex justify-end gap-[6px]'>

            <img onClick={open}  className=' cursor-pointer' src="/icons/edit.svg" alt="" />
            <img  onClick={openDelModal} className=' cursor-pointer'  src="/icons/delete.svg" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductCards
