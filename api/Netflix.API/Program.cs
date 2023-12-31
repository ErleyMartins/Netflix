using Microsoft.EntityFrameworkCore;
using Netflix.Data;
using Netflix.Data.Contexts;
using Netflix.Data.Interfaces;
using Netflix.Service;
using Netflix.Service.Interfaces;

const string myPolicy = "Neflix-APP";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<MovieContext>(context =>
    context.UseSqlite(builder.Configuration.GetConnectionString("Default"))
);

builder.Services.AddCors();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Data
builder.Services.AddScoped<IMovieRepository, MovieRepository>();

// Service
builder.Services.AddScoped<IMovieService, MovieService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(cors => cors.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
