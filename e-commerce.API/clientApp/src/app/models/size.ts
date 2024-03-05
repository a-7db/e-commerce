export class Size {
    id: string
    size: string
    price: number
    discount: number
    imagesUri: string[]

    constructor(
        id: string,
        size: string,
        price: number,
        discount: number,
        imagesUri: string[]
    ) {
        this.id = id
        this.size = size
        this.price = price
        this.discount = discount
        this.imagesUri = imagesUri
    }
}
