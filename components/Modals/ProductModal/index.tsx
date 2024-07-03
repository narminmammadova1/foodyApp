// import React, { useEffect, useState } from 'react'
// import AddButton from '../../Admin/AddButton';
// import { useMutation, useQueryClient } from 'react-query';
// import { addProduct, editProduct } from '../../../services';
// import { toast } from 'react-toastify';
// import { useFormik } from 'formik';
// import UseFileUpload from '../../../helpers/uploadImages';
// import Image from 'next/image';
// import { useGlobalContext } from '../../../Context/GlobalContext';
// import { QUERIES } from '../../../Constant/Queries';
// import { useTranslation } from 'react-i18next';
// import { useRouter } from 'next/router';
// import { ROUTER } from '../../../Constant/Router';


// interface ProductModalProps {
//     onClose:() => void | undefined;
//     isOpen:boolean,
//     isEdit?:boolean,
//   }






// const ProductModal: React.FC<ProductModalProps> = ({onClose,isOpen,isEdit}) => {
//  const queryClient=useQueryClient()

//  const [selectedType,setSelectedType]=useState("")
//  const { t } = useTranslation();
// const router =useRouter()

// const {push}=router
//  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile, imageUrl ,setImageUrl,} = UseFileUpload();
//  const { restaurantData,setIsEdit,productsData,selectedId,setSelectedId}=useGlobalContext() || {}

// const oldProductData=productsData?.find((product)=>product.id ===selectedId)

// const [initialValues,setInitialVaues]=useState({
//   name: "",
//           img_url: "",
//           description: "",
//           price: "",
//           rest_id: ""
// })

// useEffect(()=>{

//   if(isEdit){
//     setInitialVaues({

//       name:oldProductData?.name || "",
//       img_url: oldProductData?.img_url || "",
//       description: oldProductData?.description || "",
//       price: oldProductData?.price || "",
//       rest_id: oldProductData?.rest_id || ""
//     })
//   }
//   else{
// setInitialVaues({
//   name:"",
//             img_url: "",
//             rest_id: "",
//             description: "",
//             price: ""
// })

//   }
// },[isEdit,oldProductData])



//     const { mutate: addProductMutation } = useMutation({
//         mutationFn: addProduct,
//         onSuccess: (data) => {
//           console.log("mutationla product add ", data);
//           toast.success("Product added ", { autoClose: 1000 });
//           queryClient.invalidateQueries(QUERIES.Products)
//           formik.resetForm()
//           setFile(null);
//       setDownloadURL('');
//       setImageUrl('');
//       setSelectedId && setSelectedId(null);
//       setTimeout(() => {
//         onClose();
//       }, 2000);

//         },
//         onError:(error)=>{
//           console.log(error,"Error added Product");
//           toast.error("error added product")
//         }
//       })



//       const { mutate: editProductMutation } = useMutation({
//         mutationFn: editProduct,
//         onSuccess: (data) => {
//           toast.success("Product updated", { autoClose: 1000 });
//           formik.resetForm()

//           queryClient.invalidateQueries(QUERIES.Products)
          
//       setTimeout(() => {
//         onClose();
//         setIsEdit(false);
//         setFile(null);
//         setDownloadURL('');
//         setImageUrl('');
//         setImageUrl("")
        
//       }, 2000);
//         },
//         onError:(error)=>{
//           toast.error("error edited product")

//           formik.resetForm();
//           setFile(null);
//           setDownloadURL("");
//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         }
//       })


//       useEffect(()=>{
//         if(file){
//             handleUpload(file)
//         }
//       },[file])

      
      
  
  
  
//       const formik = useFormik({
//         initialValues,
//         enableReinitialize:true,
//         onSubmit: async (values) => {

// if(isEdit){
//   const editedValues={
//     ...values,
//     img_url: downloadURL  || oldProductData?.img_url ,
//     id:selectedId

//   }
//   editProductMutation(editedValues);

// }
// else{

//   const newValues={
//     ...values,
//     img_url:downloadURL,
//   }
//   addProductMutation(newValues);

// }
         
//           setTimeout(() => {
//             onClose();
//             setDownloadURL("")
//             setFile(null)
//             setSelectedType("")
//             console.log("product handle isleyir");
//             push(ROUTER.ADMINPRODUCTS)
//           }, 2000);
         
          
//         },
//       });
  

      
  
