package com.quizmaster.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Exam;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.repositories.ExamRepository;
import com.quizmaster.repositories.StudentAnswerRepository;

@Service
public class StudentAnswerService {
	@Autowired
	StudentAnswerRepository sAnswerRepository;
	@Autowired
	ExamRepository examRepository;

	public List<StudentAnswer> saveStudentAnswers(StudentAnswer studentAnswer) {
		List<StudentAnswer> studentAnswers = new ArrayList<>();
		studentAnswers.add(sAnswerRepository.save(studentAnswer));
		return studentAnswers;
	}

	public List<StudentAnswer> saveStudentAnswers(ArrayList<StudentAnswer> studAnswers) {
		return sAnswerRepository.saveAll(studAnswers);
	}

	public List<StudentAnswer> getAnswersByExamId(int eid) {
		Exam exam=examRepository.findById(eid).get();
		return sAnswerRepository.getAnswersByExamId(exam);
	}
	
	public StudentAnswer save(StudentAnswer sa)
	{
		return sAnswerRepository.save(sa);
	}

}
