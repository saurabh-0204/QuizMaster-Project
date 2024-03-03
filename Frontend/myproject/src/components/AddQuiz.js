//import e from 'cors';
import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddQuiz() {


           const init = {
                        cat_id: '',
                        question_text: '',
                        option1: '',
                        option2: '',
                        option3: '',
                        option4: '',
                        answer: '',
                        explaination: ''

    };

  const reducer = (state, action) => {
        switch (action.type) {
            case "update":
                const { key, value, touched, valid, error } = action.data;
                return { ...state, [key]: { value, touched, valid, error } };
            case "reset":
                return init;
            default:
                return state;
        }
    };

    const [questions, dispatch] = useReducer(reducer, init);
    const [insertMsg, setInsertMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; 
        dispatch({ type: 'update', data: { key: name, value: value } }); 
    };
    
    
    
const submitData = (e) => {
  e.preventDefault();
  const isFormValid = Object.values(questions).every((field) => field.valid);

 
      console.log(JSON.stringify(questions));
      const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
           
 
 
  cat_id: questions.cat_id.value,
  question_text: questions.question_text.value,
  option1: questions.option1.value,
  option2: questions.option2.value,
  option3: questions.option3.value,
  option4: questions.option4.value,
  answer: questions.answer.value,
  explaination: questions.explaination.value,
            
              
          }),
      };

      fetch("http://localhost:8080/addQuestion", reqOptions)
          .then((res) => {
              if (res.status === 200) {
                
                  setInsertMsg("Question added successfully");
                  alert("Question added successfully");
                 
                  navigate("/expertHome");
              } else if (res.status === 400) {
                 
                  return res.json().then((data) => {
                     
                      console.error("Validation error:", data);
                      setInsertMsg("Validation error. Please check your input.");
                  });
              } else {
                 
                  throw new Error(`HTTP error! Status: ${res.status}`);
              }
          })
          .catch((error) => {
             
              console.error("There was a problem with the fetch operation:", error.message);
              setInsertMsg("Adding Question failed. Please try again later.");
          });

};
  
return (
  <div className="container">

      <div className="row">
          <div className="col">
          </div>

          <div className="col">
              <h2> Add Question </h2>
              <form>
              <div className="form-group">
              <label htmlFor="cat_id">Category:</label>
              <select className="form-control" id="cat_id" name="cat_id" value={questions.cat_id.value} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="1">Easy</option>
                <option value="2">Intermediate</option>
                <option value="3">Difficult</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="question_text">Question:</label>
              <textarea className="form-control" id="question_text" name="question_text" value={questions.question_text.value} onChange={handleChange}></textarea>
            </div>
              

            
            <div className="form-group">
              <label htmlFor="option1">Option 1:</label>
              <input type="text" className="form-control" id="option1" name="option1" value={questions.option1.value} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="option2">Option 2:</label>
              <input type="text" className="form-control" id="option2" name="option2" value={questions.option2.value} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="option3">Option 3:</label>
              <input type="text" className="form-control" id="option3" name="option3" value={questions.option3.value} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="option4">Option 4:</label>
              <input type="text" className="form-control" id="option4" name="option4" value={questions.option4.value} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer:</label>
              <input type="number" min="1" max="4" className="form-control" id="answer" name="answer" value={questions.answer.value} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="explaination">Explaination:</label>
              <textarea className="form-control" id="explanation" name="explaination" value={questions.explaination.value} onChange={handleChange}></textarea>
            </div>
    
                  <div>
                      <input type="button" className="btn btn-primary btn-block"  value="add"onClick={(e) => { submitData(e) }} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="reset" className="btn btn-primary btn-block" value="Clear" onClick={() => { dispatch({ type: "reset" }); }} />
                  </div>
              </form>
          </div>

          <div className="col">
          </div>
      </div>

     { /*<p> {JSON.stringify(questions)}</p>*/}
      <h1> {insertMsg} </h1>
  </div>
);
}