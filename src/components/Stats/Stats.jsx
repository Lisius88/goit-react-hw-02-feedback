import React from 'react';

export class Stats extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isOpen: false,
  };

  onClickGood = () => {
    this.setState(pervState => {
      return { good: pervState.good + 1 };
    });
    this.onClickToggle();
  };

  onClickNeutral = () => {
    this.setState(pervState => {
      return { neutral: pervState.neutral + 1 };
    });
    this.onClickToggle();
  };

  onClickBad = () => {
    this.setState(pervState => {
      return { bad: pervState.bad + 1 };
    });
    this.onClickToggle();
  };

  onClickToggle = () => {
    console.log('hello');
    return this.setState({ isOpen: true });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
        100
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.onClickGood}>
            Good
          </button>
          <button type="button" onClick={this.onClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.onClickBad}>
            Bad
          </button>
        </div>
        {this.state.isOpen === true ? (
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>Good:{this.state.good}</li>
              <li>Neutral:{this.state.neutral}</li>
              <li>Bad:{this.state.bad}</li>
              <li>Total:{this.countTotalFeedback()}</li>
              <li>
                Positive feedback:
                {this.countPositiveFeedbackPercentage()}%
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2>Statistics</h2>
            <p>There is no feedback</p>
          </div>
        )}
      </div>
    );
  }
}
