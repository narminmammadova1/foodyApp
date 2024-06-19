// import React, { useEffect, useState } from 'react'
// import AddButton from '../../Admin/AddButton';
// import UseFileUpload from '../../../helpers/uploadImages';
// import { useRouter } from 'next/router';
// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { useFormik } from 'formik';
// import { toast } from 'react-toastify';
// import {   addRestaurant, editRestaurant,  } from '../../../services';
// import Image from 'next/image';
// import { QUERIES } from '../../../Constant/Queries';
// import { useGlobalContext } from '../../../Context/GlobalContext';
// import { useTranslation } from 'react-i18next';
  
// const  FormAddRestuarant
// = ({onClose}:any) => {

//   const [selectedType,setSelectedType]=useState("")

// const {categoryData,restaurantData,isEdit,setIsEdit,selectedId}=useGlobalContext() || {}
// console.log("categid restdeki",categoryData);
//  const {t}=useTranslation()



//   const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload() || {};
// const router = useRouter();
// const { pathname } = router;
// const queryClient=useQueryClient()


// const [initialValues,setInitialValues]=useState( { name: "",
// category_id:"",
// img_url: "",
// cuisine: "",
// address: "",
// delivery_min: "",
// delivery_price: ""})

//   const restaurantForEdited=restaurantData?.find((rest)=>rest.id===selectedId)

//   console.log("restFOREDITED",restaurantForEdited);
  

// const {mutate:EditRestaurantMutation}=useMutation(editRestaurant,{
//   onSuccess:(data)=>{
//     toast.success(" restaurant updated")
//   },
//   onError:(error)=>{
//     toast.error("error edited restaurant")
//     queryClient.invalidateQueries(QUERIES.Restaurants)
//     setFile(null)
// setDownloadURL("")
// setSelectedType("")
//   }
// })

// const {mutate:AddRestaurantMutation}=useMutation(addRestaurant,{
//   onSuccess:(data)=>{
// console.log("mutationla add olundu",data);
// toast.success("Added Restaurant",{autoClose:2000})
// queryClient.invalidateQueries(QUERIES.Restaurants)
// formik.resetForm()
// setFile(null)
// setDownloadURL("")
// setSelectedType("")

// setTimeout(()=>{
//   onClose()
// },2000)

//   },
//   onError:(err)=>{
//     console.log("error restaurant mutation");
//     toast.error("Error added Restaurant")
//   }
// })
// useEffect(()=>{

// if(isEdit){

//   setInitialValues({
//     name: restaurantForEdited?.name,
//     category_id:restaurantForEdited?.category_id,
//     img_url: restaurantForEdited?.img_url,
//     cuisine: restaurantForEdited?.cuisine,
//     address: restaurantForEdited?.address,
//     delivery_min: restaurantForEdited?.delivery_min,
//     delivery_price: restaurantForEdited?.delivery_price

//   })
// }
// else setInitialValues(
//   { name: "",
// category_id:"",
// img_url: "",
// cuisine: "",
// address: "",
// delivery_min: "",
// delivery_price: ""}
// )
// },[])


// const formik = useFormik({
//   // initialValues: {
//   //   name: "",
//   //   category_id:"",
//   //   img_url: "",
//   //   cuisine: "",
//   //   address: "",
//   //   delivery_min: "",
//   //   delivery_price: ""
//   // },
//   initialValues,


//   onSubmit:async (values) => {
//    if(isEdit){

//     const editedvalues={
//       name:values.name,
//       category_id:values.category_id,
//       cuisine:values.cuisine,
//       img_url :downloadURL,
//       address:values.address,
//       delivery_min: values.delivery_min,
//       delivery_price:values.delivery_price


//     }

//     EditRestaurantMutation(editedvalues)
//    }
    
//     AddRestaurantMutation(values)
//     console.log("restoranda submit olundu");
// // toast.success("Added Restaurantttt")
//   },
// });

// useEffect(()=>{
// if(file){

