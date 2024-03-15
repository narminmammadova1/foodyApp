import React from 'react'

const FormAddOffer:React.FC = () => {
  return (
    <div>
      <form action="" className='flex flex-col'>

<label className=' modal-label'  htmlFor="">Title</label>

<input className=' bg-input-gray  rounded-lg h-10' type="text " />

<label  className=' modal-label'  htmlFor="">Description</label>
<textarea name="description" id="description" cols={30} rows={4} className=' rounded-lg h-478px bg-input-gray'></textarea>




</form>
    </div>
  )
}

export default FormAddOffer
