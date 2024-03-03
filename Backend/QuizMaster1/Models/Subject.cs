using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Subject
    {
        public Subject()
        {
            Exams = new HashSet<Exam>();
            Questions = new HashSet<Question>();
        }

        public int SubjectId { get; set; }
        public string SubjectName { get; set; } = null!;
        public string? Description { get; set; }

        public virtual ICollection<Exam> Exams { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