//   handleUpload(file)
// }

// },[file])
  
// return (
//   <>
//     <div>
//       <header className='font-roboto font-medium text-par-text'>
//         <p className='text-2xl'>{t(`${isEdit ? 'Edit Restaurant' : 'Add Restaurant'}`)}</p>
//         <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
//       </header>
//       <div className='flex h-full'>
//         <div className='rleft w-1/3 me-10'>
//           <div className='min-h-36 mt-1 mb-4'>
//             <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover'
//                 src={downloadURL|| "/icons/uploadgreen.svg"} 
//                 alt='rest' /> 
//           </div>
//           <div className='py-2'>
//             <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>  {`${isEdit ? 'Edit Your Restaurant Informations' : '  Add your Restaurant Informations'}`}
// </p>
//           </div>
//         </div>
//         <div className='rright w-2/3 ms-8 flex flex-col'>
//           <div className='flex flex-col  p-5 rounded-xl'>
//             <form action="" className="flex flex-col" onSubmit={formik.handleSubmit}>
//               <div className='flex flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
//                 <div className='flex flex-col'>
//                   <input
//                     name='img_url'
//                     value={formik.values.img_url}
//                     onBlur={formik.handleBlur}
//                     onChange={(e) => {
//                       if (e.target.files && e.target.files.length > 0) {
//                         handleFileChange(e);
//                         setFile(e.target.files[0]);
//                       }
//                     }}
//                     className='hidden invisible' type="file" id='fileInput' />
//                   <label htmlFor="fileInput">
//                     <img src="/icons/upload.svg" alt="upload" />
//                   </label>
//                   <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
//                 </div>
//               </div>
//               <div className='bg-modal-div flex flex-col pb-[47px]  px-[23px] rounded-xl'>
//                 <label className='modal-label' htmlFor="">{t("Name")}</label>
//                 <input
//                   name='name'
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   className='bg-input-gray rounded-lg h-10 modal-input'
//                   type="text" />

// <label className='modal-label' htmlFor="">{t("Cuisine")}</label>
                    

// <textarea  name="cuisine"
// id="description"
   

// onChange={formik.handleChange}
// value={formik.values.cuisine}
// className='bg-input-gray rounded-lg h-[99px] modal-input'></textarea>



                  
// <label className='modal-label' htmlFor="">{t("Delivery Price")}</label>
                    


// <input  onChange={formik.handleChange}
//                                       value={formik.values.delivery_price}
//                                       name="delivery_price"
//                                       id="description"
//                                       className='bg-input-gray rounded-lg h-10 modal-input'
//                                       type="number" />

// <label className='modal-label' htmlFor="">{t("Delivery min")}</label>
                    
// <input
//                                       onChange={formik.handleChange}
//                                       value={formik.values.delivery_min}
//                                       name="delivery_min"
//                                       id="description"
//                                       className='bg-input-gray rounded-lg h-10 modal-input'
//                                       type="number" />




// <label className='modal-label' htmlFor="">{t("Address")}</label>
                    


//                     <input
//                                       onChange={formik.handleChange}
//                                       value={formik.values.address}
//                                       name="address"
//                                       className='bg-input-gray rounded-lg h-10 modal-input'
//                                       type="text" />



// <label className='modal-label' htmlFor="">{t("Category")}</label>
                    

                                   
//       <select value={selectedType}
//        className='bg-input-gray rounded-lg h-10 modal-input'
//        onChange={(e) => {
//         setSelectedType(e.target.value);
//         formik.handleChange(e); // This will update formik.values.category_id
//       }}
//  name="category_id" id="category_id">

// {/* value={formik.values.category_id} */}
// <option key="" value="">{t("Select Category")}</option>
// {categoryData && categoryData.map((category)=>(
//     // <option key={category.id} value={category.name}>{category.name}</option>
//     <option key={category.id} value={category.id}>{category.name}</option>

// )

// )}
 

