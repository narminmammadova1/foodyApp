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

const{   userOrdersData,isLoading}=useGlobalContext() || {}
const {t}=useTranslation()
if(isLoading){

  return <div>loading...................</div>
}


  return (
    <div>
      <Head>
        <title>{t("Your Orders")}</title>
        <meta name='description'  content='Generated by next create app'/>
      </Head>
      <MainClient>
        <HeaderClient/>
        <div className='mt-4 flex gap-4'>
            <UserSidebar/>
            <UserOrderCard  />

        </div>
      </MainClient>
      <FooterClient/>
    </div>
  )
}

export default UserOrders
