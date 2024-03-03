import React, { useState, useEffect } from 'react';

export default function UpdateExpertAccount() {
  const [expert, setExpert] = useState(null);
  const [editableFields, setEditableFields] = useState({
    fname: '',
    lname: '',
    qualification: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("name"));
    const loginid = loginData.uid;
    fetch("http://localhost:8080/getExpertByUid?uid=" + loginid)
      .then(resp => resp.json())
      .then(obj => {
        setExpert(obj);
        setEditableFields({
          fname: obj.fname,
          lname: obj.lname,
          qualification: obj.qualification,
          email: obj.email,
          contact: obj.contact
        });
      })
      .catch(error => console.error("Error fetching expert data:", error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableFields({
      ...editableFields,
      [name]: value
    });
  };

  const handleUpdate = () => {
    // Update expert details
    //  update logic here
    console.log("Updated expert details:", editableFields);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Update Account</h2>
      {expert && (
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Expert ID:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={expert.expert_id} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">User ID:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={expert.user.uid} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Subject Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={expert.subject_id.subject_name} readOnly />
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
            <label className="col-sm-2 col-form-label">Qualification:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="qualification" value={editableFields.qualification} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" name="email" value={editableFields.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contact:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="contact" value={editableFields.contact} onChange={handleInputChange} />
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
