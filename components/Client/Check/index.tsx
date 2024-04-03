import React from 'react';

const Check = () => {
  return (
    <div className='bg-headerbg rounded max-h-[372px] overflow-y-auto flex flex-col p-9 w-[397px]  text-par3-text'>
      <h1 className=' roboto-medium font-medium text-lg mb-2 letter3 text-center '>Your Order</h1>
      <table className=' roboto-medium text-[14px]  '>
        <tbody>
          <tr className=''>
            <td className='font-medium py-3'>1</td>
            <td>x Papa John's Pizza Restaurant</td>
            <td>$8.00</td>
          </tr>
          <tr>
            <td className='font-medium py-3'>2</td>
            <td>x Papa Coffee</td>
            <td>$6.00</td>
          </tr>
          <tr>
            <td className='font-medium py-3'>3</td>
            <td>x Coca Cola</td>
            <td>$3.00</td>
          </tr>
    
       
          <tr>
            <td className='font-medium py-3'>3</td>
            <td>x Coca Cola</td>
            <td>$3.00</td>
          </tr>
        </tbody>
      </table>
<hr className='mt-5' />
      <div className=' flex justify-between mt-6'>
        <p className='roboto-medium font-medium text-lg  letter3'>Total</p>
        <p>$17.80</p>
      </div>
    </div>
  );
};

export default Check;