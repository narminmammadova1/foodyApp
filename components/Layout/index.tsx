import React from 'react'

const Layout = ({children}:any) => {
  return (
    <>
      <main className=' bg-dark-body  min-h-screen  flex flex-col'>
       
       
{children}
      </main>
      </>
  )
}

export default Layout
