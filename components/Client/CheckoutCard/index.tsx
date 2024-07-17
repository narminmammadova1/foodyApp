
import React, { MutableRefObject, useEffect, useState } from 'react';
import ButtonGreen from '../ButtonGreen';
import { useFormik } from 'formik';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useMutation, useQueryClient } from 'react-query';
import { addOrder, clearBasket } from '../../../services';
import { toast } from 'react-toastify';
import { QUERIES } from '../../../Constant/Queries';
import { UserDataProps } from '../../../shared/interface';
import { useTranslation } from 'react-i18next';


interface CheckoutCardProps{

  user:UserDataProps| undefined,
  addOrdermutation:any
}
interface AddedOrderProps{
  basket_id:string |number |undefined,
  delivery_address:string,
  payment_method:number | string,
  contact:number |string
}


const CheckoutCard:React.FC<CheckoutCardProps> = ({ user,addOrdermutation }) => {
  const { basketData } = useGlobalContext() || {};
  const queryClient = useQueryClient();
const {t}=useTranslation()
  useEffect(() => {
    if (user) {
      formik.setFieldValue('contact', user.phone);
    }
  }, [user]);

  
  const formik = useFormik({
    initialValues: {
      delivery_address: '',
      contact: user?.phone || '',
      payment_method: '',
    },
    onSubmit: (values) => {
      const addedOrder:AddedOrderProps= {
        basket_id: basketData?.id,
        delivery_address: values.delivery_address,
        contact: values.contact,
        payment_method: values.payment_method
      };
    addOrdermutation &&  addOrdermutation(addedOrder) ;

   queryClient.invalidateQueries(QUERIES.Order)
    }
  });



  const isDisable = () => {
    return !formik.values.delivery_address || !formik.values.contact || !formik.values.payment_method;
  };

  return (
    <div className=   ' bg-white   lg:bg-headerbg   lg:w-[618px] mx-4 lg:mx-0  lg:px-9 pt-9'>
      <h1 className=' hidden lg:block font-mukta font-[600] text-[30px] text-modal_p letter3 mb-6'>{t("Checkout")}</h1>
      <div>
        <form className='flex flex-col' onSubmit={formik.handleSubmit}>
          <label className='font-mukta  font-[600] text-lg text-modal_p' htmlFor='delivery_address'>{t("Delivery Address")}</label>
          <input
            name='delivery_address'
            value={formik.values.delivery_address}
            onChange={formik.handleChange}
            className='w-full rounded px-2 h-[53px] mb-7 bg-headerbg lg:bg-white font-mukta font-[400] text-xl text-par3-text'
            type='text'
          />

          <label className='font-mukta font-[600] text-lg text-modal_p' htmlFor='contact'>{t("Contact Number")}</label>
          <input
            name='contact'
            value={formik.values.contact}
            onChange={formik.handleChange}
            className='w-full px-2 h-[53px] rounded mb-7 font-mukta font-[400]  bg-headerbg lg:bg-white text-xl text-par3-text'
            type='text'
          />

          <p className='text-lg font-mukta font-[600] text-modal_p mb-4'>{t("Payment Method")}</p>
          <div className='flex gap-[79px]'>
            <div className='flex gap-[5px]'>
              <input
                value='0'
                id='withCash'
                name='payment_method'
                onChange={formik.handleChange}
                type='radio'
                checked={formik.values.payment_method === '0'}
              />
              <label className='text-[14px] roboto-medium  font-[400] text-par3-text' htmlFor='withCash'>{t("Pay at the door")}</label>
            </div>
            <div className='flex gap-[5px]'>
              <input
                value='1'
                id='withCard'
                name='payment_method'
                onChange={formik.handleChange}
                type='radio'
                checked={formik.values.payment_method === '1'}
              />
              <label className='text-[14px] roboto-medium font-[400] text-par3-text' htmlFor='withCard'>{t("Pay at the door by Credit card")}</label>
            </div>
          </div>

          <div  className='mt-12'>
            <ButtonGreen disabled={isDisable()} btnTitle='Checkout' />
          </div>
        </form>
      </div>
    </div>




  );

};

export default CheckoutCard;
