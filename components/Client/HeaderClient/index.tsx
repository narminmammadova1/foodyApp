import React from 'react'
// import ButtonRed from '../ButtonRed'
import { useRouter } from 'next/router'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useTranslation } from 'react-i18next'
import { handlechange } from '../../Admin/SideBar'
import { ROUTER } from '../../../Constant/Router'

export const isActiveLink=(path:string)=>{
  const router=useRouter()
  return path===router.pathname
}

const HeaderClient = () => {
 

       const {t,i18n}=useTranslation()

  const {isOpenLang,openLang}=useDropdownn()
  const router=useRouter()
const {push}=router


  return (
    <div>
      <header className='  bg-headerbg '>
<div className='flex ms-10 h-[103px] items-center '>
<div  className=' cursor-pointer ' onClick={()=>push("/")}><img src="/svgs/logoblack.svg" alt="logo" /></div>
<div className='ms-20 me-10'>
    <ul className='  headertext flex gap-6  '> 
        <li className={`${isActiveLink(ROUTER.HOME) ? "activeLink" : ""} cursor-pointer `} onClick={()=>push("/")}>{t("Home")}</li>
        <li  className={`${isActiveLink(ROUTER.RESTAURANTS) ? "activeLink" : ""} cursor-pointer `} onClick={()=>push("/restaurants")}>{t("Restaurants")} </li>
        <li  className={`${isActiveLink(ROUTER.ABOUTus) ? "activeLink" : ""} cursor-pointer `} onClick={()=>push("/about-us")}>{t("About us")}</li>
        <li  className={`${isActiveLink(ROUTER.HOWITWORKS) ? "activeLink" : ""} cursor-pointer `} onClick={()=>push("/how-it-works")}>{t("How it works")} </li>
        <li  className={`${isActiveLink(ROUTER.FAQS) ? "activeLink" : ""} cursor-pointer `} onClick={()=>push("/faqs")}>{t("FAQs")} </li>
    </ul>
</div>

<div> 
</div>

<div className='flex gap-6'> 
<input className='w-[304px] h-[45px] rounded-[10px] bg-white ps-5 placeholder-inputPlaceholder' type="text" placeholder='Search'/>

    {/* <img src="/icons/lang.svg" alt="lang" /> */}

    <div className='relative w-[59px] flex flex-col items-center h-10' >
        <div  onClick={openLang}>
        <img className=' cursor-pointer'  src={`/icons/lang${i18n.language === 'en' ? 'en': i18n.language==="fr"  ? 'fr': 'az'}.svg`}  alt="flag"   />
        </div>
        {isOpenLang && <div className=''>
        <div  onClick={openLang} className=' text-14px roboto-medium z-30 flex flex-col w-[59px]  relative  items-center py-1 font-medium'>
        <div  onClick={openLang}  className=' border-b-1 border-white py-4'  ><img src="/icons/langaz.svg" alt=""  onClick={()=>handlechange("az",i18n)}/></div>
        <div  className=' border-b-1 border-white py-4'  ><img src="/icons/langfr.svg" alt=""  onClick={()=>handlechange("fr",i18n)}/></div>
        <div  className=' border-b-1 border-white py-4'  ><img src="/icons/langen.svg" alt=""  onClick={()=>handlechange("en",i18n)}/></div>

        </div>
     </div> } 


      </div>
    <button className={` px-[22px] w-[115px] h-[41px]  rounded-full  text-white font-roboto font-medium  text-[16px] bg-btnRed`}>Sign up</button>

</div>
</div>

      </header>
    </div>
  )
}

export default HeaderClient
