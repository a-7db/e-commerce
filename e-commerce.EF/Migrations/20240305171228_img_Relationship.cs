using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace e_commerce.EF.Migrations
{
    /// <inheritdoc />
    public partial class img_Relationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Image");

            migrationBuilder.CreateTable(
                name: "ImagesUri",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ImageUri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SizeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImagesUri", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ImagesUri_Sizes_SizeID",
                        column: x => x.SizeID,
                        principalTable: "Sizes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ImagesUri_SizeID",
                table: "ImagesUri",
                column: "SizeID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ImagesUri");

            migrationBuilder.CreateTable(
                name: "Image",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SizeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ImageUri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Image_Sizes_SizeID",
                        column: x => x.SizeID,
                        principalTable: "Sizes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Image_SizeID",
                table: "Image",
                column: "SizeID");
        }
    }
}
