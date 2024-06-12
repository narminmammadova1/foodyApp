import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from 'react-query'
import { handlechange } from '../../Admin/SideBar'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useGlobalContext } from '../../../Context/GlobalContext'
import NavbarMobile from '../NavbarMobile'
import { useSpring,animated } from '@react-spring/web'

const RedHeader = () => {

 


  // const {User, profilImg, letters, setLetters,  setProfilImg, restaurantData, productsData } = useGlobalContext() || {}

  const { t, i18n } = useTranslation()
const queryClient=useQueryClient()
  const { isOpenLang, openLang, isOpenAvatar, setIsOpenAvatar,openSidebar,isOpenSidebar,closeSidebar } = useDropdownn()
  const router = useRouter()
  const { push } = router
  const sidebarAnimation = useSpring({
    transform: isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 300, friction: 30 },
  })


  return (
    <div>
    <header className=' bg-mainRed rounded-[4px] '>
{/* <div className='flex ms-10 h-[122px] items-center justify-between me-[23px]'>
<div ><img src="/svgs/logo.svg" alt="logo" /></div>


<div> 
</div>

<div className='flex gap-6'> 

  <img src="/icons/langaz.svg" alt="lang" />

</div>
</div> */}
 <div className='flex h-[59px] lg:h-[122px] me-4   items-center justify-between'>
     <div className=' flex ms-3 lg:ms-[36px]'>
  <Image  onClick={openSidebar} className='w-[30px] block  lg:hidden h-[30.75px]  '  width={1000} height={1000} src="/icons/navbar.svg" alt='nav'/>

  
  <Image onClick={() => push("/")} className=' cursor-pointer flex' width={100} height={100} alt="logo" src="/svgs/logo.svg"/>

            
</div>

<div className='relative w-[59px]  flex flex-col items-center h-10' >
              <div onClick={openLang}>
                <img className=' cursor-pointer' src={`/icons/lang${i18n.language === 'en' ? 'en' : i18n.language === "fr" ? 'fr' : 'az'}.svg`} alt="flag" />
              </div>
              {isOpenLang && <div >
                <div onClick={openLang} className=' text-14px roboto-medium z-30 flex flex-col mt-2 w-[59px]  bg-white relative  items-center py-1 font-medium'>
                  <div onClick={openLang} className=' border-b-1 border-white py-4'  ><img  onClick={()=>handlechange("az",i18n)}src="/icons/langaz.svg" alt="" 
                  /></div>
                  <div className=' border-b-1 border-white py-4'  ><img onClick={()=>handlechange("fr",i18n)} src="/icons/langfr.svg" alt="" 
                  />
                  </div>
                  <div className=' border-b-1 border-white py-4'  ><img onClick={()=>handlechange("en",i18n)} src="/icons/langen.svg" alt="" 
                   /></div>

                </div>
              </div>}


            </div>
     </div>
     {isOpenSidebar && <animated.div style={sidebarAnimation} className='fixed w-full left-0 top-0 z-50  '>
      <NavbarMobile closeSidebar={closeSidebar}/>
     </animated.div>}
    </header>
  </div>
  )
}

export default RedHeader
