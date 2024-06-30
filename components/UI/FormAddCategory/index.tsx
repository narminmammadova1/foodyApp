
// import React, { useEffect, useState } from 'react';
// import AddButton from '../../Admin/AddButton';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useMutation, useQueryClient } from 'react-query';
// import UseFileUpload from '../../../helpers/uploadImages';
// import { toast } from 'react-toastify';
// import { addCategory, editCategory } from '../../../services';
// import { useFormik } from 'formik';
// import { useGlobalContext } from '../../../Context/GlobalContext';
// import { QUERIES } from '../../../Constant/Queries';
// import { useTranslation } from 'react-i18next';

// interface FormAddCategoryProps {
//   onClose: () => void;
// }

// const FormAddCategory: React.FC<FormAddCategoryProps> = ({ onClose }) => {
//   const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile,imageUrl,setImageUrl
    
//    } = UseFileUpload();
//   const { t } = useTranslation();
//   const { isEdit, selectedId,setSelectedId, categoryData,setIsEdit } = useGlobalContext() || {};
//   const queryClient = useQueryClient();
//   const [modalImg, setModalImg] = useState("");
//   const [initialValues, setInitialValues] = useState(
//     { name: '', img_url: '' });


//   const oldCategoryData = categoryData?.find((category) => category.id === selectedId);


//   useEffect(() => {
//     if (isEdit) {
     
//         setInitialValues({
//           name: oldCategoryData.name || "",
//           img_url: oldCategoryData?.img_url || "",
//         });

      
//     } else {
//       setInitialValues({ name: '', img_url: "" });
//     }
//   }, [isEdit,  categoryData]);




//   const formik = useFormik({
//     initialValues,
//     enableReinitialize: true,
//     onSubmit: async (values) => {
//       if (isEdit) {
//         const editedValues = {
//           ...values,
//           img_url: downloadURL || oldCategoryData?.img_url,
//           // img_url: imageUrl || values.img_url,

//           id: selectedId
//         };
//         editCategoryMutation(editedValues);
//         setDownloadURL("")
//         setFile(null)
//         setIsEdit(false)


          
//         }
//         else {
//           const newValues = {
//             ...values,
//             img_url: downloadURL
//           };
//     addCategoryMutation(newValues);
//           formik.resetForm();
//           setDownloadURL("");
//         }
//     },
//   });

//   const { mutate: addCategoryMutation } = useMutation(addCategory, {
//     onSuccess: (data) => {
//       toast.success('Category added', { autoClose: 2000 });
//       formik.resetForm();

//       queryClient.invalidateQueries(QUERIES.Categories);
//       setFile(null);
//       setDownloadURL('');
//       setModalImg('');
//      setSelectedId && setSelectedId(null)
//       setTimeout(() => {
//         onClose();
//       }, 2000);
//     },
//     onError: (error) => {
//       toast.error('Error adding category');
//     },
//   });

//   const { mutate: editCategoryMutation } = useMutation(editCategory, {
//     onSuccess: (data) => {
//       toast.success('Category edited', { autoClose: 2000 });

//       queryClient.invalidateQueries(QUERIES.Categories);
//       setFile(null);

//       // formik.resetForm();
//       setDownloadURL('');

//       setTimeout(() => {
//         onClose();
//       }, 2000);
//     },
//     onError: (error) => {
//       toast.error('Error editing category');
//     },
//   });



//   useEffect(() => {
//     if (file) {
//       handleUpload(file);
//     }
//   }, [file, handleUpload]);


//   const isDisabled = !formik.values.name ;

//   return (
//     <div>
//       <header className='font-roboto font-medium text-par-text'>
//       <div className='flex  justify-between'>
//           <p className='text-2xl'>{t(`${isEdit ? 'Edit Category' : 'Add Category'}`)}</p>

//           <div className=' block  lg:hidden'       onClick={()=>{
//             setIsEdit(false)
//             onClose()

//           }   }   >

//             <img src="/icons/x.svg" alt="" />
//           </div>

