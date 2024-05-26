// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { useModal } from '../../../shared/hooks/useModal'
// import ShowModal from '../Modals/ShowModal'
// import SelectModal from '../SelectModal'
// import DeleteModal from '../../Modals/DeleteModal'
// import { useDropdownn } from '../../../shared/hooks/useDropdown'
// import { useGlobalContext } from '../../../Context/GlobalContext'

// const UserOrderCard = () => {


//   // const [isOpenDropdown,setIsOpenDropdown]=useState(false)

//   // const togleDropdown=()=>{
  
//   //     setIsOpenDropdown(!isOpenDropdown)
//   // }
  
// const { userOrdersData,setMyOrder,isUser,setIsUser,setOrderId}=useGlobalContext() || {}


//  const { openShowwModal,closeShowwModal,isOpenShowwModal,openDelModal,isOpenDelModal,closeDelModal}=useModal()


//  const [openDropdownId, setOpenDropdownId] = useState(null)

//  const toggleDropdown = (id) => {
//    if (openDropdownId === id) {
//      setOpenDropdownId(null)
//    } else {
//      setOpenDropdownId(id)
//    }
//  }




 
// const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]

//   return (
//     <>
 
//     <div className= ' bg-headerbg flex flex-col w-full max-h-[634px]overflow-y-auto  overflow-x-hidden px-[27px]'>
//     <ShowModal  isOpenShowwModal={isOpenShowwModal} closeShowModal={closeShowwModal}/> 
//    <DeleteModal delDescription='' isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='inputPlaceholder'/>
    
//       <div >
//         <h1 className=' font-mukta font-[600] text-[30px]  text-modal_p mt-[49px] mb-[51px]'>Your Orders</h1>
//         </div>

//         <table className="table-fixed   bg-white">
//   <thead>
//   <tr className='  text-center border-b font-sans font-[600] text-[14px]'>
//     <td  className='py-3'>
//         <div className='flex justify-center'>
//         ID</div></td>
//       <td>
//       <div className='flex justify-center'>
//        Time</div>
//       </td>
//       <td>Delivery Address</td>
//       <td>Amount</td>
//       <td>Payment Method</td>
//       <td>Contact</td>
      
     
//     </tr>
//   </thead>
//   <tbody className=''>
//   {userOrdersData?.map((order)=>(
//       <tr key={order.id} className='  text-center border-b text-blackhead font-[400] font-sans text-[14px]'>
//       <td  className='py-3'>
//           <div className='flex justify-center'><div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px]  rounded-lg '>
//         {order.id.slice(0,4)}</div></div></td>
       
//         <td>{`${new Date(order.created).getDate()} ${ monthNames[new Date(order.created).getMonth()]} ${new Date(order.created).getFullYear()}`}</td>
//         <td className='flex justify-center'><div className='px-6 w-[203px] flex text-start'>{order.delivery_address}</div>
//         </td>
  
//         <td>
//         <div className='flex justify-center'>
//           ${order.amount}</div>
//         </td>
//         <td> {order.payment_method==0 ? "pay with cash" :"pay with credit card"}</td>
//         <td> <div className='flex justify-center '><div>{order.contact}</div>
//        </div></td>
//         <td> <div className=' w-[4px] h-[17px] me-5'>
  
//         <div className=' cursor-pointer'>
//           <Image width={1000} height={1000} src="/icons/threepoints.svg" alt='points'onClick={() => toggleDropdown(order.id)} />
//        {/* {isOpenDropdown && <div className=''>
//           <div className=' text-14px roboto-medium z-30 flex flex-col  relative  items-center py-1 font-medium w-[79px] h-[47px] bg-white'>
//           <button onClick={openShowwModal} className=' text-btnGreen' >show</button>
//           <button onClick={openDelModal}  className=' text-btnRed' >delete</button>
//           </div>
//        </div> }  */}


// {openDropdownId === order.id && (
//                         <div className=''>
//                           <div className='text-14px roboto-medium z-30 flex flex-col relative items-center py-1 font-medium w-[79px] h-[47px] bg-white'>
//                             <button onClick={()=>{
//                               openShowwModal()
//                            setMyOrder &&  setMyOrder(order.products)
//                             }} className='text-btnGreen'>show</button>
//                             <button  onClick={()=>{
//  openDelModal()
//   setOrderId(order.id)

//                             }
//                              } className='text-btnRed'>delete</button>
//                           </div>
//                         </div>
//                       )}
//       </div>
//         </div></td>
//       </tr>
//   ))}
  
   
 

    
   
 
//   </tbody>
// </table>
// {/* <div className=' flex justify-between mt-8'>
// <div className='flex gap-2 items-center '>
//   <button className=' bg-white w-8 h-8 rounded flex justify-center items-center'>
//     <img src="/icons/left.svg" alt="left" />
//   </button>
//   <input className='w-8 h-8 bg-white flex items-center justify-center'  type="text" />
// <div>03</div>
//   <button className=' bg-white w-8 h-8 rounded flex justify-center items-center'>
//     <img src="/icons/right.svg" alt="right" />
//   </button>

