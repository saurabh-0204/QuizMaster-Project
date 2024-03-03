import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function ExpertHome() {
  const [expert,setExpert]=useState(null);
  useEffect(() => {
    const loginid= JSON.parse(localStorage.getItem("name")).uid;
    //console.log("Loged user data"+loginid);
       fetch("http://localhost:8080/getExpertByUid?uid="+loginid)
       .then(resp=>resp.json())
       .then(obj=>{
         localStorage.setItem("loggedExpert",JSON.stringify(obj))
         setExpert(obj);
       })
   }, []);
  return (
    <div>
    <h1>Welcome {expert &&expert.fname}</h1>
    <nav className="navbar navbar-expand-sm bg-light mb-3">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="updateExpertAccount" className="nav-link px-3">Update Account</Link>
          </li>  
          <li className="nav-item">
            <Link to="addQuestion" className="nav-link px-3">Add Question</Link>
          </li>
          <li className="nav-item">
            <Link to="viewQuiz" className="nav-link px-3">View Quizzes</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link px-3">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
  </div>
  );
}

