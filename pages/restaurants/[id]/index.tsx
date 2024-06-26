
import React, { useCallback, useEffect, useState } from 'react';
import MainClient from '../../../components/Client/MainClient';
import HeaderClient from '../../../components/Client/HeaderClient';
import Image from 'next/image';
import ProductsTable from '../../../components/Client/ProductsTable';
import BasketCard from '../../../components/Client/BasketCard';
import FooterClient from '../../../components/Client/FooterClient';
import { useRouter } from 'next/router';
import { getProduct, getRestaurantById } from '../../../services';
import { useGlobalContext } from '../../../Context/GlobalContext';
import EmptyBasket from '../../../components/Client/EmptyBasket';
import { useQueries, useQuery } from 'react-query';
import { QUERIES } from '../../../Constant/Queries';
import BtnCheckout from '../../../components/Client/BtnCheckout';
import { useDropdownn } from '../../../shared/hooks/useDropdown';
import { useSpring,animated ,config as springConfig } from '@react-spring/web'
import { BarLoader, CircleLoader, ClipLoader, GridLoader } from 'react-spinners';

const ChoiseUser = () => {
  
  const { isOpenLang, openLang, isOpenAvatar, setIsOpenAvatar,openSidebar,isOpenSidebar,closeSidebar } = useDropdownn()

  const {isUser,basketData}=useGlobalContext() || {}

const router = useRouter();
  const { id } = router.query;
const { data: restaurantData,  isLoading } = useQuery([QUERIES.RestaurantById, id], () => getRestaurantById(id as string) , {
  enabled: !!id,
});




if (isLoading ) {
   return <div className=' w-full h-screen fixed  justify-center items-center flex m-auto bg-black'>    <CircleLoader color="#36D7B7" loading={true} />
</div>;
   }
  

const total_price=basketData && basketData.total_amount

console.log("mobilede total priceeeeeeeeeeeeee",total_price);

const selectedRestaurant=restaurantData?.data.result.data
 const currentProduct=restaurantData?.data.result.data.products
       



  return (
    <div>
      <MainClient>
        <HeaderClient />
        <div className='w-full px-4'>
          {/* <Image className="w-full" width={1000} height={1000} src={img_url} alt={name} /> */}
          <Image  className="w-full h-[168px] lg:h-[537px]" width={1000} height={1000} src={selectedRestaurant?.img_url} alt="" />

        </div>
        <div className="pb-4 lg:flex mt-4 justify-between ps-4 lg:ps-[57px] border-b">
          <div className=' border-b-1  lg:border-b-0 py-1 lg:py-0 '>
            <p className="text-modal_p font-roboto font-[700] text-[22px] letter3">{selectedRestaurant?.name}</p>
            <p className="font-roboto font-medium text-sm text-par3-text">{selectedRestaurant?.address}</p>
          </div>
          <div className="flex  justify-between lg:gap-[55px] border-b-1  lg:border-b-0 py-1 lg:py-0">
            <div className="font-roboto font-medium text-par3-text">
              <p className="text-lg">Cuisine</p>
              <p className="text-sm">{selectedRestaurant?.cuisine}</p>
            </div>
            <div className="flex gap-6 pe-4 lg:pe-0">
              <button className="bg-white text-sm border w-[72px] h-[52px] text-start ps-2 border-btnRed rounded-[5px] text-btnRed">{selectedRestaurant?.delivery_price}$ Delivery</button>
              <button onClick={() => router.back()} className="bg-btnRed  text-sm w-[72px] h-[52px] rounded-[5px] text-white">Go Back</button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-[50px] mb-20 lg:mb-0 mt-[48px] mx-4 lg:pe-5">
          <ProductsTable currentProducts={currentProduct} />


<div className=''>
     <button onClick={openSidebar}  className={`${isUser ? "block" :"hidden" } block lg:hidden roboto-medium font-medium bg-btnRed w-full text-white rounded-full h-[47px] pe-2 `}><div className='flex  justify-between ps-6 items-center'><div className='flex items-center gap-3'><Image className='w-[19px] h-[17px]' width={200} height={200}  src="/icons/basket3.svg" alt='basket'/> <p>{basketData?.total_item} items</p></div><div className={`w-[135px] h-[43px] rounded-full  bg-white text-btnRed flex items-center justify-center`}><p>$ {total_price}</p></div></div></button> 
    </div>


          {!isUser || basketData && basketData.items?.length<0 ?( 
          <div className={`hidden lg:block`}>
          <EmptyBasket size="small"/>
          </div>
):(     
  <div className='hidden lg:block'> 
   <BasketCard basketData={basketData}  size="small" /> 
   </div>
)


          }
        </div>

        {isOpenSidebar && <div className=' w-full  gap-6 lg:hidden fixed bottom-0  z-50  '>
  <div className='h-[600px]  bg-zinc-400 opacity-25'>
  </div>
<div className=' bg-white ] rounded-t-[20px]  max-h-[474px]  overflow-y-auto  flex-col  items-center '>
<div className='flex  my-[15px] justify-center'>
  <Image onClick={closeSidebar} className='w-[35px] h-[35px]' width={200} height={200} src="/icons/xfilter.svg" alt="x"/>
  
</div>
<div className=''>
<BasketCard basketData={basketData}/>
</div>


</div>   
  </div>}
      </MainClient>
      <FooterClient />
    </div>
  );
};


export default ChoiseUser;