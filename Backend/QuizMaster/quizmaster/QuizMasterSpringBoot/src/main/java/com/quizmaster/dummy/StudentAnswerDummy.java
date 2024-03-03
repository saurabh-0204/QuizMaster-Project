package com.quizmaster.dummy;

import java.util.List;

import com.quizmaster.entities.AnswerList;


public class StudentAnswerDummy {

	List<AnswerList> answers;

	public List<AnswerList> getAnswers() {
		return answers;
	}

	public void setAnswers(List<AnswerList> answers) {
		this.answers = answers;
	}

	public StudentAnswerDummy(List<AnswerList> answers) {
		super();
		this.answers = answers;
	}

	public StudentAnswerDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "StudentAnswerDummy [answers=" + answers + "]";
	}

}
