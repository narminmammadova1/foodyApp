import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';

const ProductsTable
 = () => {

   const{currentProduct,setCurrentProduct}=useGlobalContext() || {}
  return (
    <div className=' bg-headerbg rounded-[4px]  ms-[57px] max-h-[961px] min-h-[961px] w-[846px]  overflow-y-auto'>
        <h1 className='text-center font-roboto font-[700] text-[25px] text-modal_p my-10'>Products</h1>
      <table className=" w-full ">
 
  <tbody>
 
 
{

currentProduct && currentProduct?.length>0 ? (currentProduct?.map((currentProduct)=>(

<tr className=' border-b-2 border-t-2 py-5 '>
      <td className=' flex justify-center  ps-[42px] items-center py-7'><img width="57px" height="53px" src={currentProduct?.img_url}alt="product" /></td>
      <td className='ps-4 roboto-medium font-medium '><p className='text-lg text-modal_p'>{currentProduct?.name}</p>
      <p className='text-sm text-par3-text '>{currentProduct?.description}</p></td>
      <td className=''>
        <p className=' roboto-medium font-medium    text-[12px] text-par3-text'>from <span className='text-base text-modal_p'>from{currentProduct?.price}</span> </p></td> 
       <td className=''> 
     <div className='  flex justify-center items-center w-10 border-[1px] border-btn-cncl h-10 rounded-full '> 
            <img src="/icons/plus2.svg" alt="add" />
            </div>
            </td>

    </tr>
    
))) :(
  <tr>
    <td className="text-center py-4">There is no product</td>
  </tr>
)}

   


   

 
   
    
  </tbody>
</table>



    </div>
  )
}

export default ProductsTable

