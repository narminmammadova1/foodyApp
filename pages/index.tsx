import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { animated, } from '@react-spring/web'
import Head from "next/head";
import Image from "next/image";
import HeaderClient from "../components/Client/HeaderClient";
import MainClient from "../components/Client/MainClient";
import ButtonRed from "../components/Client/ButtonRed";
import ButtonWhite from "../components/Client/ButtonWhite";
import Card2 from "../components/Client/Card2";
import FooterClient from "../components/Client/FooterClient";
import ButtonOrange from "../components/Client/ButtonOrange";
import { useGlobalContext } from "../Context/GlobalContext";
import { useRouter } from "next/router";
import { ROUTER } from "../Constant/Router";
import { useCallback,} from "react";
import AnimatedSection from "../components/AnimatedSection/AnimatedSection";
import AnimatedSection2 from "../components/AnimatedSection2";
import { useAnimatedStyles } from "../shared/animated/animated";
import { useTranslation } from "react-i18next";
import { transform } from "framer-motion";
// 


//props:InferGetServerSidePropsType<typeof getServerSideProps>
const Home = () => {

  
const { springStyles, springStyles2, fadeInStyles } = useAnimatedStyles();

   const router=useRouter()
   const {push}=router

const {offerData,isLoading}=useGlobalContext() || {}
console.log("homedeki offerData",offerData);

const offerName=offerData?.map((offer)=>offer.name)
const offerImage=offerData?.map((offer)=>offer.img_url)
console.log("homedeki offerName",offerName);

const offerDescription=offerData?.map((offer)=>offer.description)

const handlePush=useCallback((routerr:any)=>{
  push(routerr)

},[router])
const {t}=useTranslation()



// if(isLoading){    return <div>Loading....................</div>
// }
  return (

    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <MainClient>
<div>
  <HeaderClient 
/>

  <div className="flex bg-headerbg pb-8 lg:pb-40 pt-16" >
  <div className="flex flex-col-reverse lg:flex-row">
<div className="leftDiv lg:py-10 lg:ps-8 text-center lg:text-start ">
  <h1 className="lg:line lg:pe-0 px-4 lg:px-0 font-roboto font-[900] lg:font-[800] letter3 text-[20px] lg:text-[60px]">
  {t("Our Food site makes it easy to find local food")}</h1>
  <p className=" mt-5 hidden lg:block  lg:me-72 font-roboto line2 letter3 text-headerUl text-[22px] font-[400]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

<div className=" md:flex lg:flex gap-10  mt-10">

  <ButtonRed btnText={t("Register")}  onClick={()=>{
    handlePush("/register")
  }}   />
  <div className=" mt-3 md:mt-0 lg:mt-0">
  <ButtonWhite  onClick={()=>push(ROUTER.CHECKOUT)}  btnText={t("Order now")}            />
  </div>
</div>
</div>
<div className="rightDiv   mx-10 lg:mx-0 flex flex-col  relative">
  <animated.div style={fadeInStyles} >
 <div  className=" lg:relative top-[-30px] lg:w-[529px] hidden lg:block lg:h-[446px] me-[42px] bg-black rounded-[80px]">

   </div>
   <Image className=" lg:absolute lg:top-[-70px]   left-[-20px]"  width={1000} height={1000} src="/pngs/hamburger.svg" alt="hamb"/>

    < animated.div  style={springStyles} className="  w-[278px] boxShadow  z-20 h-[91px] flex absolute top-[20px] lg:top-[-30px] right-7 justify-start   px-5 items-center gap-5 rounded-[15px]  bg-white">
    <Image className="w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/pizzahut.svg" alt="pizzahut"/>
    <div>
      <p>Pizza Hut</p>
      <p>Yummy...</p>
    </div>
  </animated.div> 
  < animated.div  style={springStyles}  className=" w-[278px] h-[91px]  z-20  boxShadow hidden lg:flex absolute bottom-[80px] left-[-100px]   justify-start   px-5  items-center gap-5 rounded-[15px]  bg-white">
  <Image className="w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/frenchfries.svg"alt="frenchfries"/>
  <div>
      <p>French Fries</p>
      <p>Yummy...</p>
    </div>
  </animated.div> 
  < animated.div  style={springStyles2}  className=" w-[278px] h-[91px]   z-20 boxShadow hidden lg:flex justify-start  absolute bottom-[-10px] right-[47px]  px-5 items-center gap-5  rounded-[15px]  bg-white">
 
 <AnimatedSection>
 <div  className="px-auto  mx-auto  lg:px-0">
  <Image className=" w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/cheeseburger.svg"alt="cheeseburger"/>
  </div>
  </AnimatedSection>
  <div>
      <p>Cheeseburger</p>
      <p>Yummy...</p>
    </div>
  </animated.div> 

  <div className=" absolute top-[-55px] left-[-25px] z-10">
    {/* <Image  width={1000} height={1000} src="/pngs/hamburger.svg" alt="hamb"/> */}

    </div>

    </animated.div>

    </div>
 

    
</div>
</div>
<AnimatedSection>
 <div className="flex flex-col items-center lg:px-64 mt-[20px]  lg:mt-[82px]  text-center">
  <p className=" font-roboto font-[700]  lg:font-[900] text-[32px]  lg:text-[40px]">{t("Features")}</p>
  <p className="  font-roboto  text-par3-text font-[400] text-[16px]  lg:text-[22px]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
 </div>
 </AnimatedSection>






<section className="mt-0 lg:mt-10 mb-0">
<AnimatedSection>
<div className=" lg:flex lg:justify-center  lg:gap-[78px]">
<div className="">
<Card2   img="/pngs/shoppinggirl.svg" Title1={t("Discount Boucher")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
</div>
<div >
<Card2  img="/pngs/soup.svg"  Title1={t("Fresh healthy Food")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
</div>
<div >
<Card2 img="/pngs/kargo.svg"  Title1={t("Fast Home Delivery")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
</div>



 
 
 </div>
 </AnimatedSection>
</section>



<section className="mt-0  lg:mt-[281px]">
<div className="text-center lg:text-start lg:flex">
  <div  className="leftdiv w-full lg:w-1/2 px-4 lg:px-0 ">
    <p className=" font-roboto font-[900] text-[25px] lg:text-[50px] line text-textblack">{offerName?.[0]}</p>
    <p className="font-roboto font-[400] text-[16px] lg:text-[22px] line2 text-par3-text mt-7  ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <AnimatedSection>
  <div className="rightdiv w-full flex justify-center "> 
  <div  className=" mt-6 lg:mt-0   flex   items-center  justify-center w-[187px] h-[251px] lg:w-[421.31px] lg:h-[556.74px]   bg-btn-del custom-rotate1 rounded-[50px] ">

    <Image className="  left-32 lg:top-48 lg:left-40
     rounded-full  w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]
     
     " width={1000} height={1000} src={offerImage ? offerImage[0] : "/pngs/kfcmeny.svg"} alt="kfc"/>
 </div>
 
  </div>
  </AnimatedSection>
</div>


</section>

<section className=" mt-0 lg:mt-[150px]">
<div className=" flex flex-col-reverse lg:flex lg:flex-row  justify-center gap-5">
<AnimatedSection>
  <div className="rightdiv w-full flex justify-center ">
<div className=" flex mt-6 lg:mt-0 items-center  justify-center w-[187px] h-[251px] lg:w-[421.31px] lg:h-[556.74px]   bg-btn-del custom-rotate2 rounded-[50px]">
<Image className=" rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] " width={1000} height={1000} src={offerImage ? offerImage[1] : "/pngs/pizzakamp.svg"} alt="pizza"/>

</div>
 
 
  </div>
  </AnimatedSection>

  <div className="leftdiv text-center lg:text-start pt-8 w-full px-4 lg:px-0 lg:w-1/2">
    <p className=" font-roboto font-[900] line  text-[25px] lg:text-[50px] text-textblack">{offerName ? offerName?.[1] :"Yummy Always Papa John’s Pizza.Agree?"}</p>
    <p className="font-roboto font-[400] line2 text-[16px] lg:text-[22px] text-par3-text mt-7 lg:me-32 lg:pe-16">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
</div>


</section>



 <section className=" hidden lg:block mt-[150px]">
<div className="flex  justify-center">
  
  <div className="leftdiv pt-8 w-2/3">
    <p className=" font-roboto font-[900] text-[50px] line text-textblack"> {t("Do You Like French Fries?Mmm...")}
</p>
    <p className="font-roboto font-[400] text-[22px] line2 text-par3-text mt-7 me-36 pe-40">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <AnimatedSection>
  <div className="rightdiv relative w-[619px] h-[653px]"> 
    <Image className="absolute  top-14 left-[-50px]  " width={1000} height={1000} src="/pngs/redkamp.svg" alt="kfc"/>
    <Image className=" absolute  top-28 left-[-50px] " width={1000} height={1000} src="/pngs/frieskamp.svg" alt="kfc"/>

  </div>
  </AnimatedSection>
</div>


</section> 


<section className="mt-[50px] lg:mt-[162px]">
  <div className="flex flex-col items-center justify-center ">
    <div className="lg:mx-96 text-center  mb-3">  
         <p className=" font-roboto font-[900]  text-[25px] lg:text-[40px] letter3">{t("Our Popular Update New Foods")}</p>
</div>
<div className="text-center lg:mx-64 px-4 lg:px-0">    
 <p className=" font-roboto font-[400] line2 text-[16px] lg:text-[22px]  text-par3-text"> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
</div>
  </div>
</section>


<section  className=" lg:mt-10">
<AnimatedSection>
<div className=" pb-10 lg:flex  justify-center  gap-[78px]">

<Card2 img="/pngs/double.svg" Title1={t("Discount Boucher")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
<Card2  img="/pngs/margarita.svg" Title1={t("Fresh healthy Food")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>

<Card2 img="/pngs/kfc.svg" Title1={t("Fast Home Delivery")} Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>



 
 
 </div>
 </AnimatedSection>
</section>

<section className=" flex justify-center">
<AnimatedSection2>
  
<div className=" relative bottom-[-130px] mx-[28px] lg:mx-[187px] h-[206px] lg:h-[372px]  pb-[31px] lg:pb-0 lg:px-[51px]  bg-blackdiv2 flex items-center rounded-[50px]">

<div className="flex">
<div className="lg:w-[200px] hidden lg:block h-[200px] pt-10" >
<Image width={1000} height={1000} src="pngs/pizza3.svg" alt="pizza"/>
</div>
<div className="px-14 flex flex-col items-center">
  <p className="font-roboto  text-white  font-medium text-[20px] lg:text-[50px] line letter3 text-center">
   {t("Discover Restaurants Near From You")}</p>
  <ButtonOrange onClick={()=>{
    handlePush(ROUTER.RESTAURANTS)
  }} btnText={t("Explore now")} />
</div>

<div className="w-[200px]  hidden lg:block h-[200px] pt-10">
<Image width={1000} height={1000} src="pngs/hamburger.svg" alt="hamburger"/>

</div>
</div>
</div>
</AnimatedSection2>
</section>
  </div>
</MainClient> 
<FooterClient/>


       
        </>      
  )
         

  }
  

export default Home;




// export async function getServerSideProps(context:GetServerSidePropsContext){

//   console.log("server side",context.query);
//   // const id=context.query.post_id as string |number

// try{

//   const response= await getOffer()

//   return {
//     props:{
//       offer:response.data
//     }
//   }
// }catch(error:any){
//   return{
//     props:{isError:true,
//       error_message:error.message
//     }
//   }



// }

// return{
//   props:{


//   }
// }

// }