using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Student
    {
        public Student()
        {
            Exams = new HashSet<Exam>();
            Payments = new HashSet<Payment>();
        }

        public int Sid { get; set; }
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public DateOnly Bdate { get; set; }
        public string Education { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public string Email { get; set; } = null!;
        public sbyte? Subscription { get; set; }
        public int? Uid { get; set; }

        public virtual User? UidNavigation { get; set; }
        public virtual ICollection<Exam> Exams { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
