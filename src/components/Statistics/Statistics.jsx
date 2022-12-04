import React, {Component} from "react";
import { Ul, Li, Span } from "./Statistics.styled";
import PropTypes from 'prop-types';

class Statistics extends Component{
    render(){
        const {good, neutral, bad, total, positivePercentage }= this.props;
       return( <>
        <Ul>
            <Li>Good: <Span>{good}</Span></Li>
            <Li>Bad: <Span>{bad}</Span></Li>
            <Li>Neutral: <Span>{neutral}</Span></Li>
            <Li>Total: <Span>{total}</Span></Li>
            <Li>Positive: <Span>{positivePercentage}%</Span></Li>
        </Ul>
        </>)
    }
}

export default Statistics;

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}