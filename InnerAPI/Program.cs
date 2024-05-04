using InnerAPI.Controllers;
using InnerAPI.Endpoints;
using InnerAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<SharedService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Replace with your client's origin
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:5173") // Replace with your client's origin
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors();

var sharedService = app.Services.GetRequiredService<SharedService>();


app.MapUsuariosEndpoints(sharedService);
app.MapLoginEndpoint(sharedService);
app.MapRegisterEndpoint(sharedService);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
