import React from 'react'
import RestuarantCards from '../RestuarantCards'

const AdminCArds = ({cards}) => {
  return (
    <div className='flex flex-wrap gap-5 mt-9'>

{cards && <AdminCArds/>}
     
    </div>
  )
}

export default AdminCArds
