

export type Products = {
    id:number; 
    title:string; 
    description:string;
    category:string; 
    price:string; 
    discountPercentage:number; 
    rating:number;
    tags:string[];
    brand:string;
    sku:string;
    dimensions:Dimensions;
    warrantyInformation:string; 
    shippingInformation:string; 
    availabilityStatus:string; 
    reviews:Reviews[]; 
    returnPolicy:string;
    minimumOrderQuantity:number;    
    images:string[];
    thumbnail:string;

}

export type Dimensions = {
    width:number; 
    height:number;
    depth:number;
}

export type Reviews = {
    rating:number;
    comment:string;
    date:Date; 
    reviewerName:string;
    reviewerEmail:string; 
}


export type Meta = {
    createdAt:Date; 
    updatedAt:Date; 
    barcode:string;
    qrCode:string;
}