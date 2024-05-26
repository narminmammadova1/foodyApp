

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import AdminModal from '../../UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import { useGlobalContext } from '../../../Context/GlobalContext'

interface CategoryProps {
  img_url: string
  name: string
  id: string
}

const CategoryCard = () => {
  const { isOpen, open, close, isOpenDelModal, openDelModal, closeDelModal } = useModal()
  const { categoryData, setSelectedId, formComponent, isEdit,setIsEdit,setFormComponent } = useGlobalContext() || {}
  // const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleEditCategory = useCallback((category: CategoryProps)=>{setSelectedId &&  setSelectedId(category.id);
    console.log("handle category editttttttttttttttt");
    setIsEdit(true);
    if (open && formComponent) open()

  },[setSelectedId,open,formComponent,setIsEdit])
  


  const handleDeleteCategory = useCallback((category: CategoryProps)=>{
    setSelectedId &&   setSelectedId(category.id);
     openDelModal();
       setIsEdit(false);

  },[setIsEdit,openDelModal,setSelectedId])
  
  

  return (
    <>
      <DeleteModal isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950' delDescription="category, it will not come back!" />
      <AdminModal modalType="addCategory"
      isOpen={isOpen}
        formm={formComponent}
       
        onClose={close}
      />
      <div className='bg-white min-w-full max-h-[500px] overflow-y-auto'>
        <table className="w-full divide-y divide-gray-200 table-fixed">
          <thead className='py-6'>
            <tr className='py-4 '>
              <th className='py-4 w-1/5'>ID</th>
              <th className='w-1/5'>Image</th>
              <th className='text-start'>Name</th>
              <th className='text-start'>Slug</th>
              <th className='w-1/5 pe-4'></th>
            </tr>
          </thead>
          <tbody>
            {categoryData && categoryData.map((category: CategoryProps) => (
              <tr key={category.id} className='text-center border-b'>
                <td>
                  <div className='flex justify-center'>
                    <div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px] rounded-lg '>
                      {category.id.slice(0, 5)}
                    </div>
                  </div>
                </td>
                <td>
                  <div className='w-full flex justify-center overflow-hidden'>
                    <Image className='object-cover w-[48px] h-[48px]' src={category.img_url} width={1000} height={1000} alt='pizza' />
                  </div>
                </td>
                <td className='text-start'>{category.name.slice(0, 10)}</td>
                <td className='text-start'>{category?.name.slice(0, 10).toLowerCase()}</td>
                <td className='pe-6'>
                  <div className='flex justify-end gap-1'>
                    <img
                      onClick={() => {
                        // setIsEdit(true)
                        handleEditCategory(category)}}
                      className='cursor-pointer'
                      src="/icons/edit.svg"
                      alt="edit"
                    />
                    <img
                      onClick={() => handleDeleteCategory(category)}
                      className='cursor-pointer'
                      src="/icons/delete2.svg"
                      alt="del"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CategoryCard








