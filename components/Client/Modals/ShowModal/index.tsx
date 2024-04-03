import Image from 'next/image'
import React from 'react'
import SelectModal from '../../SelectModal'


interface ShowModalProps{
  isOpenShowwModal:boolean
}
const ShowModal:React.FC<ShowModalProps> = ({isOpenShowwModal}) => {
  return (
    <div className={`w-full h-full fixed top-0 left-0 flex  z-40  ${isOpenShowwModal ? "fixed" : "hidden" } bg-inputPlaceholder  bg-opacity-40`}>
       <div className=' bg-white  justify-between m-auto pb-[49px] ps-8 pe-[51px]  flex flex-col top-[209px] w-[754px] h-[433px] boxShadow4   rounded'>
        <table className=" bg-white">
  <thead>
  <tr className='  border-b font-sans font-[600] text-[14px]'>
    <td  className=''>
        <div className='py-4'>
        image</div></td>
      <td>
      <div className=' text-center'>
       Name</div>
      </td>
      <td className=' text-center '>Price $</td>
      <td className='text-center'>Count</td>
      <td className='text-center'>Amount</td>
      
     
    </tr>
  </thead>
  <tbody className=''>
  
    <tr className='   border-b text-blackhead font-[400] font-sans text-[14px]'>
    <td  className=''>
        <div className='w-[43px] h-[48px]'>
        <Image  width={1000} height={1000} src="/svgs/pizza.svg" alt='product' />
       </div></td>
     
      <td className='text-center'>Papa John's Pizza </td>
      <td className='text-center'> 7.90
      </td>

      <td>
      <div className='text-center'>
        2</div>
      </td>
      <td className='text-center'> 15.80</td>
     
     
    </tr>

    <tr className='   border-b text-blackhead font-[400] font-sans text-[14px]'>
    <td  className=''>
        <div className='w-[43px] h-[48px]'>
        <Image  width={1000} height={1000} src="/svgs/pizza.svg" alt='product' />
       </div></td>
     
      <td className='text-center'>Papa John's Pizza </td>
      <td className='text-center'> 7.90
      </td>

      <td>
      <div className='text-center'>
        2</div>
      </td>
      <td className='text-center'> 15.80</td>
     
     
    </tr>
   
 

    
   
 
  </tbody>
</table> 
<div>
<SelectModal/>
</div>
       </div>


    </div>
  )
}

export default ShowModal
