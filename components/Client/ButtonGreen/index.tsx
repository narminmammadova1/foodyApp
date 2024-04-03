import React from 'react'

interface ButtonGreenProps{
  btnTitle:string
}
const ButtonGreen:React.FC<ButtonGreenProps> = ({btnTitle}) => {
  return (
    <div>
    <button className='h-[53px] w-full letter3  font-[600] text-lg text-white bg-btnGreen rounded' type="submit">{btnTitle}</button>

    </div>
  )
}

export default ButtonGreen
