using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace QuizMaster1.Models
{
    public partial class quizmasterContext : DbContext
    {
        public quizmasterContext()
        {
        }

        public quizmasterContext(DbContextOptions<quizmasterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Exam> Exams { get; set; } = null!;
        public virtual DbSet<Expert> Experts { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<Question> Questions { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<Studentanswer> Studentanswers { get; set; } = null!;
        public virtual DbSet<Subject> Subjects { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=quizmaster", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PRIMARY");

                entity.ToTable("categories");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.CatName)
                    .HasMaxLength(45)
                    .HasColumnName("cat_name");
            });

            modelBuilder.Entity<Exam>(entity =>
            {
                entity.ToTable("exams");

                entity.HasIndex(e => e.CatId, "cat_id_idx");

                entity.HasIndex(e => e.Sid, "sid_fk_idx");

                entity.HasIndex(e => e.SubjectId, "subject_id_fk_idx");

                entity.Property(e => e.ExamId).HasColumnName("exam_id");

                entity.Property(e => e.AttemptedDatetime)
                    .HasColumnType("datetime")
                    .HasColumnName("attempted_datetime");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Marks).HasColumnName("marks");

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.SubjectId).HasColumnName("subject_id");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Exams)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("cat_id");

                entity.HasOne(d => d.SidNavigation)
                    .WithMany(p => p.Exams)
                    .HasForeignKey(d => d.Sid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sid");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Exams)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("subject_id");
            });

            modelBuilder.Entity<Expert>(entity =>
            {
                entity.ToTable("experts");

                entity.HasIndex(e => e.Uid, "user_id_idx");

                entity.Property(e => e.ExpertId).HasColumnName("expert_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(45)
                    .HasColumnName("contact");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.Qualification)
                    .HasMaxLength(45)
                    .HasColumnName("qualification");

                entity.Property(e => e.Subject)
                    .HasMaxLength(45)
                    .HasColumnName("subject");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Experts)
                    .HasForeignKey(d => d.Uid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("uid_fk");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PRIMARY");

                entity.ToTable("payments");

                entity.HasIndex(e => e.Sid, "sid_idx");

                entity.Property(e => e.Pid).HasColumnName("pid");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Expirydate).HasColumnName("expirydate");

                entity.Property(e => e.Mode)
                    .HasMaxLength(45)
                    .HasColumnName("mode");

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.HasOne(d => d.SidNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.Sid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("sid_fk");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.HasKey(e => e.Qid)
                    .HasName("PRIMARY");

                entity.ToTable("questions");

                entity.HasIndex(e => e.CatId, "cat_id_fk_idx");

                entity.HasIndex(e => e.SubjectId, "subject_id_idx");

                entity.Property(e => e.Qid).HasColumnName("qid");

                entity.Property(e => e.Answer).HasColumnName("answer");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Explaination)
                    .HasMaxLength(255)
                    .HasColumnName("explaination");

                entity.Property(e => e.Option1)
                    .HasMaxLength(75)
                    .HasColumnName("option1");

                entity.Property(e => e.Option2)
                    .HasMaxLength(75)
                    .HasColumnName("option2");

                entity.Property(e => e.Option3)
                    .HasMaxLength(75)
                    .HasColumnName("option3");

                entity.Property(e => e.Option4)
                    .HasMaxLength(75)
                    .HasColumnName("option4");

                entity.Property(e => e.QuestionText)
                    .HasMaxLength(255)
                    .HasColumnName("question_text");

                entity.Property(e => e.SubjectId).HasColumnName("subject_id");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("cat_id_fk");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("subject_id_fk");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.RoleId)
                    .ValueGeneratedNever()
                    .HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(45)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PRIMARY");

                entity.ToTable("students");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Uid, "user_id_idx");

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.Bdate).HasColumnName("bdate");

                entity.Property(e => e.Contact)
                    .HasMaxLength(45)
                    .HasColumnName("contact");

                entity.Property(e => e.Education)
                    .HasMaxLength(45)
                    .HasColumnName("education");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.Subscription).HasColumnName("subscription");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.HasOne(d => d.UidNavigation)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.Uid)
                    .HasConstraintName("FKap5kf80of7yo19mvcvf98q0yu");
            });

            modelBuilder.Entity<Studentanswer>(entity =>
            {
                entity.HasKey(e => e.AnswerId)
                    .HasName("PRIMARY");

                entity.ToTable("studentanswers");

                entity.HasIndex(e => e.ExamId, "exam_id_idx");

                entity.HasIndex(e => e.Qid, "qid_idx");

                entity.Property(e => e.AnswerId).HasColumnName("answer_id");

                entity.Property(e => e.ExamId).HasColumnName("exam_id");

                entity.Property(e => e.Qid).HasColumnName("qid");

                entity.Property(e => e.StudentAnswer1).HasColumnName("student_answer");

                entity.HasOne(d => d.Exam)
                    .WithMany(p => p.Studentanswers)
                    .HasForeignKey(d => d.ExamId)
                    .HasConstraintName("exam_id");

                entity.HasOne(d => d.QidNavigation)
                    .WithMany(p => p.Studentanswers)
                    .HasForeignKey(d => d.Qid)
                    .HasConstraintName("qid");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.ToTable("subjects");

                entity.Property(e => e.SubjectId).HasColumnName("subject_id");

                entity.Property(e => e.Description)
                    .HasMaxLength(75)
                    .HasColumnName("description");

                entity.Property(e => e.SubjectName)
                    .HasMaxLength(45)
                    .HasColumnName("subject_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.HasIndex(e => e.Uname, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.RoleId, "role_id_idx");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.Pwd)
                    .HasMaxLength(45)
                    .HasColumnName("pwd");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Uname)
                    .HasMaxLength(45)
                    .HasColumnName("uname");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("role_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
