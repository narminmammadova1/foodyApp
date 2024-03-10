import React, { useState } from 'react'
import AddButton from '../AddButton'

const TopDiv = ({addButton,select,title,btnText,selectText}) => {
  // const [buttonText,setButtonText]=useState("")
  return (
    <div>
       <div className=' bg-dark-div mt-5 mb-10 w-full flex  justify-between items-center p-3  rounded-[14px]'>
    <h2 className=' font-medium font-roboto text-text-sideBar  text-xl'>{title}</h2>
    <div className='flex me-3 gap-5 justify-end'>
    {/* <div className="relative bg-bg-select rounded-xl px-3   font-roboto text-text-sideBar ">
  <div className="flex items-center gap-5  py-2">
    <span className="mr-2 text-sm">{selectText}</span>
    <img src="/icons/selectType.svg" alt="" />
  
  </div>
  <select id="restaurant-type" className="absolute hidden bg-white border border-gray-300 mt-1 py-1 w-full rounded shadow-lg z-10" 
//   onChange={handleChange}
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div> */}
{select && <div>
  <div className="relative bg-bg-select rounded-xl px-3   font-roboto text-text-sideBar ">
  <div className="flex items-center gap-5  py-2">
    <span className="mr-2 text-sm">{selectText}</span>
    <img src="/icons/selectType.svg" alt="" />
  
  </div>
  <select id="restaurant-type" className="absolute hidden bg-white border border-gray-300 mt-1 py-1 w-full rounded shadow-lg z-10" 
//   onChange={handleChange}
  >
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
</div>}

{addButton && <AddButton btnText={btnText} selectText={selectText}/>}

</div>
  </div>
    </div>
  )
}

export default TopDiv