//         const isDisabled = !formik.values.name || !formik.values.description || !formik.values.price || !formik.values.rest_id;

//     return (
//         <>
//           <div className={`w-full top-0 right-0 fixed h-full z-50 flex overflow-y-auto ${isOpen ? "fixed" : "hidden"}`}>
//             <div className='w-1/3 hidden  bg-login-gray lg:flex justify-end bg-opacity-40'>
//               <div className='p-6 hidden  lg:block  ' onClick={onClose}>
//                 <img src="/icons/x.svg" alt="" />
//               </div>
//             </div>
//             <div className='right w-full lg:w-2/3 bg-login-gray pt-6 lg:px-6 overflow-y-auto'>
//             <div>
//               <header className='font-roboto font-medium text-par-text'>
//                 {/* <p className='text-2xl'>{`${isEdit ? "Edit Product" :"Add Product"}`}</p>
//                 <p className='text-lg'>Upload Image</p> */}


// <div className=' my-[29px] mx-4  flex  justify-between'>
//           <p className='text-2xl'>{t(`${isEdit ? 'Edit Product' : 'Add Product'}`)}</p>

//           <div className=' block  lg:hidden'       onClick={()=>{
//             setIsEdit(false)
//             onClose()

//           }   }   >

//             <img src="/icons/x.svg" alt="" />
//           </div>

//           </div>
//               </header>
//               <div className='flex h-full'>
//                 <div className='rleft w-1/3 hidden lg:block me-10'>
//                   <div className='min-h-36 mt-1'>
//                      <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover' 
//               src={`${isEdit ? (imageUrl || initialValues.img_url) : (imageUrl || "/icons/uploadgreen.svg")}`}
//               alt='product' /> 
//                   </div>
//                   <div className='py-2'>
//                     <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>{`${isEdit ?"Edit" :"Add"}`} your Product informations</p>
//                   </div>
//                 </div>
//                 <div className='rright w-full mx-4 lg:w-2/3 lg:ms-8 flex flex-col'>

                    
//                   <form action="" onSubmit={formik.handleSubmit} className="flex flex-col">
//                     <div className=' w-full flex flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
//                       <div className='w-full  flex flex-col'>
//                         <input
//                           name='img_url'
//                           // value={formik.values.img_url}
//                           onBlur={formik.handleBlur}
//                           onChange={(e) => {
//                             if (e.target.files && e.target.files.length > 0) {
//                               handleFileChange(e);
//                               setFile(e.target.files[0]);
//                             }
//                           }}
//                           className='hidden invisible' type="file" id='fileInput' />
//                         <label htmlFor="fileInput">
//                           <img className='m-auto' src="/icons/upload.svg" alt="upload" />
//                         </label>
//                         <p className='font-roboto m-auto font-medium text-par-text text-2xl'>upload</p>
//                       </div>
//                     </div>

//                     <div className= 'block lg:hidden pb-2 '>
//               <p className=' font-roboto font-medium text-par-text text-[16px]'>
//                 {`${isEdit ? 'Edit your product description and necessary information' : 'Add your product description and necessary information'}`}
//               </p>
//             </div>
//                     <div className='bg-modal-div flex flex-col p-5 rounded-xl'>
//                       <label className='modal-label' htmlFor="">Name</label>
//                       <input
//                         name="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         className='bg-input-gray rounded-lg h-10 modal-input'
//                         type="text"
//                       />
//                       <label className='modal-label' htmlFor="">Description</label>
//                       <textarea
//                         onChange={formik.handleChange}
//                         value={formik.values.description}
//                         name="description"
//                         id="description"
//                         cols={30}
//                         rows={5}
//                         className='rounded-lg pt-2 bg-input-gray modal-input'
//                       ></textarea>
//                       <label className='modal-label' htmlFor="">Price</label>
//                       <input
//                         name="price"
//                         value={formik.values.price}
//                         type="number"
//                         onChange={formik.handleChange}
//                         className='bg-input-gray mb-7 ps-5 text-white rounded-lg h-10'
//                       />
//                         <select  value={selectedType}
//        className='bg-input-gray rounded-lg h-10 modal-input'
//        onChange={(e) => {
//         setSelectedType(e.target.value);
//         formik.handleChange(e); 
//       }} name="rest_id" id="rest_id">

