import Image from 'next/image'
import React, { useState } from 'react'
import AdminModal from '../../UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import { useGlobalContext } from '../../../Context/GlobalContext'

interface CategoryProps{
  img_url:string
  name:string
  id:string
}



const CategoryCard= () => {

  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}=useModal()

  const { categoryData, selectedId, setSelectedId,formComponent,setFormComponent } = useGlobalContext() || {};

  return (

    <>
    <DeleteModal  isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'   delDescription="category, it will not come back!"  />
     <AdminModal formm={formComponent} modalDescription="Edit your category information" modalTitle='Edit Category' btnText="Update Category"  isOpen={isOpen} onClose={close} />
    <div className=' bg-white min-w-full max-h-[500px] overflow-y-auto'>
        <table className="w-full divide-y divide-gray-200 table-fixed">
  <thead className='py-6'>
    <tr className=' py-4 '>
      <th className='py-4 w-1/5  '>ID</th>
      <th className=' w-1/5'>Image</th>
      <th className='  text-start'>Name</th>
      <th  className='text-start'>Slug</th>
      <th className='w-1/5  pe-4' ></th>

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
    {categoryData?.map((category:CategoryProps)=>(  <tr  key={category.id} className='text-center border-b'>
      <td  className=''>
        <div className='flex justify-center'><div className='w-[57px]   h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        {category.id.slice(0,5)}</div></div></td>
      <td><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src={category.img_url} width={1000} height={1000} alt='pizza' /></div></td>
      <td className=' text-start'>{category.name.slice(0,10)}</td>
      <td className=' text-start '>{category?.name.slice(0,10).toLowerCase()}</td>
      <td className='pe-6'><div className=' flex justify-end  gap-1'>
        <img onClick={open} className=' cursor-pointer' src="/icons/edit.svg" alt="edit" />
        <img
        onClick={() => {
          openDelModal();
if (setSelectedId) {
  setSelectedId(category.id);
}

        }}
        //  onClick={() => handleCategoryDelete(category.id)} 

         
           className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>

    </tr>
   ))}
    {/* <tr className='text-center border-b'>
      <td >
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        {ID}</div></div></td>
      <td><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src={img_url} width={1000} height={1000} alt='pizza' /></div></td>
      <td>{name}</td>
      <td>yummy-pizza</td>
      <td><div className=' flex justify-end pe-5 gap-1'>
        <img onClick={open} className=' cursor-pointer' src="/icons/edit.svg" alt="edit" />
        <img onClick={openDelModal}  className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>

    </tr>
    */}
 
  </tbody>
</table>
      
    </div>
    </>
  )
}

export default CategoryCard
