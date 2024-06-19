
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
import { useTranslation } from 'react-i18next';


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
  const {t}=useTranslation()

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
    queryClient.invalidateQueries(QUERIES.UserOrder);
  }, [userOrdersData, queryClient]);




  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];






  if (!hydration) return null;

  return (
    <>
      <div className='lg:bg-headerbg flex flex-col w-full max-h-[634px] overflow-y-auto overflow-x-hidden lg:px-[27px]'>
      
        <ShowModal isOpenShowwModal={isOpenShowwModal} closeShowModal={closeShowwModal} />
        <DeleteModal delDescription='' isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal}
          setUserOrder={setUserOrder}
          userOrder={userOrder}
        colorModal='inputPlaceholder' />
        <div>
          <h1 className='font-mukta font-[600] text-[30px] text-modal_p mt-[49px] mb-[51px]'>{t("Your Orders")}</h1>
        </div>
        <div className='w-full h-[1024px] overflow-x-auto lg:overflow-x-hidden '>
        <table className="table-fixed min-w-full  bg-white">
          <thead>
            <tr className='text-center border-b font-sans font-[600] text-[14px]'>
              <td className='py-3'>
                <div className='flex justify-center'>ID</div>
              </td>
              <td>
                <div className='flex justify-center'>{t("Time")}</div>
              </td>
              <td className=''>{t("Delivery Address")}</td>
              <td>{t("Amount")}</td>
              <td>{t("Payment Method")}</td>
              <td>{t("Contact")}</td>
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
                  <div className='px-6 w-[203px] flex-wrap break-words whitespace-normal text-ellipsis   text-start'>{order.delivery_address}</div>
                </td>
                <td>
                  <div className='flex justify-center'>${order.amount}</div>
                </td>
                <td>{order.payment_method ==0 ? "pay with cash" : "pay with credit card"}</td>
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
        </div>
        {/* <SelectModal /> */}
      </div>
    </>
  );
};

export default UserOrderCard;
