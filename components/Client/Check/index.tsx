import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { BasketPropsItem } from '../../../shared/interface';
import { useTranslation } from 'react-i18next';

const Check = () => {

  const {basketData}=useGlobalContext() || {}
const basketItems:BasketPropsItem[]=basketData?.items ||[]
  const [userBasket,setUserBasket]=useState<BasketPropsItem[]>([])
const {t}=useTranslation()
  useEffect(()=>{

setUserBasket(basketItems)
  },[])
  return (
    <div className='lg:bg-headerbg rounded max-h-[372px] overflow-y-auto mx-4 lg:mx-0 flex  flex-col p-9 lg:w-[397px]  text-par3-text'>
           <h1 className=' block lg:hidden  font-mukta font-[600] text-[30px] text-modal_p letter3 mb-10'>{t("Checkout")}</h1>

      <h1 className=' roboto-medium font-medium text-lg mb-3 letter3 lg:text-center '>{t("Your Order")}</h1>
      <table className=' roboto-medium text-[14px]  '>
        <tbody>
          {userBasket?.map((data)=>( 
            <tr key={data.id} className=''>
            <td className='text-[14px]'><span className='text-[18px] font-roboto font-medium'>{data.count}</span> x {data.name}</td>
            <td>${data.amount}</td>
          </tr>))}
         
         
      
        </tbody>
      </table>
<hr className='mt-5' />
      <div className=' flex justify-between mt-6'>
        <p className='roboto-medium font-medium text-lg  letter3'>{t("Total")}</p>
        <p>${basketData?.total_amount}</p>
      </div>
    </div>
  );
};

export default Check;