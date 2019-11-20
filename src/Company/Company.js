import React from 'react';
const company = (props) => {
    return (
        <div>       
            <h3>Hi, I am { props.name }. <br></br> { props.tagline }</h3>
        </div>
        )
};

export default company;