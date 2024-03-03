import ExpertRegistration from './components/expertRegistration';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import { useSelector } from 'react-redux';
import Signup from './components/signup';
import AdminHome from './components/adminHome';
import Logout from './components/logout';
import ManageAccount from './components/ManageAccount';
import AddQuiz from './components/AddQuiz';
import ViewQuiz from './components/ViewQuiz';
import AttemptQuiz from './components/AttemptQuiz';
import StartQuiz from './components/StartQuiz';
import ViewSubjects from './components/ViewSubjects';
import UpdateExpertAccount from './components/UpdateExpertAccount';
import UpdateStudentAccount from './components/UpdateStudentAccount';
import MakeSubscription from './components/MakeSubscription';
import StudentHome from './components/studentHome';
import ExpertHome from './components/expertHome';
import ViewResults from './components/ViewResults';
import GiveFeedback from './components/GiveFeedback';
import CreateQuizCategories from './components/CreateSubjectOrCategories';
import Home from './components/Home';
import GetStudents from './components/GetStudents';
//import './App.css'

function App() {
  const logstate = useSelector(state => state.logged)

  return (
    <div className="App">
      <div style={{display:logstate.loggedIn?"none":"block"}}>
      {/* <li className="nav-item" >
                 <Link to="/" className="nav-link">Quiz Application</Link> 
      </li> */}
                <ul className="nav justify-content-center"> 
        <li className="nav-item">
         <Link to={"/signup"} className="nav-link">Student Sign Up</Link> 
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">Log-In</Link>
        </li> 
        
    </ul>
    </div>
    <Routes>
     <Route path="/" element={<Home/>}/> 
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminHome" element={<AdminHome/>}>
       <Route path="expertRegistration" element={<ExpertRegistration/>} />
       <Route path="manageAccount" element={<ManageAccount />} />
       <Route path="createQuizCategories" element={<CreateQuizCategories />} />
       <Route path="viewSubjects" element={<ViewSubjects />} />   
       <Route path="getAllStudents" element={<GetStudents />} />   
    </Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/expertHome" element={<ExpertHome/>}>
      <Route path="viewQuiz" element={<ViewQuiz/>}/>
      <Route path="addQuestion" element={<AddQuiz/>}/>
      <Route path="updateExpertAccount" element={<UpdateExpertAccount/>}/>
    </Route>
    <Route path="/studentHome" element={<StudentHome/>}>
      <Route path="attemptQuiz" element={<AttemptQuiz/>}></Route>
      <Route path="viewResults" element={<ViewResults/>}></Route>
      <Route path="updateAccount" element={<UpdateStudentAccount/>}></Route>
      <Route path="startQuiz" element={<StartQuiz/>}></Route>
      <Route path="giveFeedback" element={<GiveFeedback/>}></Route>
      <Route path="makeSubscription" element={<MakeSubscription/>}></Route>
    </Route>

    </Routes>
   
 </div>
); 
  
}

export default App;
