import React from 'react'
import BtnCheckout from '../BtnCheckout'
import ButtonGreen from '../ButtonGreen'

const CheckoutCard = () => {
  return (
    <div className=' bg-headerbg w-[618px] px-9 pt-9'>
        <h1 className=' font-mukta font-[600] text-[30px] text-modal_p letter3 mb-6'>Checkout</h1>
        <div>
        <form action="" className='flex flex-col '>
            <label className=' font-mukta font-[600] text-lg text-modal_p' htmlFor="">Delivery Address</label>
            <input className='w-full rounded h-[53px] mb-7 font-mukta  font-[400] text-xl text-par3-text  ' type="text" />


            <label  className=' font-mukta font-[600] text-lg text-modal_p' htmlFor="">Contact Number</label>
            <input className='w-full h-[53px] rounded mb-7 font-mukta  font-[400] text-xl text-par3-text ' />
        <p className=' text-lg font-mukta font-[600] text-modal_p mb-4'>Payment Method</p>   

        <div className='flex gap-[79px]'>
<div className='flex gap-[5px]'>
<input id='withCash' name="payment" type="radio" />
<label  className=' text-[14px] roboto-medium font-[400] text-par3-text' htmlFor="withCash">pay at the door</label>
</div>
<div className='flex gap-[5px]'>
<input id='withCard'  name="payment" type="radio" />
<label className=' text-[14px] roboto-medium font-[400] text-par3-text' htmlFor="withCard">pay at the door by credit card</label>
</div>
</div> 
<div className='mt-12'>
<ButtonGreen btnTitle="Checkout"/>
</div> 
        </form>
        </div>
    </div>
  )
}

export default CheckoutCard
