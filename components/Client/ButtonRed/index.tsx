import React from 'react'
  
interface ButtonRedProps{
  btnText: string | undefined;
  onClick:()=>void | undefined
}
 

const ButtonRed:React.FC<ButtonRedProps> = ({btnText,onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={` px-[22px]  w-[220px]  h-[70px]  rounded-full text-white font-roboto font-medium text-[25px]  bg-btnRed`}>{btnText}</button>
    </div>
  )
}

export default ButtonRed
