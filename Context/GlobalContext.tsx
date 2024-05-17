import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addProduct, deleteCategory, deleteOffer, deleteProduct, deleteRestaurant,
     getCategory, getOffer, getProduct, getRestaurant, getRestaurantById, getUser } from "../services";
import { QUERIES } from "../Constant/Queries";
import { toast } from "react-toastify";
import { RestProps, UserDataProps } from "../shared/interface";


interface ContextProps {
    isAdmin:boolean;
    setIsAdmin:any ;
    userData: UserDataProps;
    offerData:any[];
    selectedId: string |number | null |undefined;
    idForFilter:string |number | null |undefined;
    setSelectedId: React.Dispatch<React.SetStateAction<string | null | number |undefined>> | undefined
    setIdForFilter:React.Dispatch<React.SetStateAction<string | null | number |undefined>> | undefined
    categoryData: any[]; 
   
    restaurantData:RestProps[]  | undefined;

    // restaurantType:string;
    // addProductMutation:(newProduct:any)=>void 
    defaultText:string,
    setDefaultText:any,
    productsData:any[],
    formComponent:any;
    setFormComponent:any;
    isEdit:boolean;
    setIsEdit:any;
    isBasket:boolean;
    setIsBasket:any;
    isAvatar:boolean;
    setIsAvatar:any;
    isName:boolean;
    setIsName:any;
    isLoginBtn:boolean;
    setIsLoginBtn:any;
    isUser:boolean;
    setIsUser:any;
    profilImg:string | null | undefined;
    setProfilImg:React.Dispatch<React.SetStateAction<string | null>> | undefined
    letters:string
    setLetters:any,
   showPassword:boolean
   setShowPassword:React.Dispatch<React.SetStateAction<boolean>>;
   togglePassword:()=>void,
   selectedRestaurant:any,
   setSelectedRestaurant:React.Dispatch<React.SetStateAction<object | null>> | undefined;
   isLoading:boolean;
   currentProduct:any[];
   setCurrentProduct:any
   
  }



 interface ProviderProps{
    children: React.ReactNode;
 }

const GlobalContext = createContext <ContextProps |undefined>(undefined);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export const GlobalProvider:React.FC<ProviderProps> = ({ children }) => {
    const [isAdmin, setIsAdmin] = React.useState(false);

    const [formComponent, setFormComponent] = useState<undefined | JSX.Element>(undefined);

const [defaultText,setDefaultText]=useState("")

    const [selectedId, setSelectedId] = useState<string | null |number | undefined>(null);

    const [idForFilter, setIdForFilter] = useState<string | null | number |undefined>(null);

 const [isEdit,setIsEdit]=useState(false)
const [profilImg,setProfilImg]= useState<string | null >(null);
const[isUser,setIsUser]=useState(false)
 const [isBasket,setIsBasket]=useState(false)
 const[isAvatar,setIsAvatar]=useState(false)
 const[isName,setIsName]=useState(false)
 const[isLoginBtn,setIsLoginBtn]=useState(true)
 const [letters,setLetters]=useState("")

 const[currentProduct,setCurrentProduct]=useState([])

 const [selectedRestaurant,setSelectedRestaurant]=useState<string | null |object>(null)

    const queryClient=useQueryClient()


    const { data: User, isLoading, isError } = useQuery(QUERIES.User, getUser);

const userData=User?.user
const { data: category } = useQuery(QUERIES.Categories, getCategory);

const categoryData=category?.data?.result.data;
console.log("contextdeki Categorydata", categoryData)

const { data: offers } = useQuery(QUERIES.Offers, getOffer);
const offerData=offers?.data?.result.data;

console.log("offersData", offerData);


const {data:restaurants}=useQuery(QUERIES.Restaurants,getRestaurant)

 const restaurantData=restaurants?.data?.result.data || []
 console.log("restaurant data",restaurantData);
 
const{data:products}=useQuery(QUERIES.Products,getProduct)
const productsData=products?.data?.result.data


// const{mutate:editCategoryMutation}=useMutation(editCategory,
//     {onSuccess:(data)=>{

//         console.log("categoryedit mutation isleyir");
//         toast.success("Edited Category",{autoClose:2000})
//         queryClient.invalidateQueries(QUERIES.Categories)
        
//     },
// onError:(err)=>{
//     console.log("error edit categ mutation");
//     toast.error("error edit mutation")
    
// }}
    
    
// )

 const [showPassword,setShowPassword]=useState(false)

const togglePassword=()=>{

  setShowPassword(!showPassword)
}





// const {mutate:addProductMutation}=useMutation(addProduct,{

//     onSuccess:(data)=>{

//         console.log("Product added mutation");
//         toast.success("Added product succesdeki",{autoClose:2000})
//         queryClient.invalidateQueries(QUERIES.Products)
        
//     },
//     onError:(error)=>{
//         console.error("Error Product offer")
//         toast.error("error Adding Product")
//     }
// })



const value:ContextProps={
    isAdmin, setIsAdmin,
    userData,
    categoryData,
    offerData,
    restaurantData,
    productsData,
    selectedId, 
    formComponent,
    idForFilter,
    setIdForFilter,
     setFormComponent,
    setSelectedId,
isEdit,
setIsEdit,
isBasket,
    setIsBasket,
    isAvatar,
    setIsAvatar,
    isName,
    setIsName,
    isLoginBtn ,
    setIsLoginBtn ,
    isUser,
    setIsUser ,
    profilImg,
    setProfilImg,
    letters,
    defaultText,
    setDefaultText,
    setLetters,
    showPassword,
    setShowPassword,
    togglePassword,
    selectedRestaurant,
    setSelectedRestaurant,
    isLoading,currentProduct,
    setCurrentProduct

    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}




