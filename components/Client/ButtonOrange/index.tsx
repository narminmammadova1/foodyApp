import React from 'react'
  

interface ButtonProps{
  btnText:string | undefined,
  onClick:()=>void
}



const ButtonOrange:React.FC <ButtonProps>= ({btnText,onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={` px-[22px] w-[220px]  h-[60px] rounded-full text-white font-roboto font-medium text-[20px] letter3  bg-mainOrange`}>{btnText}</button>
    </div>
  )
}

export default ButtonOrange
