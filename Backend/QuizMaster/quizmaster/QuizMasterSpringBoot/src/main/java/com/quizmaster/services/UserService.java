package com.quizmaster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.User;
import com.quizmaster.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public User getUser(String uname,String pwd)
	{
		User u;
		Optional<User> ou = urepo.getUser(uname, pwd);
		try {
			
			u = ou.get();
			
		} catch (Exception e) {
			
			u =null;
		}
		return u;
	}

	public User save(User user) {
		return urepo.save(user);
	}

	public List<User> getAllUsers() {
		return urepo.findAll();
	}

}
