/* eslint-disable */

import React from 'react';
const company = (props) => {
    return (
        <div>
            <h3>Hi, I am {props.name}. <br></br> {props.tagline}</h3>
            <input type='text' onChange={props.changed}></input>
        </div>
    )
};

export default company;