// </div>
// <div className='flex gap-9 items-center'>
//   <p className=' font-sans text-[14px]  text-par3-text'>Rows per page</p>
//   <div className=' bg-white w-[60px] h-8 border '>
//   <select name="" id=""></select>
//   </div>
// </div>
// </div> */}
// <SelectModal/>
//     </div>
//     </>
//   )
// }

// export default UserOrderCard





import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useModal } from '../../../shared/hooks/useModal';
import ShowModal from '../Modals/ShowModal';
import SelectModal from '../SelectModal';
import DeleteModal from '../../Modals/DeleteModal';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useQueryClient } from 'react-query';
import { QUERIES } from '../../../Constant/Queries';
import { UserOrderProps } from '../../../shared/interface';


interface UserOrderCardProps {
  userOrdersData?: UserOrderProps[] | undefined;
}





const UserOrderCard:React.FC<UserOrderCardProps> = () => {
  const { userOrdersData, setMyOrder, setOrderId,isLoading } = useGlobalContext() || {};
  const { openShowwModal, closeShowwModal, isOpenShowwModal, openDelModal, isOpenDelModal, closeDelModal } = useModal();

  const [openDropdownId, setOpenDropdownId] =useState<string | null |number | undefined>(null);
  const [hydration, setHydration] = useState(false);
const queryClient=useQueryClient()
  useEffect(() => {
    setHydration(true);
  }, [userOrdersData]);

  const toggleDropdown = (id:string | number |null ) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };


  const[userOrder,setUserOrder]=useState<UserOrderProps[]>([]) || []

 
  useEffect(() => {
    if (userOrdersData) {
      setUserOrder(userOrdersData);
    } else {
      setUserOrder([]); // or handle the undefined case as necessary
    }
    queryClient.invalidateQueries(QUERIES.Order);
  }, [userOrdersData, queryClient]);




  const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

  if (!hydration) return null;


  return (
    <>
      <div className='bg-headerbg flex flex-col w-full max-h-[634px] overflow-y-auto overflow-x-hidden px-[27px]'>
        <ShowModal isOpenShowwModal={isOpenShowwModal} closeShowModal={closeShowwModal} />
        <DeleteModal delDescription='' isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal}
          setUserOrder={setUserOrder}
          userOrder={userOrder}
        colorModal='inputPlaceholder' />
        <div>
          <h1 className='font-mukta font-[600] text-[30px] text-modal_p mt-[49px] mb-[51px]'>Your Orders</h1>
        </div>
        <table className="table-fixed bg-white">
          <thead>
            <tr className='text-center border-b font-sans font-[600] text-[14px]'>
              <td className='py-3'>
                <div className='flex justify-center'>ID</div>
              </td>
              <td>
                <div className='flex justify-center'>Time</div>
              </td>
              <td>Delivery Address</td>
              <td>Amount</td>
              <td>Payment Method</td>
              <td>Contact</td>
            </tr>
          </thead>
          <tbody>
            {userOrder?.map((order) => (
              <tr key={order.id} className='text-center border-b text-blackhead font-[400] font-sans text-[14px]'>
                <td className='py-3'>
                  <div className='flex justify-center'>
                    <div className='w-[57px] h-[24px] flex justify-center items-center border px-[12px] rounded-lg'>
                      {order.id.slice(0, 4)}
                    </div>
                  </div>
                </td>
                <td>{`${new Date(order.created).getDate()} ${monthNames[new Date(order.created).getMonth()]} ${new Date(order.created).getFullYear()}`}</td>
                <td className='flex justify-center'>
                  <div className='px-6 w-[203px] flex text-start'>{order.delivery_address}</div>
                </td>
                <td>
                  <div className='flex justify-center'>${order.amount}</div>
                </td>
                <td>{order.payment_method = 0 ? "pay with cash" : "pay with credit card"}</td>
                <td>
                  <div className='flex justify-center'>
                    <div>{order.contact}</div>
                  </div>
                </td>
                <td>
                  <div className='w-[4px] h-[17px] me-5'>
                    <div className='cursor-pointer'>
                      <Image width={1000} height={1000} src="/icons/threepoints.svg" alt='points' onClick={() => toggleDropdown(order.id)} />
                      {openDropdownId === order.id && (
                        <div className=''>
                          <div className='text-14px roboto-medium z-30 flex flex-col relative items-center py-1 font-medium w-[79px] h-[47px] bg-white'>
                            <button onClick={() => {
                              openShowwModal();
                              setMyOrder && setMyOrder(order.products);
                            }} className='text-btnGreen'>show</button>
                            <button onClick={() => {
                              openDelModal();
                            setOrderId &&  setOrderId(order.id);
                            }} className='text-btnRed'>delete</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SelectModal />
      </div>
    </>
  );
};

export default UserOrderCard;
