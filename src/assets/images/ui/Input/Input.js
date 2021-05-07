import React from 'react';

const Input = (props) => {
    return (
            <Input type={props.type} onChange={props.handleValue}/>
    );
};

export default Input;