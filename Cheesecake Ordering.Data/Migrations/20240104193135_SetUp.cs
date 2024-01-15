using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheesecake_Ordering.Data.Migrations
{
    public partial class SetUp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cheesecakes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BaseFlavor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Toppings = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialRequest = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    DeliveryDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cheesecakes", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cheesecakes");
        }
    }
}
