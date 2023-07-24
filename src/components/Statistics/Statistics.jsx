import React, { Component } from 'react';
import css from './Statistics.module.css';
import './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className="main-feedback">
        <h2>Please leave feedback</h2>

        <ul>
          <li>
            <p>
              Good: <span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total Feedback: <span> {total}</span>
            </p>
            <p>
              Positive Feedback Percentage:
              <span> {positivePercentage}%</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Statistics;
