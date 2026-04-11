import { Products } from "@/types/products"
import { api } from "./axios"



export const getProductDetails = async(id:number) => {

    const response = await api.get<Products>(`/${id}`); 
    return response.data; 
}

export const getAllProducts = async() => {
    const response = await api.get<{
        products: Products[]
    }>(``); 
    return response.data.products; 
}

/* Esto lo he comentado porque me di cuenta que el search busca cosas que no debe
export const searchProduct = async(name:string)=>{
    const response = await api.get<{
        products:Products[]
    }>(`/search?q=${name}`); 
    return response.data.products;
}*/