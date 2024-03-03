
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


function GetStudents(){
  const [servicecent, setServiceCent] = useState([]);
  let navigate = useNavigate();


useEffect(() => {
  fetch("https://localhost:7287/api/Student/getAllStudent", {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  })
  .then(resp => {
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    return resp.json();
  })
  .then(obj => {
    console.log(obj);
    setServiceCent(obj);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}, []);

return (
    <div>
       <table className="table table-borderedA table-hover" >
          <thead className='table-dark'>
            <tr>
            <th className="fs-6 fw-medium">sid</th>
              <th className="fs-6 fw-medium">First Name</th>
              <th className="fs-6 fw-medium">Last Name</th>
              <th className="fs-6 fw-medium">Birthdate</th>
              <th className="fs-6 fw-medium">Education</th>
              <th className="fs-6 fw-medium">Contact</th>
              <th className="fs-6 fw-medium">Email</th>
    
             
            </tr>
          </thead>
          <tbody>
            {servicecent.map((v) => {
              return (<tr key={v.empId}>
                <td className="fs-6">{v.sid}</td>
                <td className="fs-6">{v.fname}</td>
                <td className="fs-6">{v.lname}</td>
                <td className="fs-6">{v.bdate}</td>
                <td className="fs-6">{v.education}</td>
                <td className="fs-6">{v.contact}</td>
                <td className="fs-6">{v.email}</td>
              
              </tr>);
            })}
          </tbody>
        </table>
    </div>
  );
};

export default GetStudents;