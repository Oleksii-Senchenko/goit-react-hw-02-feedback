import React, { Component } from 'react';
import './FeedbackOptions.module.css';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.mainDiv}>
        {options.map(option => (<button key={option} onClick={()=>onLeaveFeedback(option)}>{option}</button>
        ))}
      </div>
    );
  }
}




export default FeedbackOptions;
