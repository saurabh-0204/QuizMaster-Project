package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Expert;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.repositories.StudentRepository;

@Service
public class StudentService {
	@Autowired
	StudentRepository srepo;

	public Student saveStudent(Student student) {
		return srepo.save(student);
	}

	public Student getStudentByUid(int id) {
		return srepo.getStudentByUid(id);
	}

	public Student findStudent(int sid) {
		return srepo.findById(sid).get();
	}

	public Student getStudentBysid(int sid) {
		return srepo.findById(sid).get();
	}

	

}
