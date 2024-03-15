import React, { useState } from 'react'
import AddButton from '../AddButton'
import AdminModal from '../../UI/AdminModal'
import { useModal } from '../../../shared/hooks/useModal'
// import { ROUTER } from '../../../Constant/Router'
import { useRouter } from 'next/router'
import FormAddCategory from '../../UI/FormAddCategory'

interface TopDivProps{
  addButton?:boolean;
  select?:boolean;
  title:string;
  btnText?:string;
  selectText?:string;
  onClick?:()=>void
}


const TopDiv:React.FC<TopDivProps> = ({addButton,select,title,btnText,selectText,onClick}) => {
  // const [buttonText,setButtonText]=useState("")
 
 const{isOpen,open,close}=useModal()
 
const router=useRouter()
const {pathname}=router


  

  return (
    <div>
      {/* <AdminModal isOpen={isOpen} onClose={close}/> */}
       <div className=' bg-dark-div  mb-[52px] w-full flex  justify-between items-center px-8 py-4 rounded-[14px]'>
    <h2 className=' text20'>{title}</h2>
    <div className='flex me-3 gap-5 justify-end'>
  
{select && <div>
  <div className=" bg-bg-select rounded-[16px] px-[18px] cursor-pointer font-medium  text-text-sideBar ">
  <div className="flex items-center gap-8  py-2">
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

{addButton && <AddButton 
  onClick={onClick}
   btnText={btnText} btncolor="btn-pink" />}

</div>
  </div>
    </div>
  )
}

export default TopDiv
