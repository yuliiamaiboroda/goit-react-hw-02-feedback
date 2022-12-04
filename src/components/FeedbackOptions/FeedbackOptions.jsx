import { Component } from "react";
import { Div, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    render(){
        const {onLeaveFeedback, options=[]} = this.props;
      return  ( <Div>
        {options.map(el=>(
         <Button type="button" value={el} key={el} onClick={onLeaveFeedback}>{el}</Button>   
        ))}
        </Div>)
    }

}

export default FeedbackOptions;

FeedbackOptions.propTypes= {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}