package com.quizmaster.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Subject;

@Transactional
@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
	@Query("select s from Subject s where subject_id = :subject_id")
	public Subject getSubjectName(int subject_id);

}
