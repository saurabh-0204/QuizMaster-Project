package com.quizmaster.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "experts")
public class Expert {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int expert_id;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String qualification;
	@Column
	String contact;
	@Column
	String email;
	@OneToOne
	@JoinColumn(name = "uid")
	User user;
	@OneToOne
	@JoinColumn(name = "subject_id")
	Subject subject_id;

	public Expert() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getExpert_id() {
		return expert_id;
	}

	public void setExpert_id(int expert_id) {
		this.expert_id = expert_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public Expert(String fname, String lname, String qualification, String contact, String email, User user,
			Subject subject_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.qualification = qualification;
		this.contact = contact;
		this.email = email;
		this.user = user;
		this.subject_id = subject_id;
	}

	public Subject getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(Subject subject_id) {
		this.subject_id = subject_id;
	}

	@Override
	public String toString() {
		return "Expert [expert_id=" + expert_id + ", fname=" + fname + ", lname=" + lname + ", qualification="
				+ qualification + ", contact=" + contact + ", email=" + email + ", user=" + user + ", subject_id="
				+ subject_id + "]";
	}

}
