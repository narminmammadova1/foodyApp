import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext'

const OrderHistory:NextPage = () => {

  const{isAdmin,setIsAdmin}=useGlobalContext() ||{}
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    setIsAdmin(storedIsAdmin === 'true');
  }, []);

  return (
    <div>{isAdmin ? (<div>      OrderHistory
      </div>) :(<></>)}
    </div>
  )
}

export default OrderHistory
