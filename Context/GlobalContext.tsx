import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addBasket, addProduct, deleteCategory, deleteOffer, deleteProduct, deleteRestaurant,
     getBasket,
     getCategory, getOffer, getOrder, getOrderHistory, getProduct, getRestaurant, getRestaurantById, getUser, 
     getUserOrder} from "../services";
import { QUERIES } from "../Constant/Queries";
import { toast } from "react-toastify";
import { BasketProps, RestProps, UserDataProps } from "../shared/interface";


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
    defaultText:string,
    setDefaultText:any,
    productsData:any[],
    userOrdersData:any[],
    orderData:any[] | undefined;
    basketData:BasketProps;
    formComponent:any;
    historyData:any[];
    setFormComponent:any;
    isEdit:boolean;
    setIsEdit:any;
    isBasket:boolean;
    setIsBasket:any;
    isAvatar:boolean;
    setIsAvatar:any;
   myOrder:any[] | undefined,
   orderId:string | number |null | undefined;
   setOrderId:React.Dispatch<React.SetStateAction<string | null |number | undefined>>,
   setMyOrder: React.Dispatch<React.SetStateAction<any[] | undefined>>;
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
   setCurrentProduct:any,
   addBasketmutation:any,
   newImg:any,
   setNewImg:any
   
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

 const [myOrder,setMyOrder]=useState<any[] | undefined>([])
const [orderId,setOrderId]=useState<string | null |number | undefined>(null)


const[newImg,setNewImg]=useState("")
    const queryClient=useQueryClient()


    const { data: User, isLoading, isError } = useQuery(QUERIES.User, getUser);
const userData=User?.user


const { data: category } = useQuery(QUERIES.Categories, getCategory);
const categoryData=category?.data?.result.data;

const { data: offers } = useQuery(QUERIES.Offers, getOffer);
const offerData=offers?.data?.result.data;


const {data:restaurants}=useQuery(QUERIES.Restaurants,getRestaurant)
 const restaurantData=restaurants?.data?.result.data || []

 
const{data:products}=useQuery(QUERIES.Products,getProduct)
const productsData=products?.data?.result.data


 const{data:basket}=useQuery(QUERIES.Basket,getBasket)
 const  basketData=basket?.data.result.data || []


 const {data:userOrders}=useQuery(QUERIES.UserOrder,getUserOrder)
 const userOrdersData=userOrders?.data?.result.data || []
 

 const {data:Orders}=useQuery(QUERIES.Order,getOrder)

 const orderData=Orders?.data?.result?.data || []
 


 const{data:history}=useQuery(QUERIES.OrderHistory,getOrderHistory)

 const historyData=history?.data?.result?.data



const{mutate:addBasketmutation}=useMutation({
    mutationFn:addBasket,
    onSuccess:(values)=>{
      toast.success("added basket",{autoClose:1000})
      queryClient.invalidateQueries(QUERIES.Basket)
    },
    onError: (error: any) => {
      console.error("Error adding to basket:", error.message);
      toast.error("Failed to add product to basket");
    }
  })
 const [showPassword,setShowPassword]=useState(false)

const togglePassword=()=>{

  setShowPassword(!showPassword)
}


useEffect(() => {
  if (User) {
    setIsUser(true);
  } else {
    setIsUser(false);
  }
}, [User]);

const value:ContextProps={
  newImg,setNewImg,
    isAdmin, setIsAdmin,
    userData,
    categoryData,
    offerData,
    orderData,
    historyData,
    restaurantData,
    productsData,
    basketData,
    userOrdersData,
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
    setCurrentProduct,
    addBasketmutation,
  myOrder,
   setMyOrder,
   orderId,
   setOrderId,
   
    }



    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}




