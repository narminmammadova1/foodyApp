import Head from 'next/head'
import React from 'react'
import MainClient from '../../components/Client/MainClient'
import HeaderClient from '../../components/Client/HeaderClient'
import Image from 'next/image'
import FooterClient from '../../components/Client/FooterClient'
import { NextPage } from 'next'
import { useAnimatedStyles } from '../../shared/animated/animated'
import { animated, useSpring } from '@react-spring/web'
import { useTranslation } from 'react-i18next'

const AboutUs:NextPage = () => {

  const{springStyles,springStyles2}=useAnimatedStyles()
  const {t}=useTranslation()
  return (
    <div>
    <Head>
        <title>About Us</title>
        <meta name='description ' content='Generated by nesxt create app' />
        </Head>  

        <MainClient>

            <HeaderClient/>
<div className='lg:flex mt-[113px] px-6 lg:px-0'>
            <div className='lg:ps-[62px] lg:pe-10 w-full lg:w-1/2 text-center lg:text-start'>
                <h1 className=' font-mukta font-[600] mb-7 text-[45px] text-inputPlaceholder'>{t("About Us")}</h1>
                <p className=' text-par3-text roboto-medium text-[20px]'>Lorem ipsum is placeholder text commonly used in the graphic, print, 
                    and publishing industries for previewing layouts and visual mockups
                    .Lorem ipsum is placeholder text commonly used in the graphic, print,
                     and publishing industries for previewing layouts and visual mockups.
                     Lorem ipsum is placeholder text
                     commonly used in the graphic, print, and publishing industries
                      for previewing layouts and visual mockups.
                      </p>
            </div>

            <div className=' w-full lg:w-1/2 relative   me-10'>
              <div className='mt-6 px-4 py-4 '>
                <Image className='hidden lg:flex' width={1000} height={1000} src="/svgs/about.svg" alt='aboutus'/>
                <Image className='block lg:hidden ' width={1000} height={1000} src="/icons/yellow2.svg" alt='yellow'/>

                </div>
                <animated.div style={springStyles2} className="hidden lg:flex  absolute  top-10 right-10">
                <Image className='w-[274px] h-[228px]' width={1000} height={1000} src="/svgs/abouthamb.svg" alt='aboutus'/>
                </animated.div>
                <animated.div style={springStyles} className="absolute top-[120px] left-[80px]  lg:top-[220px] lg:left-[20px] ">
                <Image className='w-[274px] h-[228px]' width={1000} height={1000} src="/svgs/aboutpizza.svg" alt='aboutus'/>
                </animated.div>

                <animated.div style={springStyles2} className=" hidden lg:flex absolute  top-[312px] right-[10px]">
                <Image  className='   w-[274px] h-[228px]' width={1000} height={1000} src="/svgs/aboutsoup.svg" alt='aboutus'/>
                </animated.div>

                <animated.div style={springStyles} className=" absolute top-[400px] left-[80px]  lg:top-[524px] lg:left-[20px]">
                <Image  className='   w-[274px] h-[228px]' width={1000} height={1000} src="/svgs/aboutcoffee.svg" alt='aboutus'/>
                </animated.div>

            </div>
            </div>
            
        </MainClient>
        <div className='mt-[102px]'>
        <FooterClient/>
        </div>
    </div>
  )
}

export default AboutUs

