package com.quizmaster.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Role;
@Transactional
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	

}
