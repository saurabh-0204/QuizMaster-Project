import React, { useState, useEffect } from 'react';

export default function ViewResults() {
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loginid = JSON.parse(localStorage.getItem("name")).uid;
    fetch("http://localhost:8080/getStudentByUid?uid=" + loginid)
      .then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("loggedStudent", JSON.stringify(obj));
        setStudent(obj);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);
  useEffect(() => {
    if (student && student.sid) {
      fetch(`http://localhost:8080/viewResultByStudentId?sid=${student.sid}`)
        .then(response => response.json())
        .then(data => {
          setResults(Array.isArray(data) ? data : []);
        })
        .catch(error => {
          console.error('Error fetching results:', error);
        });
    }
  }, [student]);
console.log(results)
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Results</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Exam ID</th>
            <th>Attempted Datetime</th>
            <th>Marks</th>
            <th>Subject</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.exam_id}</td>
              <td>{result.attempted_datetime}</td>
              <td>{result.marks}</td>
              <td>{result.subject_id.subject_name}</td>
              <td>{result.cat_id.cat_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
