import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FormAddRestuarant from '../../UI/FormAddRestuarant'
import FormAddCategory from '../../UI/FormAddCategory'

const AddButton = ({btnText,btnIcon="/icons/plus.svg",btncolor,btnSize,center,shadow,onClick}) => {
  // const [title,setTitle]=useState("")
 

  const router=useRouter()
  const {pathname}=router
  // const [formComponent,setFormComponent]=useState(null)

 
    
  const openModal=()=>{
    if(pathname==="/admin/restuarants"){
      onClick()

      
    }
    else if (pathname === '/admin/category') {
      onClick()

    }

// onButtonClick()
  }
  return (
    <>
   
       <div className='flex gap-5'>
      <button onClick={openModal} className={`flex  justify-end ${btnSize} ${shadow ? "custom-shadow": ""}  items-center bg-${btncolor} ${center ?"justify-center": "justify-end"} rounded-lg px-4 py-2 
      font-roboto text-white `}  ><img src={btnIcon} alt=""   />{btnText}</button>
      
    </div>
    </>
  )
}

export default AddButton
