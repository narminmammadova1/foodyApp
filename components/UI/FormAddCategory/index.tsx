

// import React, { useEffect, useState } from 'react';
// import AddButton from '../../Admin/AddButton';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useMutation, useQueryClient } from 'react-query';
// import UseFileUpload from '../../../helpers/uploadImages';
// import { toast } from 'react-toastify';
// import { addCategory,  editCategory,  getCategory } from '../../../services';
// import { useFormik } from 'formik';
// import { useGlobalContext } from '../../../Context/GlobalContext';
// import { QUERIES } from '../../../Constant/Queries';
// import { CategoryDataProps, CategoryProps } from '../../../shared/interface';
// import { log } from 'console';
// import { useTranslation } from 'react-i18next';

// interface FormAddCategoryProps{
//   onClose:()=>void
// }


// const FormAddCategory: React.FC<FormAddCategoryProps>= ({ onClose }) => {
//   const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
//   const router = useRouter();
//  const {t}=useTranslation()
//   const { pathname } = useRouter();
//   const [newCategoryData, setNewCategoryData] = useState({});
//   const { 
//     isEdit, 
//     selectedId, categoryData } = useGlobalContext() || {};
//   const queryClient = useQueryClient();
//   const [modalImg, setModalImg] = useState("");
//   const [initialValues, setInitialValues] = useState({ name: '', img_url: '' });


//   useEffect(() => {
//     if (isEdit) {
//       const oldCategoryData = categoryData?.find((category) => category.id === selectedId);
//       if (oldCategoryData) {
//         setInitialValues({
//           name: oldCategoryData.name,
//           img_url: oldCategoryData.img_url || "",
//         });
//         setModalImg(oldCategoryData.img_url || "");
//       }
//     } else {
//       setInitialValues({ name: '', img_url: "" });
//       setModalImg("");
//     }
//   }, [isEdit, selectedId, categoryData]);



//   const formik = useFormik({
//     initialValues,
//     // enableReinitialize: true,
//     onSubmit: async (values) => {
//       if (isEdit) {
//         const editedCategory = {
//           id: selectedId,
//           img_url: downloadURL || values.img_url,
//           name: values.name,
//         };
//         editCategoryMutation(editedCategory);
//       } else {
//         const newCategory = {
//           img_url: downloadURL,
//           name: values.name,
//         };
//         addCategoryMutation(newCategory);
//       }
//     },
//   });

//   const { mutate: addCategoryMutation } = useMutation(addCategory, {
//     onSuccess: (data) => {
//       toast.success('Category added', { autoClose: 2000 });
//       queryClient.invalidateQueries(QUERIES.Categories);
//       setFile(null);
//       setDownloadURL('');
//       setModalImg('');
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
//       formik.resetForm();
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

//   const isDisabled = formik.values.name === '';



//   // useEffect(() => {
//   //   getCategory();
//   // }, []);

//   // console.log("edit ucunnnnnnnnnnnnnnnnnnnnnnnn", categoryData);

//   // const oldCategoryData = categoryData?.find((category) => category.id === selectedId);

//   // console.log("edit ucunnnnnnnnnnn  oldCAtegdaata", oldCategoryData);

//   // let oldData = {
//   //   name: oldCategoryData?.name,
//   //   // img_url: oldCategoryData?.img_url ,
//   // }

//   // useEffect(() => {
//   //   if (isEdit) {
//   //     setModalImg(oldCategoryData?.img_url || ""); // Düzenleme modunda, modalImg state'ini düzenlenecek kategorinin img_url'ine ayarlıyoruz
//   //   } else {
//   //     setModalImg(downloadURL || ""); // Ekleme modunda, modalImg state'ini indirme URL'sine ayarlıyoruz
//   //   }
//   // }, [isEdit, downloadURL, oldCategoryData]);

//   // const initialValues = isEdit
//   //   ? {
//   //     // name: oldCategoryData.name,
//   //     // img_url: oldCategoryData.img_url || downloadURL,
//   //     name:"cccc",
//   //     img_url:oldCategoryData.img_url || downloadURL,
//   //   }
//   //   : {
//   //     name: '',
//   //     img_url: '',
//   //   };

//   // console.log("categ initialllllllllllllllll", initialValues);

//   // const formik = useFormik({
//   //   initialValues,
//   //   onSubmit: async (values) => {
//   //     if (isEdit) {
//   //       // const editedCategory = {
//   //       //   id: selectedId,
//   //       //   img_url: downloadURL || oldCategoryData.img_url,
//   //       //   name: values.name
//   //       // };

