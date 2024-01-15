using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cheesecake_Ordering.Data.Migrations
{
    public partial class AddTotal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Total",
                table: "Cheesecakes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Total",
                table: "Cheesecakes");
        }
    }
}
