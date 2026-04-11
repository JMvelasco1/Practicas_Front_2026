'use client'; 
import { createContext,ReactNode,useContext,useEffect,useState } from "react";
import {Products} from "@/types";



type ListContextType = {
    list:Products[];
    addToList:(product:Products) => void; 
    deleteFromList:(product:Products)=>void; 
    countProductsFromList:(list:Products[]) => number; 
    isInList:(id:number,list:Products[]) => boolean
}

 const ProductsContext = createContext<ListContextType | null>(null);
 
 
 export const ProductsProvider = ({children}:{children:ReactNode}) => {
    
    const [list,setList] = useState<Products[]>([]);

    useEffect(()=>{
        const list = localStorage.getItem('list') ;
        if(list){
            setList(JSON.parse(list) as Products[]);
        }
    },[])

    useEffect(()=>{
        console.log(list)
    },[list])

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

    const addToList = (product:Products) => {
        setList([...list,product]);
    }

    const deleteFromList = (product:Products) =>{
        setList(list.filter(x=> x !== product))
      
    }

    const countProductsFromList = (list:Products[]) => {
        return list.length
    }

    const isInList = (id:number,list:Products[]) => {

        if(list.find((e)=> {return e.id === id})){
            return true;
        }else{
            return false;
        }

        
    }

    return(
        <ProductsContext.Provider value={{list,addToList,deleteFromList,countProductsFromList,isInList}}>
            {children}
        </ProductsContext.Provider>
    )
}


export const useList = () => {
    const context = useContext(ProductsContext); 

    if(!context){
        throw new Error("No tienes acceso al contexto");
    }

    return context;
}
