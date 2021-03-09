import React from 'react';
import styled from 'styled-components';
import check from './check.png'

const Wrapper = styled.div`
    width: 232px;
    height: 252px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
   
`;

const Title = styled.h3`
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #4A4A4A;
    padding-left: 20px;
    text-align: left;
`;

const Label = styled.label`
        display: flex;
    cursor: pointer;
    font-size: 13px;
    color: #4A4A4A;
    padding: 10px 20px;
    
    :hover {
        background-color: #F1FCFF;
    }
`;

const FakeCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #2196F3;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 10px;
`;

const Checkbox = styled.input.attrs(props => ({
    type: "checkbox",
}))`
  display: none;
  
  &:checked + ${FakeCheckbox}:before {
  content: url(${check});
  width: 20px;
  height: 20px;
  color: #2196F3;
  display: block;
  }
 
`;


export const TransferFilters = () => {
    return (
        <Wrapper>
            <Title>Количество пересадок</Title>
            <Label>
                <Checkbox/>
                <FakeCheckbox/> Все
            </Label>
            <Label>
                <Checkbox/>
                <FakeCheckbox/> Без пересадок
            </Label>
            <Label>
                <Checkbox/>
                <FakeCheckbox/> 1 пересадка
            </Label>
            <Label>
                <Checkbox/>
                <FakeCheckbox/> 2 пересадки
            </Label>
            <Label>
                <Checkbox/>
                <FakeCheckbox/> 3 пересадки
            </Label>
        </Wrapper>
    )
};