using InnerAPI.Dtos.HeadOffice;
using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Utils;

namespace InnerAPI.Controllers
{
  public static class headOfficeController
  {
    const string GetNameheadOfficeEndpoint = "GetheadOffice";
    public static RouteGroupBuilder MapheadOfficeEndpoint(this WebApplication app, SharedService sharedService)
    {
      var group = app.MapGroup("headOffice").WithParameterValidation();
      List<HeadOffice> headOffices = sharedService.HeadOffices;
      HeadOfficeServices headOfficeServices = new HeadOfficeServices(sharedService);

      //GET /headOffice/{id}
      group.MapGet("/{id}", (uint id) =>
      {
        HeadOffice? headOffice = headOffices.Find(headOffice => headOffice.Id == id);
        return headOffice is null ? Results.NotFound() : Results.Ok(headOffice);
      }).WithName(GetNameheadOfficeEndpoint);

      //GET /headOffice/{id}/branches
      group.MapGet("/{id}/branches", (uint id) =>
      {
        HeadOffice? headOffice = headOffices.Find(headOffice => headOffice.Id == id);
        if (headOffice == null)
        {
          return Results.BadRequest(new { success = false, message = "headOffice not found" });
        }
        return Results.Ok(headOffice.Branches);
      });

      // POST /headOffice/register
      group.MapPost("/register", (RegisterHeadOfficeDto newheadOffice) =>
      {
        var exists = headOffices.Exists(r => r.Name == newheadOffice.Name || r.Email == newheadOffice.Email || r.CNPJ == newheadOffice.Cnpj || r.Domain == newheadOffice.Domain);
        if (!exists)
        {
          var createdheadOffice = headOfficeServices.Register(newheadOffice);
          return Results.CreatedAtRoute(GetNameheadOfficeEndpoint, new { id = createdheadOffice.Id }, createdheadOffice);
        }
        else
        {
          return Results.BadRequest(new { success = false, message = "Name, Email, CNPJ, or Domain already used" });
        }
      });

      // PUT /headOffice/{id}
      group.MapPut("/{id}", (uint id, UpdateHeadOfficeDto updateheadOffice) =>
      {
        var index = headOffices.FindIndex(headOffice => headOffice.Id == id);

        if (index == -1)
        {
          return Results.NotFound();
        }

        headOffices[index] = new headOffice(
                  id,
                  updateheadOffice.Name,
                  updateheadOffice.Email,
                  updateheadOffice.Password,
                  updateheadOffice.Domain,
                  updateheadOffice.Cnpj);

        return Results.NoContent();
      });

      // DELETE /headOffice/{id}
      group.MapDelete("/{id}", (int id) =>
      {
        bool deleted = headOfficeServices.Delete(id); // Corrigido para usar um método que retorna um booleano
        if (!deleted)
        {
          return Results.NotFound();
        }
        return Results.NoContent();
      });

      return group;
    }
  }
}
