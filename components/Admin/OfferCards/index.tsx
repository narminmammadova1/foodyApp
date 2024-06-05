import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import AdminModal from '../../UI/AdminModal'
import { useQuery } from 'react-query'
import { useGlobalContext } from '../../../Context/GlobalContext'
import Category from '../../../pages/admin/category'
import { useTranslation } from 'react-i18next'
import PaginationAdmin from '../../Pagination'


interface OfferProps{
  img_url:string
  name:string
  id:string,
  description:string
}




const OfferCards = () => {


const {offerData,isEdit,setIsEdit,selectedId, setSelectedId,formComponent,setFormComponent}=useGlobalContext() || {}
  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal,}=useModal()
  const {t}=useTranslation()
 


  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const paginatedData = () => {
    const offset = currentPage * itemsPerPage;
    return offerData?.slice(offset, offset + itemsPerPage);
  };

  const handlePageClick = useCallback((selected: number) => {
    setCurrentPage(selected);
  }, [])
  const pageCount = offerData ? Math.ceil(offerData?.length / itemsPerPage) :0;

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
      <div className='w-full'>
 <DeleteModal  isOpenDelModal={isOpenDelModal}   onCloseDelModal={closeDelModal} delDescription="offer, it will not come back!" colorModal='red-950'/>
     <AdminModal modalType="addOffer" 
      formm ={formComponent}
     
       isOpen={isOpen}
        onClose={close} />
      
        <div className=' bg-white w-full  max-h-[400px]  overflow-x-auto  overflow-y-auto  lg:overflow-x-hidden'>
            <table className="table-fixed min-w-full divide-y divide-gray-200">
      <thead>
        <tr className=' '>
          <th className='py-6 px-6'>ID</th>
          <th className='px-20 text-center'>{t("Image")}</th>
          <th className=' text-start '>{t("Title")}</th>
          <th  className='text-start '>{t("Descriptions")}</th>
          <th>
            
          </th>
    
        </tr>
      </thead>
      <tbody>
      {paginatedData()?.map((offer:OfferProps)=>( <tr  key={offer.id} className='text-center border-b'>
      <td  className='px-8'>
        <div className='flex justify-center'><div className='w-[57px]   h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        {offer.id.slice(0,5)}</div></div></td>
      <td className='px-20 '><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src={offer.img_url} width={1000} height={1000} alt='pizza' /></div></td>
      <td className=' text-start '> {offer.name.length > 30 ? `${offer.name.slice(0, 30)}...` : offer.name}</td>
      <td className=' text-start '> {offer.description.length > 30 ? `${offer.description.slice(0, 30)}...` : offer.description}</td>

      <td className='pe-6'><div className=' flex justify-end  gap-1'>
        
<Image onClick={()=>{
          open()
          console.log("handle edit offer isleyir");
          
          setIsEdit(true)
          if(setSelectedId){setSelectedId(offer.id)}



        }} className='  cursor-pointer  w-[20px] min-w-[20px] min-h-[15px] h-[20px]' src="/icons/edit.svg" alt="edit"   width={200} height={200}  />
 




<Image onClick={() => {
          openDelModal();
          if(setSelectedId){
            setSelectedId(offer.id)
          }
      }}  className='  cursor-pointer  w-[20px] min-w-[20px] min-h-[15px] h-[20px]' src="/icons/delete2.svg" alt="del"   width={200} height={200}  />
 

      </div></td>

    </tr>))}

    
    
      </tbody>
    </table>
          
        </div>
        <div className='mt-6'>
        <PaginationAdmin currentPage={currentPage} handlePageClick={handlePageClick} pageCount={pageCount} getPageNumbers={getPageNumbers} getPageNumbersForMob={getPageNumbersForMob} />
        </div>
        </div>
        </>
      )
}

export default OfferCards
