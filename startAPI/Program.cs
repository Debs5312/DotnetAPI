using Application.Contents.Command;
using Application.IRepository;
using DataAccess;
using DataAccess.Repository;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connString = builder.Configuration.GetConnectionString("DefaultConn");
builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlServer(connString));
builder.Services.AddScoped<IContentRepo, ContentRepo>();
builder.Services.AddMediatR(typeof(CreateContent)); 
builder.Services.AddCors(opt => {
    opt.AddPolicy("CorsPolicy", policy => {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173");
    });
});   

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
