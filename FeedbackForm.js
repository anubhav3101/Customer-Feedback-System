import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [userId, setUserId] = useState(1); // Static user for demo purposes
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/products') 
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const feedbackData = {
      user_id: userId,
      product_id: selectedProduct,
      rating: rating,
      comments: comments
    };

    axios.post('http://localhost:5000/feedback', feedbackData)
      .then(response => {
        console.log('Feedback submitted:', response.data);
        setFeedbackSubmitted(true);
        setSelectedProduct('');
        setRating(0);
        setComments('');
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Product:</label>
          <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Rating (1-5 stars):</label>
          <input 
            type="number" 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
            min="1" 
            max="5" 
            required 
          />
        </div>

        <div>
          <label>Comments:</label>
          <textarea 
            value={comments} 
            onChange={(e) => setComments(e.target.value)} 
            placeholder="Write your feedback..." 
            required
          />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {feedbackSubmitted && <p>Thank you for your feedback!</p>}
    </div>
  );
};

export default FeedbackForm;
