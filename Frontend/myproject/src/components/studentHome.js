import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function StudentHome() {
  const [student,setStudent]=useState(null);
  useEffect(() => {
    const loginid= JSON.parse(localStorage.getItem("name")).uid;
   // console.log(loginid);
       fetch("http://localhost:8080/getStudentByUid?uid="+loginid)
       .then(resp=>resp.json())
       .then(obj=>{
         localStorage.setItem("loggedStudent",JSON.stringify(obj))
         setStudent(obj);
       })
   }, []);


  return (  
    <div>
      <h1>Welcome {student &&student.fname}</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="updateAccount" className="nav-link px-3">Update Account</Link>
            </li>
            <li className="nav-item">
              <Link to="attemptQuiz" className="nav-link px-3">Attempt Quizz</Link>
            </li>
            <li className="nav-item">
              <Link to="viewResults" className="nav-link px-3">View Results</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="giveFeedback" className="nav-link px-3">Give Feedback</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="makeSubscription" className="nav-link px-3">Make Subscription</Link>
            </li> */}
             {/* Conditionally render the "Make Subscription" link */}
             {student && !student.subscription && (
              <li className="nav-item">
                <Link to="makeSubscription" className="nav-link px-3">Make Subscription</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/logout" className="nav-link px-3">Logout</Link>
            </li>
            <li className="nav-item">
              <Link to="startQuiz" className="nav-link px-3"></Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}