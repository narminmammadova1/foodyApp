import React from 'react'
import MainClient from '../../../components/Client/MainClient'
import HeaderClient from '../../../components/Client/HeaderClient'
import Image from 'next/image'
import ProductsTable from '../../../components/Client/ProductsTable'
import BasketCard from '../../../components/Client/BasketCard'
import FooterClient from '../../../components/Client/FooterClient'

const ChoiseUser = () => {
  return (
    <div>
      <MainClient>

        <HeaderClient/>
        <div className=''>
            <Image className=' w-full' width={1000} height={1000} src="/pngs/papajohnss.png" alt='rest' />
        </div>
        <div className='pb-4 flex justify-between ps-[57px] border-b'>
            <div>
                <p className=' text-modal_p  font-roboto font-[700] text-[22px] letter3'>Papa John's Pizza Restaurant</p>
                <p className=' font-roboto font-medium text-sm text-par3-text'>19 Nizami street Sebail,Baku</p>
            </div>

            <div className=' flex gap-[55px]'>
                <div className='font-roboto font-medium text-par3-text'>
                    <p className='  text-lg'>Cuisine</p>
                    <p className='text-sm '>Pizza,drink,hotdog,sendwich,roll</p>
                </div>

                <div className='flex gap-7'>
                    <button className='bg-white text-sm border w-[72px] h-[52px] text-start ps-2 border-btnRed rounded-[5px] text-btnRed'>$5 Delivery</button>
                    <button className='bg-btnRed text-sm w-[72px] h-[52px] rounded-[5px] text-white'>Go Back</button>
                </div>
            </div>
        </div>

        <div className='flex gap-[50px] mt-[48px]pe-5'> 
       <ProductsTable/>

       <BasketCard/>
        </div>
      </MainClient>
      <FooterClient/>
    </div>
  )
}

export default ChoiseUser
