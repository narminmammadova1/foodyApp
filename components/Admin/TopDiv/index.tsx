




import React, { useEffect, useState } from 'react';
import AddButton from '../AddButton';
import AdminModal from '../../UI/AdminModal';
import { useModal } from '../../../shared/hooks/useModal';
// import { ROUTER } from '../../../Constant/Router'
import { useRouter } from 'next/router';
import FormAddCategory from '../../UI/FormAddCategory';
import { useGlobalContext } from '../../../Context/GlobalContext';

interface TopDivProps {
  addButton?: boolean;
  select?: boolean;
  title: string;
  btnText?: string;
  selectText?: string;
  onClick?: () => void;
}

const TopDiv: React.FC<TopDivProps> = ({ addButton, select, title, btnText, selectText, onClick }) => {
  // const [buttonText,setButtonText]=useState("")

  const { isOpen, open, close } = useModal();

  const router = useRouter();
  const { pathname } = router;

  const {restaurantData,categoryData,setSelectedId,selectedId,defaultText,setDefaultText,idForFilter,setIdForFilter
  } = useGlobalContext() || {};

  let options=[]
  // let defaultText="Select Type"

if(pathname==="/admin/products"){

  // options=restaurantType ||  []
  options=restaurantData||  []

  setDefaultText("Restaurant Type")
}
if(pathname==="/admin/restaurants"){

     options=categoryData ||  []

  setDefaultText("Category Type")
}


// useEffect(()=>{

//   setDefaultText("")
// },[selectedId])


const handleSelectChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
setIdForFilter && setIdForFilter(e.target.value)
}

console.log("topdivde restData",restaurantData);

// useEffect(()=>{
//   if(!selectedId){setDefaultText("")}
// },[defaultText,selectedId])
  return (
    <div className="bg-dark-div mb-[52px] md:justify-center mx-2
      lg:mx-0  w-full lg:flex lg:justify-between lg:items-center px-8 py-8 lg:py-4 rounded-[14px]">
      <h2 className=" font-roboto text-xl font-medium  text-par-text  lg:ps-6 py-4">{title}</h2>
      <div className="  md:justify-center md:items-center lg:flex lg:me-3 gap-5 justify-end">
        {select && (
          <select className="bg-input-gray md:w-full  rounded-[4px] h-[37px] lg:rounded-2xl lg:w-[199px]  lg:h-[35px] modal-input" name="restaurant_id" id=""
          onChange={handleSelectChange}
          // value={defaultText}
          value={idForFilter || ""}
          >
            <option value=""
           
            >{defaultText}</option>
            {options && Array.isArray(options) &&
           options.map((option, index) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        )}
        {addButton &&   <div className='mt-2 lg:mt-0'>         <AddButton sizeMob="w-full ps-4" onClick={onClick} btnSize="w-[168px]" btnText={btnText} btncolor="btn-pink" />
</div>   
        }
  
      </div>
    </div>
  );
};

export default TopDiv;





