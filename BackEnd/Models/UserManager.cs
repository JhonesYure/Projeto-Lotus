using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndAPI.Models
{
    public class Manager 
    {
        [Key]
        public int Id { get; set; }

        [StringLength(512)]
        public string? Nome { get; set; }

        [Required]
        [StringLength(32)]
        public string? Username { get; set; }

        [StringLength(100)]
        public string? Email { get; set; }

        [Required]
        [StringLength(50)]
        public string? Senha { get; set; }

        [StringLength(50)]
        public string? Telefone { get; set; }
    }
}
