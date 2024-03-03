using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class User
    {
        public User()
        {
            Experts = new HashSet<Expert>();
            Students = new HashSet<Student>();
        }

        public int Uid { get; set; }
        public string Uname { get; set; } = null!;
        public string Pwd { get; set; } = null!;
        public ulong? Status { get; set; }
        public int? RoleId { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Expert> Experts { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
