import { Component } from 'react';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedBack = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedBack = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedBack = () => {
    this.setState((prevState) => ({
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
      <>

        <FeedbackOptions
         goodFeedBack={this.goodFeedBack}
         neutralFeedBack={this.neutralFeedBack}
         badFeedBack={this.badFeedBack}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}

        
        />
      </>
    );
  }
}

export default App;