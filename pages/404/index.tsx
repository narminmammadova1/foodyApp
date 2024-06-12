import Head from 'next/head'
import React from 'react'
import MainClient from '../../components/Client/MainClient'
import HeaderClient from '../../components/Client/HeaderClient'
import Image from 'next/image'
import FooterClient from '../../components/Client/FooterClient'
import { NextPage } from 'next'

const index:NextPage = () => {
  return (
    <div>
        <Head>
        <title>404</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainClient>

        <HeaderClient/>
        <div className='mt-4 w-full mb-[420px] lg:mb-0 px-4 lg:px-0'>
            <Image className=' w-full h-full object-cover' width={1000} height={1000} src="/svgs/404.svg" alt='404'/>
            
        </div>
      </MainClient>
      <div className='mt-[30px]'>
      <FooterClient/>
      </div>
    </div>
  )
}

export default index
