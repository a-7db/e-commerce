namespace e_commerce.Entities.Dtos
{
    public record ImagesDto
    (
        Guid ID,
        string ImageUri
    );
    
    public record PostImagesDto
    (
        string ImageUri
    );

}
