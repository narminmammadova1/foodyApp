import React from 'react'

const FormAddProducts = () => {
  return (
    <div>
      <form action="" className='flex flex-col'>

<label className=' modal-label'  htmlFor="">Name</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " />
<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols={30} rows={5}  className=' rounded-lg bg-input-gray'></textarea>

<label  className=' modal-label'  htmlFor="">Price</label>
<input type="text" className=' bg-input-gray  rounded-lg h-10'/>

<label  className=' modal-label'  htmlFor="">Restuarants</label>

<input type="text" className=' bg-input-gray  rounded-lg h-10' />


</form>
    </div>
  )
}

export default FormAddProducts
