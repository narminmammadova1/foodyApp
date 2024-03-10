import Image from 'next/image'
import React from 'react'

const OrderCards= () => {
  return (
    <div className=' bg-white w-full'>
        <table className="table-fixed min-w-full divide-y divide-gray-200">
  <thead>
    <tr className=' '>
      <th className='py-2'>ID</th>
      <th>Customer ID</th>
      <th>Time</th>
      <th>Delivery Address</th>
      <th>Amount</th>
      <th>Payment Method</th>
      <th>Contact</th>
      <th></th>
    </tr>
  </thead>
  <tbody className=''>
    <tr className='  text-center border-b'>
    <td  className='py-3'>
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        9177</div></div></td>
      <td>
      <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        022401</div></div>
      </td>
      <td>25 Dec 2021</td>
      <td>29 Eve Street,543 Evenue</td>
      <td> $249.7</td>
      <td> Cash on Delivery</td>
      <td> <div className='flex justify-center '><div>994-51-410-3130</div>
     </div></td>
      <td> <div className='ps-3 flex  gap-2'>
        <img className=' cursor-pointer' src="/icons/eye.svg" alt="edit" />
        <img className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>
    </tr>
   
    <tr className=' text-center border-b'>
    <td className='py-3' >
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        9177</div></div></td>
      <td>
      <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        022401</div></div>
      </td>
      <td>25 Dec 2021</td>
      <td>29 Eve Street,543 Evenue</td>
      <td> $249.7</td>
      <td> Cash on Delivery</td>
      <td> <div className='flex justify-center '><div>994-51-410-3130</div>
     </div></td>
      <td> <div className='ps-3 flex  gap-2'>
        <img className=' cursor-pointer' src="/icons/eye.svg" alt="edit" />
        <img className=' cursor-pointer' src="/icons/delete2.svg" alt="del" />
      </div></td>
    </tr>
   
 
  </tbody>
</table>
      
    </div>
  )
}

export default OrderCards
