package com.quizmaster.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "studentanswers")
public class StudentAnswer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int answer_id;
	@Column
	int student_answer;
	@OneToOne
	@JoinColumn(name = "exam_id")
	Exam exam_id;
	@OneToOne
	@JoinColumn(name = "qid")
	Question qid;
	

	public StudentAnswer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentAnswer(int student_answer, Exam exam_id, Question qid) {
		super();
		this.student_answer = student_answer;
		this.exam_id = exam_id;
		this.qid = qid;
		
	}

	public int getAnswer_id() {
		return answer_id;
	}

	public void setAnswer_id(int answer_id) {
		this.answer_id = answer_id;
	}

	public int getStudent_answer() {
		return student_answer;
	}

	public void setStudent_answer(int student_answer) {
		this.student_answer = student_answer;
	}

	public Exam getExam_id() {
		return exam_id;
	}

	public void setExam_id(Exam exam_id) {
		this.exam_id = exam_id;
	}

	public Question getQid() {
		return qid;
	}

	public void setQid(Question qid) {
		this.qid = qid;
	}

	

	@Override
	public String toString() {
		return "StudentAnswer [answer_id=" + answer_id + ", student_answer=" + student_answer + ", exam_id=" + exam_id
				+ ", qid=" + qid +  "]";
	}

}
