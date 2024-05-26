import React, { useEffect } from 'react'
import SideBar from '../../../components/Admin/SideBar'
import TopDiv from '../../../components/Admin/TopDiv'
import CategoryCard from '../../../components/Admin/CategoryCard'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import AdminHeader from '../../../components/Admin/Header'
import OfferCards from '../../../components/Admin/OfferCards'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../../components/UI/AdminModal'
import { NextPage } from 'next'
import { useGlobalContext } from '../../../Context/GlobalContext'

const AdminOffers:NextPage = () => {

  const {isOpen,open,close}=useModal()
  const{formComponent,setFormComponent,isAdmin,setIsAdmin}=useGlobalContext() || {}
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    setIsAdmin(storedIsAdmin === 'true');
  }, []);

  return (
    <>
    {isAdmin? ( <div>
        <Head>
        <title>Offer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
      >
        <AdminModal modalType="addOffer" formm={formComponent} modalTitle='Add Offer' modalDescription="Add your offer infarmation" btnText="Create Offer" onClose={close} isOpen={isOpen}  />
      <AdminHeader
      />
      <div className='flex'>
      <SideBar/>
      <div className='flex flex-col w-full me-4'>
      <TopDiv addButton onClick={open} title="Offers" btnText="ADD OFFER"/>
      <div className='flex gap-5 flex-wrap'>
      <OfferCards
      />
      </div>
      </div>
      </div>
      </Layout>

    </div>) :(<></>)}
   
    </>
  )
}

export default AdminOffers
