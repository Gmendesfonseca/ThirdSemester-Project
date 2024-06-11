using InnerAPI.Dtos.HeadOffice;
using InnerAPI.Models;
using InnerAPI.Utils;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InnerAPI.Services
{
    public class HeadOfficeServices
    {
        private readonly List<HeadOffice> _headOffices;

        public HeadOfficeServices(SharedService sharedService)
        {
            _headOffices = sharedService.HeadOffices;
        }

        public HeadOffice Register(RegisterHeadOfficeDto register)
        {
            uint id = (uint)_headOffices.Count + 1;

            var newHeadOffice = new HeadOffice(
                id,
                register.Name,
                register.Email,
                register.Password,
                register.CNPJ,
                register.Domain
            );

            _headOffices.Add(newHeadOffice);
            return newHeadOffice;
        }

        public bool Delete(int id)
        {
            var headOffice = _headOffices.FirstOrDefault(h => h.Id == id);
            if (headOffice != null)
            {
                _headOffices.Remove(headOffice);
                return true;
            }
            return false;
        }

        public HeadOffice? GetById(uint id)
        {
            return _headOffices.FirstOrDefault(h => h.Id == id);
        }

        public List<Branch> GetBranches(uint id)
        {
            var headOffice = GetById(id);
            return headOffice?.Branches ?? new List<Branch>();
        }

        public bool Update(uint id, UpdateHeadOfficeDto updateHeadOffice)
        {
            var headOffice = _headOffices.FirstOrDefault(h => h.Id == id);
            if (headOffice != null)
            {
                headOffice.Name = updateHeadOffice.Name;
                headOffice.Email = updateHeadOffice.Email;
                headOffice.Password = updateHeadOffice.Password;
                headOffice.CNPJ = updateHeadOffice.Cnpj;
                headOffice.Domain = updateHeadOffice.Domain;
                return true;
            }
            return false;
        }
    }
}


// using InnerAPI.Dtos.HeadOffice;
// using InnerAPI.Dtos;
// using InnerAPI.Dtos.Login;
// using InnerAPI.Models;
// using InnerAPI.Utils;
// using System;
// using System.Collections.Generic;
// using System.Linq;

// namespace InnerAPI.Services
// {
//     public class HeadOfficeServices
//     {
//         List<HeadOffice> headOffices;

//         public HeadOfficeServices(SharedService _sharedService)
//         {
//             headOffices = _sharedService.HeadOffices;
//         }

//         public HeadOffice Register(RegisterHeadOfficeDto register)
//         {
//             uint id = (uint)headOffices.Count + 1;
//             string name = register.Name;
//             string email = register.Email;
//             string password = register.Password;
//             string domain = register.Domain;
//             string cnpj = register.CNPJ;
//             int type = 1;

//             Email Email = new Email();
//             if (!Email.IsValid(email))
//                 throw new ArgumentException("Email inválido.");

//             var existingUser = headOffices.Exists(r => r.Name == register.Name || r.Email == register.Email || r._cnpj == register.CNPJ || r._domain == register.Domain);
//             if (existingUser)
//             {
//                 throw new ArgumentException("Este email já está sendo usado por outro usuário.");
//             }

//             HeadOffice newHeadOffice = new HeadOffice(id, name, email, password, cnpj, domain);

//             headOffices.Add(newHeadOffice);

//             return newHeadOffice;
//         }

//         public HeadOffice Login(LoginDto user)
//         {
//             string email = user.Email;
//             string password = user.Password;

//             HeadOffice headOffice = headOffices.FirstOrDefault(i => i.Email == user.Email);

//             Email Email = new Email();
//             if (!Email.IsValid(email))
//                 throw new ArgumentException("Email inválido.");

//             if (headOffice == null)
//                 throw new ArgumentException("Usuário não encontrado.");

//             if (headOffice.Password != password)
//                 throw new ArgumentException("Senha incorreta.");

//             return headOffice;
//         }

//         public HeadOffice Update(int id, RegisterHeadOfficeDto register)
//         {
//             HeadOffice headOffice = headOffices.FirstOrDefault(i => i.Id == id);

//             if (headOffice == null)
//                 throw new ArgumentException("Usuário não encontrado.");

//             headOffice.Name = register.Name;
//             headOffice.Email = register.Email;
//             headOffice.Password = register.Password;
//             headOffice.Domain = register.Domain;
//             headOffice._cnpj = register.CNPJ;  

//             return headOffice;
//         }

//         public List<Branch> GetBranches(int id)
//         {
//             var headOffice = headOffices.FirstOrDefault(i => i.Id == id);
//             return headOffice?.Branches ?? new List<Branch>();
//         }

//         public bool Delete(int id)
//         {
//             headOffices.RemoveAll(usuario => usuario.Id == id);
//             return true;
//         }

//         public void SuspenderAcesso()
//         {
//             //implementação futura
//         }
//     }
// }
