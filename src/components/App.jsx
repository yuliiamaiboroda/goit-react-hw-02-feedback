import React, {Component} from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";


export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback=()=>{
  const valuesOfStateArr = Object.values(this.state);
  return valuesOfStateArr.reduce((acc, val) => {
    acc += val;
    return acc;
  },0)
  }

  positivePercentage=()=>{
   return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = event =>{
    const btnTargetValue = event.currentTarget.value;
    this.setState(prevState=>({
      [btnTargetValue]: prevState[btnTargetValue]+1,
    }))
  }

  render(){
    const btnNames = Object.keys(this.state)
    return (
    
    <> 
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={btnNames}/>
    </Section>
    <Section title="Statistics">
      {this.countTotalFeedback()===0 ?
       <Notification message="There is no feedback"/> :
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.positivePercentage()}/>}
    </Section>
    </>
  )}
  ;
};
