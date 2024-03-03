import { Link, Outlet } from 'react-router-dom';
//import { login } from './slice';

export default function AdminHome() {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="expertRegistration" className="nav-link px-3">Create Expert</Link>
            </li>
            <li className="nav-item">
              <Link to="manageAccount" className="nav-link px-3">Manage Account</Link>
            </li>
            <li className="nav-item">
              <Link to="getAllStudents" className="nav-link px-3">View Students</Link>
            </li>
            <li className="nav-item">
              <Link to="createQuizCategories" className="nav-link px-3">Create Quiz Categories/Subject</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="addQuizzes" className="nav-link px-3">Add Quizzes</Link>
            </li> */}
            <li className="nav-item">
              <Link to="viewSubjects" className="nav-link px-3">View Subjects</Link>
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
