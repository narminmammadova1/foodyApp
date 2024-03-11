import React from 'react'
import AddButton from '../../Admin/AddButton'
import { LabelModal} from '../../Styled/Typography'
import FormAddRestuarant from '../FormAddProducts';
import { useRouter } from 'next/router';
import { log } from 'console';
import { ROUTER } from '../../../Constant/Router';
import FormAddCategory from '../FormAddCategory';




const AdminModal = ({isOpen,formm ,onClose,modalTitle="Add Product"}) => {

    const router=useRouter()
console.log("router",router);
const {pathname}=router

    console.log("path",pathname);

    
    // let modalHeader = "";
    // let modalDescription = "";
   //  let formToRender = null;

//     if (pathname === ROUTER.CATEGORY) {
//      modalHeader = "Add Category";
//      modalDescription = "Add Your information";
//      // formToRender = <FormAddCategory/>; // You can uncomment this if you want to render the form
//    }
//    if(pathname===ROUTER.RESTUARANTS){
//      modalHeader = "Add Restaurants";
//      modalDescription = "Add Your Restaurants information";
     
//    }

// switch (pathname) {
//     case ROUTER.CATEGORY:
//       modalHeader = "Add Category";
//       modalDescription = "Add Your information";
//       break;
//     case ROUTER.RESTUARANTS:
//       modalHeader = "Add Restaurants";
//       modalDescription = "Add Your Restaurants information";
//       break;
//     default:
//       // Varsayılan durum
//       break;
//   }




    // let formToRender=null
    // if(pathname===ROUTER.CATEGORY){
    //     formToRender=<FormAddCategory/>
    // }
  return (
  <div className={`z-50   ${isOpen ? "fixed" :"hidden"} `  } 
//   style={{right:isOpen ? 0 :"-100"
// //  transform: isOpen ?"translateX(0)" :"translateX(100%)"
// }}
 >
    <div className=' translate-x-40  left-64 fixed top-6 ' onClick={onClose}>   <img src="/icons/x.svg" alt=""  />
   </div>  
    <div className='fixed bg-login-gray top-0 right-0 h-full  overflow-y-auto'>
  
    <header className=' p-6  font-roboto font-medium   text-par-text'>
            <p className='text-2xl'>{modalTitle}</p>
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
 {formm ? <FormAddCategory/> :(   <form action="" className='flex flex-col'>

<label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg bg-input-gray'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10'/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10' />


</form>  )} 
     {/* <form action="" className='flex flex-col'>

        <label className=' modal-label'  htmlFor="">Name</label>
       
<input className=' bg-input-gray  rounded-lg h-10' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols="30" rows="5" className=' rounded-lg bg-input-gray'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10'/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10' />


    </form>   */}
{/* {formToRender} */}
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
