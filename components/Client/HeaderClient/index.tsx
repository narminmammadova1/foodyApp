
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDropdownn } from '../../../shared/hooks/useDropdown'
import { useTranslation } from 'react-i18next'
import { ROUTER } from '../../../Constant/Router'
import { useGlobalContext } from '../../../Context/GlobalContext'
import Image from 'next/image'
import useDebounce from '../../../helpers/useDebounce'
import { useQueryClient } from 'react-query'
import { QUERIES } from '../../../Constant/Queries'
import { UserDataProps } from '../../../shared/interface'
import { handlechange } from '../../Admin/SideBar'
import NavbarMobile from '../NavbarMobile'
import { useSpring,animated } from '@react-spring/web'

export const isActiveLink = (path: string) => {
  const router = useRouter()
  return path === router.pathname
}

const HeaderClient = () => {
  const { isBasket, setIsBasket,currentProduct,setCurrentProduct, isAvatar, setIsAvatar,userData,selectedRestaurant,setSelectedRestaurant, isLoginBtn,setSelectedId,selectedId, setIsLoginBtn, isUser, setIsUser, profilImg, letters, setLetters,  setProfilImg, restaurantData, productsData } = useGlobalContext() || {}

  const { t, i18n } = useTranslation()
const queryClient=useQueryClient()
  const { isOpenLang, openLang, isOpenAvatar, setIsOpenAvatar,openSidebar,isOpenSidebar,closeSidebar, openAvatar, isOpenSearchDiv, setIsOpenSearchDiv } = useDropdownn()
  const router = useRouter()
  const { push } = router


  const [value, setValue] = useState("")
  const debouncedTerm = useDebounce(value, 500)
  const [searchError, setSearchError] = useState("")
  const [searchResult, setSearchResult] = useState<any[]>([]);

  console.log("userdata nedirrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr?",userData);

useEffect(() => {
  const userToken = localStorage.getItem("user_accesToken")
    if (userToken && userData ) {
  
    handleUserData(userData)
    }

    
  }, [userData])


  
  const sidebarAnimation = useSpring({
    transform: isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 300, friction: 30 },
  })

  useEffect(() => {
    console.log('Debounced search term:', debouncedTerm);
    handleSearch()

  }, [debouncedTerm])

  const handleSearch = async () => {
    if (!value) {
      setSearchResult([]);
      setSearchError('');
      return;
    }
  
    const resultRestaurant = restaurantData?.filter((restaurant) => restaurant.name.toLowerCase().includes(value.toLowerCase())) || [];
  
    if (resultRestaurant.length > 0) {
      setIsOpenSearchDiv(true)
      setSearchResult([...resultRestaurant])

      console.log("Search Result:", searchResult);
      console.log("Search Result Length:", searchResult.length);
      console.log("Filtered Restaurants", resultRestaurant);

    } 

    else {
      setSearchResult([])
    }
  }




  const handleUserData = (userData: UserDataProps | null) => {
    setIsAvatar(true);
    setIsBasket(true);
    setIsLoginBtn(false);
    setIsUser(true);
    if (setProfilImg && userData?.img_url) {
      setProfilImg(userData.img_url);
    }

    const userFullname = userData?.fullname;
    const lettersArr = userFullname?.toUpperCase().split(' ');
    const userLetters = lettersArr?.map((item) => item[0]).join("");
    setLetters(userLetters);
  };