//   //       const editedCategory= {
//   //         // id: selectedId ,
//   //         img_url: values.img_url,
//   //         name: values.name
//   //       };
//   //       editCategoryMutation(editedCategory);


//   //     console.log("it is edit modallllllllllll");
      
//   //     } else {
//   //       values = {
//   //         img_url: downloadURL,
//   //         name: values.name,
//   //       };
//   //       addCategoryMutation(values);
//   //     }
//   //   },
//   // });

//   // const { mutate: addCategoryMutation } = useMutation(addCategory, {
//   //   onSuccess: (data) => {
//   //     console.log('Category added:', data);
//   //     toast.success('Category added', { autoClose: 2000 });
//   //     queryClient.invalidateQueries();
//   //     setFile(null);
//   //     setDownloadURL('');
//   //     setModalImg(downloadURL); 
//   //     setTimeout(() => {
//   //       onClose();
//   //     }, 2000);
//   //   },
//   //   onError: (error) => {
//   //     toast.error( 'Error adding category');
//   //   },
//   // });

//   // const { mutate: editCategoryMutation } = useMutation(editCategory, {
//   //   onSuccess: (data) => {
//   //     console.log('Category edited:', data);
//   //     toast.success('Category edited mutate', { autoClose: 2000 });
//   //     queryClient.invalidateQueries(QUERIES.Categories);
//   //     formik.resetForm();
//   //     // setModalImg(downloadURL);
//   //     setTimeout(() => {
//   //       onClose();
//   //     }, 2000);
//   //   },
//   //   onError: (error) => {
//   //     toast.error( 'Error editing category');
//   //   },
//   // });

//   // useEffect(() => {
//   //   if (file) {
//   //     handleUpload(file);
//   //   }
//   // }, [file, isEdit]);

//   // const isDisabled = formik.values.name === '';

//   return (
//     <>
//       <div>
//         <header className='font-roboto font-medium text-par-text'>
//           <p className='text-2xl'>{`${isEdit ? 'Edit Category' : 'Add Category'}`}</p>
//           <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
//         </header>
//         <div className='flex h-full'>
//           <div className='rleft w-1/3 me-10'>
//             <div className='min-h-36 mt-1 mb-4'>
//               <Image
//                 width={1000}
//                 height={1000}
//                 className='w-[124px] h-[117px] object-cover'
//                 src={modalImg|| "/icons/uploadgreen.svg"} 
//                 alt=''
//               />
//             </div>
//             <div className='py-2'>
//               <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
//                 {t(`${isEdit ? 'Edit Your Category Informations' : '  Add your Category Informations'}`)}
//               </p>
//             </div>
//           </div>
//           <div className='rright w-2/3 ms-8 flex flex-col'>
//             <div className='flex flex-col p-5 rounded-xl'>
//               <form action='' className='flex flex-col' onSubmit={formik.handleSubmit}>
//                 <div className='flex flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
//                   <div className='flex flex-col'>
//                     <input
//                       name='img_url'
//                       // value={formik.values.img_url}
//                       onBlur={formik.handleBlur}
//                       onChange={(e) => {
//                         if (e.target.files && e.target.files.length > 0) {
//                           handleFileChange(e);
//                           setFile(e.target.files[0]);
//                         }
//                       }}
//                       className='hidden invisible'
//                       type='file'
//                       id='fileInput'
//                     />
//                     <label htmlFor='fileInput'>
//                       <img src='/icons/upload.svg' alt='upload' />
//                     </label>
//                     <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
//                   </div>
//                 </div>
//                 <div className='bg-modal-div flex flex-col h-[161px] px-[23px] rounded-xl'>
//                   <label className='modal-label' htmlFor=''>
//                    {t(" Name")}
//                   </label>
//                   <input
//                     name='name'
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     className='bg-input-gray rounded-lg h-10 modal-input'
//                     type='text'
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
//           <div className='btn-text'>
//             <AddButton
//               shadow
//               center
//               btnSize='w-[400px]'
//               btnIcon=''
//               onClick={() => {
//                 formik.resetForm();
//                 setDownloadURL('');
//                 onClose();
//               }}
//               btnText={t('Cancel')}
//               btncolor='modal-div'
//             />
//           </div>
//           <div className='btn-text'>
//             <AddButton
//               shadow
//               center
//               btnSize='w-[400px]'
//               btnIcon=''
//               onClick={formik.handleSubmit}
//               btnText={t(`${isEdit ? 'Update Category' : 'Add Category'}`)}
//               // btnText="adddddddddddddddddd"

