import React from 'react'

const RedHeader = () => {
  return (
    <div>
    <header className=' bg-mainRed rounded-[4px] '>
<div className='flex ms-10 h-[122px] items-center justify-between me-[23px]'>
<div ><img src="/svgs/logo.svg" alt="logo" /></div>


<div> 
</div>

<div className='flex gap-6'> 
{/* <input className='w-[304px] h-[45px] rounded-[10px] bg-white ps-5 placeholder-inputPlaceholder' type="text" placeholder='Search'/> */}

  <img src="/icons/lang.svg" alt="lang" />

</div>
</div>

    </header>
  </div>
  )
}

export default RedHeader
