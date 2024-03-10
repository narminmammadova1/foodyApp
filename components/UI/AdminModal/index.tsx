import React from 'react'
import AddButton from '../../Admin/AddButton'
 import styled from 'styled-components'
import { LabelModal} from '../../Styled/Typography'


const AdminModal = ({isOpen, onClose}) => {
  return (
  <div className={`z-50 ${isOpen ? "fixed" :"hidden"}`}>
    <div className=' translate-x-40  left-64 fixed top-6 ' onClick={onClose}>   <img src="/icons/x.svg" alt=""  />
   </div>  
    <div className='fixed bg-login-gray top-0 right-0 h-full  overflow-y-auto'>
  
    <header className=' p-6  font-roboto font-medium   text-par-text'>
            <p className='text-2xl'>Add product</p>
        <p className='  text-lg'>Upload your product Image
</p>
        </header>
        
        <div className='  flex  ps-6 pe-14'>
            <div className='pe-12'>
            <div className=' min-h-36'></div>
<div>
                <p className=' relative  top-20 font-roboto font-medium   text-par-text text-lg'>Add your Product description and necessary information</p>
            </div> 
            </div>
            <div className='w-full '>
            <div className='  flex flex-col p-5 items-center bg-modal-div  rounded-xl'>
                <div className=' flex flex-col'>
                    <img  src="/icons/upload.svg" alt="upload" />
                <p className=' font-roboto font-medium   text-par-text  text-2xl'>upload</p></div>
            </div>
<div className=' bg-modal-div mt-20 flex flex-col p-5  rounded-xl'>
    <form action="" className='flex flex-col'>
    {/* <LabelModal> */}

        <label className=' modal-label'  htmlFor="">Name</label>
        {/* </LabelModal> */}
       
<input className=' bg-input-gray  rounded-lg h-10' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg bg-input-gray'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10'/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10' />


    </form>
   
 
</div>

</div>

        </div>
        <div className=' border-t-2  border-modal-div flex  py-5 px-8 gap-5 mx-6 mt-32'>
            <div className=' w-1/2 btn-text  '>
<AddButton shadow center btnSize="flex-1"  btnIcon='' btnText="Cancel" btncolor="modal-div" /></div>
<div className=' w-1/2  me-5 btn-text'>
            <AddButton shadow center btnSize="flex-1"  btnIcon='' btnText="Create Product" btncolor="btn-pink"/>
      
            </div>
              </div>
      
    </div>
</div>
  )
}

export default AdminModal
