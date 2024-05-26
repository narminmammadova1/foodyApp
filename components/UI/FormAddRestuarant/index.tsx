import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton';
import UseFileUpload from '../../../helpers/uploadImages';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {   addRestaurant,  } from '../../../services';
import Image from 'next/image';
import { QUERIES } from '../../../Constant/Queries';
import { useGlobalContext } from '../../../Context/GlobalContext';
  
const  FormAddRestuarant
= ({onClose}:any) => {

  const [selectedType,setSelectedType]=useState("")

const {categoryData,isEdit,setIsEdit}=useGlobalContext() || {}
console.log("categid restdeki",categoryData);


  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload() || {};
const router = useRouter();
const { pathname } = router;
const queryClient=useQueryClient()

const {mutate:AddRestaurantMutation}=useMutation(addRestaurant,{
  onSuccess:(data)=>{
console.log("mutationla add olundu",data);
toast.success("Added Restaurant",{autoClose:2000})
queryClient.invalidateQueries(QUERIES.Restaurants)
formik.resetForm()
setFile(null)
setDownloadURL("")
setSelectedType("")

setTimeout(()=>{
  onClose()
},2000)

  },
  onError:(err)=>{
    console.log("error restaurant mutation");
    toast.error("Error added Restaurant")
  }
})

const formik = useFormik({
  initialValues: {
    name: "",
    category_id:"",
    img_url: "",
    cuisine: "",
    address: "",
    delivery_min: "",
    delivery_price: ""
  },
  onSubmit:async (values) => {
   
    values={
      name:formik.values.name,
      category_id:formik.values.category_id,
      cuisine:formik.values.cuisine,
      img_url :downloadURL,
      address:formik.values.address,
      delivery_min: formik.values.delivery_min,
      delivery_price: formik.values.delivery_price
    }
    AddRestaurantMutation(values)
    console.log("restoranda submit olundu");
// toast.success("Added Restaurantttt")
  },
});

useEffect(()=>{
if(file){

  handleUpload(file)
}

},[file])
  
return (
  <>
    <div>
      <header className='font-roboto font-medium text-par-text'>
        <p className='text-2xl'>{`${isEdit ? 'Edit Restaurant' : 'Add Restaurant'}`}</p>
        <p className='mt-[22px] text-lg'>Upload Image</p>
      </header>
      <div className='flex h-full'>
        <div className='rleft w-1/3 me-10'>
          <div className='min-h-36 mt-1 mb-4'>
            <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover' src={downloadURL} alt='rest' /> 
          </div>
          <div className='py-2'>
            <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>  {`${isEdit ? 'Edit Your Restaurant Informations' : '  Add your Restaurant Informations'}`}
</p>
          </div>
        </div>
        <div className='rright w-2/3 ms-8 flex flex-col'>
          <div className='flex flex-col  p-5 rounded-xl'>
            <form action="" className="flex flex-col" onSubmit={formik.handleSubmit}>
              <div className='flex flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
                <div className='flex flex-col'>
                  <input
                    name='img_url'
                    value={formik.values.img_url}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileChange(e);
                        setFile(e.target.files[0]);
                      }
                    }}
                    className='hidden invisible' type="file" id='fileInput' />
                  <label htmlFor="fileInput">
                    <img src="/icons/upload.svg" alt="upload" />
                  </label>
                  <p className='font-roboto font-medium text-par-text text-2xl'>upload</p>
                </div>
              </div>
              <div className='bg-modal-div flex flex-col pb-[47px]  px-[23px] rounded-xl'>
                <label className='modal-label' htmlFor="">Name</label>
                <input
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className='bg-input-gray rounded-lg h-10 modal-input'
                  type="text" />

<label className='modal-label' htmlFor="">Cuisine</label>
                    

<textarea  name="cuisine"
id="description"
   

onChange={formik.handleChange}
value={formik.values.cuisine}
className='bg-input-gray rounded-lg h-[99px] modal-input'></textarea>



                  
<label className='modal-label' htmlFor="">Delivery Price</label>
                    


<input  onChange={formik.handleChange}
                                      value={formik.values.delivery_price}
                                      name="delivery_price"
                                      id="description"
                                      className='bg-input-gray rounded-lg h-10 modal-input'
                                      type="number" />

<label className='modal-label' htmlFor="">Delivery min</label>
                    
<input
                                      onChange={formik.handleChange}
                                      value={formik.values.delivery_min}
                                      name="delivery_min"
                                      id="description"
                                      className='bg-input-gray rounded-lg h-10 modal-input'
                                      type="number" />




<label className='modal-label' htmlFor="">Address</label>
                    


                    <input
                                      onChange={formik.handleChange}
                                      value={formik.values.address}
                                      name="address"
                                      className='bg-input-gray rounded-lg h-10 modal-input'
                                      type="text" />



<label className='modal-label' htmlFor="">Category</label>
                    

                                   
      <select value={selectedType}
       className='bg-input-gray rounded-lg h-10 modal-input'
       onChange={(e) => {
        setSelectedType(e.target.value);
        formik.handleChange(e); // This will update formik.values.category_id
      }}
 name="category_id" id="category_id">

{/* value={formik.values.category_id} */}
<option key="" value="">Select Category</option>
{categoryData && categoryData.map((category)=>(
    // <option key={category.id} value={category.name}>{category.name}</option>
    <option key={category.id} value={category.id}>{category.name}</option>

)

)}
 

 </select>
      
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
        <div className='btn-text'>
          <AddButton shadow center btnSize="w-[400px]"  btnIcon='' onClick={()=>{formik.resetForm()
            setDownloadURL("")
            onClose()}} btnText="Cancel"  btncolor="modal-div" />
        </div>
        <div className='btn-text'>
          <AddButton  shadow center btnSize="w-[400px]" btnIcon=''
          

          onClick={formik.handleSubmit}
          //  disabled={isDisabled} 
          btnText={`${isEdit ? 'Update Restaurant ' : 'Add Restaurant'}`}
          btncolor="btn-pink" />
        </div>
      </div>
    </div>
  </>
);

}

export default FormAddRestuarant
