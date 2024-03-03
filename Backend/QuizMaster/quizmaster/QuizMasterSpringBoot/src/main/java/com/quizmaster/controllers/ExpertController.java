package com.quizmaster.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.ExpertRegistrationDummy;
import com.quizmaster.entities.Expert;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.User;
import com.quizmaster.entities.Role;
import com.quizmaster.entities.Subject;
import com.quizmaster.services.ExpertService;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.RoleService;
import com.quizmaster.services.SubjectService;
import com.quizmaster.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExpertController {

	@Autowired
	ExpertService eService;
	@Autowired
	RoleService rService;
	@Autowired
	UserService uService;
	@Autowired
	QuestionService qService;
	@Autowired
	SubjectService subService;

	@PostMapping("/expertRegistration")
	public Expert saveExpert(@RequestBody ExpertRegistrationDummy expert) {
		Role role = rService.getRole(4);

		User user = new User(expert.getUname(), expert.getPwd(), role, true);
		uService.save(user);
		Subject subject =subService.getSubject(expert.getSubject());
		Expert exp = new Expert(expert.getFname(), expert.getLname(), expert.getQualification(), expert.getContact(),
				expert.getEmail(), user, subject);
		return eService.saveExpert(exp);
	}

	@GetMapping("/getExpertByUid")
	public Expert getExpertById(@RequestParam("uid") int id) {
		System.out.println(eService.getExpertByuid(id));
		return eService.getExpertByuid(id);
	}

	@GetMapping("/viewQuiz")
	public List<Question> getQuestions() {
		return qService.getQuestions();
	}
	@GetMapping("/viewQuizByCategory")
	public List<Question> getQuestionsByCategory(@RequestParam("cat_id") int cat_id) {
		return qService.getQuestionsByCategory(cat_id);
	}
}
