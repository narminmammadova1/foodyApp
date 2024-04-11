// import React from 'react'

// interface FormAddCategoryProps {
//   addCategory?: () => void;
// }




// const FormAddCategory:React.FC<FormAddCategoryProps> = ({addCategory}) => {
//   return (
//     <div>
//       <form onSubmit={addCategory} action="" className='flex flex-col'>

// <label className=' modal-label'  htmlFor="">Name</label>

// <input className=' bg-input-gray  rounded-lg h-10' type="text " />

// </form>
//     </div>
//   )
// }

// export default FormAddCategory






import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton'
import { useRouter } from 'next/router';
// import { ROUTER } from '../../../Constant/Router';
import Image from 'next/image';
import FormAddRestuarant from '../FormAddRestuarant';
import FormAddOffer from '../FormAddOffer';
import { addCategory } from '../../../services';
import { useFormik } from 'formik';
import { handlechange } from '../../Admin/SideBar';

 interface AdminModalProps{
    // modalDescription?:string;
    // modalTitle?:string;
    // btnText?:string;
    // isOpen?:boolean;
    onClose?:()=>void 
    img?:boolean | undefined
    // formm?:any,
    // addCategory:()=>void,
    // addInformations:()=>void

 }


const FormAddCategory:React.FC<AdminModalProps> = ({img,onClose}) => {

    const router=useRouter()
console.log("router",router);
const {pathname}=router

    console.log("path",pathname);
 
    const formik = useFormik({
      initialValues: {
       categoryname:"",
       file:""
      },
      onSubmit: (values) => {
        console.log(values);
      },
      
    
    });
  
    console.log("values  ",formik.values);


  return (
    <>
  
   <div>
   <header className=' font-roboto font-medium   text-par-text'>
            <p className='text-2xl'>Add Category</p>
        <p className=' mt-[22px] text-lg'>Upload Image
</p>
        </header>
<div className='flex h-full '>

<div className='rleft w-1/3 me-10'>

<div className=' min-h-36 mt-1 mb-4 bg-lime-800'>
                {img ? <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover  ' src="/pngs/productImg.png" alt='product'/> : ""}
            </div>

            <div className='py-2'>
                <p className=' mt-4 font-roboto font-medium  text-par-text  text-[16px]'>Add your Category Informations</p>
            </div> 

</div>
<div className='rright w-2/3 ms-8 flex flex-col 
'>

            <div className='   flex flex-col p-5 rounded-xl'>
 
<form action="" className="flex flex-col" onSubmit={formik.handleSubmit} >


<div className='  flex flex-col  bg-modal-div h-[122px]  items-center  justify-center rounded-xl mb-[78px] '>
              
              
                <div className=' flex flex-col'>
                <input name='file'
                value={formik.values.file}
                onBlur={formik.handleBlur}
                 className=' hidden invisible' type="file" id='fileInput'/>

                <label  htmlFor="fileInput"> 
                 <img  src="/icons/upload.svg" alt="upload" />
</label>
<p className=' font-roboto font-medium   text-par-text  text-2xl'>upload</p>

                </div>

            </div> 

<div className=' bg-modal-div  flex flex-col  h-[161px] px-[23px]  rounded-xl'>
    <label className=' modal-label'  htmlFor="">Name</label>

<input
name='categoryname'
value={formik.values.categoryname}
onChange={formik.handleChange}


 className=' bg-input-gray  rounded-lg h-10 modal-input ' 
 type="text " />
</div>
    </form>
</div>
</div>

</div>

<div className=' border-t-2  border-modal-div flex  mt-48 py-5 mb-0 gap-11  '>
            <div className='btn-text  '>
<AddButton shadow center btnSize="w-[400px]" onClick={onClose}  btnIcon='' btnText="Cancel" btncolor="modal-div" /></div>
<div className='  btn-text'>
            <AddButton shadow center btnSize="w-[400px]"  onClick={addCategory} btnText="Add Category"  btnIcon='' btncolor="btn-pink"/>
      
            </div>
              </div>
   </div>
   
   
   
   
   
   

</>
  )
}

export default FormAddCategory













