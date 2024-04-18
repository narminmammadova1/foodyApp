import { useRouter } from 'next/router'
import React from 'react'


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
      <button type='submit' onClick={openModal} disabled={disabled} className={`flex  justify-end ${btnSize} ${shadow ? "custom-shadow": ""}  items-center bg-${btncolor} ${center ?"justify-center": "justify-end"} rounded-lg px-4 py-2 
      font-roboto text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}   `}  ><img src={btnIcon} alt=""   />{btnText}</button>
      
    </div>
    </>
  )
}

// ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 

export default AddButton
