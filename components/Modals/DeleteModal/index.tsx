

import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useRouter } from 'next/router';

interface DeleteModalProps {
  isOpenDelModal: boolean;
  onCloseDelModal: () => void;
  colorModal: string;
  delDescription:string,
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpenDelModal,onCloseDelModal, colorModal,delDescription }) => {
   const {pathname}=useRouter()

   const handleDelete = () => {
    if (pathname === '/admin/category' && handleCategoryDelete) {
     if(selectedId) {handleCategoryDelete(selectedId)}
    } else if (pathname === '/admin/offer' && handleOfferDelete) {
     if(selectedId){ handleOfferDelete(selectedId)}
    }
    onCloseDelModal();
  };


  let { handleCategoryDelete,handleOfferDelete ,selectedId, 
  } = useGlobalContext() || {}


  return (
    <div className={`w-full ${isOpenDelModal ? "fixed " :"hidden"} z-40 top-0 left-0  h-screen bg-${colorModal} flex  bg-opacity-40`}> 
      <div className=' w-[498px] m-auto  h-[226px] bg-white flex flex-col rounded-md  justify-center  shadow-2xl'>
        <div className='flex flex-col items-center gap-2 font-sans '>
          <h1 className=' text-[28px]  font-[700]'>Are you sure it's deleted?</h1>
          <div className='  text-wrap '>
            <p className='text-lg text-modal_p  font-[400]'>Attention!If you deleted this<br /> {delDescription}</p>
          </div>
        </div>
        <div>
          <div className='flex mt-4 justify-center gap-[30px]'>
            <button onClick={onCloseDelModal} className=' bg-white px-[29px] h-[33px] text-btn-cncl border-2 rounded-[4px]'> cancel</button>
            <button onClick={()=>
            {handleDelete()
            
 onCloseDelModal()

            }}

            className=' bg-btn-del px-[29px] text-white border-2 rounded-[4px]'>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
