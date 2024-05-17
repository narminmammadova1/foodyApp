// import React from 'react'
// import MainClient from '../../../components/Client/MainClient'
// import HeaderClient from '../../../components/Client/HeaderClient'
// import Image from 'next/image'
// import ProductsTable from '../../../components/Client/ProductsTable'
// import BasketCard from '../../../components/Client/BasketCard'
// import FooterClient from '../../../components/Client/FooterClient'
// import { GetServerSideProps, NextPage } from 'next'
// import { getRestaurantById } from '../../../services'

// const ChoiseUser:NextPage = (selectedId) => {
//   return (
//     <div>
//       <MainClient>

//         <HeaderClient/>
//         <div className=''>
//             <Image className=' w-full' width={1000} height={1000} src={} alt='rest' />
//         </div>
//         <div className='pb-4 flex justify-between ps-[57px] border-b'>
//             <div>
//                 <p className=' text-modal_p  font-roboto font-[700] text-[22px] letter3'>Papa John's Pizza Restaurant</p>
//                 <p className=' font-roboto font-medium text-sm text-par3-text'>19 Nizami street Sebail,Baku</p>
//             </div>

//             <div className=' flex gap-[55px]'>
//                 <div className='font-roboto font-medium text-par3-text'>
//                     <p className='  text-lg'>Cuisine</p>
//                     <p className='text-sm '>Pizza,drink,hotdog,sendwich,roll</p>
//                 </div>

//                 <div className='flex gap-7'>
//                     <button className='bg-white text-sm border w-[72px] h-[52px] text-start ps-2 border-btnRed rounded-[5px] text-btnRed'>$5 Delivery</button>
//                     <button className='bg-btnRed text-sm w-[72px] h-[52px] rounded-[5px] text-white'>Go Back</button>
//                 </div>
//             </div>
//         </div>

//         <div className='flex gap-[50px] mt-[48px]pe-5'> 
//        <ProductsTable/>

//        <BasketCard size="small"/>
//         </div>
//       </MainClient>
//       <FooterClient/>
//     </div>
//   )
// }



// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { id } = params;

//   // Restoran bilgilerini almak için gerekli işlemleri yapın
//   const restaurantData = await getRestaurantById(id);

//   return {
//     props: {
//       restaurantData,
//     },
//   };
// };


// export default ChoiseUser










// import React from 'react';
// import MainClient from '../../../components/Client/MainClient';
// import HeaderClient from '../../../components/Client/HeaderClient';
// import Image from 'next/image';
// import ProductsTable from '../../../components/Client/ProductsTable';
// import BasketCard from '../../../components/Client/BasketCard';
// import FooterClient from '../../../components/Client/FooterClient';
// import { useRouter } from 'next/router';
// import { getRestaurantById } from '../../../services';

// const ChoiseUser = ({ restaurantData }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const { name, img_url, cuisine, delivery_price, delivery_min } = restaurantData;

//   return (
//     <div>
//       <MainClient>
//         <HeaderClient />
//         <div className="">
//           <Image className="w-full" width={1000} height={1000} src={img_url} alt={name} />
//         </div>
//         <div className="pb-4 flex justify-between ps-[57px] border-b">
//           <div>
//             <p className="text-modal_p font-roboto font-[700] text-[22px] letter3">{name}</p>
//             <p className="font-roboto font-medium text-sm text-par3-text">19 Nizami street Sebail, Baku</p>
//           </div>
//           <div className="flex gap-[55px]">
//             <div className="font-roboto font-medium text-par3-text">
//               <p className="text-lg">Cuisine</p>
//               <p className="text-sm">{cuisine}</p>
//             </div>
//             <div className="flex gap-7">
//               <button className="bg-white text-sm border w-[72px] h-[52px] text-start ps-2 border-btnRed rounded-[5px] text-btnRed">{delivery_price}$ Delivery</button>
//               <button className="bg-btnRed text-sm w-[72px] h-[52px] rounded-[5px] text-white">Go Back</button>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-[50px] mt-[48px] pe-5">
//           <ProductsTable />
//           <BasketCard size="small" />
//         </div>
//       </MainClient>
//       <FooterClient />
//     </div>
//   );
// };

// export const getServerSideProps = async ({ params }) => {
//   const { rest } = params;

//   try {
//     const restaurantData = await getRestaurantById(rest);
//     return {
//       props: {
//         restaurantData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching restaurant data:', error);
//     return {
//       notFound: true,
//     };
//   }
// };

// export default ChoiseUser;











import React, { useEffect, useState } from 'react';
import MainClient from '../../../components/Client/MainClient';
import HeaderClient from '../../../components/Client/HeaderClient';
import Image from 'next/image';
import ProductsTable from '../../../components/Client/ProductsTable';
import BasketCard from '../../../components/Client/BasketCard';
import FooterClient from '../../../components/Client/FooterClient';
import { useRouter } from 'next/router';
import { getProduct, getRestaurantById } from '../../../services';
import { useGlobalContext } from '../../../Context/GlobalContext';

const ChoiseUser = () => {
  // const[currentProduct,setCurrentProduct]=useState([])

  const router = useRouter();
const{selectedRestaurant,currentProduct,setCurrentProduct}=useGlobalContext() || {}
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // console.log("choisde products varsa",selectedRestaurant);
  
  useEffect(()=>{getProductByRest()},
  [])
  const getProductByRest = async () => {
    if (!selectedRestaurant?.id) return;
    try {
      const res = await getProduct();
      const mainProduct=res?.data.result.data
      console.log("productun resssssi",res?.data.result.data);
      console.log("productunmmainProductlisi",mainProduct);

      const filterData =mainProduct.filter((item: any) => item.rest_id == selectedRestaurant.id);
      // const filterData =mainProduct.filter((item: any) => item.name );

      setCurrentProduct(filterData);
       console.log("choisde products varsa",currentProduct);
       console.log("choisde filteredvarsa",filterData);


    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // const { name, img_url, cuisine, delivery_price, delivery_min } = restaurantData;
  console.log("choisde products varsa",currentProduct);

  return (
    <div>
      <MainClient>
        <HeaderClient />
        <div>
          {/* <Image className="w-full" width={1000} height={1000} src={img_url} alt={name} /> */}
          <Image  className="w-full h-[537px]" width={1000} height={1000} src={selectedRestaurant?.img_url} alt="rrrrrr" />

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
          <ProductsTable />
          <BasketCard size="small" />
        </div>
      </MainClient>
      <FooterClient />
    </div>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   const { id } = params;

//   try {
//     const restaurantData = await getRestaurantById(id);
//     return {
//       props: {
//         restaurantData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching restaurant data:', error);
//     return {
//       notFound: true,
//     };
//   }
// };
export default ChoiseUser;