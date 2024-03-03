import React, { useState, useEffect } from 'react';

export default function MakeSubscription() {
  const [student, setStudent] = useState(null);
  const [editableFields, setEditableFields] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMode: '',
    paidAmount: '',
    paymentDate: new Date().toISOString().substr(0, 10) // Default to today's date
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
          contact: obj.contact,
          email: obj.email
        });
      })
      .catch(error => console.error("Error fetching student data:", error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };

  const handleSubscription = () => {
    // Implement subscription logic here
    console.log("Payment details:", paymentDetails);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Make Subscription</h2>
      {student && (
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={editableFields.fname} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={editableFields.lname} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contact:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={editableFields.contact} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" value={editableFields.email} readOnly />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Payment Mode:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="paymentMode" value={paymentDetails.paymentMode} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Paid Amount:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="paidAmount" value={paymentDetails.paidAmount} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Payment Date:</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" name="paymentDate" value={paymentDetails.paymentDate} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="button" className="btn btn-primary" onClick={handleSubscription}>Subscribe</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
