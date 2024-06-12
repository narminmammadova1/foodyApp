import React, { ReactNode } from 'react'
 interface MainClientProps{
  children:ReactNode
 }


const MainClient:React.FC<MainClientProps> = ({children}) => {
  return (
    <div className='lg:px-[30px] lg:py-[30px]'>
      {children}
    </div>
  )
}

export default MainClient
