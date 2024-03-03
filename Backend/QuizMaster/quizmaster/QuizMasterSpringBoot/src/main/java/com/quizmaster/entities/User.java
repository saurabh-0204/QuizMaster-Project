package com.quizmaster.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table; 

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	@Column
	String uname;
	@Column
	String pwd;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	@Column
	boolean status;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}




	public User(String uname, String pwd, Role role_id, boolean status) {
		super();
		this.uname = uname;
		this.pwd = pwd;
		this.role_id = role_id;
		this.status = status;
	}

	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
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
	public Role getRole_id() {
		return role_id;
	}
	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}




	@Override
	public String toString() {
		return "User [uid=" + uid + ", uname=" + uname + ", pwd=" + pwd + ", role_id=" + role_id + ", status=" + status
				+ "]";
	}
	
	
	

}
