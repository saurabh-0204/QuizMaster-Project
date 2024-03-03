package com.quizmaster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.AddQuetionDummy;
import com.quizmaster.entities.Category;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Subject;
import com.quizmaster.services.CategoryService;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.SubjectService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuestionController {
	@Autowired
	QuestionService queService;
	@Autowired
	SubjectService subService;
	@Autowired
	CategoryService catService;

	@PostMapping("/addQuestion")
	public Question addQuestion(@RequestBody AddQuetionDummy question) {
		Subject subject =subService.getSubject(1);
		Category catagory = catService.getCategory(question.getCat_id());
		//System.out.println(catagory);
		Question que = new Question(question.getQuestion_text(), question.getOption1(), question.getOption2(),
				question.getOption3(), question.getOption4(), question.getAnswer(), question.getExplaination(), subject,
				catagory);
		//System.out.println(que);
		return queService.addQuetion(que);
	}
}
