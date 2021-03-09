import React, {useReducer, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  padding: 15px 20px;
  color: #fff;
  background-color:#2196F3;
  border:0;
  font-size:12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-style: normal;
  font-family: 'Open Sans', sans-serif;
  
  :focus {
    outline: none;
  }
  
  :hover {
    cursor: pointer;
  }
`;

const MoreButton = ({clickHandler}) => {
    return (
        <Button onClick={clickHandler}>Показать еще 5 билетов</Button>
    );
};

export default MoreButton;

