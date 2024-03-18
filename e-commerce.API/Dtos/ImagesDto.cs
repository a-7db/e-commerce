namespace e_commerce.API.Dtos
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
