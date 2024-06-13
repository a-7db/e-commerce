using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace e_commerce.EF.Migrations
{
    /// <inheritdoc />
    public partial class AfterChangeNamespaces : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Products_BrandID_CategoryID",
                table: "Products");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_ParentCategoryID",
                table: "Categories",
                column: "ParentCategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Categories_ParentCategoryID",
                table: "Categories",
                column: "ParentCategoryID",
                principalTable: "Categories",
                principalColumn: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Categories_ParentCategoryID",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_ParentCategoryID",
                table: "Categories");

            migrationBuilder.CreateIndex(
                name: "IX_Products_BrandID_CategoryID",
                table: "Products",
                columns: new[] { "BrandID", "CategoryID" });
        }
    }
}
