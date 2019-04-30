import React, { Component } from "react";
import PropTypes from 'prop-types';
import totalAmount from "./utils";
import "./style.sass";

const Summary = props => {
    const amount = totalAmount(props.list);
    return (
        <div id="summary">
            {
                amount <= 0 ? 
                    "Press Enter when complete." : 
                    `Total: ${amount}`
            }
        </div>
    );
}

Summary.propTypes = {
    list: PropTypes.array,
};

Summary.defaultProps = {
    list: [],
}

export default Summary;