import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    background-color: #8a1c1c;
    color: #e6d3b3;
    border: 1px solid #4a3b32;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease;
    border-radius: 4px;
    width: 100%;
    display: block;
    margin-top: 10px;
    text-shadow: 1px 1px 2px #000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5)

    &:hover {
        background-color: #b32424;
        color: #fff;
        border-color: #7a2222;
        box-shadow: 0 0 12px rgba(179, 36, 36, 0.6)
    }

    &:active {
        transform: scale(0.98);
        background: #611313;
    }

    &:disabled {
    background-color: #24201e;
    color: #54473e;
    border-color: #332a24;
    cursor: not-allowed;
    transform: none;
    }
`;

const Button = ({ children, onClick, type = 'button', ...rest }) => {
    return (
      <StyledButton onClick={onClick} type ={type} {...rest}>
        {children}
    </StyledButton>)
};

export default Button;