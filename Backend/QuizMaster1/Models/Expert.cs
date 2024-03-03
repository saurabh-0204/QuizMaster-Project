using System;
using System.Collections.Generic;

namespace QuizMaster1.Models
{
    public partial class Expert
    {
        public int ExpertId { get; set; }
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public string Qualification { get; set; } = null!;
        public string Subject { get; set; } = null!;
        public string Contact { get; set; } = null!;
        public string? Email { get; set; }
        public int? Uid { get; set; }

        public virtual User? UidNavigation { get; set; }
    }
}
