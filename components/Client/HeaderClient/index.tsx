import React from 'react'
import ButtonRed from '../ButtonRed'

const HeaderClient = () => {
  return (
    <div>
      <header className='  bg-headerbg '>
<div className='flex ms-10 h-[103px] items-center '>
<div ><img src="/svgs/logoblack.svg" alt="logo" /></div>
<div className='ms-20 me-10'>
    <ul className='  headertext flex gap-7
    
    
    '> 
        <li className=' '>Home</li>
        <li>Restaurants</li>
        <li>About us</li>
        <li>How it works</li>
        <li>FAQs</li>
    </ul>
</div>

<div> 
</div>

<div className='flex gap-6'> 
<input className='w-[304px] h-[45px] rounded-[10px] bg-white ps-5 placeholder-inputPlaceholder' type="text" placeholder='Search'/>

    <img src="/icons/lang.svg" alt="lang" />
    <button className={` px-[22px] w-[115px] h-[41px]  rounded-full  text-white font-roboto font-medium  text-[16px] bg-btnRed`}>Sign up</button>

</div>
</div>

      </header>
    </div>
  )
}

export default HeaderClient
