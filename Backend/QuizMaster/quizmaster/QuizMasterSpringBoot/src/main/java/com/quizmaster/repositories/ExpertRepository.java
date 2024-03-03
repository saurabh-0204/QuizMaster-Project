package com.quizmaster.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.quizmaster.entities.Expert;

@Transactional
@Repository
public interface ExpertRepository extends JpaRepository<Expert, Integer> {
	@Query("select e from Expert e where uid = :uid ")
	public Expert getExpertByUid(int uid);
}
