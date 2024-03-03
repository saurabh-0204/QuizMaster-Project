package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.quizmaster.entities.Student;

@Transactional
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	@Query("select s from Student s where uid.uid = :uid ")
	public Student getStudentByUid(int uid);
}
