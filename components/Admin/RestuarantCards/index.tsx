import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useModal } from '../../../shared/hooks/useModal';
import DeleteModal from '../../Modals/DeleteModal';
import AdminModal from '../../UI/AdminModal';


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
    console.log("Selected restaurant ID for edit:", restaurant.id);
  };

  return (
   
    <div>
    <DeleteModal  isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'   delDescription="restaurant, it will not come back!"  />
    <AdminModal modalType="addRestaurant" 
      formm ={formComponent}
     
       isOpen={isOpen}
        onClose={close} />
      {restaurant ? ( <div className=' bg-white w-[247px] h-[83px]  flex gap-5 justify-between rounded-md'>
        <div  className='w-[90px] h-[80px] ps-3 py-2  flex items-center justify-center overflow-hidden  object-cover  rounded-md '>
            <Image className='object-cover w-full  h-full  ' width={247} height={83} src={restaurant.img_url} alt={restaurant.name}/>
        </div>

<div className=' font-roboto w-2/4 flex flex-col justify-center '>
    <h2 className='font-[18px]'>{restaurant.name.slice(0,10)}</h2>
    <p className=' text-par3-text font-[14px]'>{restaurant.cuisine.slice(0,10)}</p>
    </div>
<div className='flex flex-col  justify-between py-1 pe-3'>
    <img onClick={()=>{
console.log("delete click isleyir");

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