//  </select>
      
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
//         <div className='btn-text'>
//           <AddButton shadow center btnSize="w-[400px]"  btnIcon='' onClick={()=>{formik.resetForm()
//             setDownloadURL("")
//             onClose()}} btnText="Cancel"  btncolor="modal-div" />
//         </div>
//         <div className='btn-text'>
//           <AddButton  shadow center btnSize="w-[400px]" btnIcon=''
          

//           onClick={formik.handleSubmit}
//           //  disabled={isDisabled} 
//           btnText={`${isEdit ? 'Update Restaurant ' : 'Add Restaurant'}`}
//           btncolor="btn-pink" />
//         </div>
//       </div>
//     </div>
//   </>
// );

// }

// export default FormAddRestuarant





import React, { useEffect, useState } from 'react';
import AddButton from '../../Admin/AddButton';
import UseFileUpload from '../../../helpers/uploadImages';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { addRestaurant, editRestaurant } from '../../../services';
import Image from 'next/image';
import { QUERIES } from '../../../Constant/Queries';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useTranslation } from 'react-i18next';

interface FormAddRestProps {
  onClose:()=>void
}

const FormAddRestaurant:React.FC<FormAddRestProps> = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState("");
  const { categoryData, restaurantData, isEdit, setIsEdit,selectedId } = useGlobalContext() || {};
  const { t } = useTranslation();

  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload() || {};
  const router = useRouter();
  const queryClient = useQueryClient();

  const [initialValues, setInitialValues] = useState({
    name: "",
    category_id: "",
    img_url: "",
    cuisine: "",
    address: "",
    delivery_min: "",
    delivery_price: ""
  });

  const restaurantForEdited = restaurantData?.find((rest) => rest.id === selectedId);

  // const { mutate: EditRestaurantMutation } = useMutation(editRestaurant, {
  //   onSuccess: (data) => {
  //     toast.success("Restaurant updated");
  //     queryClient.invalidateQueries(QUERIES.Restaurants);
  //     setFile(null);
  //     setDownloadURL("");
  //     setSelectedType("");
  //     onClose();
  //   },
  //   onError: (error) => {
  //     toast.error("Error editing restaurant");
  //   }
  // });

  const { mutate: AddRestaurantMutation } = useMutation(addRestaurant, {
    onSuccess: (data) => {
      toast.success("Restaurant added", { autoClose: 2000 });
      queryClient.invalidateQueries(QUERIES.Restaurants);
      formik.resetForm();
      setFile(null);
      setDownloadURL("");
      setSelectedType("");
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (err) => {
      toast.error("Error adding restaurant");
    }
  });

  useEffect(() => {
    if (isEdit) {
      setInitialValues({
        name: restaurantForEdited?.name || "",
        category_id: restaurantForEdited?.category_id || "",
        img_url: restaurantForEdited?.img_url || "",
        cuisine: restaurantForEdited?.cuisine || "",
        address: restaurantForEdited?.address || "",
        delivery_min: restaurantForEdited?.delivery_min?.toString() || "",
        delivery_price: restaurantForEdited?.delivery_price?.toString() || ""
      });
    } else {
      setInitialValues({
        name: "",
        category_id: "",
        img_url: "",
        cuisine: "",
        address: "",
        delivery_min: "",
        delivery_price: ""
      });
    }
  }, [isEdit, restaurantForEdited]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (isEdit) {
        const editedValues = {
          ...values,
          img_url: downloadURL || values.img_url,
          id:selectedId
        };
        // EditRestaurantMutation(editedValues);
      } else {
        const newValues = {
          ...values,
          img_url: downloadURL
        };
        AddRestaurantMutation(newValues);
        formik.resetForm()
        setDownloadURL("")
      }
    }
  });

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file, handleUpload]);

  return (
    <>
      <div>
        <header className='font-roboto font-medium text-par-text'>
          <div className='flex  justify-between'>
          <p className='text-2xl'>{t(`${isEdit ? 'Edit Restaurant' : 'Add Restaurant'}`)}</p>

          <div className=' block  lg:hidden'       onClick={()=>{
            setIsEdit(false)
            onClose()

          }   }   >

            <img src="/icons/x.svg" alt="" />
          </div>

          </div>
          {/* <p className='text-2xl'>{t(`${isEdit ? 'Edit Restaurant' : 'Add Restaurant'}`)}</p> */}
          <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
        </header>
        <div className='flex h-full'>
          <div className='rleft w-1/3 hidden lg:block me-10'>
            <div className=' min-h-36 mt-1 mb-4'>
              <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover'
                src={downloadURL || "/icons/uploadgreen.svg"}
                alt='rest' />
            </div>
            <div className='py-2'>
              <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
                {`${isEdit ? 'Edit Your Restaurant Informations' : 'Add your Restaurant Informations'}`}
              </p>
            </div>
          </div>
          <div className='rright w-full lg:w-2/3 mt-4 lg:mt-0  ms-0 lg:ms-8 flex flex-col'>
            <div className='flex flex-col px-0 lg:p-5 rounded-xl'>
              <form action="" className="flex flex-col" onSubmit={formik.handleSubmit}>
                <div className='flex flex-col  bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
                  <div className=' flex flex-col'>
                    <input
                      name='img_url'
                      type='file'
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          handleFileChange(e);
                          setFile(e.target.files[0]);
                        }
                      }}
                      className='hidden invisible'
                      id='fileInput'
                    />
                    <label htmlFor="fileInput">
                      <img src="/icons/upload.svg" alt="upload" />
                    </label>
                    <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
                  </div>
                </div>
                <div className= 'block lg:hidden pb-2 '>
              <p className=' font-roboto font-medium text-par-text text-[16px]'>
                {`${isEdit ? 'Edit your restaurant description and necessary information' : 'Add your restaurant description and necessary information'}`}
              </p>
            </div>
                <div className='bg-modal-div flex flex-col pb-[47px] px-[23px] rounded-xl'>
                  <label className='modal-label' htmlFor="">{t("Name")}</label>
                  <input
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type="text" />

                  <label className='modal-label' htmlFor="">{t("Cuisine")}</label>
                  <textarea
                    name="cuisine"
                    id="cuisine"
                    onChange={formik.handleChange}
                    value={formik.values.cuisine}
                    className='bg-input-gray rounded-lg h-[99px] modal-input'>
                  </textarea>

                  <label className='modal-label' htmlFor="">{t("Delivery Price")}</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.delivery_price}
                    name="delivery_price"
                    id="delivery_price"
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type="text" />

                  <label className='modal-label' htmlFor="">{t("Delivery min")}</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.delivery_min}
                    name="delivery_min"
                    id="delivery_min"
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type="text" />

                  <label className='modal-label' htmlFor="">{t("Address")}</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    name="address"
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type="text" />

                  <label className='modal-label' htmlFor="">{t("Category")}</label>
                  <select
                    value={formik.values.category_id}
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                      formik.handleChange(e);
                    }}
                    name="category_id"
                    id="category_id">
                    <option value="">{t("Select Category")}</option>
                    {categoryData && categoryData.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='border-t-2 w-full justify-center border-modal-div flex mt-48 py-5 mb-0 gap-11'>
          <div className='btn-text'>
            <AddButton
              shadow
              center
              btnSize="w-[400px]"
              sizeMob='w-[139px]'

              btnIcon=''
              onClick={() => {
                formik.resetForm();
                setDownloadURL("");
                onClose();
              }}
              btnText="Cancel"
              btncolor="modal-div"
            />
          </div>
          <div className='btn-text'>
            <AddButton
              shadow
              center
              btnSize="w-[400px]"
              sizeMob='w-[139px]'
              btnIcon=''
              onClick={formik.handleSubmit}
              btnText={`${isEdit ? 'Update Restaurant ' : 'Add Restaurant'}`}
              btncolor="btn-pink"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAddRestaurant;
