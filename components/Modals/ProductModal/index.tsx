import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton';
import { useMutation, useQueryClient } from 'react-query';
import { addProduct } from '../../../services';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import UseFileUpload from '../../../helpers/uploadImages';
import Image from 'next/image';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { QUERIES } from '../../../Constant/Queries';


interface ProductModalProps {
    onClose:() => void | undefined;
    isOpen:boolean,
    isEdit?:boolean,
  }






const ProductModal: React.FC<ProductModalProps> = ({onClose,isOpen,isEdit}) => {
 const queryClient=useQueryClient()

 const [selectedType,setSelectedType]=useState("")

 const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
 const { restaurantData}=useGlobalContext() || {}
    const { mutate: addProductMutation } = useMutation({
        mutationFn: addProduct,
        onSuccess: (data) => {
          console.log("mutationla product add ", data);
          toast.success("Product added mutation", { autoClose: 2000 });
          queryClient.invalidateQueries(QUERIES.Products)
        },
        onError:(error)=>{
          console.log(error,"Error added Product");
          toast.error("error added product")
        }
      })
  
  
  
      const formik = useFormik({
        initialValues: {
          name: "",
          img_url: "",
          description: "",
          price: "",
          rest_id: ""
        },
        onSubmit: async (values) => {


          values = {name:formik.values.name,
            img_url: downloadURL,
            rest_id: formik.values.rest_id,
            description: formik.values.description,
            price: formik.values.price
          };
  
          addProductMutation(values);
          setTimeout(() => {
            onClose();
          }, 2000);
          formik.resetForm()
          setDownloadURL("")
          setFile(null)
          setSelectedType("")
          console.log("product handle isleyir");
          
        },
      });
  

      
  
        useEffect(()=>{
          if(file){
              handleUpload(file)
          }
        },[file])

        const isDisabled = !formik.values.name || !formik.values.description || !formik.values.price || !formik.values.rest_id;

    return (
        <>
          <div className={`w-full top-0 right-0 fixed h-full z-50 flex overflow-y-auto ${isOpen ? "fixed" : "hidden"}`}>
            <div className='w-1/3 bg-login-gray flex justify-end bg-opacity-40'>
              <div className='p-6' onClick={onClose}>
                <img src="/icons/x.svg" alt="" />
              </div>
            </div>
            <div className='right w-2/3 bg-login-gray pt-6 ps-6 pe-6 overflow-y-auto'>
            <div>
              <header className='font-roboto font-medium text-par-text'>
                <p className='text-2xl'>{`${isEdit ? "Edit Product" :"Add Product"}`}</p>
                <p className='text-lg'>Upload Image</p>
              </header>
              <div className='flex h-full'>
                <div className='rleft w-1/3 me-10'>
                  <div className='min-h-36 mt-1 bg-modal-div'>
                     <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover' src={downloadURL} alt='product' /> 
                  </div>
                  <div className='py-2'>
                    <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>{`${isEdit ?"Edit" :"Add"}`} your Product informations</p>
                  </div>
                </div>
                <div className='rright w-2/3 ms-8 flex flex-col'>

                    
                  <form action="" onSubmit={formik.handleSubmit} className="flex flex-col">
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
                    <div className='bg-modal-div flex flex-col p-5 rounded-xl'>
                      <label className='modal-label' htmlFor="">Name</label>
                      <input
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className='bg-input-gray rounded-lg h-10 modal-input'
                        type="text"
                      />
                      <label className='modal-label' htmlFor="">Description</label>
                      <textarea
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        name="description"
                        id="description"
                        cols={30}
                        rows={5}
                        className='rounded-lg pt-2 bg-input-gray modal-input'
                      ></textarea>
                      <label className='modal-label' htmlFor="">Price</label>
                      <input
                        name="price"
                        value={formik.values.price}
                        type="number"
                        onChange={formik.handleChange}
                        className='bg-input-gray mb-7 ps-5 text-white rounded-lg h-10'
                      />
                        <select  value={selectedType}
       className='bg-input-gray rounded-lg h-10 modal-input'
       onChange={(e) => {
        setSelectedType(e.target.value);
        formik.handleChange(e); 
      }} name="rest_id" id="rest_id">

{/* value={formik.values.rest_id} */}
<option value="">Select Restaurant</option>
{restaurantData &&  restaurantData.map((rest)=>( 
   <option key={rest.id} value={rest.id}>{rest.name}</option>
))}

 </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
                <div className='btn-text'>
                 

                     <div className='flex gap-5'>
      <button onClick={onClose} 
    //   disabled={disabled} 
      className={`flex justify-center  w-[400px]  custom-shadow bg-modal-div "justify-center" rounded-lg px-4 py-2 
      font-roboto text-white    `}  >Close</button>
      
    </div>
                </div>
                <div className='btn-text'>
                <div className='flex gap-5'>
      <button type='submit' onClick={()=>{
formik.handleSubmit()
        console.log("dueldiii");
        
      }} 
      disabled={isDisabled} 
      className={`flex justify-center  w-[400px]  custom-shadow bg-btn-pink rounded-lg px-4 py-2 
      font-roboto text-white    `}  >{`${isEdit ? "Update Product":"Add Product"}`}</button>
      
    </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </>
      )
}

export default ProductModal