// {/* value={formik.values.rest_id} */}
// <option value="">Select Restaurant</option>
// {restaurantData &&  restaurantData.map((rest)=>( 
//    <option key={rest.id} value={rest.id}>{rest.name}</option>
// ))}

//  </select>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className='border-t-2 border-modal-div flex justify-center mt-48 py-5  mb-0 gap-11'>
//                 <div className='btn-text'>
                 

//                      <div className='flex gap-5'>
//       <button onClick={onClose} 
//     //   disabled={disabled} 
//       className={`flex justify-center w-[140px] h-[38px]  lg:w-[400px]  custom-shadow bg-modal-div "justify-center" rounded-lg px-4 py-2 
//       font-roboto text-white text-[14px] lg:text-[18px]    `}  >Close</button>
      
//     </div>
//                 </div>
//                 <div className='btn-text'>
//                 <div className='flex gap-5'>
//       <button type='submit' onClick={()=>{
// formik.handleSubmit()
//       }} 
//       disabled={isDisabled} 
//       className={`flex justify-center  w-[140px] h-[38px]  lg:w-[400px]   custom-shadow bg-btn-pink rounded-lg lg:px-4 py-2 
//       font-roboto text-white text-[14px] lg:text-[18px]   `}  >{`${isEdit ? "Update Product":"Create Product"}`}</button>
      
//     </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>
//         </>
//       )
// }

// export default ProductModal





import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton';
import { useMutation, useQueryClient } from 'react-query';
import { addProduct, editProduct } from '../../../services';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import UseFileUpload from '../../../helpers/uploadImages';
import Image from 'next/image';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { QUERIES } from '../../../Constant/Queries';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { ROUTER } from '../../../Constant/Router';
// import useProductUpload from '../../../helpers/uploadProductImg';

