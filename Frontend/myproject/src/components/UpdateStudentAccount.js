import React, { useState, useEffect } from 'react';

export default function UpdateStudentAccount() {
  const [student, setStudent] = useState(null);
  const [editableFields, setEditableFields] = useState({
    fname: '',
    lname: '',
    bdate: '',
    education: '',
    contact: '',
    email: ''
  });

  useEffect(() => {
    const loginid = JSON.parse(localStorage.getItem("name")).uid;
    fetch("http://localhost:8080/getStudentByUid?uid=" + loginid)
      .then(resp => resp.json())
      .then(obj => {
        setStudent(obj);
        setEditableFields({
          fname: obj.fname,
          lname: obj.lname,
          bdate: obj.bdate,
          education: obj.education,
          contact: obj.contact,
          email: obj.email
        });
      })
      .catch(error => console.error("Error fetching student data:", error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableFields({
      ...editableFields,
      [name]: value
    });
  };

  const handleUpdate = () => {
    // Update student details
    // You can implement the update logic here
    console.log("Updated student details:", editableFields);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Update Student</h2>
      {student && (
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Student ID:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={student.sid} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">User ID:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={student.uid.uid} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="fname" value={editableFields.fname} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="lname" value={editableFields.lname} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Birth Date:</label>
            <div className="col-sm-10">
              <input  className="form-control" name="bdate" value={editableFields.bdate.substring(0, 10)} onChange={handleInputChange} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Education:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="education" value={editableFields.education} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contact:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="contact" value={editableFields.contact} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" name="email" value={editableFields.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
