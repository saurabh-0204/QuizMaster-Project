package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Exam;
import com.quizmaster.entities.Student;
import com.quizmaster.repositories.ExamRepository;

@Service
public class ExamService {

	@Autowired
	ExamRepository examRepo;
	public Exam saveExam(Exam exam) {
		return examRepo.save(exam);
	}
	public Exam findByEaxamid(int exam_id) {
		return examRepo.findById(exam_id).get();
	}
	
	public int updateResult(int examid, int result)
	{
		return examRepo.updateResult(examid, result);
	}
	public List<Exam> findExamByStudent(Student student) {
		return examRepo.findExamByStudent(student);
	}

}
