import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmissionHistory = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [userId, setUserId] = useState(1); // Static user for demo purposes

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userId}/feedback`)
      .then(response => setFeedbackList(response.data))
      .catch(error => console.error('Error fetching feedback history:', error));
  }, [userId]);

  return (
    <div className="submission-history">
      <h2>Your Feedback Submissions</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbackList.map(feedback => (
            <li key={feedback.id}>
              <p>Product ID: {feedback.product_id}</p>
              <p>Rating: {feedback.rating} stars</p>
              <p>Comments: {feedback.comments}</p>
              <p>Submitted on: {new Date(feedback.created_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubmissionHistory;
