import React, { Component } from 'react';
import css from './MainFeedBack.module.css';
import './MainFeedBack.module.css';

export class MainFeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedBack = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedBack = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedBack = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return totalFeedbacks === 0 ? 0 : Math.round((good / totalFeedbacks) * 100);
  };

  render() {
    return (
      <div className="main-feedback">
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.goodFeedBack}>Good</button>
          <button className={css.neutral} onClick={this.neutralFeedBack}>
            Neutral
          </button>
          <button className={css.bad} onClick={this.badFeedBack}>
            Bad
          </button>
        </div>

        <ul>
          <li>
            <p>
              Good: <span>{this.state.good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>{this.state.neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>{this.state.bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total Feedback: <span> {this.countTotalFeedback()}</span>
            </p>
            <p>
              Positive Feedback Percentage:
              <span> {this.countPositiveFeedbackPercentage()}%</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