const selectRestaurant = async (rest: any) => {
  try {
  setSelectedRestaurant &&  setSelectedRestaurant(rest);
  setSelectedId && setSelectedId(rest.id);

    const selectedProduct = productsData?.filter(product => product.rest_id === rest.name);

    setCurrentProduct(selectedProduct);

    setSearchResult([]);
    setIsOpenSearchDiv(false); 
    setValue(""); 
    handleSearch(); 

    push(`${ROUTER.RESTAURANTS}/${rest.id}`);
  } catch (err) {
    console.log("err", err);
  }
};


  return (
    <div>
      <header className='bg-headerbg py-4 px-4 lg:py-0 lg:px-0  '>
        <div className='hidden lg:flex  h-[103px] md:justify-start items-center '>

        <div className='block lg:hidden'>
  <Image  className='w-[30px] block h-[30.75px] lg:hidden  '  width={1000} height={1000} src="/icons/navbarBlack.svg" alt='nav'/>

  
  <Image onClick={() => push("/")} className='w-[131px] h-[30px]  cursor-pointer flex' width={100} height={100} alt="logo" src="/svgs/logoblack.svg"/>

            
</div>
<div className=' md:hidden lg:flex  w-[131px] h-[30px]'>
<Image onClick={() => push("/")} className=' w-[131px] h-[30px] cursor-pointer ' width={100} height={100} alt="logo" src="/svgs/logoblack.svg"/>


</div>
          <div className='md:ms-0 xl:ms-20 md:me-2 xl:me-10 flex'>
            <ul className='  headertext flex  md:gap-2 lg:gap-6  '>
              <li className={`${isActiveLink(ROUTER.HOME) ? "activeLink2" : ""} cursor-pointer `} onClick={() => push("/")}>{t("Home")}</li>
              <li className={`${isActiveLink(ROUTER.RESTAURANTS) ? "activeLink2" : ""} cursor-pointer `} onClick={() =>{push(ROUTER.RESTAURANTS)
           setSelectedId && setSelectedId("")
              } }>{t("Restaurants")} </li>
              <li className={`${isActiveLink(ROUTER.ABOUTus) ? "activeLink2" : ""} cursor-pointer `} onClick={() => push("/about-us")}>{t("About us")}</li>
              <li className={`${isActiveLink(ROUTER.HOWITWORKS) ? "activeLink2" : ""} cursor-pointer `} onClick={() => push("/how-it-works")}>{t("How it works")} </li>
              <li className={`${isActiveLink(ROUTER.FAQS) ? "activeLink2" : ""} cursor-pointer `} onClick={() => push("/faqs")}>{t("FAQs")} </li>
            </ul>
          </div>

          <div className='flex  gap-6'>
            <div className='flex'>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className='w-[304px] h-[45px] rounded-[10px] bg-white ps-5 placeholder-inputPlaceholder' type="text" placeholder={t('Search Restaurant')} />
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
<div className='hidden lg:flex'>
            <button onClick={() => { push(ROUTER.USER_LOGIN) }} className={`${isUser ? " hidden" : "px-[22px] w-[115px] h-[41px]  rounded-full  text-white font-roboto font-medium  text-[16px] bg-btnRed"}`} >Sign up</button>
            <div className={`${isUser ? "flex gap-4" : "hidden"}`}>
              <Image onClick={()=>push(ROUTER.BASKET)} width={200} height={200} src="/icons/headerBasket.svg" className=' cursor-pointer w-10 h-10' alt='basket' />
              <div onClick={openAvatar} className=' w-10 h-10 cursor-pointer rounded-full object-cover text-white flex justify-center items-center font-roboto roboto-medium bg-avatarColor '>
                {profilImg ? <img className=' w-10 h-10 rounded-full' src={profilImg} /> : <span>{letters}</span>}
              </div>


            </div>
            </div>
          </div>
        </div>










        {/*  */}
     <div className='flex  lg:hidden justify-between'>
     <div className=' flex'>
  <Image  onClick={openSidebar} className='w-[30px] block  h-[30.75px]  '  width={1000} height={1000} src="/icons/navbarBlack.svg" alt='nav'/>

  
  <Image onClick={() => push("/")} className=' cursor-pointer flex' width={100} height={100} alt="logo" src="/svgs/logoblack.svg"/>

            
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
      {isOpenAvatar && <div className=' font-roboto absolute top-[110px] right-8 pt-6 font-[400] shadow px-3  text-base bg-white z-50 w-[178px] h-[234px] '>
        <div onClick={() => {
          push("/user/profile")
        }} className=' cursor-pointer border-b   text-black pb-2 mb-2'>{t("Profile")}</div>
        <div onClick={() => {
          push("/user/basket")
        }} className=' cursor-pointer border-b  text-black  pb-2 mb-2'>{t("Your Basket")}</div>

        <div onClick={()=>push(ROUTER.ORDER)} className=' cursor-pointer border-b  text-black pb-2 mb-2'>{t("Your Orders")}</div>

        <div className='cursor-pointer border-b  text-black  pb-2 mb-2'>{t("Checkout")}</div>


        <div onClick={() => {
          localStorage.removeItem("user_accesToken");
          localStorage.removeItem("user_refreshToken");

          setIsUser(false)
          localStorage.setItem("IsUser","false")
          push("/")
          setIsOpenAvatar(false)
           queryClient.invalidateQueries(QUERIES.User)

           setProfilImg && setProfilImg("");
          setLetters("")
          
  
        }} className='cursor-pointer   text-black  pb-2 mb-2'>{t("Logout")}</div>
      </div>
      }


      {searchResult.length > 0 && (
        <div className='search-result fixed pt-6 px-4 z-50  right-56 top-28 bg-white  w-[300px] h-[300px]'>
          <ul>
            {searchResult.map((result, index) => (
           
            <li onClick={()=>{
            
              selectRestaurant(result)
              

               }
              
          } className='flex items-center gap-6' key={result.id}>
              <Image className=' rounded-full w-[50px] h-[50px]' width={200} height={200} src={result.img_url} alt='result' />
              {result.name}
          </li>
          
          ))}
          </ul>
        </div>
      )}
      {searchError && <p>{searchError}</p>}
    </div>
  )
}


export default HeaderClient
