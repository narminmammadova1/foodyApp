
import React, { useEffect } from 'react';
import AddButton from '../../Admin/AddButton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import UseFileUpload from '../../../helpers/uploadImages';
import { toast } from 'react-toastify';
import { addCategory, getCategory } from '../../../services';
import { useFormik } from 'formik';

interface AdminModalProps {
  onClose: () => void | undefined;
}

const FormAddCategory: React.FC<AdminModalProps> = ({ onClose }) => {
  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
  
  
  const router = useRouter();
  const { pathname } = router;
const queryClient=useQueryClient()
  const { mutate: addCategoryMutation } = useMutation(
   {mutationFn:addCategory,
    onSuccess: (data) => {
      console.log("Category added:", data);
      toast.success("Category added", { autoClose: 2000 });
      queryClient.invalidateQueries()

      formik.resetForm();
      setFile(null);
      setDownloadURL("");
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      // console.error("An error occurred:", error);
      toast.error("Error adding category");
    }
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      img_url: ""
    },
    onSubmit:async (values) => {
     
       values = {
        img_url: downloadURL,
        name: formik.values.name
      };
      addCategoryMutation(values);
    },
  });

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  const isDisabled = formik.values.name === "" || !file;

  return (
    <>
      <div>
        <header className='font-roboto font-medium text-par-text'>
          <p className='text-2xl'>Add Category</p>
          <p className='mt-[22px] text-lg'>Upload Image</p>
        </header>
        <div className='flex h-full'>
          <div className='rleft w-1/3 me-10'>
            <div className='min-h-36 mt-1 mb-4'>
              <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover' src={downloadURL} alt='' /> 
            </div>
            <div className='py-2'>
              <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>Add your Category Informations</p>
            </div>
          </div>
          <div className='rright w-2/3 ms-8 flex flex-col'>
            <div className='flex flex-col p-5 rounded-xl'>
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
                <div className='bg-modal-div flex flex-col h-[161px] px-[23px] rounded-xl'>
                  <label className='modal-label' htmlFor="">Name</label>
                  <input
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className='bg-input-gray rounded-lg h-10 modal-input'
                    type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
          <div className='btn-text'>
            <AddButton shadow center btnSize="w-[400px]"  btnIcon='' onClick={()=>{formik.resetForm()
              setDownloadURL("")
              onClose()
              }} btnText="Cancel"  btncolor="modal-div" />
          </div>
          <div className='btn-text'>
            <AddButton  shadow center btnSize="w-[400px]" btnIcon='' onClick={formik.handleSubmit} btnText="Add Category" disabled={isDisabled} btncolor="btn-pink" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAddCategory;