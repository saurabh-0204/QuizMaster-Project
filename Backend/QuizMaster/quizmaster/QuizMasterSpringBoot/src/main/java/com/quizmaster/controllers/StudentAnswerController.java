package com.quizmaster.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.dummy.StudentAnswerDummy;
import com.quizmaster.entities.AnswerList;
import com.quizmaster.entities.Exam;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Student;
import com.quizmaster.entities.StudentAnswer;
import com.quizmaster.services.ExamService;
import com.quizmaster.services.QuestionService;
import com.quizmaster.services.StudentAnswerService;
import com.quizmaster.services.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentAnswerController {
	@Autowired
	StudentAnswerService sAnswerService;
	@Autowired
	StudentService studentService;
	@Autowired
	QuestionService queService;
	@Autowired
	ExamService eService;

	/*@PostMapping("/saveStudentAnswers")
	public List<StudentAnswer> saveStudentAnswers(@RequestBody List<StudentAnswerDummy> dummyList) {
		System.out.println(dummyList);
		ArrayList<StudentAnswer> studAnswers=new ArrayList<>();
		Exam exam=null;
		Question question=null;
//		StudentAnswer studentAnswer=null;
//		for(StudentAnswerDummy dummy:dummyList) {
//			 question=queService.findByQid(dummy;
//			 exam=eService.findByEaxamid(dummy.getExam_id());
//			 studentAnswer=new StudentAnswer(dummy.getStudent_answer(),exam,question);
//			 studAnswers.add(studentAnswer);
//		}
		//return sAnswerService.saveStudentAnswers(studentAnswer);
		return null;
	}*/
	@PostMapping("/saveStudentAnswers")
	public int saveStudentAnswers(@RequestBody StudentAnswerDummy dummyList) {
		//System.out.println(dummyList);
		List<AnswerList> answers=dummyList.getAnswers();
		//System.out.println(answers);
	    Exam exam = null;
	    Question question = null;
	    StudentAnswer studentAnswer = null;
	    int result = 0;
	    for (AnswerList answer : answers) {
	        question =  queService.findByQid(answer.getQid());
	        if(question.getAnswer() == answer.getStudent_answer())
	        	result++;
	        exam =  eService.findByEaxamid(answer.getExam_id());
	        studentAnswer = new StudentAnswer(answer.getStudent_answer(), exam, question);
	        //studAnswers.add(studentAnswer);
	        sAnswerService.save(studentAnswer);
	    }
	    return eService.updateResult(answers.get(0).getExam_id(), result);
	    
	    
	}
	
	@GetMapping("getAnswersByExamId")
	public List<StudentAnswer> getAnswersByExamId(@RequestParam("exam_id") int eid)
	{
		return sAnswerService.getAnswersByExamId(eid);
	}
}

