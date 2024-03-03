package com.quizmaster.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Subject;
import com.quizmaster.services.SubjectService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SubjecctController {
	@Autowired
	SubjectService subService;

	@GetMapping("allSubjects")
	public List<Subject> getAllSubjects() {
		return subService.getAllSubjects();
	}
	
	@PostMapping("addSubject")
	public Subject addSubject(@RequestBody Subject subject ) {
		return subService.addSubject(subject);
		
	}
}
