import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import SubmissionHistory from './components/SubmissionHistory';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Customer Feedback System</h1>
      <FeedbackForm />
      <SubmissionHistory />
    </div>
  );
}

export default App;
