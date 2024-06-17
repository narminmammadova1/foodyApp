import React, { useCallback, useRef } from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { ProductProps } from '../../../shared/interface';
import Image from 'next/image';
import { useMutation, useQueryClient } from 'react-query';
import { addBasket } from '../../../services';
import { toast } from 'react-toastify';
import { QUERIES } from '../../../Constant/Queries';
import { useTranslation } from 'react-i18next';

interface ProductTableProps{
  currentProducts:ProductProps[]
}

const ProductsTable:React.FC<ProductTableProps>
 = ({currentProducts}) => {

  const {isUser,addBasketmutation}=useGlobalContext() || {}

 const {t}=useTranslation()
  const queryClient=useQueryClient()
  // const{mutate:addBasketmutation}=useMutation({
  //   mutationFn:addBasket,
  //   onSuccess:(values)=>{
  //     console.log("baskete add edilen",values);
  //     toast.success("added basket")
  //     queryClient.invalidateQueries(QUERIES.Basket)
  //   },
  //   onError: (error: any) => {
  //     console.error("Error adding to basket:", error.message);
  //     toast.error("Failed to add product to basket");
  //   }
  // })


  
  return (
    <div className=' bg-headerbg rounded-[4px]  lg:ms-[57px] max-h-[961px] w-full lg:w-[846px]  overflow-y-auto'>
        <h1 className='text-center font-roboto font-[700] text-[25px] text-modal_p my-10'>{t("Products")}</h1>
      <table className=" w-full ">
 
  <tbody>
 
 
{

currentProducts && currentProducts?.length>0 ? (currentProducts?.map((currentProduct)=>(
  

<tr key={currentProduct.id} className=' border-b-2 border-t-2 py-5 '>
      <td  className=' flex justify-center  ps-[42px] items-center py-3 lg:py-7'><img width="57px" height="53px" src={currentProduct?.img_url}alt="product" /></td>
      <td className='ps-4 roboto-medium font-medium '><p className='text-lg text-modal_p'>{currentProduct?.name}</p>
      <p className='text-sm text-par3-text '>{currentProduct?.description}</p></td>
      <td className=''>
        <p className=' roboto-medium font-medium    text-[12px] text-par3-text'>from <span className='text-base text-modal_p'>from{currentProduct?.price}</span> </p></td> 
       <td className=''> 
     <div onClick={()=>{
      if(isUser){
        addBasketmutation(currentProduct.id)

      }
      else{
        toast.error("please login")
      }


     }} className=' cursor-pointer  flex justify-center items-center w-10 border-[1px] border-btn-cncl h-10 rounded-full '> 
            <Image className='w-[14px] h-[14px]' width={200} height={200} src="/icons/plus2.svg" alt=''/>

            </div>
            </td>

    </tr>
    
))) :(
  <tr>
    <td className="text-center py-4">{t("There is no product")}</td>
  </tr>
)}

   


   

 
   
    
  </tbody>
</table>



    </div>
  )
}

export default ProductsTable

