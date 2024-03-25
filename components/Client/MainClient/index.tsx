import React, { ReactNode } from 'react'
 interface MainClientProps{
  children:ReactNode
 }


const MainClient:React.FC<MainClientProps> = ({children}) => {
  return (
    <div className='px-[30px] py-[30px]'>
      {children}
    </div>
  )
}

export default MainClient
