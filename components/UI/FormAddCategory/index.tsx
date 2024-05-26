

import React, { useEffect, useState } from 'react';
import AddButton from '../../Admin/AddButton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import UseFileUpload from '../../../helpers/uploadImages';
import { toast } from 'react-toastify';
import { addCategory,  getCategory } from '../../../services';
import { useFormik } from 'formik';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { QUERIES } from '../../../Constant/Queries';
import { CategoryDataProps, CategoryProps } from '../../../shared/interface';
import { log } from 'console';

interface FormAddCategoryProps{
  onClose:()=>void
}


const FormAddCategory: React.FC<FormAddCategoryProps>= ({ onClose }) => {
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
  const router = useRouter();

  const { pathname } = useRouter();
  const [newCategoryData, setNewCategoryData] = useState({});
  const { 
    isEdit, setIsEdit, 
    selectedId, categoryData } = useGlobalContext() || {};
  const queryClient = useQueryClient();
  const [modalImg, setModalImg] = useState(""); 

  useEffect(() => {
    getCategory();
  }, []);

  console.log("edit ucunnnnnnnnnnnnnnnnnnnnnnnn", categoryData);

  const oldCategoryData = categoryData?.find((category) => category.id === selectedId);

  console.log("edit ucunnnnnnnnnnn  oldCAtegdaata", oldCategoryData);

  let oldData = {
    name: oldCategoryData?.name,
    // img_url: oldCategoryData?.img_url ,
  }

  // useEffect(() => {
  //   if (isEdit) {
  //     setModalImg(oldCategoryData?.img_url || ""); // Düzenleme modunda, modalImg state'ini düzenlenecek kategorinin img_url'ine ayarlıyoruz
  //   } else {
  //     setModalImg(downloadURL || ""); // Ekleme modunda, modalImg state'ini indirme URL'sine ayarlıyoruz
  //   }
  // }, [isEdit, downloadURL, oldCategoryData]);

  const initialValues = isEdit
    ? {
      // name: oldCategoryData.name,
      // img_url: oldCategoryData.img_url || downloadURL,
      name:"cccc",
      img_url: '',
    }
    : {
      name: '',
      img_url: '',
    };

  console.log("categ initialllllllllllllllll", initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (isEdit) {
        // const editedCategory = {
        //   id: selectedId,
        //   img_url: downloadURL || oldCategoryData.img_url,
        //   name: values.name
        // };

        // const editedCategory:CategoryProps= {
        //   id: selectedId ,
        //   img_url: values.img_url,
        //   name: values.name
        // };
        // editCategoryMutation(editedCategory);


      console.log("it is edit modallllllllllll");
      
      } else {
        values = {
          img_url: downloadURL,
          name: values.name,
        };
        addCategoryMutation(values);
      }
    },
  });

  const { mutate: addCategoryMutation } = useMutation(addCategory, {
    onSuccess: (data) => {
      console.log('Category added:', data);
      toast.success('Category added', { autoClose: 2000 });
      queryClient.invalidateQueries();
      setFile(null);
      setDownloadURL('');
      setModalImg(downloadURL); 
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      toast.error( 'Error adding category');
    },
  });

  // const { mutate: editCategoryMutation } = useMutation(editCategory, {
  //   onSuccess: (data) => {
  //     console.log('Category edited:', data);
  //     toast.success('Category edited', { autoClose: 2000 });
  //     queryClient.invalidateQueries(QUERIES.Categories);
  //     formik.resetForm();
  //     setModalImg(downloadURL);
  //     setTimeout(() => {
  //       onClose();
  //     }, 2000);
  //   },
  //   onError: (error) => {
  //     toast.error( 'Error editing category');
  //   },
  // });

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file, isEdit]);

  const isDisabled = formik.values.name === '';

  return (
    <>
      <div>
        <header className='font-roboto font-medium text-par-text'>
          <p className='text-2xl'>{`${isEdit ? 'Edit Category' : 'Add Category'}`}</p>
          <p className='mt-[22px] text-lg'>Upload Image</p>
        </header>
        <div className='flex h-full'>
          <div className='rleft w-1/3 me-10'>
            <div className='min-h-36 mt-1 mb-4'>
              <Image
                width={1000}
                height={1000}
                className='w-[124px] h-[117px] object-cover'
                src={modalImg || "/icons/uploadgreen.svg"} 
                alt=''
              />
            </div>
            <div className='py-2'>
              <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>
                {`${isEdit ? 'Edit Your Category Informations' : '  Add your Category Informations'}`}
              </p>
            </div>
          </div>
          <div className='rright w-2/3 ms-8 flex flex-col'>
            <div className='flex flex-col p-5 rounded-xl'>
              <form action='' className='flex flex-col' onSubmit={formik.handleSubmit}>
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
                      className='hidden invisible'
                      type='file'
                      id='fileInput'
                    />
                    <label htmlFor='fileInput'>
                      <img src='/icons/upload.svg' alt='upload' />
                    </label>
                    <p className='font-roboto font-medium text-par-text text-2xl'>upload</p>
                  </div>
                </div>
                <div className='bg-modal-div flex flex-col h-[161px] px-[23px] rounded-xl'>
                  <label className='modal-label' htmlFor=''>
                    Name
                  </label>
                  <input
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type='text'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
          <div className='btn-text'>
            <AddButton
              shadow
              center
              btnSize='w-[400px]'
              btnIcon=''
              onClick={() => {
                formik.resetForm();
                setDownloadURL('');
                onClose();
              }}
              btnText='Cancel'
              btncolor='modal-div'
            />
          </div>
          <div className='btn-text'>
            <AddButton
              shadow
              center
              btnSize='w-[400px]'
              btnIcon=''
              onClick={formik.handleSubmit}
              btnText={`${isEdit ? 'Update category ' : 'Add Category'}`}
              // btnText="adddddddddddddddddd"

              disabled={isDisabled}
              btncolor='btn-pink'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddCategory;