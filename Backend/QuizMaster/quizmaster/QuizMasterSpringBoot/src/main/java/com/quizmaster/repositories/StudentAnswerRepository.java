package com.quizmaster.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Exam;
import com.quizmaster.entities.StudentAnswer;

@Transactional
@Repository
public interface StudentAnswerRepository extends JpaRepository<StudentAnswer, Integer> {
	@Query("Select a from StudentAnswer a where exam_id = :eid")
	public List<StudentAnswer> getAnswersByExamId(Exam eid);

}
