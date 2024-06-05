import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import AdminModal from '../../UI/AdminModal'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'
import ShowModal from '../../Client/Modals/ShowModal'
import PaginationAdmin from '../../Pagination'

const OrderCards= () => {
  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal,openShowwModal,isOpenShowwModal,closeShowwModal}=useModal()
const {t}=useTranslation()
 const {formComponent,setFormComponent,orderData,setMyOrder,setSelectedId}=useGlobalContext() || {}


 const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


 const [currentPage, setCurrentPage] = useState(0);
 const itemsPerPage = 5;

 const paginatedData = () => {
   const offset = currentPage * itemsPerPage;
   return orderData?.slice(offset, offset + itemsPerPage);
 };
 const handlePageClick = useCallback((selected: number) => {
  setCurrentPage(selected);
}, [])

 const pageCount =orderData ? Math.ceil(orderData?.length / itemsPerPage) :0;
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
        <ShowModal isOpenShowwModal={isOpenShowwModal} closeShowModal={closeShowwModal} />

<DeleteModal  delDescription='' isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'/>
    <div className=' bg-white w-full  max-h-[400px]  overflow-x-auto  overflow-y-auto  lg:overflow-x-hidden'>
        <table className="table-fixed lg:w-full divide-y divide-gray-200">
  <thead>
  
  <tr className='  text-center border-b'>
    <td  className='py-3'>
        <div className='flex justify-center'>
        ID
        </div></td>
      <td>
      <div className='flex justify-center'>
       {t("Customer ID")}
       </div>
      </td>
      <td>{t("Time")}</td>
      <td>{t("Delivery Address")}</td>
      <td>{t("Amount")}</td>
      <td> {t('Payment Method')}</td>
      <td> <div className='flex justify-center '><div>{t("Contact")}</div>
     </div></td>
      <td> 
       
      </td>
    </tr>
  </thead>
  <tbody className=''>
{paginatedData()?.map((order)=>(

<tr key={order.id} className='  text-center border-b'>
<td  className='py-3'>
    <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
    {order.id.slice(0,4)}</div></div></td>
  <td>
  <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
  {order.customer_id.slice(0,5)}</div></div>
  </td>
  <td>{`${new Date(order.created).getDate()} ${monthNames[new Date(order.created).getMonth()]} ${new Date(order.created).getFullYear()}`}</td>
  <td className=' ps-4 text-start max-w-xs break-words whitespace-normal'>{order.delivery_address}</td>
  <td> {order.amount}</td>
  <td>{order.payment_method==0 ? "pay with cash": "pay with credit card"}</td>
  <td> <div className='flex justify-center '><div>{order.contact}</div>
 </div></td>
  <td> <div className='ps-3 flex  gap-2'>
   
    <Image onClick={()=>{
   setMyOrder &&   setMyOrder(order.products)
openShowwModal()

    }}   className=' cursor-pointer  w-[20px] min-w-[20px] min-h-[15px] h-[20px]' width={200} height={200} src="/icons/eye.svg" alt="edit" />
 

<Image onClick={()=>{
 setSelectedId &&   setSelectedId(order.id)
openDelModal()

    }}  className=' cursor-pointer w-[20px] min-w-[20px] min-h-[15px] h-[20px]' width={200} height={200} src="/icons/delete2.svg" alt="edit" />
  </div></td>
</tr>

))}

  
    
   
 
  </tbody>
</table>
      
    </div>

    <div className='mt-6'>
        <PaginationAdmin currentPage={currentPage} handlePageClick={handlePageClick} pageCount={pageCount} getPageNumbers={getPageNumbers}  getPageNumbersForMob ={ getPageNumbersForMob } />
        </div>
        </div>
    </>
  )
}

export default OrderCards
