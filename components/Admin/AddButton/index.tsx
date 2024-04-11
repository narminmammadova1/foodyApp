import { useRouter } from 'next/router'
import React from 'react'


interface AddButtonProps{
  btnText:string | undefined
  btnIcon?:string;
  btncolor?:string;
  btnSize?:string;
  center?:boolean;
  shadow?:boolean;
  onClick?:()=>void | undefined
  

}


const AddButton:React.FC<AddButtonProps>= ({btnText,btnIcon="/icons/plus.svg",btncolor,btnSize,center,shadow,onClick}) => {
  // const [title,setTitle]=useState("")
 

  const router=useRouter()
  const {pathname}=router
  // const [formComponent,setFormComponent]=useState(null)

  const openModal=()=>{

    
      if(pathname==="/admin/restuarants"){
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
  
    }
    
  
  return (
    <>
   
       <div className='flex gap-5'>
      <button type='submit' onClick={openModal} className={`flex  justify-end ${btnSize} ${shadow ? "custom-shadow": ""}  items-center bg-${btncolor} ${center ?"justify-center": "justify-end"} rounded-lg px-4 py-2 
      font-roboto text-white `}  ><img src={btnIcon} alt=""   />{btnText}</button>
      
    </div>
    </>
  )
}

export default AddButton
