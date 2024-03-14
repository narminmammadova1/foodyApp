import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton'
import { useRouter } from 'next/router';
import { ROUTER } from '../../../Constant/Router';
import FormAddCategory from '../FormAddCategory';
import Image from 'next/image';
import FormAddRestuarant from '../FormAddRestuarant';




const AdminModal = ({isOpen,img,formRest,formm,btnText ,onClose,modalTitle="Add Product",modalDescription}) => {

    const router=useRouter()
console.log("router",router);
const {pathname}=router

    console.log("path",pathname);
 const [formComponent,setFormComponent]=useState()
   const  changeModalForm=()=>{

    console.log("ppppp",pathname);

if(pathname==="/admin/restuarants"){
setFormComponent(<FormAddRestuarant/>)
}
else if(pathname==="/admin/category"){

  setFormComponent( <FormAddCategory/>)
}
 
    }
    useEffect(() => {
        changeModalForm();
    }, [isOpen, pathname]);



  return (
    <>
  <div className={`
  w-full top-0 right-0 fixed h-full z-50   flex overflow-y-auto    ${isOpen ? "fixed" :"hidden"} `  } >
   <div className=' w-1/3 bg-login-gray flex  justify-end   bg-opacity-40'>
   <div className='p-6  ' onClick={onClose}>   <img src="/icons/x.svg" alt=""  />
   </div>  
   </div>



{/* //////////////////////////////// */}
   <div className='right   w-2/3 bg-login-gray pt-6 ps-6 pe-6 overflow-y-auto  '>

    
   <header className=' font-roboto font-medium   text-par-text'>
            <p className='text-2xl'>{modalTitle}</p>
        <p className='  text-lg'>Upload your product Image
</p>
        </header>
<div className='flex h-full '>


<div className='rleft w-1/3 me-10'>

<div className=' min-h-36 mt-1 mb-4 bg-red-600'>
                {img ? <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover  ' src="/pngs/productImg.png" alt='product'/> : ""}
            </div>

            <div className='py-2'>
                <p className=' mt-4 font-roboto font-medium  text-par-text  text-[16px]'>{modalDescription}</p>
            </div> 

</div>
<div className='rright w-2/3 ms-8 flex flex-col 
'>

<div className='  flex flex-col items-center bg-modal-div h-[122px]  rounded-xl '>
                <div className=' flex flex-col'>
                    <img  src="/icons/upload.svg" alt="upload" />
                <p className=' font-roboto font-medium   text-par-text  text-2xl'>upload</p></div>
            </div>


            <div className=' bg-modal-div  mt-16 flex flex-col p-5 rounded-xl'>
 {/* {formm ? <FormAddCategory/>  :(   <form action="" className='flex flex-col'>
 

 


<label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10 modal-input ' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg pt-2 bg-input-gray modal-input'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10 '/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10  modal-input' />


</form>  )} 
    */}

{/* {formm ? (
    <FormAddCategory />
) : formRest ? (
    <FormAddRestuarant />
) : (
    <form action="" className="flex flex-col">
    <label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10 modal-input ' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg pt-2 bg-input-gray modal-input'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10 '/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10  modal-input' />

    </form>
)} */}

 {formm ?  formComponent :(<form action="" className="flex flex-col">
    <label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10 modal-input ' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg pt-2 bg-input-gray modal-input'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10 '/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10  modal-input' />

    </form>)}
</div>



</div>

</div>

  
  
  
<div className=' border-t-2  border-modal-div flex  mt-48 py-5 mb-0 gap-11  '>
            <div className='btn-text  '>
<AddButton shadow center btnSize="w-[400px]"  btnIcon='' btnText="Cancel" btncolor="modal-div" /></div>
<div className='  btn-text'>
            <AddButton shadow center btnSize="w-[400px]"  btnIcon='' btnText={btnText} btncolor="btn-pink"/>
      
            </div>
              </div>
   </div>
   
   
   
   
   
   

</div>
</>
  )
}

export default AdminModal





