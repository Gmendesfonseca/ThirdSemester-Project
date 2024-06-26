using InnerAPI.Controllers;
using InnerAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Registra SharedService como um singleton
builder.Services.AddSingleton<SharedService>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Substitua pela origem do seu cliente
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
    options.AddPolicy("AnotherPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:5173") // Substitua pela origem do seu cliente
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Adiciona servi�os ao cont�iner.

builder.Services.AddControllers();
// Saiba mais sobre a configura��o do Swagger/OpenAPI em https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors();

// Obt�m as inst�ncias dos servi�os diretamente do cont�iner de servi�os
var sharedService = app.Services.GetRequiredService<SharedService>();

app.MapStudentEndpoint(sharedService);
app.MapInstitutionEndpoint(sharedService);
app.MapProfessorEndpoint(sharedService);
app.MapLoginEndpoint(sharedService);

// Configura o pipeline de requisi��es HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

