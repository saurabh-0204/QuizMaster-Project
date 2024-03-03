package com.quizmaster.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Role;
import com.quizmaster.repositories.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository rrepo;
     
	public Role getRole(int id) {
		return rrepo.findById(id).get();
	}

}
