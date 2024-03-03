package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Expert;

@Repository
public interface AdminRepository extends JpaRepository<Expert, Integer> {

}
