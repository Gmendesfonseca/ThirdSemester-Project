using InnerAPI.Dtos.Institution;
using InnerAPI.Models;
using InnerAPI.Utils;
using Microsoft.AspNetCore.Mvc;

namespace InnerAPI.Controllers
{
    public class InstitutionController : ControllerBase
    {
        // GET /institution
        // GET /institution/{id}
        // POST /institution
        // PUT /institution
        //DELETE /institution
        List<Institution> institutions;
        private readonly SharedService _sharedService;

        public InstitutionController(SharedService sharedService)
        {
            _sharedService = sharedService;
            institutions = _sharedService.GetInstitution();
        }

        public List<Institution> GetInstitution()
        {
            return this.institutions;
        }

        public void delete(int id)
        {
            var index = institutions.FindIndex(institution => institution.IdInstituicao == id);
            if (index == -1)
            {
                throw new ArgumentException("Institution not found");
            }
            institutions.RemoveAt(index);
        }
    }
}
