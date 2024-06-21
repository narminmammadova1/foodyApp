import React, { useEffect } from 'react'
import AddButton from '../../Admin/AddButton';
import UseFileUpload from '../../../helpers/uploadImages';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import {  addOffer,  } from '../../../services';
import Image from 'next/image';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { QUERIES } from '../../../Constant/Queries';
import { useTranslation } from 'react-i18next';
  

interface FormAddProps{
  onClose:()=>void | undefined
}

const FormAddOffer:React.FC <FormAddProps>= ({onClose}) => {


const  {isEdit, setIsEdit}=useGlobalContext() ||{}

const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile,imageUrl } = UseFileUpload() || {};
const router = useRouter();
const { pathname } = router;
const queryClient=useQueryClient()
const {t}=useTranslation()
const { mutate: addOfferMutation } = useMutation(
  {mutationFn:addOffer,
   onSuccess: (data) => {
     console.log("Offer added:", data);
     toast.success("Offer added", { autoClose: 2000 });
     queryClient.invalidateQueries(QUERIES.Offers)

     formik.resetForm();
     setFile(null);
     setDownloadURL("");
     setTimeout(() => {
       onClose();
     }, 2000);
   },
   onError: (error) => {
     toast.error("Error adding offer");
   }
 });





const formik = useFormik({
  initialValues: {
    name: "",
    img_url: "",
    description:""
  },
  onSubmit:async (values) => {
   console.log("offerde submit olundu");
   
     values = {
      img_url: downloadURL,
    name: formik.values.name,
      description:formik.values.description
    };
    addOfferMutation(values);
  },
});



useEffect(() => {
  if (file) {
    handleUpload(file);
  }
}, [file]);


const isDisabled = formik.values.name === "" || formik.values.description === "" || !file;



return (
  <>
    <div>
      <header className='font-roboto font-medium text-par-text'>
      <div className='flex  justify-between'>
          <p className='text-2xl'>{t(`${isEdit ? 'Edit Offer' : 'Add Offer'}`)}</p>

          <div className=' block  lg:hidden'       onClick={()=>{
            setIsEdit(false)
            onClose()

          }   }   >

            <img src="/icons/x.svg" alt="" />
          </div>

          </div>
        {/* <p className='text-2xl'>{t(`${isEdit ? 'Edit Offer' : 'Add Offer'}`)}</p> */}
        <p className='mt-[22px] text-lg'>{t("Upload Image")}</p>
      </header>
      <div className='flex h-full'>
        <div className='rleft hidden lg:block w-1/3 me-10'>
          <div className='min-h-36 mt-1 mb-4'>
            <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover'
                src={imageUrl || "/icons/uploadgreen.svg"} 
                alt='' /> 
          </div>
          <div className='py-2'>
            <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>{t(`${isEdit ?"Edit" : "Add"}`)}{t(" your Offer Informations")}</p>
          </div>
        </div>
        <div className='rright w-full lg:w-2/3 lg:ms-8 flex flex-col'>
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
                  <p className='font-roboto font-medium text-par-text text-2xl'>{t("upload")}</p>
                </div>
              </div>
              <div className='bg-modal-div flex flex-col pb-[47px]  px-[23px] rounded-xl'>
                <label className='modal-label' htmlFor="">{t("Title")}</label>
                <input
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className='bg-input-gray rounded-lg h-10 modal-input'
                  type="text" />


<label className='modal-label' htmlFor="">{t("Description")}</label>
                    

<textarea  name="description"
id="description"
   

onChange={formik.handleChange}
value={formik.values.description}
className='bg-input-gray rounded-lg h-[99px] modal-input modal-input'></textarea>






              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-modal-div flex   justify-center mt-48 py-5 mb-0 gap-11'>
        <div className='btn-text'>
          <AddButton shadow center btnSize="w-[400px]" 
                            sizeMob="w-[139px]"
                            btnIcon='' onClick={()=>{formik.resetForm()
            setDownloadURL("")
            setIsEdit(false)
setFile(null)
            onClose()}} btnText={t("Cancel" )} btncolor="modal-div" />
        </div>
        <div className='btn-text'>
          <AddButton  shadow center btnSize="w-[400px]"                   sizeMob="w-[139px]"

          btnIcon=''
          

          onClick={formik.handleSubmit}
           disabled={isDisabled}  btnText={t(`${isEdit ? "Edit Offer" :"Add Offer"}`)} btncolor="btn-pink" />
        </div>
      </div>
    </div>
  </>
);




}

export default FormAddOffer
