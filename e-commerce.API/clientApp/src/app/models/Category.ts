export class Category {
    constructor(
        Id: string,
        title: string,
        imageUri: string,
        slug: string,
        parentCategoryId: string | null
    ) {
        this.Id = Id
        this.title = title
        this.imageUri = imageUri
        this.slug = slug
        this.parentCategoryId = parentCategoryId
    } Id: string
    title: string
    imageUri: string
    slug: string
    parentCategoryId: string | null
}
