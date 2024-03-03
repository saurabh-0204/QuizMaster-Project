package com.quizmaster.dummy;

import java.util.Date;

public class StudentRegistrationDummy {
	int sid;
	String pwd;
	String uname;
	String fname;
	String lname;
	Date bdate;
	String education;
	String contact;
	String email;
	int subscription;

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
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

	public StudentRegistrationDummy() {
		super();
	}

	public StudentRegistrationDummy(int sid, String pwd, String uname, String fname, String lname, Date bdate,
			String education, String contact, String email, int subscription) {
		super();
		this.sid = sid;
		this.pwd = pwd;
		this.uname = uname;
		this.fname = fname;
		this.lname = lname;
		this.bdate = bdate;
		this.education = education;
		this.contact = contact;
		this.email = email;
		this.subscription = subscription;
	}

	@Override
	public String toString() {
		return "StudentRegistrationDummy [sid=" + sid + ", pwd=" + pwd + ", uname=" + uname + ", fname=" + fname
				+ ", lname=" + lname + ", bdate=" + bdate + ", education=" + education + ", contact=" + contact
				+ ", email=" + email + ", subscription=" + subscription + "]";
	}

}
