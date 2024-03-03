import React, { useState } from 'react';

export default function CreateQuizCategories() {
  const [subjectName, setSubjectName] = useState('');
  const [subjectDescription, setSubjectDescription] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleAddSubject = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/addSubject", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject_name: subjectName, description: subjectDescription }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add subject');
      }
      // Reset form fields after successful submission
      setSubjectName('');
      setSubjectDescription('');
      alert('Subject added successfully!');
    })
    .catch(error => {
      console.error('Error adding subject:', error);
    });
  };

  const handleCreateCategory = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/addCategory", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cat_name: categoryName }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
      setCategoryName('');
      alert('Category created successfully!');
    })
    .catch(error => {
      console.error('Error creating category:', error);
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Form to add subject */}
          <form onSubmit={handleAddSubject} className="mb-4">
            <h2 className="mb-3">Add Subject</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject Name" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Description" value={subjectDescription} onChange={(e) => setSubjectDescription(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Subject</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleCreateCategory}>
            <h2 className="mb-3">Create Category</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Create Category</button>
          </form>
        </div>
      </div>
    </div>
  );
}
