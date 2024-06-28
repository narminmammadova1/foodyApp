
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

const FormEditCategory: React.FC<FormAddCategoryProps> = ({ onClose }) => {
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile,imageUrl,setImageUrl
    
   } = UseFileUpload();
  const { t } = useTranslation();
  const { isEdit, selectedId,setSelectedId, categoryData,setIsEdit } = useGlobalContext() || {};
  const queryClient = useQueryClient();
  const [modalImg, setModalImg] = useState("");
  const [initialValues, setInitialValues] = useState(
    { name: '', img_url: '' });


  const oldCategoryData = categoryData?.find((category) => category.id === selectedId);
console.log("olddddddddddddddddddddddddddddddddddddddddd",oldCategoryData);


  useEffect(() => {
    if (oldCategoryData) {
     
        setInitialValues({
          name: oldCategoryData.name || "",
          img_url:downloadURL || oldCategoryData?.img_url || "",
        });

      
    } else {
      setInitialValues({ name: '', img_url: "" });
    }
  }, [oldCategoryData]);




  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues,

  //   onSubmit: async (values) => {
     
  //       const editedValues = {
  //         name:values.name,
  //         img_url: downloadURL ,
  //         // img_url: imageUrl || values.img_url,

  //         id: selectedId
  //       };
  //       editCategoryMutation(editedValues);
  //       // setDownloadURL("")
  //       // setFile(null)
  //       // setIsEdit(false)


          
  //       }
       
    
  // });

 
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: async (values) => {
      try {
        const editedValues = {
          name: values.name,
          img_url: downloadURL || values.img_url,
          id: selectedId,
        };
        await editCategoryMutation(editedValues);
      } catch (error) {
        console.error("Error editing category", error);
      }
    },
  });



  const { mutate: editCategoryMutation } = useMutation(editCategory, {
    onSuccess: (data) => {
      toast.success('Category edited', { autoClose: 2000 });

      queryClient.invalidateQueries(QUERIES.Categories);
      setFile(null);

      // formik.resetForm();
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
    }
  }, [file]);

  useEffect(() => {
    const uploadFile = async () => {
      if (file) {
        await handleUpload(file); 
      }
    };
    uploadFile();
  }, [file]);

  const isDisabled = !formik.values.name ;

  return (
    <div>
      <header className='font-roboto font-medium text-par-text'>
      <div className='flex  justify-between'>
          <p className='text-2xl'>{t('Edit Category')}</p>

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
              // src={`${isEdit ?(modalImg)  :( downloadURL ? downloadURL :"/icons/uploadgreen.svg")}`}
              src={imageUrl ? imageUrl : (oldCategoryData?.img_url || "/icons/uploadgreen.svg")}
              alt=''
            />
          </div>
          <div className='py-2'>
            <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
              {t('Edit Your Category Informations')}
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

                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileChange(e);
                        setFile(e.target.files[0])
                        // setImageUrl(e.target.files[0]);
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
                {'Edit your category description and necessary information' }
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
              setDownloadURL('');
              setIsEdit(false)

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
                  onClick={
                    formik.handleSubmit

                  }
                  btnText={t('Update Category' )}
                  disabled={isDisabled}
                  btncolor='btn-pink'
                />
                        </div>

      </div>
    </div>
  );
};

export default FormEditCategory;