import React, { useState } from 'react'

const AddButton = ({btnText,btnIcon="/icons/plus.svg",btncolor,btnSize,center,shadow}) => {
  const [title,setTitle]=useState("")
  // var btnIcon="/icons/plus.svg"
  return (
       <div className='flex gap-5'>
      <button className={`flex  justify-end ${btnSize} ${shadow ? "custom-shadow": ""}  items-center bg-${btncolor} ${center ?"justify-center": "justify-end"} rounded-lg px-4 py-2 
      font-roboto text-white `}><img src={btnIcon} alt="" />{btnText}</button>
      
    </div>
  )
}

export default AddButton
