package com.quizmaster.entities;

public class AnswerList {
	int qid;
	int student_answer;
	int exam_id;
	public AnswerList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AnswerList(int qid, int student_answer, int exam_id) {
		super();
		this.qid = qid;
		this.student_answer = student_answer;
		this.exam_id = exam_id;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public int getStudent_answer() {
		return student_answer;
	}
	public void setStudent_answer(int student_answer) {
		this.student_answer = student_answer;
	}
	public int getExam_id() {
		return exam_id;
	}
	public void setExam_id(int exam_id) {
		this.exam_id = exam_id;
	}
	@Override
	public String toString() {
		return "AnswerList [qid=" + qid + ", student_answer=" + student_answer + ", exam_id=" + exam_id + "]";
	}
	
	
}
