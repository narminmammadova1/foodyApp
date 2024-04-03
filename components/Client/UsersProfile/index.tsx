import React from 'react'
import ButtonGreen from '../ButtonGreen'

const UsersProfile = () => {
  return (
    <>
    <div className=' bg-headerbg w-full pb-[95px] px-[30px]'>
        <div className=' pt-10'>
            <p className=' font-mukta text-[30px] font-[600] text-modal_p '>Profile</p>
        </div>
        <div className='flex justify-center'>
            <div className='w-[146px] h-[141px] flex flex-col items-center justify-center bg-white rounded-full'>
            <img src="/icons/uploadgreen.svg" alt="upload" />
            <p className=' roboto-medium font-medium text-lg text-text92'>upload</p>
            </div>
        </div>
        <div className='mt-[61px]'>
            <form className='' action="">
                <div className='flex justify-between gap-[53px] '>
                <div className='flex flex-col w-1/2 '>
                <label className=' font-mukta font-[600]  text-modal_p text-lg letter3' htmlFor="">Contact</label>
                <input className='h-[53px] px-[23px]  rounded' type="text" placeholder='+994' />
                <label className=' font-mukta font-[600]  text-modal_p text-lg letter3'  htmlFor="">Username</label>
                <input className='h-[53px] px-[23px]  rounded' type="text" placeholder='username' />

                <label className=' font-mukta font-[600]  text-modal_p text-lg letter3'  htmlFor="">Full Name</label>
                <input className='h-[53px] px-[23px]  rounded' type="text" />
                </div>
              <div className='flex flex-col w-1/2 '>

                <label className=' font-mukta font-[600]  text-modal_p text-lg letter3'  htmlFor="">Email</label>
                <input className='h-[53px] px-[23px]  rounded' type="email" />

               

                <label className=' font-mukta font-[600]  text-modal_p text-lg letter3'  htmlFor="">Address</label>
                <input className='h-[53px] px-[23px]  rounded' type="text" />
<div className='mt-7'>
<ButtonGreen btnTitle="Save"/>
</div>           
                {/* <button className='h-[53px] letter3 mt-7 font-[600] text-lg text-white bg-btnGreen rounded' type="submit">Save</button> */}
                </div>
                </div>
            </form>
        </div>
      
    </div>
    </>
  )
}

export default UsersProfile
