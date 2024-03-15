import React from 'react'
import ButtonRed from '../ButtonRed'

const HeaderClient = () => {
  return (
    <div>
      <header className='  bg-headerbg '>
<div className='flex justify-between ps-14 h-[103px] items-center pe-[89px]'>
<div ><img src="/svgs/logoblack.svg" alt="logo" /></div>
<div>
    <ul className=' headertext flex gap-5'> 
        <li className=' '>Home</li>
        <li>Restaurants</li>
        <li>About us</li>
        <li>How it works</li>
        <li>FAQs</li>
    </ul>
</div>

<div> 
    <input className='w-[304px] h-[45px] rounded-[10px] bg-white ps-5 placeholder-inputPlaceholder' type="text" placeholder='Search'/>
</div>

<div className='flex gap-7'> 
    <img src="/icons/lang.svg" alt="lang" />
   <ButtonRed/>

</div>
</div>

      </header>
    </div>
  )
}

export default HeaderClient
