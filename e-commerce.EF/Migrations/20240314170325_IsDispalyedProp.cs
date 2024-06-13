using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace e_commerce.EF.Migrations
{
    /// <inheritdoc />
    public partial class IsDispalyedProp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isDisplayed",
                table: "Categories",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isDisplayed",
                table: "Brands",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isDisplayed",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "isDisplayed",
                table: "Brands");
        }
    }
}
