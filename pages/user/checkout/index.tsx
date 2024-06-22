import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import HeaderClient from '../../../components/Client/HeaderClient'
import UserSidebar from '../../../components/Client/UserSidebar'
import MainClient from '../../../components/Client/MainClient'
import CheckoutCard from '../../../components/Client/CheckoutCard'
import Check from '../../../components/Client/Check'
import FooterClient from '../../../components/Client/FooterClient'
import OrderReceived from '../../../components/Client/OrderReceived'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { addOrder, clearBasket } from '../../../services'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { QUERIES } from '../../../Constant/Queries'
import { useRouter } from 'next/router'
import { ROUTER } from '../../../Constant/Router'



const UserCheckout = () => {
  const {userData,basketData,isUser}=useGlobalContext() ||{}


const queryClient=useQueryClient()


const router=useRouter()
const {push}=router
const { mutate: addOrdermutation } = useMutation({
  mutationFn: addOrder,
  onSuccess: () => {
    toast.success('Order added',{autoClose:2000});
    queryClient.invalidateQueries(QUERIES.Order);
    handleClear()
    
      setIsOrdered(true)


  },
  onError: () => {
    toast.error('Error adding order');
  }
});


 
const {mutate:clearBasketmutation}=useMutation({
  mutationFn:clearBasket,
  onSuccess:(values)=>{
    queryClient.invalidateQueries(QUERIES.Basket)
  },
  onError:(error)=>{
    toast.error("silinmediii")
  
  }
})

const handleClear = () => {
  if ( basketData?.id) {
    clearBasketmutation(String(basketData.id));
  }
};




const [isOrdered,setIsOrdered]=useState(false)

useEffect(() => {
  if (isOrdered) {
   setTimeout(() => {
     push(ROUTER.RESTAURANTS) 
    }, 4000); 

   
  }
}, [isOrdered, router]);





  return (
    <div>

      {isUser ?(<>
        <Head>
        <title>Checkout</title>
        <meta name='description' content='Generated by create next app'/>
      </Head>
      <MainClient>
        <HeaderClient/>
        <div className='flex flex-col-reverse lg:flex-row mt-4 gap-4 w-full'>
          <div className='hidden lg:block'>
            <UserSidebar/>
            </div>
            
{isOrdered ?(<OrderReceived/>) :(<> <CheckoutCard user={userData} addOrdermutation={addOrdermutation}/>
            <Check/>
            </>
) }
          
        </div>
      </MainClient>
      <div className='mt-[272px]'>
      <FooterClient/>
      </div>
      
      </>):(<div> you are logout</div>)}
    
    </div>
  )
}

export default UserCheckout
