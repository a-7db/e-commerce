export interface Size {
    id?: string
    productSize: string
    price: number
    discount: number
    imagesUri: imgsList[]
}


export interface imgsList {
    imageUri: string
}