using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Category
    {
        public Category()
        {
            Exams = new HashSet<Exam>();
            Questions = new HashSet<Question>();
        }

        public int CatId { get; set; }
        public string CatName { get; set; } = null!;

        public virtual ICollection<Exam> Exams { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