//           </div>
//         <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
//       </header>
//       <div className='flex h-full'>
//         <div className='rleft hidden lg:block  w-1/3 me-10'>
//           <div className='min-h-36 mt-1 mb-4'>
//             <Image
//               width={1000}
//               height={1000}
//               className='w-[124px] h-[117px] object-cover'
//               // src={modalImg || "/icons/uploadgreen.svg"}
//               src={`${isEdit ?(imageUrl || initialValues.img_url )  :( imageUrl  || "/icons/uploadgreen.svg")}`}
//               // src={imageUrl || initialValues.img_url || "/icons/uploadgreen.svg"}
//               alt=''
//             />
//           </div>
//           <div className='py-2'>
//             <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
//               {t(`${isEdit ? 'Edit Your Category Informations' : 'Add Your Category Informations'}`)}
//             </p>
//           </div>
//         </div>
//         <div className='rright w-full  lg:w-2/3 lg:ms-8 flex flex-col'>
//           <div className='flex w-full flex-col lg:p-5 rounded-xl'>
//             <form action='' className='flex flex-col' onSubmit={formik.handleSubmit}>
//               <div className='flex w-full flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
//                 <div className='flex flex-col'>
//                   <input
//                     name='img_url'
//                     onBlur={formik.handleBlur}

//                     onChange={(e) => {
//                       if (e.target.files && e.target.files.length > 0) {
//                         handleFileChange(e);
//                         setFile(e.target.files[0])
//                         // setImageUrl(e.target.files[0]);
//                       }
//                     }}
//                     className='hidden invisible'
//                     type='file'
//                     id='fileInput'
//                   />
//                   <label htmlFor='fileInput'>
//                     <img src='/icons/upload.svg' alt='upload' />
//                   </label>
//                   <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
//                 </div>
//               </div>
//               <div className= 'block lg:hidden pb-2 '>
//               <p className=' font-roboto font-medium text-par-text text-[16px]'>
//                 {`${isEdit ? 'Edit your category description and necessary information' : 'Add your category description and necessary information'}`}
//               </p>
//             </div>
//               <div className='bg-modal-div flex flex-col h-[161px] px-[23px] rounded-xl'>
//                 <label className='modal-label' htmlFor='name'>
//                   {t("Name")}
//                 </label>
//                 <input
//                   name='name'
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   className='bg-input-gray rounded-lg h-10 modal-input'
//                   type='text'
//                 />
//               </div>
//               <div className='mt-8'>
                
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className='border-t-2 border-modal-div flex justify-center mt-48 py-5 mb-0 gap-11'>
//         <div className='btn-text'>
//           <AddButton
//             shadow
//             center
//             btnSize='w-[400px]'
//             sizeMob="w-[139px]"

//             btnIcon=''
//             onClick={() => {
//               formik.resetForm();
//               setDownloadURL('');
//               setIsEdit(false)

//               onClose();
//             }}
//             btnText={t('Cancel')}
//             btncolor='modal-div'
//           />
//         </div>
//         <div className='btn-text'>

//         <AddButton
//                   shadow
//                   center
//                   btnSize='w-[400px]'
//                   sizeMob="w-[139px]"
//                   btnIcon=''
//                   onClick={
//                     formik.handleSubmit

//                   }
//                   btnText={t(`${isEdit ? 'Update Category' : 'Add Category'}`)}
//                   disabled={isDisabled}
//                   btncolor='btn-pink'
//                 />
//                         </div>

//       </div>
//     </div>
//   );
// };

// export default FormAddCategory;





import React, { useEffect, useState } from 'react';
import AddButton from '../../Admin/AddButton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import UseFileUpload from '../../../helpers/uploadImages';
import { toast } from 'react-toastify';
import { addCategory, editCategory } from '../../../services';
import { useFormik } from 'formik';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { QUERIES } from '../../../Constant/Queries';
import { useTranslation } from 'react-i18next';

interface FormAddCategoryProps {
  onClose: () => void;
}

