import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AdminHeader from '../../../components/Admin/Header'
// import SideBar from '../../../components/Admin/SideBar'
import TopDiv from '../../../components/Admin/TopDiv'
import AddButton from '../../../components/Admin/AddButton'
import RestuarantCards from '../../../components/Admin/RestuarantCards'
import Layout from '../../../components/Layout'
import SideBar from '../../../components/Admin/SideBar'
import AdminModal from '../../../components/UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
import { NextPage } from 'next'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'


const Restuarants:NextPage = () => {
  const {isOpen,open,close}=useModal()
  const{formComponent,setFormComponent,restaurantData,isAdmin,setIsAdmin,selectedId,idForFilter,setIdForFilter}=useGlobalContext() || {}
  const [showRestaurant,setShowRestaurant]=useState<any[]>([])
  const [showFilteredRestaurant,setShowFilteredRestaurant]=useState<any[]>([])
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    // const storedIsAdmin = sessionStorage.getItem('isAdmin');

    setIsAdmin(storedIsAdmin === 'true');
  }, []);
 useEffect(()=>{
if(restaurantData){
  setShowRestaurant(restaurantData)

}

 },[restaurantData])
const filteredRestaurant=restaurantData?.filter((resttaurant)=>resttaurant.category_id===idForFilter)
useEffect(()=>{

  if(idForFilter){  setShowFilteredRestaurant(filteredRestaurant || [])
  }
 },[idForFilter,filteredRestaurant])
 const {t}=useTranslation()

  return (

    <div>
      {isAdmin ? (<>      <Head>
        <title>Restuarants</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
     <AdminModal modalType="addRestaurant"  formm={formComponent} modalTitle={t('Add Restuarant')} modalDescription=
     {t("Add your Restuarants information")} btnText={t("Create Restuarant")} isOpen={isOpen} onClose={close} />
      <AdminHeader/>
      <div className='flex'>
        <div  className='hidden lg:block' >
      <SideBar/>
      </div>
      <div className='flex flex-col w-full me-4'>
      <TopDiv addButton onClick={open} select title={t("Restuarants")} btnText={t("ADD RESTUARANT" )}selectText={t("Category type")}/>
      <div className=' m-auto lg:m-0 lg:flex gap-4 flex-wrap'>
        {(idForFilter ? showFilteredRestaurant :showRestaurant)?.map((restaurant)=>(
      <RestuarantCards key={restaurant.id} restaurant={restaurant}/>



      
        ))}
      

      </div>
      </div>
      </div>
      </Layout></>):(<>This page for only admin</>)}
  

    </div>
  )
}

export default Restuarants
