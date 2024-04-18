import React, { useState } from 'react'
import Image from 'next/image'
import { useModal } from '../../../shared/hooks/useModal'
import ShowModal from '../Modals/ShowModal'
import SelectModal from '../SelectModal'
import DeleteModal from '../../Modals/DeleteModal'
import { useDropdownn } from '../../../shared/hooks/useDropdown'

const UserOrderCard = () => {


  // const [isOpenDropdown,setIsOpenDropdown]=useState(false)

  // const togleDropdown=()=>{
  
  //     setIsOpenDropdown(!isOpenDropdown)
  // }
  
const  {isOpenDropdown,openDropDown}= useDropdownn()

 const { openShowwModal,closeShowwModal,isOpenShowwModal,openDelModal,isOpenDelModal,closeDelModal}=useModal()

  return (
    <>
 
    <div className= ' bg-headerbg flex flex-col w-full max-h-[634px]overflow-y-auto  overflow-x-hidden px-[27px]'>
    <ShowModal isOpenShowwModal={isOpenShowwModal}/> 
   <DeleteModal delDescription='' isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='inputPlaceholder'/>
    
      <div >
        <h1 className=' font-mukta font-[600] text-[30px]  text-modal_p mt-[49px] mb-[51px]'>Your Orders</h1>
        </div>

        <table className="table-fixed   bg-white">
  <thead>
  <tr className='  text-center border-b font-sans font-[600] text-[14px]'>
    <td  className='py-3'>
        <div className='flex justify-center'>
        ID</div></td>
      <td>
      <div className='flex justify-center'>
       Time</div>
      </td>
      <td>Delivery Address</td>
      <td>Amount</td>
      <td>Payment Method</td>
      <td>Contact</td>
      
     
    </tr>
  </thead>
  <tbody className=''>
  
    <tr className='  text-center border-b text-blackhead font-[400] font-sans text-[14px]'>
    <td  className='py-3'>
        <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
        9177</div></div></td>
     
      <td>25 Dec 2021</td>
      <td className='flex justify-center'><div className='px-6 w-[203px] flex text-start'>29 Eve Street,543 Evenue
        Road,Ny 87876</div>
      </td>

      <td>
      <div className='flex justify-center'>
        $249.7</div>
      </td>
      <td> Cash on Delivery</td>
      <td> <div className='flex justify-center '><div>994-51-410-3130</div>
     </div></td>
      <td> <div className=' w-[4px] h-[17px] me-5'>

      <div className=' cursor-pointer'>
        <Image width={1000} height={1000} src="/icons/threepoints.svg" alt='points' onClick={openDropDown}/>
     {isOpenDropdown && <div className=''>
        <div className=' text-14px roboto-medium z-30 flex flex-col  relative  items-center py-1 font-medium w-[79px] h-[47px] bg-white'>
        <button onClick={openShowwModal} className=' text-btnGreen' >show</button>
        <button onClick={openDelModal}  className=' text-btnRed' >delete</button>
        </div>
     </div> } 
    </div>
      </div></td>
    </tr>
   
 

    
   
 
  </tbody>
</table>
{/* <div className=' flex justify-between mt-8'>
<div className='flex gap-2 items-center '>
  <button className=' bg-white w-8 h-8 rounded flex justify-center items-center'>
    <img src="/icons/left.svg" alt="left" />
  </button>
  <input className='w-8 h-8 bg-white flex items-center justify-center'  type="text" />
<div>03</div>
  <button className=' bg-white w-8 h-8 rounded flex justify-center items-center'>
    <img src="/icons/right.svg" alt="right" />
  </button>

</div>
<div className='flex gap-9 items-center'>
  <p className=' font-sans text-[14px]  text-par3-text'>Rows per page</p>
  <div className=' bg-white w-[60px] h-8 border '>
  <select name="" id=""></select>
  </div>
</div>
</div> */}
<SelectModal/>
    </div>
    </>
  )
}

export default UserOrderCard
