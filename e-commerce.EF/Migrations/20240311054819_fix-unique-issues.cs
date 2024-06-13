using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace e_commerce.EF.Migrations
{
    /// <inheritdoc />
    public partial class Fixuniqueissues : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Products_BrandID_CategoryID",
                table: "Products",
                columns: new[] { "BrandID", "CategoryID" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Products_BrandID_CategoryID",
                table: "Products");
        }
    }
}
