import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [markedForReview, setMarkedForReview] = useState([]);
    const [examStarted, setExamStarted] = useState(true);
    const [answers,setAnswers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchQuizData();
    }, []);
    const exam = JSON.parse(localStorage.getItem("current_exam"));

    const fetchQuizData = () => {
        fetch(`http://localhost:8080/viewQuizBy?cat_id=${exam.cat_id.cat_id}&subject_id=${exam.subject_id.subject_id}`)
            .then(resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error("Server error");
            })
            .then(data => {
                setQuizData(data);
                setSelectedAnswers(Array(data.length).fill({ student_answer: null }));
                setMarkedForReview(Array(data.length).fill(false));
            })
            .catch(error => {
                console.error('Error fetching quiz questions:', error);
            });
    };

    const handleOptionSelect = (index, optionIndex) => {
        const adjustedOptionIndex = optionIndex + 1;
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[index] = { ...updatedSelectedAnswers[index], student_answer: adjustedOptionIndex };
        setSelectedAnswers(updatedSelectedAnswers);
    
        const selectedAnswer = { qid: quizData[index].qid, student_answer: adjustedOptionIndex, exam_id: exam.exam_id };
        localStorage.setItem(`selected_answer_${index}`, JSON.stringify(selectedAnswer));
    };

    const handleSave = () => {
        const savedAnswers = [...selectedAnswers];
        localStorage.setItem("saved_answers", JSON.stringify(savedAnswers));
    };

    const handleReset = (index) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[index] = { ...updatedSelectedAnswers[index], student_answer: null };
        setSelectedAnswers(updatedSelectedAnswers);

        localStorage.removeItem(`selected_answer_${index}`);
    };

    const handleMarkForReview = (index) => {
        const updatedMarkedForReview = [...markedForReview];
        updatedMarkedForReview[index] = !markedForReview[index];
        setMarkedForReview(updatedMarkedForReview);
    };

    const handleSubmitQuiz = () => {
    if (selectedAnswers.some(answer => answer.student_answer === null)) {
        console.error('Please answer all questions before submitting.');
        return;
    }

    // const savedAnswers = [];
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     if (key.startsWith('selected_answer_')) {
    //         savedAnswers.push(JSON.parse(localStorage.getItem(key)));
    //     }
    // }

    //   const savedAnswers ={
    //   answers :
    //   }

{/*const savedAnswers = [];
Object.keys(localStorage).forEach(key => {
    if (key.startsWith('selected_answer_')) {
        savedAnswers.push(JSON.parse(localStorage.getItem(key)));
    }
});*/}

 /*const addAnswers = (id,ans) => {
      let ans_arr = answers;
      ans_arr.push({qid: id, answer: ans});
      setAnswers(ans_arr);
 }

 const handleSubmit = () => {
      const reqoptions = {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            examid: exam.exam_id,
            answers: answers
        })
      }
 } */

const savedAnswers = Object.keys(localStorage)
    .filter(key => key.startsWith('selected_answer_'))
    .map(key => JSON.parse(localStorage.getItem(key)));

    console.log(savedAnswers);
    fetch('http://localhost:8080/saveStudentAnswers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({answers: savedAnswers})
    })
        .then(response => {
            if (response.ok) {
                console.log('Student answers submitted successfully.');
                alert("Exam Submitted")
                navigate("/studentHome");
            } else {
                console.error('Failed to submit student answers.');
            }
        })
        .catch(error => {
            console.error('Error submitting student answers:', error);
        });
};

    return (
        <div className="container">
            {examStarted && (
                <div>
                    <h3>Answer all questions before submitting.</h3>
                    {quizData && quizData.map((question, index) => (
                        <div key={question.qid} className={`question-container mt-3 ${markedForReview[index] ? 'marked-for-review' : ''}`}>
                            <p className="question">{`Question ${index + 1}: ${question.question_text}`}</p>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id={`option_${index}_1`}
                                    name={`question_${index}`}
                                    value={question.option1}
                                    className="form-check-input"
                                    checked={selectedAnswers[index].student_answer === 1}
                                    onChange={() => handleOptionSelect(index, 0)}
                                />
                                <label htmlFor={`option_${index}_1`} className="form-check-label option-label">A. {question.option1}</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id={`option_${index}_2`}
                                    name={`question_${index}`}
                                    value={question.option2}
                                    className="form-check-input"
                                    checked={selectedAnswers[index].student_answer === 2}
                                    onChange={() => handleOptionSelect(index, 1)}
                                />
                                <label htmlFor={`option_${index}_2`} className="form-check-label option-label">B. {question.option2}</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id={`option_${index}_3`}
                                    name={`question_${index}`}
                                    value={question.option3}
                                    className="form-check-input"
                                    checked={selectedAnswers[index].student_answer === 3}
                                    onChange={() => handleOptionSelect(index, 2)}
                                />
                                <label htmlFor={`option_${index}_3`} className="form-check-label option-label">C. {question.option3}</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id={`option_${index}_4`}
                                    name={`question_${index}`}
                                    value={question.option4}
                                    className="form-check-input"
                                    checked={selectedAnswers[index].student_answer === 4}
                                    onChange={() => handleOptionSelect(index, 3)}
                                />
                                <label htmlFor={`option_${index}_4`} className="form-check-label option-label">D. {question.option4}</label>
                            </div>
                            <div className="button-group mt-3">
                                <button className="btn btn-secondary" onClick={() => handleReset(index)}>Reset</button>
                                <button className="btn btn-warning" onClick={() => handleMarkForReview(index)}>Mark for Review</button>
                                <button className="btn btn-primary" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    ))}
                    <div className="row mt-3">
                        <div className="col">
                            <button className="btn btn-success" onClick={handleSubmitQuiz}>Submit Quiz</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StartQuiz;
