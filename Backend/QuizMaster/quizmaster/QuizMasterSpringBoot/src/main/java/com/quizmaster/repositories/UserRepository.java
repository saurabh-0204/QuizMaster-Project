package com.quizmaster.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.quizmaster.entities.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	
    
	@Query("select u from User  u where uname = :uname and pwd = :pwd")
	public Optional<User> getUser(String uname,String pwd);

}
