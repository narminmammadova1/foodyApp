

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import AdminModal from '../../UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'
import PaginationAdmin from '../../Pagination'

interface CategoryProps {
  img_url: string
  name: string
  id: string
}
const itemsPerPage = 5;

const CategoryCard = () => {
  const { isOpen, open, close, isOpenDelModal, openDelModal, closeDelModal } = useModal()
  const { categoryData, setSelectedId, formComponent, isEdit, setIsEdit,selectedId, setFormComponent } = useGlobalContext() || {}
  const { t } = useTranslation()

  const handleEditCategory = useCallback((category: CategoryProps) => {
    setSelectedId && setSelectedId(category.id);
    setIsEdit(true);
    if (open && formComponent) open()

      
  }, [setSelectedId, open, formComponent, setIsEdit])

  const handleDeleteCategory = useCallback((category: CategoryProps) => {
    setSelectedId && setSelectedId(category.id);
    openDelModal();
    setIsEdit(false);
  }, [setIsEdit, openDelModal, setSelectedId])

  const [currentPage, setCurrentPage] = useState(0);

  const paginatedData = () => {
    const offset = currentPage * itemsPerPage;
    return categoryData?.slice(offset, offset + itemsPerPage);
  };

  // const handlePageClick =useCallback((event: { page: number })=>{    setCurrentPage(event.page);
  // },[]) 
  


  const handlePageClick = useCallback((selected: number) => {
    setCurrentPage(selected);
  }, [])
  const pageCount = categoryData ? Math.ceil(categoryData.length / itemsPerPage) : 0;

  const getPageNumbers = useCallback(()=>{
    const maxPageButtons = 3;
    const startPage = Math.max(0, currentPage - 1);
    const endPage = Math.min(pageCount, startPage + maxPageButtons);
    return Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
  },[currentPage, pageCount]

  ) 
   

  const getPageNumbersForMob = useCallback(() => {
    const maxPageButtons = 1;
    const startPage = Math.max(0, currentPage);
    const endPage = Math.min(pageCount, startPage + maxPageButtons);
    return Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
  }, [currentPage, pageCount]);

  

  return (
    <>
      <DeleteModal isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950' delDescription="category, it will not come back!" />
      {/* <AdminEditModal modalType="editCategory" isOpen={isOpen} formm={formComponent} onClose={close}   /> */}
       {/* <AdminModal modalType="addCategory" isOpen={isOpen} formm={formComponent} onClose={close}   />  */}
       <AdminModal modalType="addCategory" formm={formComponent}  btnText={t("Create Category" )} isOpen={isOpen} onClose={close}/>

      <div className='bg-white min-w-full max-h-[500px] overflow-y-auto'>
        <table className="w-full divide-y divide-gray-200 table-fixed">
          <thead className='py-6'>
            <tr className='py-4 '>
              <th className='py-4 w-1/5'>ID</th>
              <th className='w-1/5'>{t("Image")}</th>
              <th className='text-start'>{t("Name")}</th>
              <th className='text-start'>{t("Slug")}</th>
              <th className='w-1/5 pe-4'></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData()?.map((category: CategoryProps) => (
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
                <td className='text-start max-w-xs break-words whitespace-normal'>{category.name.slice(0, 20)}</td>
                <td className='text-start max-w-xs break-words whitespace-normal'>{category?.name.slice(0, 15).toLowerCase()}</td>
                <td className='pe-6'>
                  <div className='flex justify-end gap-1'>
                    <img
                      onClick={() => handleEditCategory(category)}
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
<PaginationAdmin currentPage={currentPage} handlePageClick={handlePageClick} pageCount={pageCount} getPageNumbers={getPageNumbers} getPageNumbersForMob={getPageNumbersForMob}  />
      {/* <div className='w-full flex'>
        <div className='flex m-auto gap-[20px]'>
          <button
            className='w-[64px] h-[64px] rounded-full border flex justify-center items-center border-btn-pink'
            onClick={() => handlePageClick({ selected: currentPage - 1 })}
            disabled={currentPage === 0}
          >
            <Image className='w-[24px] h-[24px]' width={200} height={200} src="/icons/arrowpink.svg" alt='back' />
          </button>

          <div className='flex gap-[20px]'>
            {getPageNumbers().map(number => (
              <button
                key={number}
                className={`w-[64px] text-white text-lg font-extrabold h-[64px] rounded-full border flex justify-center items-center ${number === currentPage ? 'bg-btn-pink' : 'border-btn-pink'}`}
                onClick={() => handlePageClick({ selected: number })}
              >
                {number + 1}
              </button>
            ))}
          </div>

          <button
            className='w-[64px] h-[64px] rounded-full border flex justify-center items-center border-btn-pink'
            onClick={() => handlePageClick({ selected: currentPage + 1 })}
            disabled={currentPage === pageCount - 1}
          >
            <Image className='w-[24px] h-[24px]' width={200} height={200} src="/icons/arrowpink2.svg" alt='next' />
          </button>
        </div>
      </div> */}
    </>
  )
}

export default CategoryCard















