import React, { useState, useEffect } from 'react';

export default function ViewSubjects() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allSubjects")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch subjects');
        }
        return response.json();
      })
      .then(data => {
        setSubjects(data);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Subjects</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Subject ID</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.subject_id}>
              <td>{subject.subject_id}</td>
              <td>{subject.subject_name}</td>
              <td>{subject.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
