import React from 'react';
import styled from 'styled-components';

const Input = ({ type, maxLength,onChange }) => {
    return (
        <Inputt onChange={onChange} type={type} maxLength={maxLength} />
    );
};

export default Input;
const Inputt = styled.input`
    width: 40vh;
    font-size: 25px;
    
`