const FormAddCategory: React.FC<FormAddCategoryProps> = ({ onClose }) => {
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile, imageUrl, setImageUrl } = UseFileUpload();
  const { t } = useTranslation();
  const { isEdit, selectedId, setSelectedId, categoryData, setIsEdit } = useGlobalContext() || {};
  const queryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({ name: '', img_url: '' });

  const oldCategoryData = categoryData?.find((category) => category.id === selectedId);

  useEffect(() => {
    if (isEdit) {
      setInitialValues({
        name: oldCategoryData?.name || '',
        img_url: oldCategoryData?.img_url || '',
      });
    } else {
      setInitialValues({ name: '', img_url: '' });
    }
  }, [isEdit, categoryData]);

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file, handleUpload]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (isEdit) {
        const editedValues = {
          ...values,
          img_url: downloadURL || oldCategoryData?.img_url,
          id: selectedId,
        };
        editCategoryMutation(editedValues);
      } else {
        const newValues = {
          ...values,
          img_url: downloadURL,
        };
        addCategoryMutation(newValues);
      }
    },
  });

  const { mutate: addCategoryMutation } = useMutation(addCategory, {
    onSuccess: (data) => {
      toast.success('Category added', { autoClose: 2000 });
      formik.resetForm();
      queryClient.invalidateQueries(QUERIES.Categories);
      setFile(null);
      setDownloadURL('');
      setImageUrl('');
      setSelectedId && setSelectedId(null);
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      toast.error('Error adding category');
    },
  });

  const { mutate: editCategoryMutation } = useMutation(editCategory, {
    onSuccess: (data) => {
      toast.success('Category edited', { autoClose: 1000 });
      queryClient.invalidateQueries(QUERIES.Categories);
      
      setTimeout(() => {
        onClose();
        setIsEdit(false);
        setFile(null);
        setDownloadURL('');
        setImageUrl('');
        setImageUrl("")
        
      }, 2000);
    },
    onError: (error) => {
      toast.error('Error editing category');
    },
  });

  const isDisabled = !formik.values.name;

  return (
    <div>
      <header className='font-roboto font-medium text-par-text'>
        <div className='flex justify-between'>
          <p className='text-2xl'>{t(`${isEdit ? 'Edit Category' : 'Add Category'}`)}</p>
          <div className='block lg:hidden' onClick={() => {
            setIsEdit(false);
            onClose();
          }}>
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>
        <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
      </header>
      <div className='flex h-full'>
        <div className='rleft hidden lg:block w-1/3 me-10'>
          <div className='min-h-36 mt-1 mb-4'>
            <Image
              width={1000}
              height={1000}
              className='w-[124px] h-[117px] object-cover'
              src={`${isEdit ? (imageUrl || initialValues.img_url) : (imageUrl || "/icons/uploadgreen.svg")}`}
              alt=''
            />
          </div>
          <div className='py-2'>
            <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
              {t(`${isEdit ? 'Edit Your Category Informations' : 'Add Your Category Informations'}`)}
            </p>
          </div>
        </div>
        <div className='rright w-full lg:w-2/3 lg:ms-8 flex flex-col'>
          <div className='flex w-full flex-col lg:p-5 rounded-xl'>
            <form className='flex flex-col' onSubmit={formik.handleSubmit}>
              <div className='flex w-full flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
                <div className='flex flex-col'>
                  <input
                    name='img_url'
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileChange(e);
                        setFile(e.target.files[0]);
                      }
                    }}
                    className='hidden invisible'
                    type='file'
                    id='fileInput'
                  />
                  <label htmlFor='fileInput'>
                    <img src='/icons/upload.svg' alt='upload' />
                  </label>
                  <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
                </div>
              </div>
              <div className='block lg:hidden pb-2'>
                <p className='font-roboto font-medium text-par-text text-[16px]'>
                  {`${isEdit ? 'Edit your category description and necessary information' : 'Add your category description and necessary information'}`}
                </p>
              </div>
              <div className='bg-modal-div flex flex-col h-[161px] px-[23px] rounded-xl'>
                <label className='modal-label' htmlFor='name'>
                  {t("Name")}
                </label>
                <input
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className='bg-input-gray rounded-lg h-10 modal-input'
                  type='text'
                />
              </div>
              <div className='mt-8'></div>
            </form>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-modal-div flex justify-center mt-48 py-5 mb-0 gap-11'>
        <div className='btn-text'>
          <AddButton
            shadow
            center
            btnSize='w-[400px]'
            sizeMob="w-[139px]"
            btnIcon=''
            onClick={() => {
              formik.resetForm();
              setDownloadURL('');
              setImageUrl('');
              setIsEdit(false);
              onClose();
            }}
            btnText={t('Cancel')}
            btncolor='modal-div'
          />
        </div>
        <div className='btn-text'>
          <AddButton
            shadow
            center
            btnSize='w-[400px]'
            sizeMob="w-[139px]"
            btnIcon=''
            onClick={formik.handleSubmit}
            btnText={t(`${isEdit ? 'Update Category' : 'Add Category'}`)}
            disabled={isDisabled}
            btncolor='btn-pink'
          />
        </div>
      </div>
    </div>
  );
};

export default FormAddCategory;