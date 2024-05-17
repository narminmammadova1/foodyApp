import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Layout from "../components/Layout";
import HeaderClient from "../components/Client/HeaderClient";
import MainClient from "../components/Client/MainClient";
import ButtonRed from "../components/Client/ButtonRed";
import ButtonWhite from "../components/Client/ButtonWhite";
import Card2 from "../components/Client/Card2";
import FooterClient from "../components/Client/FooterClient";
import ButtonOrange from "../components/Client/ButtonOrange";
import { getCategory, getOffer } from "../services";
import { isError } from "react-query";
import { useGlobalContext } from "../Context/GlobalContext";
import { useRouter } from "next/router";



//props:InferGetServerSidePropsType<typeof getServerSideProps>
const Home = () => {
   const router=useRouter()
   const {push}=router


const {offerData}=useGlobalContext() || {}
console.log("homedeki offerData",offerData);

const offerName=offerData?.map((offer)=>offer.name)
const offerImage=offerData?.map((offer)=>offer.img_url)
console.log("homedeki offerName",offerName);

const offerDescription=offerData?.map((offer)=>offer.description)

const handlePush=()=>{
  push("/register")
}
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

  <div className="flex  bg-headerbg pb-40 pt-16" >
    <div className="flex">
<div className="leftDiv py-10 ps-8  ">
  <h1 className="line pe-0 font-roboto font-[800] letter3  text-[60px]">Our Food site makes it easy to find local food</h1>
  <p className=" mt-5  me-72 font-roboto line2 letter3 text-headerUl text-[22px] font-[400]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

<div className="flex gap-10 mt-10">

  <ButtonRed btnText="Register"  onClick={handlePush}   />
  <ButtonWhite  onClick={()=>push("/restaurants")}  btnText="Order now"            />
</div>
</div>
<div className="rightDiv flex flex-col   relative">
 <div className=" ms-4 me-16">
    <Image className="" width={1000} height={1000} src="/pngs/black.svg" alt="black"/>
   </div>
  
    <div  className=" w-[278px] boxShadow  z-20 h-[91px] flex absolute top-[-30px] right-7 justify-start   px-5 items-center gap-5 rounded-[15px]  bg-white">
    <Image className="w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/pizzahut.svg" alt="pizzahut"/>
    <div>
      <p>Pizza Hut</p>
      <p>Yummy...</p>
    </div>
  </div> 
  <div  className=" w-[278px] h-[91px]  z-20  boxShadow  flex absolute bottom-[80px] left-[-100px]   justify-start   px-5  items-center gap-5 rounded-[15px]  bg-white">
  <Image className="w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/frenchfries.svg"alt="frenchfries"/>
  <div>
      <p>French Fries</p>
      <p>Yummy...</p>
    </div>
  </div> 
  <div className=" w-[278px] h-[91px]   z-20 boxShadow flex  justify-start  absolute bottom-[-50px] right-[47px]  px-5 items-center gap-5  rounded-[15px]  bg-white">
  <Image className="w-[70px] h-[50px]" width={1000} height={1000} src="/pngs/cheeseburger.svg"alt="cheeseburger"/>
  <div>
      <p>Cheeseburger</p>
      <p>Yummy...</p>
    </div>
  </div> 

  <div className=" absolute top-[-55px] left-[-25px] z-10">
    <Image  width={1000} height={1000} src="/pngs/hamburger.svg" alt="hamb"/>

    </div>
    </div>
 

    
</div>
</div>
 <div className="flex flex-col items-center px-64 mt-[82px]  text-center">
  <p className=" font-roboto font-[900]  text-[40px]">Features</p>
  <p className="  font-roboto  text-par3-text font-[400] text-[22px]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
 </div>






<section className="mt-10">

<div className=" mt-7 pb-10 flex  justify-center  gap-[78px]">

<Card2 img="/pngs/shoppinggirl.svg" Title1="Discount Boucher" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
<Card2  img="/pngs/soup.svg"  Title1="Fresh healthy Food" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>

<Card2 img="/pngs/kargo.svg"  Title1="Fast Home Delivery" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>



 
 
 </div>
</section>

<section className="mt-[281px]">
<div className="flex  justify-center">
  <div className="leftdiv pt-8 w-1/2">
    <p className=" font-roboto font-[900] text-[50px] line text-textblack">{offerName?.[0]}</p>
    <p className="font-roboto font-[400] text-[22px] line2 text-par3-text mt-7  me-32 pe-16">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className="rightdiv  w-[619px] h-[653px]"> 
    <Image className="  " width={1000} height={1000} src={offerImage ? offerImage[0] : "/pngs/kfcmeny.svg"} alt="kfc"/>
  </div>
</div>


</section>

<section className="mt-[150px]">
<div className="flex  justify-center gap-5">

  <div className="rightdiv  w-[619px] h-[653px]"> 
    <Image className=" " width={1000} height={1000} src="/pngs/pizzakamp.svg" alt="pizza"/>
  </div>

  <div className="leftdiv pt-8 w-1/2">
    <p className=" font-roboto font-[900] line text-[50px] text-textblack">{offerName ? offerName?.[1] :"Yummy Always Papa John’s Pizza.Agree?"}</p>
    <p className="font-roboto font-[400] line2 text-[22px] text-par3-text mt-7 me-32 pe-16">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
</div>


</section>



<section className="mt-[150px]">
<div className="flex  justify-center">
  <div className="leftdiv pt-8 w-2/3">
    <p className=" font-roboto font-[900] text-[50px] line text-textblack"> Do You Like French Fries?
Mmm...</p>
    <p className="font-roboto font-[400] text-[22px] line2 text-par3-text mt-7 me-36 pe-40">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className="rightdiv relative w-[619px] h-[653px]"> 
    <Image className="absolute top-14 left-[-50px]  " width={1000} height={1000} src="/pngs/redkamp.svg" alt="kfc"/>
    <Image className=" absolute  top-28 left-[-50px] " width={1000} height={1000} src="/pngs/frieskamp.svg" alt="kfc"/>

  </div>
</div>


</section>


<section className="mt-[162px]">
  <div className="flex flex-col items-center justify-center ">
    <div className="mx-96 text-center mb-3">  
         <p className=" font-roboto font-[900] text-[40px] letter3">Our Popular Update New Foods</p>
</div>
<div className="text-center mx-64">     <p className=" font-roboto font-[400] line2 text-[22px]  text-par3-text"> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
</div>
  </div>
</section>


<section  className=" mt-10">

<div className=" pb-10 flex  justify-center  gap-[78px]">

<Card2 img="/pngs/double.svg" Title1="Discount Boucher" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>
<Card2  img="/pngs/margarita.svg" Title1="Fresh healthy Food" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>

<Card2 img="/pngs/kfc.svg" Title1="Fast Home Delivery" Title2="Lorem ipsum is placeholder  commonly used in the graphic "/>



 
 
 </div>
</section>

<section className="flex justify-center">
<div className=" relative bottom-[-130px]  w-[1066px] h-[372px] px-[51px]  bg-blackdiv2 flex items-center rounded-[50px]">
<div className="w-[200px] h-[200px] pt-10" >
<Image width={1000} height={1000} src="pngs/pizza3.svg" alt="pizza"/>
</div>
<div className="px-14 flex flex-col items-center">
  <p className="font-roboto  text-white  font-medium text-[50px] line letter3 text-center">Discover Restaurants Near From You</p>
  <ButtonOrange btnText="Explore now" />
</div>

<div className="w-[200px] h-[200px] pt-10">
<Image width={1000} height={1000} src="pngs/hamburger.svg" alt="hamburger"/>

</div>
</div>

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