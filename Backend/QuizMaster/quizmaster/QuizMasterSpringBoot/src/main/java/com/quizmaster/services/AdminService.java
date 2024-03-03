package com.quizmaster.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Expert;
import com.quizmaster.repositories.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository adminRepo;
	public List<Expert> getAllExperts() {
		return adminRepo.findAll();
	}
//	public Expert getExpertById(int id) {
//		return adminRepo.findById(id).get();
//	}

}
