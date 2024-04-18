
import React, { useEffect, useState } from 'react'
import AddButton from '../../Admin/AddButton'
import { useRouter } from 'next/router';
import FormAddCategory from '../FormAddCategory';
import Image from 'next/image';
import FormAddRestuarant from '../FormAddRestuarant';
import FormAddOffer from '../FormAddOffer';
import {  addProduct } from '../../../services';
import { useFormik } from 'formik';
import UseFileUpload from '../../../helpers/uploadImages';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../../Context/GlobalContext';

interface AdminModalProps {
  modalDescription?: string;
  modalTitle?: string;
  btnText?: string;
  isOpen?: boolean;
  onClose: () => void | undefined;
  formm?:React.FC | undefined
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpen,  modalTitle = "Add Product",onClose, formm, modalDescription }) => {

  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
  const{formComponent,setFormComponent}=useGlobalContext() || {}

  const router = useRouter()

  const { pathname } = router

  const { mutate: addProductMutation } = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("mutationla productadd", data);
      toast.success("Product added", { autoClose: 2000 });
    }
  })

  // const [formComponent, setFormComponent] = useState<undefined | JSX.Element>(undefined);

  const changeModalItem = () => {
    if (pathname === "/admin/restuarants") {
      setFormComponent(<FormAddRestuarant />)
    } else if (pathname === "/admin/offer") {
      setFormComponent(<FormAddOffer   onClose={onClose} />)
    } else if (pathname === "/admin/category") {
      setFormComponent(<FormAddCategory onClose={onClose} />)
    }
    return formComponent
  }

  useEffect(() => {
    changeModalItem();
  }, [isOpen, pathname]);

  const formik = useFormik({
    initialValues: {
      name: "",
      img_url: "",
      description: "",
      price: "",
      restuarant: ""
    },
    onSubmit: async (values) => {
      values = {
        img_url: downloadURL,
        name: formik.values.name,
        restuarant: formik.values.restuarant,
        description: formik.values.description,
        price: formik.values.price
      };
      addProductMutation(values);
    },
  });

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  const isDisabled = formik.values.name === "" || formik.values.description === "" || downloadURL === ""
  || formik.values.price === "" || formik.values.restuarant === ""

  return (
    <>
      <div className={`w-full top-0 right-0 fixed h-full z-50 flex overflow-y-auto ${isOpen ? "fixed" : "hidden"}`}>
        <div className='w-1/3 bg-login-gray flex justify-end bg-opacity-40'>
          <div className='p-6' onClick={onClose}>
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>
        <div className='right w-2/3 bg-login-gray pt-6 ps-6 pe-6 overflow-y-auto'>
          {formm ? (formComponent) : (
            <div>
              <header className='font-roboto font-medium text-par-text'>
                <p className='text-2xl'>{modalTitle}</p>
                <p className='text-lg'>Upload Image</p>
              </header>
              <div className='flex h-full'>
                <div className='rleft w-1/3 me-10'>
                  <div className='min-h-36 mt-1 bg-modal-div'>
                     <Image width={1000} height={1000} className='w-[124px] h-[117px] object-cover' src={downloadURL} alt='product' /> 
                  </div>
                  <div className='py-2'>
                    <p className='mt-4 font-roboto font-medium text-par-text text-[16px]'>{modalDescription}</p>
                  </div>
                </div>
                <div className='rright w-2/3 ms-8 flex flex-col'>
                  <form action="" className="flex flex-col">
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
                        type="text"
                        onChange={formik.handleChange}
                        className='bg-input-gray rounded-lg h-10'
                      />
                      <label className='modal-label' htmlFor="">Restuarants</label>
                      <input
                        name="restuarant"
                        value={formik.values.restuarant}
                        onChange={formik.handleChange}
                        type="text"
                        className='bg-input-gray rounded-lg h-10 modal-input'
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className='border-t-2 border-modal-div flex mt-48 py-5 mb-0 gap-11'>
                <div className='btn-text'>
                  <AddButton
                    shadow
                    center
                    btnSize="w-[400px]"
                    onClick={() => {
                      formik.resetForm();
                      setDownloadURL("");
                      onClose();
                    }}
                    btnIcon=''
                    btnText="Cancel"
                    btncolor="modal-div"
                  />
                </div>
                <div className='btn-text'>
                  <AddButton
                    shadow
                    center
                    btnSize="w-[400px]"
                    onClick={formik.handleSubmit}
                    btnText="Add Product"
                    disabled={isDisabled}
                    btncolor="btn-pink"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AdminModal


