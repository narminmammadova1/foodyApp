import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { BasketPropsItem } from '../../../shared/interface';

const Check = () => {

  const {basketData}=useGlobalContext() || {}
const basketItems:BasketPropsItem[]=basketData?.items ||[]
  const [userBasket,setUserBasket]=useState<BasketPropsItem[]>([])

  useEffect(()=>{

setUserBasket(basketItems)
  },[])
  return (
    <div className='bg-headerbg rounded max-h-[372px] overflow-y-auto flex flex-col p-9 w-[397px]  text-par3-text'>
      <h1 className=' roboto-medium font-medium text-lg mb-2 letter3 text-center '>Your Order</h1>
      <table className=' roboto-medium text-[14px]  '>
        <tbody>
          {userBasket?.map((data)=>( 
            <tr key={data.id} className=''>
            <td className='text-[14px]'><span className='text-[18px] font-roboto font-medium'>{data.count}</span> x {data.name}</td>
            <td>${data.amount}</td>
          </tr>))}
          {/* <tr className=''>
            <td>1x Papa John's Pizza Restaurant</td>
            <td>$8.00</td>
          </tr> */}
         
         
    
       
          
        </tbody>
      </table>
<hr className='mt-5' />
      <div className=' flex justify-between mt-6'>
        <p className='roboto-medium font-medium text-lg  letter3'>Total</p>
        <p>${basketData?.total_amount}</p>
      </div>
    </div>
  );
};

export default Check;