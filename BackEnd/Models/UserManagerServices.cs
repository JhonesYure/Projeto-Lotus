using System;
using System.Collections.Generic;
using System.Linq;

namespace BackEndAPI.Models
{
    public class ManagerServices
    {
        // INSERT USER
        public void Insert(Manager newManager)
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                if (newManager.Senha != null)
                {
                    newManager.Senha = Cripto.txtcripto(newManager.Senha);
                }
                dc.Usuarios.Add(newManager);
                dc.SaveChanges();
            }
        }

        // LIST USER
        public List<Manager> TableUser()
        {
            using (var contexto = new DatabaseContext())
            {
                return contexto.Usuarios.ToList<Manager>();
            }
        }

        // LOGIN AND VALIDATION
        public bool ValidateUser(string username, string senha)
        {
            using (var context = new DatabaseContext())
            {
                // Criptografa a senha informada para comparar com a senha armazenada no banco de dados
                string senhaCriptografada = Cripto.txtcripto(senha);

                // Verifica se existe um usuário com o nome de usuário e senha informados
                bool userExists = context.Usuarios.Any(u => u.Username == username && u.Senha == senhaCriptografada);

                return userExists;
            }
        }

        // EDIT PROFILE
        public void EditProfile (Manager editUser)
        {
            using(DatabaseContext dc = new DatabaseContext())
            {
                Manager? manager = dc.Usuarios.FirstOrDefault(u => u.Id == editUser.Id);

                if (manager != null)
                {
                    manager.Nome = editUser.Nome;
                    manager.Username = editUser.Username;
                    manager.Email = editUser.Email;
                    manager.Telefone = editUser.Telefone;

                    if (!string.IsNullOrEmpty(editUser.Senha))
                    {
                        manager.Senha = Cripto.txtcripto(editUser.Senha);
                    }

                    dc.SaveChanges();
                }
            }
        }
        //FIND ID
        public Manager? FindForId(int Id)
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                return dc.Usuarios.Find(Id);
            }
        }
        public Manager? GetPostDetail(int Id)
        {
            using(var context = new DatabaseContext())
            {
                Manager? register = context.Usuarios.Where(r => r.Id == Id).SingleOrDefault();

                return register;
            }
        }
    }
}
