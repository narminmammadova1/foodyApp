import Head from 'next/head'
import React from 'react'
import MainClient from '../../components/Client/MainClient'
import HeaderClient from '../../components/Client/HeaderClient'

import {Accordion, AccordionItem} from "@nextui-org/react";
import FooterClient from '../../components/Client/FooterClient';
import { NextPage } from 'next';








const FaqsPage:NextPage = () => {

  
  return (
    <div>
         <Head>
        <title>FAQs</title>
        <meta name='description ' content='Generated by nesxt create app' />
        </Head> 
        <MainClient>
            <HeaderClient/>
            <div className='mt-4 mx-[205px]'>

              <h1 className=' text-center roboto-medium font-medium text-[45px] mb-10 text-inputPlaceholder'>F.A.Q</h1>
            <Accordion  variant="splitted">

      <AccordionItem key="1" 
       className=' custom-accordion  roboto-medium font-medium text-[22px] text-inputPlaceholder' 
       aria-label="Dec" 
       
       indicator={({isOpen})=>(<span  style={{ color: '#323232'}}>
       <span className={ isOpen ? 'hidden' : 'block'} style={{fontSize:"22px"}}>+</span>
       <span className={isOpen ? 'block' : 'hidden'} style={{fontSize:"20px"}}>I</span>
     </span>
       )}

       title="How to contact with Customer Service?">
        <p className='roboto-medium font-medium  text-lg  text-par3-text'>   Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
</p>
      </AccordionItem>
      <AccordionItem key="2"  
      className=' custom-accordion roboto-medium font-medium text-[22px] text-inputPlaceholder'
       aria-label="Dec" 
       indicator={({isOpen})=>(<span  style={{ color: '#323232'}}>
       <span className={ isOpen ? 'hidden' : 'block'} style={{fontSize:"22px"}}>+</span>
       <span className={isOpen ? 'block' : 'hidden'} style={{fontSize:"20px"}}>I</span>
     </span>
       )}
       title="App installation failed, how to update system information?
       
      ">
         <p className='roboto-medium font-medium  text-lg  text-par3-text'>   Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
</p>
      </AccordionItem>
      <AccordionItem key="3"
        className=' custom-accordion  roboto-medium font-medium text-[22px] text-inputPlaceholder'
         aria-label="Dec" 
         indicator={({isOpen})=>(<span  style={{ color: '#323232'}}>
         <span className={ isOpen ? 'hidden' : 'block'} style={{fontSize:"22px"}}>+</span>
         <span className={isOpen ? 'block' : 'hidden'} style={{fontSize:"20px"}}>I</span>
       </span>
         )}title="Website reponse taking time, how to improve?">


<p className='roboto-medium font-medium  text-lg  text-par3-text'>   Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
</p>
      </AccordionItem>
      <AccordionItem key="4"  
      className='custom-accordion  roboto-medium font-medium text-[22px] text-inputPlaceholder' 
      aria-label="Dec" 
      indicator={({isOpen})=>(<span  style={{ color: '#323232'}}>
      <span className={ isOpen ? 'hidden' : 'block'} style={{fontSize:"22px"}}>+</span>
      <span className={isOpen ? 'block' : 'hidden'} style={{fontSize:"20px"}}>I</span>
    </span>
      )}title="How do I create a account?">

<p className='roboto-medium font-medium  text-lg  text-par3-text'>   Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
</p>
      </AccordionItem>
      <AccordionItem key="5"  
      className='custom-accordion  roboto-medium font-medium text-[22px] text-inputPlaceholder'
       aria-label="Dec" 
       indicator={({isOpen})=>(<span  style={{ color: '#323232'}}>
       <span className={ isOpen ? 'hidden' : 'block'} style={{fontSize:"22px"}}>+</span>
       <span className={isOpen ? 'block' : 'hidden'} style={{fontSize:"20px"}}>I</span>
     </span>
       )}title="Website reponse taking time, how to improve?">

<p className='roboto-medium font-medium  text-lg  text-par3-text'>  
 Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
</p>
      </AccordionItem>
    </Accordion> 
            </div>
            
            </MainClient> 

            <div className='mt-[278px]'>
              <FooterClient/>
            </div>
      
    </div>
  )
}

export default FaqsPage
