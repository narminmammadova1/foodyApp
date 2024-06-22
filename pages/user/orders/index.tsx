import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MainClient from '../../../components/Client/MainClient'
import HeaderClient from '../../../components/Client/HeaderClient'
import UserSidebar from '../../../components/Client/UserSidebar'
import UserOrderCard from '../../../components/Client/UserOrderCard'
import FooterClient from '../../../components/Client/FooterClient'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'

const UserOrders = () => {

const{   userOrdersData,isLoading,isUser}=useGlobalContext() || {}
const {t}=useTranslation()
if(isLoading){

  return <div>loading.......</div>
}


  return (
    <div>

      {isUser ?(<>
        <Head>
        <title>{t("Your Orders")}</title>
        <meta name='description'  content='Generated by next create app'/>
      </Head>
      <MainClient>
        <HeaderClient/>
        <div className='mt-4 flex lg:gap-4'>
          <div className='hidden   lg:block'>
            <UserSidebar/>
            </div>
            <div className='w-full px-4  lg:px-0'>
            <UserOrderCard  />
            </div>

        </div>
      </MainClient>
      <FooterClient/></>):(<div> you are logout</div>)}
      
    </div>
  )
}

export default UserOrders
