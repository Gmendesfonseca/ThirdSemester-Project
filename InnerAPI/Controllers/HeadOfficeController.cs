using InnerAPI.Dtos.HeadOffice;
using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Utils;

namespace InnerAPI.Controllers
{
  public static class HeadOfficeController
  {
    const string GetNameHeadOfficeEndpoint = "GetheadOffice";
    public static RouteGroupBuilder MapHeadOfficeEndpoint(this WebApplication app, SharedService sharedService)
    {
      var group = app.MapGroup("headOffice").WithParameterValidation();
      List<HeadOffice> headOffices = sharedService.HeadOffices;
      HeadOfficeServices headOfficeServices = new HeadOfficeServices(sharedService);

      //GET /headOffice/{id}
      group.MapGet("/{id}", (uint id) =>
      {
        HeadOffice? headOffice = headOffices.Find(headOffice => headOffice.Id == id);
        return headOffice is null ? Results.NotFound() : Results.Ok(headOffice);
      }).WithName(GetNameHeadOfficeEndpoint);

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
          var createdHeadOffice = headOfficeServices.Register(newheadOffice);
          return Results.CreatedAtRoute(GetNameHeadOfficeEndpoint, new { id = createdHeadOffice.Id }, createdHeadOffice);
        }
        else
        {
          return Results.BadRequest(new { success = false, message = "Name, Email, CNPJ, or Domain already used" });
        }
      });

      // PUT /headOffice/{id}
      group.MapPut("/{id}", (uint id, UpdateHeadOfficeDto updateHeadOffice) =>
      {
        var index = headOffices.FindIndex(headOffice => headOffice.Id == id);

        if (index == -1)
        {
          return Results.NotFound();
        }

        headOffices[index] = new HeadOffice(
                  id,
                  updateHeadOffice.Name,
                  updateHeadOffice.Email,
                  updateHeadOffice.Password,
                  updateHeadOffice.Domain,
                  updateHeadOffice.Cnpj);

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
