import React from 'react'

const  FormAddRestuarant
= () => {
  return (
    <div>
      <form action="" className='flex flex-col'>

 <label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " /> 
<label  className=' modal-label'  htmlFor="">Cuisine</label>
<input className=' bg-input-gray  rounded-lg h-[99px]' type="text " /> 

<label className=' modal-label'  htmlFor="">Delivery Min</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " /> 

<label className=' modal-label'  htmlFor="">Address</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " /> 


<label className=' modal-label '  htmlFor="">Category</label>
<select className='modal-input max-h-10    overflow-y-auto   bg-input-gray  rounded-lg h-10 mt-2 'size="1" type="text " >
  <option value="">Fast food</option>
  <option value="">milli</option>
 
  <option value="">milli</option>

  <option value="">milli</option>

  <option value="">milli</option>




  </select> 

 



</form>
    </div>
  )
}

export default FormAddRestuarant
