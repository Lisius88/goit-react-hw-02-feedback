import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { MainContent } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = event => {
    const buttonName = event.target.name;

    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
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
    const buttonOptions = Object.keys(this.state);
    const total = this.state.bad + this.state.neutral + this.state.good;
    return (
      <MainContent>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={buttonOptions}
            incrementStatisticsData={this.handleButtonClick}
          />
        </Section>
        {total === 0 ? (
          <Section title={'Statisctics'}>
            <Notification message={'There is no feedback'} />
          </Section>
        ) : (
          <Section title={'Statisctics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </MainContent>
    );
  }
}
