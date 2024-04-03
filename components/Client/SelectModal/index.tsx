import React from 'react'

const SelectModal = () => {
  return (
    <div>
      <div className=' flex justify-between mt-8'>
<div className='flex gap-2 items-center '>
  <button className=' bg-white w-8 h-8 border rounded flex justify-center items-center'>
    <img src="/icons/left.svg" alt="left" />
  </button>
  <input className='w-8 h-8 bg-white border flex items-center justify-center text-par3-text'  type="text" />
<div className=' text-par3-text'>03</div>
  <button className=' bg-white w-8 h-8 rounded border flex justify-center items-center'>
    <img src="/icons/right.svg" alt="right" />
  </button>

</div>
<div className='flex gap-9 items-center'>
  <p className=' font-sans text-[14px]  text-par3-text'>Rows per page</p>
  <div className=' bg-white w-[60px] h-8 border '>
  <select name="" id="">
    <option className=' text-select' value="">02</option>
    <option value="">03</option>

  </select>
  </div>
</div>
</div>
    </div>
  )
}

export default SelectModal
