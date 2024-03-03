import React, { useState, useEffect } from "react";

export default function ViewQuizByCategory() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== '') {
      fetchQuestionsByCategory();
    } else {
      setQuestions([]);
    }
  }, [selectedCategory]);

  const fetchQuestionsByCategory = () => {
    fetch(`http://localhost:8080/viewQuizByCategory?cat_id=${selectedCategory}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setQuestions([]);
      });
  };

  const fetchCategories = () => {
    fetch("http://localhost:8080/allCategories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">View Quiz By Category</h2>
      <div className="form-group">
        <label htmlFor="category">Select Category:</label>
        <select
          className="form-control"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.cat_name}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Category</th>
              <th>Question</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
              <th>Answer</th>
              <th>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{question.cat_id.cat_name}</td>
                <td>{question.question_text}</td>
                <td>{question.option1}</td>
                <td>{question.option2}</td>
                <td>{question.option3}</td>
                <td>{question.option4}</td>
                <td>{question.answer}</td>
                <td>{question.explaination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