//               disabled={isDisabled}
//               btncolor='btn-pink'
//             />
//           </div>
//         </div>
//       </div>
//     </>
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
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
  const { t } = useTranslation();
  const { isEdit, selectedId,setSelectedId, categoryData,setIsEdit } = useGlobalContext() || {};
  const queryClient = useQueryClient();
  const [modalImg, setModalImg] = useState("");
  const [initialValues, setInitialValues] = useState({ name: '', img_url: '' });


  const oldCategoryData = categoryData?.find((category) => category.id === selectedId);


  useEffect(() => {
    if (isEdit) {
    //   const oldCategoryData = categoryData?.find((category) => category.id === selectedId);
      if (oldCategoryData) {
        setInitialValues({
          name: oldCategoryData.name,
          img_url: oldCategoryData?.img_url || downloadURL,
        });
        // setModalImg(oldCategoryData.img_url || "");
        // setModalImg(downloadURL ? downloadURL : oldCategoryData.img_url);

      }
    } else {
      setInitialValues({ name: '', img_url: "" });
      setModalImg("");
    }
  }, [isEdit, selectedId, categoryData]);



  // useEffect(() => {
  //   if (downloadURL) {
  //     formik.setFieldValue('img_url', downloadURL);
  //   }
  // }, [downloadURL]);


  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (isEdit) {
        const editedCategory = {
          // id: selectedId,
          // img_url: "/icons/uploadgreen.svg",
          img_url: downloadURL || values.img_url,

          name: values.name,

          
        };
        setModalImg(downloadURL)
        editCategoryMutation(editedCategory);
      } else {
        const newCategory = {
          img_url: downloadURL,
          name: values.name,
        };
        addCategoryMutation(newCategory);
      }
    },
  });

  const { mutate: addCategoryMutation } = useMutation(addCategory, {
    onSuccess: (data) => {
      toast.success('Category added', { autoClose: 2000 });
      queryClient.invalidateQueries(QUERIES.Categories);
      setFile(null);
      setDownloadURL('');
      setModalImg('');
     setSelectedId && setSelectedId(null)
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
      toast.success('Category edited', { autoClose: 2000 });
      queryClient.invalidateQueries(QUERIES.Categories);
      formik.resetForm();
      setDownloadURL('');

      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      toast.error('Error editing category');
    },
  });

  useEffect(() => {
    if (file) {
      handleUpload(file);
      setModalImg(isEdit ?  downloadURL :"")
    
    }
  }, [file]);

  const isDisabled = formik.values.name === '';

  return (
    <div>
      <header className='font-roboto font-medium text-par-text'>
      <div className='flex  justify-between'>
          <p className='text-2xl'>{t(`${isEdit ? 'Edit Category' : 'Add Category'}`)}</p>

          <div className=' block  lg:hidden'       onClick={()=>{
            setIsEdit(false)
            onClose()

          }   }   >

            <img src="/icons/x.svg" alt="" />
          </div>

          </div>
        <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
      </header>
      <div className='flex h-full'>
        <div className='rleft hidden lg:block  w-1/3 me-10'>
          <div className='min-h-36 mt-1 mb-4'>
            <Image
              width={1000}
              height={1000}
              className='w-[124px] h-[117px] object-cover'
              // src={modalImg || "/icons/uploadgreen.svg"}
              src={`${isEdit ?(modalImg)  :( downloadURL ? downloadURL :"/icons/uploadgreen.svg")}`}

              alt=''
            />
          </div>
          <div className='py-2'>
            <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
              {t(`${isEdit ? 'Edit Your Category Informations' : 'Add Your Category Informations'}`)}
            </p>
          </div>
        </div>
        <div className='rright w-full  lg:w-2/3 lg:ms-8 flex flex-col'>
          <div className='flex w-full flex-col lg:p-5 rounded-xl'>
            <form action='' className='flex flex-col' onSubmit={formik.handleSubmit}>
              <div className='flex w-full flex-col bg-modal-div h-[122px] items-center justify-center rounded-xl mb-[78px]'>
                <div className='flex flex-col'>
                  <input
                    name='img_url'
                    onBlur={formik.handleBlur}
                    // value={formik.values.img_url}

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
              <div className= 'block lg:hidden pb-2 '>
              <p className=' font-roboto font-medium text-par-text text-[16px]'>
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
              <div className='mt-8'>
                {/* <AddButton
                  shadow
                  center
                  btnSize='w-[400px]'
                  btnIcon=''
                  onClick={formik.handleSubmit}
                  btnText={t(`${isEdit ? 'Update Category' : 'Add Category'}`)}
                  disabled={isDisabled}
                  btncolor='btn-pink'
                /> */}
              </div>
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
              // setDownloadURL('');
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