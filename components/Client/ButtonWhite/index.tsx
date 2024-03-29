import React from 'react'
 interface ButtonWhiteProps{
  btnText: string | undefined
 }


const ButtonWhite:React.FC <ButtonWhiteProps> = ({btnText}) => {
  return (
    <div>
      <button className={` px-[22px] w-[220px] h-[70px] border-2   border-par3-text  rounded-full  text-par3-text font-roboto font-medium  text-[25px] bg-text-placeholder`}>{btnText}</button>
    </div>
  )
}

export default ButtonWhite
