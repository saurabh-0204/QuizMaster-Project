using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Studentanswer
    {
        public int AnswerId { get; set; }
        public int? StudentAnswer1 { get; set; }
        public int? ExamId { get; set; }
        public int? Qid { get; set; }

        public virtual Exam? Exam { get; set; }
        public virtual Question? QidNavigation { get; set; }
    }
}
