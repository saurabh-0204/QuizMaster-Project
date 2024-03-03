using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Payment
    {
        public int Pid { get; set; }
        public string? Mode { get; set; }
        public int? Amount { get; set; }
        public DateOnly? Date { get; set; }
        public DateOnly? Expirydate { get; set; }
        public int? Sid { get; set; }

        public virtual Student? SidNavigation { get; set; }
    }
}
