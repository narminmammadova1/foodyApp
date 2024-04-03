import Head from 'next/head'
import React from 'react'
import HeaderClient from '../../../components/Client/HeaderClient'
import UserSidebar from '../../../components/Client/UserSidebar'
import MainClient from '../../../components/Client/MainClient'
import CheckoutCard from '../../../components/Client/CheckoutCard'
import Check from '../../../components/Client/Check'
import FooterClient from '../../../components/Client/FooterClient'
import OrderReceived from '../../../components/Client/OrderReceived'

const UserCheckout = () => {
  return (
    <div>
      <Head>
        <title>Checkout</title>
        <meta name='description' content='Generated by create next app'/>
      </Head>
      <MainClient>
        <HeaderClient/>
        <div className='flex mt-4 gap-4 w-full'>
            <UserSidebar/>

            <CheckoutCard/>
            <Check/>

            {/* <OrderReceived/> */}
        </div>
      </MainClient>
      <div className='mt-[272px]'>
      <FooterClient/>
      </div>
    </div>
  )
}

export default UserCheckout
