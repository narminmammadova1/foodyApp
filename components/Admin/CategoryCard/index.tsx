import Image from 'next/image'
import React from 'react'
import AdminModal from '../../UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'

const CategoryCard= () => {

  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}=useModal()

  return (

    <>
    <DeleteModal  isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'/>
     <AdminModal formm modalDescription="
  
Edit your category information" modalTitle='Edit Category' btnText="Update Category" img isOpen={isOpen} onClose={close} />
    <div className=' bg-white w-full'>
        <table className="table-fixed min-w-full divide-y divide-gray-200">
  <thead>
    <tr className=' '>
      <th>ID</th>
      <th>Image</th>
      <th>Name</th>
      <th>Slug</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
    {/* <tr className='text-center border-b'>
    <td >
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        9177</div></div></td>
      <td><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src="/svgs/pizza.svg" width={1000} height={1000} alt='pizza' /></div></td>
      <td>Pizza</td>
      <td>yummy-pizza</td>
      <td><div className=' flex justify-end pe-5 gap-1'>
        <img onClick={open} src="/icons/edit.svg" alt="edit" />
        <img src="/icons/delete2.svg" alt="del" />
      </div></td>

    </tr> */}
    <tr className='text-center border-b'>
      <td >
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        9177</div></div></td>
      <td><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src="/svgs/pizza.svg" width={1000} height={1000} alt='pizza' /></div></td>
      <td>Pizza</td>
      <td>yummy-pizza</td>
      <td><div className=' flex justify-end pe-5 gap-1'>
        <img onClick={open} className=' cursor-pointer' src="/icons/edit.svg" alt="edit" />
        <img onClick={openDelModal}  className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>

    </tr>
   
 
  </tbody>
</table>
      
    </div>
    </>
  )
}

export default CategoryCard
