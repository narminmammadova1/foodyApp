import Image from 'next/image'
import React from 'react'
import SelectModal from '../../SelectModal'
import { useGlobalContext } from '../../../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'


interface ShowModalProps{
  isOpenShowwModal:boolean,
  closeShowModal:()=>void
}
const ShowModal:React.FC<ShowModalProps> = ({isOpenShowwModal,closeShowModal}) => {
  const{myOrder,setMyOrder}=useGlobalContext() || {}
  const { t } = useTranslation()

  return (
    <div className={`w-full h-full fixed top-0 left-0 flex  z-40  ${isOpenShowwModal ? "fixed" : "hidden" } bg-inputPlaceholder  bg-opacity-40`}>
       <div className=' bg-white overflow-x-auto  justify-between my-auto mx-4 lg:mx-auto -[49px] ps-8 pe-[51px]  flex flex-col top-[209px] w-[754px] h-[433px] boxShadow4   rounded'>
        <table className="  bg-white">
  <thead>
  <tr className='  border-b font-sans font-[600] text-[14px]'>
    <td  className=''>
        <div className='py-4'>
        {t("image")}</div></td>
      <td>
      <div className=' text-center'>
       {t("Name")}</div>
      </td>
      <td className=' text-center '>{t("Price")} $</td>
      <td className='text-center'>{t("Count")}</td>
      <td className='text-center'>{t("Amount")}</td>
     <div onClick={()=>{
      closeShowModal()
      // setMyOrder(null)
     }} className='bg-mainRed  relative right-[-40px] top-[10px] cursor-pointer text-center text-white rounded-full'>X</div>
    </tr>
  </thead>
  <tbody className=''>
  {myOrder && myOrder?.map((order)=>(   <tr className='   border-b text-blackhead font-[400] font-sans text-[14px]'>
    <td  className=''>
        <div className='w-[43px] h-[43px] rounded-full'>
        <Image  className='w-[43px] h-[43px] rounded-full' width={1000} height={1000} src={order.img_url} alt='product' />
       </div></td>
     
      <td className='text-center'>{order.name} </td>
      <td className='text-center'> {order.price}
      </td>

      <td>
      <div className='text-center'>
       {order.count}</div>
      </td>
      <td className='text-center'> {order.amount}</td>
     
     
    </tr>))}
 

 

    
   
 
  </tbody>
</table> 
<div>
<SelectModal/>
</div>
       </div>


    </div>
  )
}

export default ShowModal
