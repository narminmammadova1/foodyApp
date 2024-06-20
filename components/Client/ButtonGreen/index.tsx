import React from 'react'

interface ButtonGreenProps{
  btnTitle:string;
  disabled:any
}
const ButtonGreen:React.FC<ButtonGreenProps> = ({btnTitle,disabled}) => {
  return (
    <div>
    <button disabled={disabled} className={` ${disabled ? "disabled": ""} h-[53px] w-full letter3  font-[600] text-lg text-white bg-btnGreen rounded`} type="submit">{btnTitle}</button>

    </div>
  )
}

export default ButtonGreen
