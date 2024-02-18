export class Product {
    id: string;
    name: string;
    price: number;
    image: string;
    sizeId: string;
    brandId: string
    categoryId: string;
    discount: number;
    slug: string;
    createdAt: Date;

    constructor(id: string, name: string, price: number, image: string
        ,sizeId: string, brandId: string, categoryId: string, discount: number
        ,slug: string, createdAt: Date) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.sizeId = sizeId;
        this.categoryId = categoryId;
        this.brandId = brandId;
        this.discount = discount;
        this.slug = slug;
        this.createdAt = createdAt;
    }
}
