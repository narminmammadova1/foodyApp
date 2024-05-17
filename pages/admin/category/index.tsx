import React, { useContext, useEffect } from 'react'
import SideBar from '../../../components/Admin/SideBar'
import AdminHeader from '../../../components/Admin/Header'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import TopDiv from '../../../components/Admin/TopDiv'
import CategoryCard from '../../../components/Admin/CategoryCard'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../../components/UI/AdminModal'
import { NextPage } from 'next'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { divider } from '@nextui-org/react'
import { ROUTER } from '../../../Constant/Router'
import { useRouter } from 'next/router'

const Category :NextPage = () => {
  const{formComponent,setFormComponent,isAdmin,setIsAdmin}=useGlobalContext() || {}
  const router=useRouter()

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    setIsAdmin(storedIsAdmin === 'true');
  }, []);

  // useEffect(() => {
  //   if (!isAdmin) {
  //     // router.push(ROUTER.ADMIN_LOGIN);
  //   }
  // }, [isAdmin]);



 
  // useEffect(() => {
  //   if (!isAdmin) {
  //    router.push(ROUTER.ADMIN_LOGIN);
  //   }
  // }, [isAdmin]);

  

  const {isOpen,open,close}=useModal()


//   return (
// <>
// {isAdmin ? () : ()}
//     // <div>
//     //     <Head>
//     //     <title>Category</title>
//     //     <meta name="description" content="Generated by create next app" />
//     //     <link rel="icon" href="/favicon.ico" />
//     //   </Head>

//     //   <Layout>
//     //     <AdminModal formm={formComponent}  btnText="Create Category"  isOpen={isOpen} onClose={close}/>

     
//     //   <AdminHeader/>
//     //   <div className='flex'>
//     //   <SideBar/>
//     //   <div className='flex flex-col w-full me-4'>
//     //   <TopDiv addButton onClick={open} title="Category" btnText="ADD CATEGORY" selectText="Category type"/>

//     //   <div className='flex gap-5 flex-wrap'>
//     //   <CategoryCard  />

    
//     //   </div>
//     //   </div>
//     //   </div>
//     //   </Layout>

//     // </div>
//     </>
//   )


return (
  <>
    {isAdmin ? (
      <div>
        <Head>
          <title>Category</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
          <AdminModal formm={formComponent}  btnText="Create Category"  isOpen={isOpen} onClose={close}/>

          <AdminHeader/>
          <div className='flex'>
            <SideBar/>
            <div className='flex flex-col w-full me-4'>
              <TopDiv addButton onClick={open} title="Category" btnText="ADD CATEGORY" selectText="Category type"/>

              <div className='flex gap-5 flex-wrap'>
                <CategoryCard  />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    ) : (
      <>
     
      </>
    )}
  </>
)
}

export default Category
