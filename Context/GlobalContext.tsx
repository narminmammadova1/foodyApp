import React, { createContext, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteCategory, deleteOffer, getCategory, getOffer } from "../services";
import { QUERIES } from "../Constant/Queries";
import { toast } from "react-toastify";


interface ContextProps {
    offerData:any[];
    selectedId: string | null;
    categoryData: any[]; 
    formComponent:any;
    setFormComponent:any;
    setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
    handleCategoryDelete: (categoryId: string) => void;
    handleOfferDelete: (offerId: string) => void;
  }



 interface ProviderProps{
    children: React.ReactNode;
 }

const GlobalContext = createContext <ContextProps |undefined>(undefined);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export const GlobalProvider:React.FC<ProviderProps> = ({ children }) => {

    const [formComponent, setFormComponent] = useState<undefined | JSX.Element>(undefined);

    const [selectedId, setSelectedId] = useState<string | null>(null);


    const queryClient=useQueryClient()

const { data: category } = useQuery(QUERIES.Categories, getCategory);

const categoryData=category?.data?.result.data;
console.log("contextdeki Categorydata", categoryData);

// const { data: productsData } = useQuery(QUERIES.Products, getCategory);
// console.log("productsData", productsData);

const { data: offers } = useQuery(QUERIES.Offers, getOffer);
const offerData=offers?.data?.result.data;

console.log("offersData", offerData);

    const { mutate:    handleCategoryDelete
    } = useMutation(deleteCategory, {
        onSuccess: (data) => {
            console.log("Deleted category:", data);

toast.success("Deleted Category",{autoClose:2000})
           queryClient.invalidateQueries(QUERIES.Categories);
        },
        
        onError: (error) => {
            console.error("Error deleting category:", error);
        },
    });


const {mutate:handleOfferDelete}=useMutation(deleteOffer,{
    onSuccess:(data)=>{

        console.log("Deleted Offer");

        toast.success("Deleted Offer",{autoClose:2000})
        queryClient.invalidateQueries(QUERIES.Offers);
    },
    onError:(error)=>{
        console.error("Error deleting offer")
        toast.error("error deleting offer")
    }}

    
)


const value:ContextProps={categoryData,
    offerData,
    selectedId, 
    formComponent,
     setFormComponent,
    setSelectedId,
    handleCategoryDelete,
    handleOfferDelete,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}