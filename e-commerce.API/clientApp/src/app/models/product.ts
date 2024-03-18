import { Size } from "./size";

export interface Product {
    id: string;
    name: string;
    sizes: Size[];
    brand: string
    category: string;
    slug: string;
    createdAt: Date;
}


export interface NewProduct {
    name: string,
    sizes: Size[],
    brandId: string,
    categoryId: string,
    slug: string
}
