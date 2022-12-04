import { Component } from "react";
import { H3 } from "./Notification.styled";
import PropTypes from 'prop-types';


class Notification extends Component{
    render(){
        const {message}= this.props;
        return (
            <H3>{message}</H3>
        )
    }
}

export default Notification;

Notification.propTypes={
    message: PropTypes.string.isRequired
}