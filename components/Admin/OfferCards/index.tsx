import Image from 'next/image'
import React from 'react'
import { useModal } from '../../../shared/hooks/useModal'
import DeleteModal from '../../Modals/DeleteModal'
import AdminModal from '../../UI/AdminModal'
import { useQuery } from 'react-query'
import { useGlobalContext } from '../../../Context/GlobalContext'
import Category from '../../../pages/admin/category'


interface OfferProps{
  img_url:string
  name:string
  id:string,
  description:string
}




const OfferCards = () => {


const {offerData,isEdit,setIsEdit,selectedId, setSelectedId,formComponent,setFormComponent}=useGlobalContext() || {}
  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal,}=useModal()
    return (
      <>
 <DeleteModal  isOpenDelModal={isOpenDelModal}   onCloseDelModal={closeDelModal} delDescription="offer, it will not come back!" colorModal='red-950'/>
     <AdminModal isEdit
      formm ={formComponent}
     
       isOpen={isOpen}
        onClose={close} />
      
        <div className=' bg-white w-full'>
            <table className="table-fixed min-w-full divide-y divide-gray-200">
      <thead>
        <tr className=' '>
          <th className='py-6 px-6'>ID</th>
          <th className='px-20 text-center'>Image</th>
          <th className=' text-start '>Title</th>
          <th  className='text-start '>Descriptions</th>
          <th>
            
          </th>
    
        </tr>
      </thead>
      <tbody>
      {offerData?.map((offer:OfferProps)=>( <tr  key={offer.id} className='text-center border-b'>
      <td  className='px-8'>
        <div className='flex justify-center'><div className='w-[57px]   h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        {offer.id.slice(0,5)}</div></div></td>
      <td className='px-20 '><div className='w-full flex justify-center overflow-hidden' >
        <Image className=' object-cover  w-[48px] h-[48px] ' src={offer.img_url} width={1000} height={1000} alt='pizza' /></div></td>
      <td className=' text-start '> {offer.name.length > 30 ? `${offer.name.slice(0, 30)}...` : offer.name}</td>
      <td className=' text-start '> {offer.description.length > 30 ? `${offer.description.slice(0, 30)}...` : offer.description}</td>

      <td className='pe-6'><div className=' flex justify-end  gap-1'>
        <img onClick={()=>{
          open()
          console.log("handle edit offer isleyir");
          
          setIsEdit(true)
          if(setSelectedId){setSelectedId(offer.id)}



        }} className=' cursor-pointer' src="/icons/edit.svg" alt="edit" />
        <img
        onClick={() => {
          openDelModal();
          if(setSelectedId){
            setSelectedId(offer.id)
          }
      }}
           className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>

    </tr>))}

    
    
      </tbody>
    </table>
          
        </div>
        </>
      )
}

export default OfferCards
