package com.quizmaster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository catRepo;

	public Category getCategory(int cat_id) {
		return catRepo.findById(cat_id).get();
	}

	public List<Category> allCategories() {

		return catRepo.findAll();
	}

	public Category addCategory(Category category) {
		return catRepo.save(category);
	}

//	public Category getCategory(int cat_id) {
//		Optional<Category> categoryOptional = catRepo.findById(cat_id);
//		Category catagory = null;
//		if (categoryOptional.isPresent()) {
//			catagory = categoryOptional.get();
//
//		} else {
//			System.out.println("Id not found");
//		}
//		return catagory;
//	}

}
