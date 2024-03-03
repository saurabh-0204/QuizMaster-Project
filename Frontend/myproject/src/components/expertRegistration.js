import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFormData = {
  fname: '',
  lname: '',
  qualification: '',
  subject: '',
  contact: '',
  email: '',
  pwd: '',
  uname: ''
};

const initialErrors = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET_FORM':
      return initialFormData;
    default:
      return state;
  }
};

const ExpertRegistration = () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialFormData,
    errors: initialErrors
  });

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = () => {
    fetch(`http://localhost:8080/allSubjects`)
      .then(response => {
        if (response.ok)
          return response.json();
        else
          throw new Error('Failed to fetch subjects');
      })
      .then(data => {
        setSubjects(data);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    dispatch({ type: 'SET_FIELD', field: 'subject', value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    for (const field in initialFormData) {
      if (!state[field].trim()) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    }

    if (!state.contact.trim()) {
      validationErrors.contact = 'Contact is required.';
    } else if (!/^\d+$/.test(state.contact)) {
      validationErrors.contact = 'Contact must contain only digits.';
    } else if (state.contact.length !== 10) {
      validationErrors.contact = 'Contact must be 10 digits long.';
    }

    if (state.fname.trim() !== '' && (state.fname[0] !== state.fname[0].toUpperCase() || state.fname.slice(1) !== state.fname.slice(1).toLowerCase())) {
      validationErrors.fname = 'Name must start with a capital letter.';
    }

    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/expertRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        console.log('Expert added successfully');
        navigate("/adminHome");
      } else {
        console.error('Error adding expert:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding expert:', error.message);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4"><b><u>Expert Registration</u></b></h2>
              <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-3 row">
                  <label htmlFor="fname" className="col-sm-4 col-form-label text-end">First Name:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className={`form-control ${state.errors && state.errors.fname && 'is-invalid'}`}
                      value={state.fname}
                      onChange={handleChange}
                      placeholder="Write First Name Here"
                    />
                    {state.errors && state.errors.fname && <div className="invalid-feedback">{state.errors.fname}</div>}
                  </div>
                </div>
                {/* Last Name */}
                <div className="mb-3 row">
                  <label htmlFor="lname" className="col-sm-4 col-form-label text-end">Last Name:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className={`form-control ${state.errors && state.errors.lname && 'is-invalid'}`}
                      value={state.lname}
                      onChange={handleChange}
                      placeholder="Write Last Name Here"
                    />
                    {state.errors && state.errors.lname && <div className="invalid-feedback">{state.errors.lname}</div>}
                  </div>
                </div>
                {/* Qualification */}
                <div className="mb-3 row">
                  <label htmlFor="qualification" className="col-sm-4 col-form-label text-end">Qualification:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      className={`form-control ${state.errors && state.errors.qualification && 'is-invalid'}`}
                      value={state.qualification}
                      onChange={handleChange}
                      placeholder="Write Qualification Here"
                    />
                    {state.errors && state.errors.qualification && <div className="invalid-feedback">{state.errors.qualification}</div>}
                  </div>
                </div>
                {/* Subject */}
                <div className="mb-3 row">
                  <label htmlFor="subject" className="col-sm-4 col-form-label text-end">Subject:</label>
                  <div className="col-sm-8">
                    <select
                      id="subject"
                      name="subject"
                      className={`form-control ${state.errors && state.errors.subject && 'is-invalid'}`}
                      value={selectedSubject}
                      onChange={handleSubjectChange}
                    >
                      <option value="">--Select Subject--</option>
                      {subjects.map(subject => (
                        <option key={subject.subject_id} value={subject.subject_id}>{subject.subject_name}</option>
                      ))}
                    </select>
                    {state.errors && state.errors.subject && <div className="invalid-feedback">{state.errors.subject}</div>}
                  </div>
                </div>
                {/* Contact */}
                <div className="mb-3 row">
                  <label htmlFor="contact" className="col-sm-4 col-form-label text-end">Contact:</label>
                  <div className="col-sm-8">
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      className={`form-control ${state.errors && state.errors.contact && 'is-invalid'}`}
                      value={state.contact}
                      onChange={handleChange}
                      placeholder="Write Contact Here"
                      maxLength={10}
                    />
                    {state.errors && state.errors.contact && <div className="invalid-feedback">{state.errors.contact}</div>}
                  </div>
                </div>
                {/* Email */}
                <div className="mb-3 row">
                  <label htmlFor="email" className="col-sm-4 col-form-label text-end">Email:</label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${state.errors && state.errors.email && 'is-invalid'}`}
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Write Email Here"
                    />
                    {state.errors && state.errors.email && <div className="invalid-feedback">{state.errors.email}</div>}
                  </div>
                </div>
                {/* Username */}
                <div className="mb-3 row">
                  <label htmlFor="uname" className="col-sm-4 col-form-label text-end">Username:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="uname"
                      name="uname"
                      className={`form-control ${state.errors && state.errors.uname && 'is-invalid'}`}
                      value={state.uname}
                      onChange={handleChange}
                      placeholder="Write Username Here"
                    />
                    {state.errors && state.errors.uname && <div className="invalid-feedback">{state.errors.uname}</div>}
                  </div>
                </div>
                {/* pwd */}
                <div className="mb-3 row">
                  <label htmlFor="pwd" className="col-sm-4 col-form-label text-end">Password:</label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      id="pwd"
                      name="pwd"
                      className={`form-control ${state.errors && state.errors.pwd && 'is-invalid'}`}
                      value={state.pwd}
                      onChange={handleChange}
                      placeholder="Write pwd Here"
                    />
                    {state.errors && state.errors.pwd && <div className="invalid-feedback">{state.errors.pwd}</div>}
                  </div>
                </div>
               
                {/* Form buttons */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Add Expert</button>
                  <button type="button" className="btn btn-primary" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertRegistration;
