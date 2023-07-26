import React, { Component } from 'react';
import './Statistics.module.css';
import css from './Statistics.module.css'

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.mainFeedback}>


        
            <p>
              Good: <span>{good}</span>
            </p>
         
          
            <p>
              Neutral: <span>{neutral}</span>
            </p>
         
            <p>
              Bad: <span>{bad}</span>
            </p>
         
            <p>
              Total Feedback: <span> {total}</span>
            </p>
            <p>
              Positive Feedback Percentage:
              <span> {positivePercentage}%</span>
            </p>
          
      </div>
    );
  }
}
export default Statistics;
