import React, { useState } from 'react';
import { useFeedbackContext } from '../FeedbackContext';  
import { Link } from 'react-router-dom';

const GiveFeedback = () => {
  const { code, setCode, feedback, setFeedback, selectedCategory, setSelectedCategory } = useFeedbackContext();

  const handleSubmit = () => {
    console.log('Submitted Feedback:', { code, feedback, selectedCategory });
    // logic here to send data 
  };

  return (
    <div>
      <h3>Give Feedback</h3>
      {/* prompt and previous code */}
      <div>
        <h4>Prompt</h4>
        <pre>{/* Your prompt  */}</pre>
        <h4>Previous Code</h4>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={10} />
      </div>

      {/* Form for submitting feedback */}
      <form>
        <div>
          <label>Select Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="UX UI Design">UX UI Design</option>
            <option value="Readability">Readability</option>
            <option value="Scalability">Scalability</option>
            <option value="Code Structure">Code Structure</option>
          
          </select>
        </div>
        <div>
          <label>Write Feedback:</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={5} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </form>
      {/* Link to Confirmation Page */}
      <Link to="/Confirmation">Go to Confirmation</Link>
    </div>
  );
};

export default GiveFeedback;
