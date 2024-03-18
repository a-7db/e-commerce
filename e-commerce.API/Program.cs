
using e_commerce.API.Data;
using e_commerce.API.Services.ICategory;
using e_commerce.API.Services.IProduct;
using e_commerce.API.Services.ISize;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace e_commerce.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddDbContext<DataContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("main")));

            builder.Services.AddControllers(options => options.SuppressAsyncSuffixInActionNames = false)
                .AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddTransient<IProductService, ProductService>();
            builder.Services.AddTransient<ISizesService, SizesService>();
            builder.Services.AddTransient<ICategoryService, CategoryService>();

            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder => {
                    builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
