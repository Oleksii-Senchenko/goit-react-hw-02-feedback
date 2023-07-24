import React, { Component } from 'react';
import './FeedbackOptions.module.css';
import css from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div className={css.mainDiv}>
        
        {onLeaveFeedback.map((option) => (
          <button key={option.name} onClick={option.onClick}>
            {option.name}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;