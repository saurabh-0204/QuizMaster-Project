package com.quizmaster.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.StudentRegistrationDummy;
import com.quizmaster.entities.Expert;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Role;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.User;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.StudentService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {
	@Autowired
	StudentService sService;
	@Autowired
	RoleService rService;
	@Autowired
	UserService uService;
	@Autowired
	QuestionService qService;

	@PostMapping("/studentRegistration")
	public Student saveStudent(@RequestBody StudentRegistrationDummy dummy) {
		Role role = rService.getRole(2);
		User user = new User(dummy.getUname(), dummy.getPwd(), role, true);
		uService.save(user);
		Student student = new Student(dummy.getSid(), dummy.getFname(), dummy.getLname(), dummy.getBdate(),
				dummy.getEducation(), dummy.getContact(), dummy.getEmail(), dummy.getSubscription(), user);
		System.out.println(student);
		return sService.saveStudent(student);
	}

	@GetMapping("/attemptQuiz")
	public List<Question> getQuestions() {
		return qService.getQuestions();
	}

	@GetMapping("/viewQuizBy")
	public List<Question> findBySubIdAndCatid(@RequestParam("cat_id") int cat_id,
			@RequestParam("subject_id") int subject_id) {
		System.out.println(qService.findBySubIdAndCatid(cat_id, subject_id));
		return qService.findBySubIdAndCatid(cat_id, subject_id);
	}

	@GetMapping("/getStudentByUid")
	public Student getStudentByUid(@RequestParam("uid") int id) {
		System.out.println(sService.getStudentByUid(id));
		return sService.getStudentByUid(id);
	}
	
}
