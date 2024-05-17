import React from 'react'

const FooterClient = () => {
  return (
    <div className='w-full h-[385px] bg-textblack flex flex-col  '>

        <div className='footertop flex  justify-around mt-40 '>

<div className='leftt w-1/2 '>

      <div className='flex flex-col items-start ms-24 '>
        <img src="/svgs/logo.svg" alt="" />
        <div className='me-32 ps-2'>
        <p className='text-[22px] letter3 text-par3-text'>Lorem ipsum is placeholder text commonly used in the graphic, </p>
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

     <div className='right flex gap-[91px] me-10'>
      <div>
        <ul className='footerUl line3'>
            <li className='font-[900]  text-[18px]'>Popular</li>
            <li>programming</li>
            <li>Books for children</li>
            <li>Psychology</li>
            <li>Business</li>

        </ul>
      </div>

      <div>
        <ul className='footerUl line3'>
            <li className='font-[900]  text-[18px]'>Cash</li>
            <li>Delivery</li>
            <li>Payment</li>
            <li>About the store</li>
        </ul>
      </div>

      <div>
        <ul className='footerUl line3'>
        <li className='font-[900] text-[18px]'>Help</li>
        <li>Contacts</li>
        <li>Purchase returns</li>
        <li>Buyer help</li>
        </ul>
      </div>
      </div> 
      </div>
      <div className='footerbottom flex justify-center mt-8 '>
        <p className='text-[14px] text-white font-roboto font-[400]'>All rights reserved © 2003-2023 Foody TERMS OF USE | Privacy Policy</p>
      </div>
    </div>
  )
}

export default FooterClient
