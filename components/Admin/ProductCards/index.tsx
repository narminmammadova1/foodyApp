import React from 'react'
import Image from 'next/image'
import DeleteModal from '../../Modals/DeleteModal'
import { useModal } from '../../../shared/hooks/useModal'
import AdminModal from '../../UI/AdminModal'
import { useGlobalContext } from '../../../Context/GlobalContext'
import ProductModal from '../../Modals/ProductModal'
import { ProductProps } from '../../../shared/interface'

interface ProductCardsProps{
  product:ProductProps | undefined
}

const ProductCards:React.FC<ProductCardsProps> = ({product}) => {
  const {isEdit,setIsEdit,selectedId, setSelectedId,formComponent,setFormComponent}=useGlobalContext() || {}

  //  const  {isOpen,open,close,isOpenDelModal,openDelModal,closeDelModal}=useModal()

  const {isOpen,open,close,isOpenDelModal,isOpenProductModal,openDelModal,openProductModal,closeDelModal,closeProductModal}=useModal()

  return (
    <>
    <ProductModal isEdit  onClose={closeProductModal} isOpen={isOpenProductModal} />

      <div className=' bg-white rounded-[5px] h-[273px]  w-[190px] flex flex-col justify-center  px-4'>
        <div className=' w-[163px] h-[163px]'>
        <Image className=' w-full  object-cover' width={100} height={100} src={product?.img_url || ""} alt='product'/>
        </div>
        <DeleteModal isProduct delDescription="product, it will not come back!"  isOpenDelModal={isOpenDelModal} onCloseDelModal={closeDelModal} colorModal='red-950'/>
    
        <div className='flex-col justify-between items-end  w-[163px]'>
            <div className=' flex flex-col justify-between h-14  font-medium  '>
        <p className=' text-lg  text-text-darkk'>{product && product.name ? product.name.slice(0,13) :"name not availabla"}</p>
        <p className=' text-par2-text text-[14px]'>{ product && product.rest_id ? product.rest_id.slice(0,25):"product not available"}</p>
        {/* <p className=' text-par-blue-text text-[12px] mt-2'>{product.price}$</p> */}
        </div>
        <div className='flex justify-between gap-[6px]'>
        <p className=' text-par-blue-text text-[12px] mt-2'>{product && product.price ? product.price :"price not available"}$</p>
<div className='flex'>
            <img onClick={()=>{
              openProductModal()
              if(setSelectedId){
                product && setSelectedId &&        setSelectedId(product.id)
                
              }
            }}  className=' cursor-pointer' src="/icons/edit.svg" alt="" />
            <img  onClick={()=>{

              openDelModal()

              if(setSelectedId){
            product && setSelectedId &&  setSelectedId(product.id )
                
              }
            }} className=' cursor-pointer'  src="/icons/delete.svg" alt="" />
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductCards
