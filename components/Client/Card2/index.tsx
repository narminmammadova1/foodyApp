import Image from 'next/image'
import React from 'react'

interface Card2Props{
  Title1: string |undefined;
  Title2: string | undefined;
  img: string
}

const Card2:React.FC <Card2Props> = ({Title1,Title2,img}) => {
  return (
   
       <div className=" mx-auto mb-[55px]  lg:mb-0 lg:mx-0 w-[327px] border-b-2   boxShadow h-[386px] flex flex-col items-center">
 
 <Image className="w-[229px] h-[223px]" width={1000} height={1000} src={img} alt="shopping"/>
 <div className=" text-center px-5">
 <p className=" font-roboto font-[700] text-[30px] text-[modal_p]">{Title1}</p>
 <p className="text-[18px] font-roboto font-[400]  text-par3-text">
 {Title2}
</p>
</div>
 
 </div>
  
  )
}

export default Card2

