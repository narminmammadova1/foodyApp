import { useState } from "react"

export const useDropdownn=()=>{
    const [isOpenDropdown,setIsOpenDropdown]=useState(false)
    const openDropDown=()=>  setIsOpenDropdown(!isOpenDropdown)

    const [isOpenLang,setIsOpenLang]=useState(false)
   const openLang=()=> setIsOpenLang(!isOpenLang)


   const [isOpenAvatar,setIsOpenAvatar]=useState(false)
   const openAvatar=()=>setIsOpenAvatar(!isOpenAvatar)

   const [isOpenSearchDiv,setIsOpenSearchDiv]=useState(false)


   const [isOpenSidebar,setIsOpenSidebar]=useState(false)

   const openSidebar=()=>{

    setIsOpenSidebar(true)
   }
 const closeSidebar=()=>{

  setIsOpenSidebar(false)
 }
    return {isOpenDropdown,isOpenLang,openDropDown,openLang,isOpenAvatar,setIsOpenAvatar,openAvatar,isOpenSearchDiv,setIsOpenSearchDiv,isOpenSidebar,setIsOpenSidebar,closeSidebar,openSidebar}
}
