import { useRouter } from 'next/router'
import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';


interface AddButtonProps{
  btnText:string | undefined
  btnIcon?:string;
  btncolor?:string;
  btnSize?:string;
  center?:boolean;
  shadow?:boolean;
  disabled?:any;
  onClick?:()=>void | undefined
  

}


const AddButton:React.FC<AddButtonProps>= ({btnText,disabled,btnIcon="/icons/plus.svg",btncolor,btnSize,center,shadow,onClick}) => {
  // const [title,setTitle]=useState("")
 

  const router=useRouter()
  const {pathname}=router
  // const [formComponent,setFormComponent]=useState(null)

// const {openModal}=useGlobalContext()


const openModal=()=>{

    
      if(pathname==="/admin/restaurants"){
        if(onClick){
          onClick()

        }
      }
      if(pathname==="/admin/offer"){
        if(onClick){
          onClick()


        }
      }
      else if (pathname === '/admin/category') {

        if(onClick){
          onClick()


        }
      }
      else if (pathname === '/admin/') {

        if(onClick){
          onClick()


        }
      }
      else if (pathname === '/admin/orders') {

        if(onClick){
          onClick()


        }
      }
  
    }
    
  
  return (
    <>
   
       <div className='flex gap-5'>
      <button type='submit' onClick={openModal} disabled={disabled} className={`flex  ${btnSize} ${shadow ? "custom-shadow": ""}  items-center bg-${btncolor} ${center ?"justify-center": ""} h-[35px] rounded-2xl px-2  py-2 text-[14px] 
      font-roboto text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}   `}  ><img src={btnIcon} alt=""   />{btnText}</button>
      
    </div>
    </>
  )
}

// ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 

export default AddButton
