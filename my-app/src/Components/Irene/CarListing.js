import React, { Component } from 'react';
import './CarListing.css'; // Create a CSS file for styling

class CarListing extends Component {
  state = {
    rating: 0,
    comments: [],
    newComment: '',
    hoverRating: 0, // Track hover state
  };

  handleStarClick = (rating) => {
    this.setState({ rating });
  };

  handleStarHover = (rating) => {
    this.setState({ hoverRating: rating });
  };

  handleStarLeave = () => {
    this.setState({ hoverRating: 0 });
  };

  handleCommentChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleAddComment = () => {
    const { newComment, comments } = this.state;
    if (newComment.trim() !== '') {
      this.setState({
        comments: [...comments, newComment],
        newComment: '',
      });
    }
  };

  handleStartOver = () => {
    this.setState({ rating: 0, hoverRating: 0 }); // Reset the star rating and hover state
  };

  render() {
    const { rating, comments, newComment, hoverRating } = this.state;

    return (
      <div className="car-listing">
        <h2>Car Model 1</h2>
        <p>Car description here...</p>

        {/* Star rating */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? 'selected' : ''} ${
                hoverRating >= star ? 'hovered' : ''
              }`}
              onClick={() => this.handleStarClick(star)}
              onMouseEnter={() => this.handleStarHover(star)}
              onMouseLeave={this.handleStarLeave}
            >
              ★
            </span>
          ))}
        </div>

        <button onClick={this.handleStartOver}>Start Over</button>

        {/* Comment section */}
        <div className="comment-section">
          <h3>Comments</h3>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))}
          <textarea
            rows="4"
            placeholder="Add a comment..."
            value={newComment}
            onChange={this.handleCommentChange}
          />
          <button onClick={this.handleAddComment}>Add Comment</button>
        </div>
      </div>
    );
  }
}

export default CarListing;