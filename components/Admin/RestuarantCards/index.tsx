import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useModal } from '../../../shared/hooks/useModal';
import DeleteModal from '../../Modals/DeleteModal';
import AdminModal from '../../UI/AdminModal';
import { useTranslation } from 'react-i18next';


interface RestaurantCardProps{
//  img_url:string;
//  cuisine:string;
//  delivery_min:number;
//  delivery_price:number,
//  category_id:string,
//  address:string

restaurant:any

}

interface RestaurantProps{
  restaurant:object;
}

const RestuarantCards: React.FC<RestaurantCardProps> = ({restaurant}) => {

  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}=useModal()
  const { categoryData,isEdit,setIsEdit,selectedId, setSelectedId,formComponent} = useGlobalContext() || {};



  const handleEditClick = () => {
    open();
    setIsEdit(true);
    if (setSelectedId) {
      setSelectedId(restaurant.id);
    }
  };
  const {t}=useTranslation()

  return (
   
    <div>
    <DeleteModal  isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'   delDescription={t("restaurant, it will not come back!" )} />
    <AdminModal modalType={t("addRestaurant")} 
      formm ={formComponent}
     
       isOpen={isOpen}
        onClose={close} />
      {restaurant ? ( <div className=' bg-white w-[247px] h-[83px] mb-6 lg:mb-0  flex  justify-between rounded-md'>
        <div  className='w-[90px] h-[80px]-300 ps-3 pe-3 py-2  flex items-center justify-center overflow-hidden  object-cover  rounded-md '>
            <Image className='object-cover w-full  h-full  ' width={247} height={83} src={restaurant.img_url} alt={restaurant.name}/>
        </div>

<div className=' bg-gray-80 font-roboto w-2/3 flex flex-col justify-center '>
    <h2 className='  whitespace-nowrap text-ellipsis font-[18px]'>{restaurant.name.slice(0,17)}</h2>
    <p className=' text-par3-text  whitespace-nowrap text-ellipsis font-[14px]'>{restaurant.cuisine.slice(0,17)}</p>
    </div>
<div className='flex flex-col   justify-between py-1 pe-3'>
    <img onClick={()=>{

      openDelModal()
if(setSelectedId){
  setSelectedId(restaurant.id)
}



    }} src="/icons/delete.svg" alt="delete" />


    <img className='cursor-pointer' onClick={handleEditClick}  src="/icons/edit.svg" alt="edit" />

</div>
      
    </div>) : ""}
 
    </div>
  )
}

export default RestuarantCards
