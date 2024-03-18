export interface Brand {
    id: string,
    name: string,
    image: string,
    slug: string,
    isDisplayed: boolean
}

export interface PostBrand {
    name: string,
    slug: string,
    image: string | null
    isDisplayed: boolean
}
