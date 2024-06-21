import React, { useCallback, useEffect, useState } from 'react'
import BtnCheckout from '../BtnCheckout'
import { clearBasket, deleteBasket, deleteBasketItem, getBasket } from '../../../services';
import { useGlobalContext } from '../../../Context/GlobalContext';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QUERIES } from '../../../Constant/Queries';
import { useRouter } from 'next/router';
import { ROUTER } from '../../../Constant/Router';
import { BasketProps, BasketPropsItem } from '../../../shared/interface';
import { useTranslation } from 'react-i18next';

interface BasketCardProps{
  size?: string | undefined;
  headtitle?: string | undefined,
  basketData?:BasketProps |undefined
}

const BasketCard:React.FC<BasketCardProps> = ({size,headtitle,basketData}) => {


const {addBasketmutation}=useGlobalContext() || {}


const basketArr:BasketPropsItem[]=basketData?.items || []
console.log("basketArrrrr",basketArr);

  const divSize=size=== "small" ? "basket_small" :"basket_large"

  const p_size=size==="small"?"p16_small":"p22_large"
  const p14_size=size==="small"?"p14_small":"p18_large"

  const img_size=size==="small"? "img_small" :"img_large"
const whitebtn_size=size==="small" ? "whitebtn_small" :"whitebtn_large"

const pad_size=size==="small"? "padding4":"padding8"

const [basket,setBasket]=useState<BasketPropsItem[]>([])



const queryClient=useQueryClient()

useEffect(()=>{
if(basketData){

setBasket(basketArr)
}
},[basketData])



const {mutate:deleteBasketmutation}=useMutation({
  mutationFn:deleteBasket,
  onSuccess:(values)=>{
    queryClient.invalidateQueries(QUERIES.Basket)
    
toast.success("product deleted",{autoClose:1500})    
  },
  onError:(error)=>{
    toast.error("error deleted mutation")
  }
})



  const {mutate:clearBasketmutation}=useMutation({
    mutationFn:clearBasket,
    onSuccess:(values)=>{
      toast.success("basket cleared")
      queryClient.invalidateQueries(QUERIES.Basket)
    },
    onError:(error)=>{
      toast.error("silinmediii")
    
    }
  })
  const {t}=useTranslation()



const router=useRouter()
const {push}=router

const handlePush=()=>{
  push(ROUTER.CHECKOUT)
}



return (

  <div className={ ` bg-white  lg:bg-headerbg ${divSize} flex flex-col justify-between rounded overflow-y-auto`}>
    {basket?.length > 0 ? (
      <>
        <div className='pt-8'>
          <p className='font-mukta font-[600] text-modal_p text-[30px] letter3'>{headtitle}</p>
          <div className='flex justify-between'>
            <div className='flex gap-[5px]'>
              <img src="/icons/basket2.svg" alt="basket" />
              <p className='text-base roboto-medium font-medium pt-3 text-btnRed'>{basket?.length} {t("items")}</p>
            </div>
            <div className='relative top-[-20px] me-3 cursor-pointer'>
              <Image
                onClick={() => {
                  clearBasketmutation(String(basketData?.id));
                }}
                className='w-[40px] h-[30px] relative top-5 flex'
                src="/icons/delete3.svg"
                width={200}
                height={200}
                alt='del'
              />
            </div>
          </div>
          <div className='w-full px-2 lg:px-0'>
            <table className="w-full ">
              <tbody>
                {basket?.map((item) => (
                  <tr key={item.id} className={`border-b justify-between flex ${pad_size} border-t py-6 lg:py-8`}>
                    <td className='lg:w-1/6'>
                      <div className={`flex ${img_size} mt-4 lg:mt-0 `}>

                        <Image
                          className={`cursor-pointer rounded-full ${img_size}`}
                          width={200}
                          height={200}
                          src={item.img_url || "/pngs/pizzahut.svg"}
                          alt=''
                        />
                      </div>
                    </td>
                    <td className='w-full ps-4 lg:ps-0 lg:w-3/5  bg-orange-20'>
                    <div className='flex-col text-start  '>
                      <p className={` text-[22px] roboto-medium   font-medium text-modal_p`}>{item.name.slice(0, 25)}</p>
                      <p className={`${p14_size} roboto-medium font-medium text-modal_p`}>${item.price}</p>
                      </div>
                    </td>

                    <td className='flex'>
                      <div className={`flex flex-col font-medium items-center ${whitebtn_size} bg-headerbg lg:bg-white rounded-[50px]`}>
                        <Image
                          onClick={() => {
                            addBasketmutation(item.id);
                            queryClient.invalidateQueries(QUERIES.Basket);
                          }}
                          className='cursor-pointer w-[11px] h-[11px]'
                          width={200}
                          height={200}
                          src="/icons/plus3.svg"
                          alt=''
                        />
                        <p className='text-inputPlaceholder'>{item.count}</p>
                        <Image
                          onClick={() => {
                            deleteBasketmutation(item.id);
                            queryClient.invalidateQueries(QUERIES.Basket);
                          }}
                          className='cursor-pointer w-[23px] h-[16px]'
                          width={200}
                          height={200}
                          src="/icons/minus3.svg"
                          alt=''
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='mt-9'>
          <BtnCheckout onClick={handlePush}  total_price={basketData?.total_amount} size={size} />
        </div>
      </>
    ) : (
      <div className='pt-8'>
        <p className='font-mukta font-[600] text-modal_p text-[30px] letter3'>{headtitle}</p>
        <div className='flex gap-[5px]'>
          <img src="/icons/basketiconempty.svg" alt="basket" />
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <Image className='w-[263px] h-[236px]' width={200} height={200} src="/icons/emptybasket.svg" alt="emptybasket" />
          <p className='font-roboto letter3 font-medium text-[40px] text-btn-cncl'>OPPS!</p>
          <p className='font-roboto font-medium text-[40px] text-btn-cncl'>Basket Empty</p>
        </div>
        <div className=''>
          <button className={`${size === "small" ? "btn_small" : "btn_large"} roboto-medium mt-12 font-medium bg-btn-cncl w-full text-white rounded-full h-[41px] lg:h-[47px]`}>
            <div className='flex justify-between ps-6 items-center'>
              <p>Checkout</p>
              <div className={`w-[135px] h-[43px] rounded-full ${size === "small" ? "btn2_small" : "btn2_large"} bg-white text-btn-cncl flex items-center justify-center`}>
                <p>$0.00</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default BasketCard
