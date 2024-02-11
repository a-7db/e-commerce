export class Product {
    id: string;
    name: string;
    price: number;
    image: string;

    constructor(id: string, name: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
