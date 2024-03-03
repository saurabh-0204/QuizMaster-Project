package com.quizmaster.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Question;
import com.quizmaster.entities.Subject;

@Transactional
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

	@Query("select q from Question q where cat_id = :cat_id and subject_id = :subject_id")
	public List<Question> findBySubIdAndCatid(Category cat_id, Subject subject_id);

	@Query("select q from Question q where cat_id = :cat_id")
	public List<Question> getQuestionsByCategory(Category cat_id);
}