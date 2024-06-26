import React from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext'
import { CategoryDataProps, CategoryProps } from '../../../shared/interface'

const SidebarClient:React.FC<CategoryDataProps> = ({categoryData}) => {


// export interface CategoryProps{
//   name:string,
//   img_url:string,
//   id: string | number 
// }
  
  const {selectedId,setSelectedId}=useGlobalContext() || {}
  return (
    <div className='w-[251px] hidden lg:block  pt-6 bg-headerbg'>

        <ul className='ps-4 flex flex-col gap-9'>
{categoryData?.map((category)=>(
        <li key={category.id} onClick={()=>{
          setSelectedId &&   setSelectedId(category.id)
          // handleFilter()
        }} className='flex gap-4 bg- text-blackli   letter3  cursor-pointer font-mukta  text-[20px]'><img className='  w-[28px] h-[28px]  rounded-full ' width="28px" height="28px" src={category?.img_url} alt="" />{category?.name.slice(0,15)}</li>


))}
       
        </ul>
    </div>
  )
}

export default SidebarClient
