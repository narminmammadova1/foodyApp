import React from 'react'

const ProductsTable
 = () => {
  return (
    <div className=' bg-headerbg rounded-[4px]  ms-[57px] max-h-[961px] min-h-[961px] w-[846px]  overflow-y-auto'>
        <h1 className='text-center font-roboto font-[700] text-[25px] text-modal_p my-10'>Products</h1>
      <table className=" w-full ">
  {/* <thead  className=' w-full bg-red-900 flex '>
    <tr>
      Song
     
    </tr>
  </thead> */}
  <tbody>
 


    <tr className=' border-b-2 border-t-2 py-5 '>
      <td className=' flex justify-center  ps-[42px] items-center py-7'><img width="57px" height="53px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-4 roboto-medium font-medium '><p className='text-lg text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm text-par3-text '>Prepared with a patty a slice of cheese and special sauce</p></td>
      <td className=''>
        <p className=' roboto-medium font-medium    text-[12px] text-par3-text'>from <span className='text-base text-modal_p'>$7.90</span> </p></td> 
       <td className=''> 
     <div className='  flex justify-center items-center w-10 border-[1px] border-btn-cncl h-10 rounded-full '> 
            <img src="/icons/plus2.svg" alt="add" />
            </div>
            </td>

    </tr>
    


   

 
   
    
  </tbody>
</table>



    </div>
  )
}

export default ProductsTable

