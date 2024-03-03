using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Question
    {
        public Question()
        {
            Studentanswers = new HashSet<Studentanswer>();
        }

        public int Qid { get; set; }
        public string? QuestionText { get; set; }
        public string? Option1 { get; set; }
        public string? Option2 { get; set; }
        public string? Option3 { get; set; }
        public string? Option4 { get; set; }
        public int? Answer { get; set; }
        public string? Explaination { get; set; }
        public int? SubjectId { get; set; }
        public int? CatId { get; set; }

        public virtual Category? Cat { get; set; }
        public virtual Subject? Subject { get; set; }
        public virtual ICollection<Studentanswer> Studentanswers { get; set; }
    }
}