interface ProductModalProps {
  onClose: () => void | undefined;
  isOpen: boolean,
  isEdit?: boolean,
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, isOpen, isEdit }) => {
  const queryClient = useQueryClient();
  const [selectedType, setSelectedType] = useState("");
  const { t } = useTranslation();
  const router = useRouter();
  const { push } = router;
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile, imageUrl, setImageUrl } = UseFileUpload();
  const { restaurantData, setIsEdit, productsData, selectedId, setSelectedId } = useGlobalContext() || {};

  const oldProductData = productsData?.find((product) => product.id === selectedId);


  // const { handleProductFileChange, handleProductUpload, uploading, productImageUrl}=useProductUpload()  || {}
  const [initialValues, setInitialValues] = useState({
    name: "",
    img_url: "",
    description: "",
    price: "",
    rest_id: ""
  });

  useEffect(() => {
    if (isEdit) {
      setInitialValues({
        name: oldProductData?.name || "",
        img_url: oldProductData?.img_url || "",
        description: oldProductData?.description || "",
        price: oldProductData?.price || "",
        rest_id: oldProductData?.rest_id || ""
      });
      setImageUrl(oldProductData?.img_url || "");
    } else {
      setInitialValues({
        name: "",
        img_url: "",
        rest_id: "",
        description: "",
        price: ""
      });
      setImageUrl("");
    }
  }, [isEdit, oldProductData]);

  const { mutate: addProductMutation } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success("Product added", { autoClose: 1000 });
      queryClient.invalidateQueries(QUERIES.Products);
      formik.resetForm();
      setFile(null);
      setDownloadURL('');
      setImageUrl('');
      setSelectedId && setSelectedId(null);
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      toast.error("Error adding product");
    }
  });

  const { mutate: editProductMutation } = useMutation({
    mutationFn: editProduct,
    onSuccess: (data) => {
      toast.success("Product updated", { autoClose: 1000 });
      formik.resetForm();
      queryClient.invalidateQueries(QUERIES.Products);
      setTimeout(() => {
        onClose();
        setIsEdit(false);
        setFile(null);
        setDownloadURL('');
        setImageUrl('');
      }, 2000);
    },
    onError: (error) => {
      toast.error("Error editing product");
      formik.resetForm();
      setFile(null);
      setDownloadURL("");
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  });

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  useEffect(() => {
    if (downloadURL) {
      formik.setFieldValue('img_url', downloadURL);
      setImageUrl(downloadURL);
    }
  }, [downloadURL]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (isEdit) {
        const editedValues = {
          ...values,
          img_url: downloadURL || oldProductData?.img_url,
          id: selectedId
        };
        // editProductMutation(editedValues);
        await  editProductMutation(editedValues)
 console.log("editedproduct",editedValues);

      } else {
        const newValues = {
          ...values,
          img_url: downloadURL,
        };
        addProductMutation(newValues);
      }
 
      setTimeout(() => {
        onClose();
        setDownloadURL("");
        setFile(null);
        setSelectedType("");
        push(ROUTER.ADMINPRODUCTS);
      }, 2000);
    },
  });

  const isDisabled = !formik.values.name || !formik.values.description || !formik.values.price || !formik.values.rest_id;

  return (
    <>
      <div className={`w-full top-0 right-0 fixed h-full z-50 flex overflow-y-auto ${isOpen ? "fixed" : "hidden"}`}>
        <div className='w-1/3 hidden bg-login-gray lg:flex justify-end bg-opacity-40'>
          <div className='p-6 hidden lg:block' onClick={onClose}>
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>
        <div className='right w-full lg:w-2/3 bg-login-gray pt-6 lg:px-6 overflow-y-auto'>
          <div>
            <header className='font-roboto font-medium text-par-text'>
              <div className='my-[29px] mx-4 flex justify-between'>
                <p className='text-2xl'>{t(`${isEdit ? 'Edit Product' : 'Add Product'}`)}</p>
                <div className='block lg:hidden' onClick={() => {
                  setIsEdit(false);
                  onClose();
                }}>
                  <img src="/icons/x.svg" alt="" />
                </div>
              </div>
            </header>
            <div className='flex h-full'>
              <div className='rleft w-1/3 hidden lg:block me-10'>
                <div className='min-h-36 mt-1'>
                  <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover'
                    src={`${isEdit ? (imageUrl || initialValues.img_url) : (imageUrl || "/icons/uploadgreen.svg")}`}
                    alt='product' />
                </div>
                <div className='py-2'>
                  <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>{`${isEdit ? "Edit" : "Add"}`} your Product informations</p>
                </div>
              </div>
              <div className='rright w-full mx-4 lg:w-2/3 lg:ms-8 flex flex-col'>
                <form action="" onSubmit={formik.handleSubmit} className="flex flex-col">
                  <div className='w-full flex flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
                    <div className='w-full flex flex-col'>
                      <input
                        name='img_url'
                        onBlur={formik.handleBlur}
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            handleFileChange(e);
                            setFile(e.target.files[0]);
                          }
                        }}
                        className='hidden invisible' type="file" id='fileInput' />
                      <label htmlFor="fileInput">
                        <img className='m-auto' src="/icons/upload.svg" alt="upload" />
                      </label>
                      <p className='font-roboto m-auto font-medium text-par-text text-2xl'>upload</p>
                    </div>
                  </div>
                  <div className='block lg:hidden pb-2'>
                    <p className='font-roboto font-medium text-par-text text-[16px]'>
                      {`${isEdit ? 'Edit your product description and necessary information' : 'Add your product description and necessary information'}`}
                    </p>
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
                    <select value={selectedType}
                      className='bg-input-gray rounded-lg h-10 modal-input'
                      onChange={(e) => {
                        setSelectedType(e.target.value);
                        formik.handleChange(e);
                      }} name="rest_id" id="rest_id">
                      <option value="">Select Restaurant</option>
                      {restaurantData && restaurantData.map((rest) => (
                        <option key={rest.id} value={rest.id}>{rest.name}</option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className='border-t-2 border-modal-div flex justify-center mt-48 py-5 mb-0 gap-11'>
              <div className='btn-text'>
                <div className='flex gap-5'>
                  <button onClick={onClose}
                    className={`flex  w-[140px] h-[38px] lg:w-[400px] custom-shadow bg-modal-div justify-center rounded-lg px-4 py-2 font-roboto text-white text-[14px] lg:text-[18px]`}>
                    Close
                  </button>
                </div>
              </div>
              <div className='btn-text'>
                <div className='flex gap-5'>
                  <button type='submit' onClick={() => {
                    formik.handleSubmit()
                  }}
                    disabled={isDisabled}
                    className={`flex justify-center w-[140px] h-[38px] lg:w-[400px] custom-shadow bg-btn-pink rounded-lg lg:px-4 py-2 font-roboto text-white text-[14px] lg:text-[18px]`}>
                    {`${isEdit ? "Update Product" : "Create Product"}`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
