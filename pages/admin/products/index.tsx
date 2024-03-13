import React from 'react'
import SideBar from '../../../components/Admin/SideBar'
import Head from "next/head";
import AdminHeader from '../../../components/Admin/Header';
import ProductCards from '../../../components/Admin/ProductCards';
import TopDiv from '../../../components/Admin/TopDiv';
import Layout from '../../../components/Layout';
import AdminModal from '../../../components/UI/AdminModal';



 
  // function toggleOptions() {
  //   const select = document.getElementById('restaurant-type');
  //   select.classList.toggle('hidden');
  // }

  // function handleChange() {
  //   // Burada seçilen değeri kullanabilirsiniz
  //   const select = document.getElementById('restaurant-type');
  //   console.log(select.value);
  // }




const AdminProducts = () => {
  return (
    <div>
        <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <AdminHeader/>
      <div className='flex'>
      <SideBar/>
      <div className='flex flex-col w-full me-4'>
      <TopDiv select selectText="Restuarant type" title="Products" />
      <div className='flex gap-9 flex-wrap'>
        <ProductCards/>
        <ProductCards/>

        <ProductCards/>

        <ProductCards/>

        <ProductCards/>

        <ProductCards/>

        <ProductCards/>

      

      </div>
      </div>
      </div>
      </Layout>

    </div>
  )
}

export default AdminProducts
