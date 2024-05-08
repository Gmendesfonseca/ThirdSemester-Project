using InnerAPI.Controllers;
using InnerAPI.Services;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

// Registra SharedService como um singleton
builder.Services.AddSingleton<SharedService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000", "http://localhost:5173") // Adicione aqui as origens do seu cliente
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
    options.AddPolicy("AnotherPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:5173") // Adicione aqui as origens do seu cliente
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Adiciona serviços ao contêiner.

builder.Services.AddControllers();
// Saiba mais sobre a configuração do Swagger/OpenAPI em https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors();

// Obtém as instâncias dos serviços diretamente do contêiner de serviços
var sharedService = app.Services.GetRequiredService<SharedService>();

app.MapStudentEndpoint(sharedService);
app.MapInstitutionEndpoint(sharedService);
app.MapProfessorEndpoint(sharedService);
app.MapLoginEndpoint(sharedService);
app.MapPostEndpoint(sharedService);

// Configura o pipeline de requisições HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

