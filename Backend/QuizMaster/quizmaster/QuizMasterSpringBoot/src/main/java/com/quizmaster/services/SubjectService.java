package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Subject;
import com.quizmaster.repositories.SubjectRepository;

@Service
public class SubjectService {

	@Autowired
	SubjectRepository subjectRepo;

	public Subject getSubject(int subject_id) {
		return subjectRepo.findById(subject_id).get();
	}

	public List<Subject> getAllSubjects() {
		return subjectRepo.findAll();
	}

	public Subject addSubject(Subject subject) {
		return subjectRepo.save(subject);
	}

}
