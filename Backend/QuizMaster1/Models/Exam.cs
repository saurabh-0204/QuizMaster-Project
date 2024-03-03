using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Exam
    {
        public Exam()
        {
            Studentanswers = new HashSet<Studentanswer>();
        }

        public int ExamId { get; set; }
        public DateTime AttemptedDatetime { get; set; }
        public int? Marks { get; set; }
        public int? Sid { get; set; }
        public int? SubjectId { get; set; }
        public int? CatId { get; set; }

        public virtual Category? Cat { get; set; }
        public virtual Student? SidNavigation { get; set; }
        public virtual Subject? Subject { get; set; }
        public virtual ICollection<Studentanswer> Studentanswers { get; set; }
    }
}
