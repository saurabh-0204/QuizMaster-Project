package com.quizmaster.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "students")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int sid;
	String fname;
	@Column
	String lname;
    Date bdate;
	String education;
	String contact;
	String email;
	int subscription;
	
	@OneToOne
	@JoinColumn(name = "uid")
	User uid;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int sid, String fname, String lname, Date bdate, String education, String contact, String email,
			int subscription, User uid) {
		super();
		this.sid = sid;
		this.fname = fname;
		this.lname = lname;
		this.bdate = bdate;
		this.education = education;
		this.contact = contact;
		this.email = email;
		this.subscription = subscription;
		this.uid = uid;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
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

	public Date getBdate() {
		return bdate;
	}

	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getSubscription() {
		return subscription;
	}

	public void setSubscription(int subscription) {
		this.subscription = subscription;
	}

	public User getUid() {
		return uid;
	}

	public void setUid(User uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", fname=" + fname + ", lname=" + lname + ", bdate=" + bdate + ", education="
				+ education + ", contact=" + contact + ", email=" + email + ", subscription=" + subscription + ", uid="
				+ uid + "]";
	}
	
	
	
	
	
}
