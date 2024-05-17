

import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useRouter } from 'next/router';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { deleteCategory, deleteOffer, deleteProduct, deleteRestaurant } from '../../../services';
import { QUERIES } from '../../../Constant/Queries';
import { toast } from 'react-toastify';

interface DeleteModalProps {
  isOpenDelModal: boolean;
  onCloseDelModal: () => void;
  colorModal: string;
  delDescription:string,
  isProduct?:boolean
}

const DeleteModal: React.FC<DeleteModalProps> = ({isProduct, isOpenDelModal,onCloseDelModal, colorModal,delDescription }) => {
   const {pathname}=useRouter()
const queryClient=useQueryClient()
 
  const { mutate: deleteCategoryMutation
  } = useMutation(deleteCategory, {
      onSuccess: (data) => {
          console.log("Deleted category:", data);

toast.success("Deleted Category",{autoClose:2000})
         queryClient.invalidateQueries(QUERIES.Categories);
      },
      
      onError: (error) => {
          console.error("Error deleting category:", error);
      },
  });


const {mutate:    deleteOfferMutation,
}=useMutation(deleteOffer,{
  onSuccess:(data)=>{

      console.log("Deleted Offer");

      toast.success("Deleted Offer",{autoClose:2000})
      queryClient.invalidateQueries(QUERIES.Offers);
  },
  onError:(error)=>{
      console.error("Error deleting offer")
      toast.error("error deleting offer")
  }}

)
const {mutate:deleteProductMutation}=useMutation(
  deleteProduct,{
      onSuccess:(data)=>{
          console.log("delete product mutation");
          toast.success("Product Deleted")
          queryClient.invalidateQueries(QUERIES.Products)
          
      },
      onError:(error)=>{
          console.error("error deleting product")
          toast.error("error deleting product")
      }
  }
)

const {mutate:deleteRestaurantMutation}=useMutation(deleteRestaurant,
  {onSuccess:(data)=>{

    console.log("restaurant mutation isleyir");
    toast.success("Deleted restaurant",{autoClose:2000})
    queryClient.invalidateQueries(QUERIES.Restaurants);
  },
onError:(error)=>{
console.log("error rest mutation");
toast.error("error delete mutation")


}}
)





  const handleDelete = () => {
    if (pathname === '/admin/category' && deleteCategoryMutation) {
      if (selectedId) {
        deleteCategoryMutation(String(selectedId));
      }
    } else if (pathname === '/admin/offer' && deleteOfferMutation) {
      if (selectedId) {
        deleteOfferMutation(String(selectedId));
      }
    } else if (pathname === '/admin/restaurants' && deleteRestaurantMutation) {
      if (selectedId) {
        deleteRestaurantMutation(String(selectedId));
      }
    } else if (isProduct && deleteProductMutation) {
      if (selectedId) {
        deleteProductMutation(String(selectedId));
      }
    }
    onCloseDelModal();
  };
   
   





  let { selectedId
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
