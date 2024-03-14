import { useState } from "react"

export const useModal=()=>{

    const [isOpen,setIsopen]=useState(false)
const [isOpenDelModal,setIsOpenDelModal]=useState(false)

    const open=()=>setIsopen(true)
    const close=()=>setIsopen(false)

    const openDelModal=()=>setIsOpenDelModal(true)
    const closeDelModal=()=>setIsOpenDelModal(false)
    return {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}
}