import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterClient = () => {

  const {t}=useTranslation()
  return (
    <div className='w-full h-[385px] bg-textblack flex flex-col '>

        <div className='footertop lg:flex  justify-around mt-40 '>

<div className='leftt w-full lg:w-1/2 '>

      <div className='flex flex-col items-center lg:items-start mx-auto lg:ms-24 '>
        <img src="/svgs/logo.svg" alt="" />
        <div className='lg:me-32 ps-4 lg:ps-2 text-center lg:text-start'>
        <p className='text-[18px] lg:text-[22px] letter3 text-par3-text'>Lorem ipsum is placeholder text commonly used in the graphic, </p>
        </div>
      <div className='flex gap-4 mt-4'>
        <div className='flex p-1 w-[50px] h-[50px] rounded-full  border-[1px] border-white'>
        <img src="/icons/facebook.svg" alt="facebook" />
        </div>
        <div className='flex bg-mainOrange p-2 w-[50px] h-[50px] rounded-full '>
        <img src="/icons/instagram.svg" alt="instagram" />
        
        </div>
        <div className='flex p-2 w-[50px] h-[50px] rounded-full  border-[1px] border-white'>
        <img src="/icons/twitter.svg" alt="twitter" />
        </div>
      </div>
      </div>
      </div>

     <div className='right bg- hidden md:hidden lg:flex gap-[91px] me-10'>
      <div>
        <ul className='footerUl line3'>
            <li className='font-[900]  text-[18px]'>{t("Popular")}</li>
            <li>{t("programming")}</li>
            <li>{t("Books for children")}</li>
            <li>{t("Psychology")}</li>
            <li>{t("Business")}</li>

        </ul>
      </div>

      <div>
        <ul className='footerUl line3'>
            <li className='font-[900]  text-[18px]'>{t("Cash")}</li>
            <li>{t("Delivery")}</li>
            <li>{t("Payment")}</li>
            <li>{t("About the store")}</li>
        </ul>
      </div>

      <div>
        <ul className='footerUl line3'>
        <li className='font-[900] text-[18px]'>{t("Help")}</li>
        <li>{t("Contacts")}</li>
        <li>{t("Purchase returns")}</li>
        <li>{t("Buyer help")}</li>
        </ul>
      </div>
      </div> 
      </div>










      <div className='footerbottom flex justify-center  '>
        <p className='text-[14px] px-4 text-center text-white font-roboto font-[400]'>{t("All rights reserved © 2003-2023 Foody TERMS OF USE | Privacy Policy")}</p>
      </div>
    </div>
  )
}

export default FooterClient
