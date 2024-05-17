
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
// import FormProduct from '../FormProduct';

interface AdminModalProps {
  modalDescription?: string;
  modalTitle?: string;
  btnText?: string;
  isOpen?: boolean;
  onClose: () => void | undefined;
  formm?:React.FC | undefined;
  isOpenEDitModal?:boolean;
  isEdit?:boolean
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpenEDitModal,isOpen,onClose,isEdit, formm}) => {

  const { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile } = UseFileUpload();
  const{formComponent,setFormComponent}=useGlobalContext() || {}

  const router = useRouter()

  const { pathname } = router

  // const { mutate: addProductMutation } = useMutation({
  //   mutationFn: addProduct,
  //   onSuccess: (data) => {
  //     console.log("mutationla product add", data);
  //     toast.success("Product added", { autoClose: 2000 });
  //   },
  //   onError:(error)=>{
  //     console.log(error,"Error added Product");
  //     toast.error("error added product")
  //   }
  // })


  const changeModalItem = () => {
    if (pathname === "/admin/restaurants") {
      setFormComponent(<FormAddRestuarant onClose={onClose} />)
    } else if (pathname === "/admin/offer") {
      setFormComponent(<FormAddOffer   onClose={onClose} />)
    } else if (pathname === "/admin/category") {
      setFormComponent(<FormAddCategory  onClose={onClose}  />)
    }
    // else if (pathname === "/admin/orders") {
    //   setFormComponent(<FormProduct onClose={onClose} />)
    // }
    // else if (pathname === "/admin/") {
    //   setFormComponent(<FormProduct onClose={onClose} />)
    // }

    
    // else{setFormComponent(<FormProduct onClose={onClose} />)}
    return formComponent
  }

  useEffect(() => {
    changeModalItem();
  }, [isOpen, pathname]);

  


  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  // const isDisabled = formik.values.name === "" || formik.values.description === "" || downloadURL === ""
  // || formik.values.price === "" || formik.values.restuarant === ""

  return (
    <>
      <div className={`w-full top-0 right-0 fixed h-full z-50 flex overflow-y-auto   ${isOpen ? "fixed" : "hidden"}`}>
        <div className='w-1/3 bg-login-gray flex justify-end bg-opacity-40'>
          <div className='p-6'       onClick={onClose}      >
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>
        <div className='right w-2/3 bg-login-gray pt-6 ps-6 pe-6 overflow-y-auto'>
          {formm ? (formComponent) : ""
            
          }
        </div>
      </div>
    </>
  )
}

export default AdminModal


