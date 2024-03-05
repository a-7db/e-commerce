import { Size } from "./size";

export class Product {
    id: string;
    name: string;
    sizes: Size[];
    brand: string
    category: string;
    slug: string;
    createdAt: Date;

    constructor(id: string, name: string, sizes: Size[]
        ,brandId: string, categoryId: string
        ,slug: string, createdAt: Date) {

        this.id = id;
        this.name = name;
        this.sizes = sizes;
        this.category = categoryId;
        this.brand = brandId;
        this.slug = slug;
        this.createdAt = createdAt;
    }
}
