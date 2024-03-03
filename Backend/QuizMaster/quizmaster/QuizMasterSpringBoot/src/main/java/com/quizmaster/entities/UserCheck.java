package com.quizmaster.entities;

public class UserCheck {

	String uname;
	String pwd;

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public UserCheck(String uname, String pwd) {
		super();
		this.uname = uname;
		this.pwd = pwd;
	}

	public UserCheck() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "UserCheck [uname=" + uname + ", pwd=" + pwd + "]";
	}

}
