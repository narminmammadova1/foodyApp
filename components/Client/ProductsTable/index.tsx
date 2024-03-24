import React from 'react'

const ProductsTable
 = () => {
  return (
    <div className=' bg-headerbg rounded-[4px]  ms-[57px] w-full '>
        <h1 className='text-center font-roboto font-[700] text-[25px] text-modal_p my-10'>Products</h1>
      <table className=" w-full">
  {/* <thead  className=' w-full bg-red-900 flex '>
    <tr>
      Song
     
    </tr>
  </thead> */}
  <tbody>
    <tr className='border  py-5 h-[99px] '>
      <td className=' flex justify-center  ps-[42px] items-center py-7'><img width="57px" height="53px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-4  font-roboto font-medium '><p className='text-lg text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm text-par3-text'>Prepared with a patty a slice of cheese and special sauce</p></td>
      <td className=''>
        <p className=' font-roboto   text-[12px] text-par3-text'>from <span className='text-base font-[550] text-modal_p'>$7.90</span> </p></td> 
       <td className=''> 
     <div className=' border-[2px] flex justify-center items-center  border-btn-cncl  w-10 h-10  text-btn-cncl rounded-full '> 
            <img src="/icons/plus2.svg" alt="" />
            </div>
            </td>

    </tr>

    <tr className='border  py-5 h-[99px] '>
      <td className=' flex ps-[42px] justify-center items-center py-7'><img width="57px" height="53px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-4  font-roboto font-medium '><p className='text-lg text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm text-par3-text'>Prepared with a patty a slice of cheese and special sauce</p></td>
      <td className=''>
        <p className=' font-roboto   text-[12px] text-par3-text'>from <span className='text-base font-[550] text-modal_p'>$7.90</span> </p></td> 
       <td className=''> 
     <div className=' border-[2px] flex justify-center items-center  border-btn-cncl  w-10 h-10  text-btn-cncl rounded-full '> 
            <img src="/icons/plus2.svg" alt="" />
            </div>
            </td>

    </tr>

    <tr className='border  py-5 h-[99px] '>
      <td className=' flex justify-center  ps-[42px] items-center py-7'><img width="57px" height="53px" src="/pngs/pizzahut.svg" alt="product" /></td>
      <td className='ps-4  font-roboto font-medium '><p className='text-lg text-modal_p'>Papa John's Pizza Restaurant</p>
      <p className='text-sm text-par3-text'>Prepared with a patty a slice of cheese and special sauce</p></td>
      <td className=''>
        <p className=' font-roboto   text-[12px] text-par3-text'>from <span className='text-base font-[550] text-modal_p'>$7.90</span> </p></td> 
       <td className=''> 
     <div className=' border-[2px] flex justify-center items-center  border-btn-cncl  w-10 h-10  text-btn-cncl rounded-full '> 
            <img src="/icons/plus2.svg" alt="" />
            </div>
            </td>

    </tr>
   
    
  </tbody>
</table>



    </div>
  )
}

export default ProductsTable

