export interface Category {
    id: string
    title: string
    imageUri: string
    slug: string
    parentCategory: Category | null
    isDisplayed: boolean
}


export interface PostCategory {
    title: string
    imageUri: string | null
    slug: string
    parentCategoryId: string | null
    isDisplayed: boolean
}
