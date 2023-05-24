using System;
using System.Collections.Generic;
using BackEndAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEndAPI.Controllers
{
    [ApiController]
    [Route("/lotus/api/[controller]")]
    public class ManagerController : ControllerBase
    {
        [HttpPost("Insert")]
        public IActionResult Insert(Manager newManager)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            ManagerServices man = new ManagerServices();
            man.Insert(newManager);

            return Ok(newManager);
        }

        [HttpGet("ListUser")]
        public IActionResult ListUser()
        {
            try
            {
                ManagerServices man = new ManagerServices();
                List<Manager> usuarios = man.TableUser();
                return Ok(usuarios);
            }
            catch (Exception)
            {
                return StatusCode(500, "Falha ao acessar");
            }
        }

        [HttpPost("Login")]
        public IActionResult Login(Manager loginRequest)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            ManagerServices man = new ManagerServices();

            // Verifica se as propriedades Username e Senha não são nulas
            if (!string.IsNullOrEmpty(loginRequest.Username) && !string.IsNullOrEmpty(loginRequest.Senha))
            {
                bool isAuthenticated = man.ValidateUser(loginRequest.Username, loginRequest.Senha);

                if (isAuthenticated)
                {
                    // Usuário autenticado com sucesso
                    return Ok(new { message = "Login successful" });
                }
            }

            // Credenciais inválidas ou ausentes
            return Unauthorized();
        }
        
        //EDIT 
        /* public IActionResult EditProfile(int Id)
        {
            ManagerServices man = new ManagerServices();
            Manager users = man.FindId(Id);

            return View(users);
        }
        [HttpPost]
        public IActionResult Edit(Manager manager)
        {
            if (!ModelState.IsValid)
            {
                return View("EditProfile", manager);
            }

            ManagerServices man = new ManagerServices();
            man.EditProfile(manager);

            return RedirectToAction("EditProfile", new { Id = manager.Id });
        } */

    }
}
