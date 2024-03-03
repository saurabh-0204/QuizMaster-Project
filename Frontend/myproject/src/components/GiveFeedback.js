import React, { useState } from 'react';

const GiveFeedback = () => {
  const [stars, setStars] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (starValue) => {
    setStars(starValue);
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // For demonstration purposes, set to true immediately
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Give Feedback</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ fontSize: '24px', cursor: 'pointer', color: star <= stars ? 'gold' : 'gray' }}
            onClick={() => handleStarClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="suggestion" style={{ display: 'block' }}>Your Suggestion:</label>
          <textarea
            id="suggestion"
            style={{ width: '100%', height: '100px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            value={suggestion}
            onChange={handleSuggestionChange}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
      {/*submitted && <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>Feedback Submitted Successfully</p>*/}
    </div>
  );
};

export default GiveFeedback;
