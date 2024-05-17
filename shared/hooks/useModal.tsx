import { useState } from "react"

export const useModal=()=>{

    const [isOpen,setIsopen]=useState(false)
const [isOpenDelModal,setIsOpenDelModal]=useState(false)
 const [isOpenShowwModal,setIsOpenShowwModal]=useState(false)

 const [isOpenProductModal,setIsOpenProductModal]=useState(false)

    const open=()=>setIsopen(true)
    const close=()=>setIsopen(false)

    const openDelModal=()=>setIsOpenDelModal(true)
    const closeDelModal=()=>setIsOpenDelModal(false)

    const openShowwModal=()=>setIsOpenShowwModal(true)
    const closeShowwModal=()=>setIsOpenShowwModal(false)
    
  const openProductModal=()=>setIsOpenProductModal(true)
     const closeProductModal=()=>setIsOpenProductModal(false)

    return {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal,
    openShowwModal,closeShowwModal,isOpenShowwModal,isOpenProductModal,openProductModal,closeProductModal
    }
}