import React, { Component } from 'react';

import './FeedbackOptions.module.css'
class FeedbackOptions extends Component {
  render() {
    const { goodFeedBack, neutralFeedBack, badFeedBack } = this.props;
    return (
      <div>
        <button onClick={goodFeedBack}>Good</button>
        <button onClick={neutralFeedBack}>Neutral</button>
        <button onClick={badFeedBack}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
