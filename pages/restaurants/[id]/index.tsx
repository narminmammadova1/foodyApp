
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

const ChoiseUser = () => {
  

  const {isUser,basketData}=useGlobalContext() || {}

const router = useRouter();
  const { id } = router.query;
const { data: restaurantData,  isLoading } = useQuery([QUERIES.RestaurantById, id], () => getRestaurantById(id as string) , {
  enabled: !!id,
});

  if(isLoading){    return <div>Loading....................</div>
}

const selectedRestaurant=restaurantData?.data.result.data
 const currentProduct=restaurantData?.data.result.data.products
console.log("currentProducttttttttttttttttttttttt yeniiiiiiiiiiii",currentProduct);

  return (
    <div>
      <MainClient>
        <HeaderClient />
        <div>
          {/* <Image className="w-full" width={1000} height={1000} src={img_url} alt={name} /> */}
          <Image  className="w-full h-[537px]" width={1000} height={1000} src={selectedRestaurant?.img_url} alt="" />

        </div>
        <div className="pb-4 flex  mt-4 justify-between ps-[57px] border-b">
          <div>
            <p className="text-modal_p font-roboto font-[700] text-[22px] letter3">{selectedRestaurant?.name}</p>
            <p className="font-roboto font-medium text-sm text-par3-text">{selectedRestaurant?.address}</p>
          </div>
          <div className="flex gap-[55px]">
            <div className="font-roboto font-medium text-par3-text">
              <p className="text-lg">Cuisine</p>
              <p className="text-sm">{selectedRestaurant?.cuisine}</p>
            </div>
            <div className="flex gap-7">
              <button className="bg-white text-sm border w-[72px] h-[52px] text-start ps-2 border-btnRed rounded-[5px] text-btnRed">{selectedRestaurant?.delivery_price}$ Delivery</button>
              <button onClick={() => router.back()} className="bg-btnRed text-sm w-[72px] h-[52px] rounded-[5px] text-white">Go Back</button>
            </div>
          </div>
        </div>
        <div className="flex gap-[50px] mt-[48px] pe-5">
          <ProductsTable currentProducts={currentProduct} />

          {!isUser || basketData && basketData.items?.length<0 ?( <EmptyBasket size="small"/>
):(       <BasketCard basketData={basketData}  size="small" /> 
)


          }
          {/* // <EmptyBasket size="small"/> */}
          {/* <BasketCard size="small" /> */}
        </div>
      </MainClient>
      <FooterClient />
    </div>
  );
};


export default ChoiseUser;