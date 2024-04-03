import { useState } from "react"



export const useDropdownn=()=>{
    const [isOpenDropdown,setIsOpenDropdown]=useState(false)

    const [isOpenLang,setIsOpenLang]=useState(false)
  const openDropDown=()=>  setIsOpenDropdown(!isOpenDropdown)
   const openLang=()=> setIsOpenLang(!isOpenLang)
    return {isOpenDropdown,isOpenLang,openDropDown,openLang}
}
