package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Subject;
import com.quizmaster.repositories.CategoryRepository;
import com.quizmaster.repositories.QuestionRepository;
import com.quizmaster.repositories.SubjectRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository queRepo;
	
	@Autowired
	CategoryRepository catRepository;
	
	@Autowired
	SubjectRepository subjectRepository;

	public Question addQuetion(Question quetion) {
		return queRepo.save(quetion);
	}

	public List<Question> getQuestions() {
		return queRepo.findAll();
	}

	public List<Question> findBySubIdAndCatid(int cat_id, int subject_id) {
		Category cat = catRepository.findById(cat_id).get();
		Subject subject = subjectRepository.findById(subject_id).get();
		return queRepo.findBySubIdAndCatid(cat, subject);
	}

	public Question findByQid(int qid) {
		return queRepo.findById(qid).get();
	}

	public List<Question> getQuestionsByCategory(int cat_id) {
		Category cat = catRepository.findById(cat_id).get();

		return queRepo.getQuestionsByCategory(cat);
	}
}
