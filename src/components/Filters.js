import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Button = styled.button`
   border: 1px solid #DFE5EC;
   border-radius: 0;
   padding: 15px;
   font-size: 12px;
   font-weight: 600;
   line-height: 20px;
   letter-spacing: 0.5px;
   font-family: 'Open Sans', sans-serif;
   text-transform: uppercase;
   color: ${(props) => props.active ? '#fff' : '#4A4A4A'};
   background: ${(props) => props.active ? '#2196F3' : '#fff'};
   
   :focus {
    outline: none;
   }
`;

const LeftButton = styled(Button)`
   border-radius: 10px 0px 0px 10px;
   border-width: 1px 0px 1px 1px;
`;

const RightButton = styled(Button)`
   border-radius: 0px 10px 10px 0px;
   border-width: 1px 1px 1px 0px;
`;

export const Filters = () => {
    const [leftButton, setLeftButton] = useState(true);
    const [rightButton, setRightButton] = useState(false);
    const [centerButton, setCenterButton] = useState(false);

    const dispatch = useDispatch();

    const clickHandler = (button) => {
        switch (button) {
            case 'left':
                setLeftButton(true);
                setCenterButton(false);
                setRightButton(false);
                dispatch({type:'FILTER_BY_PRICE'});
                break;
            case 'center':
                setCenterButton(true);
                setLeftButton(false);
                setRightButton(false);
                dispatch({type: 'FILTER_BY_DURATION'});
                break;
            case 'right':
                setRightButton(true);
                setLeftButton(false);
                setCenterButton(false);
                dispatch({type:'FILTER_BY_OPTIMUM'});
                break;
            default:
                break
        }
    };
    // TODO: Придумать как оптимизировать функцию выше

    return (
        <Wrapper>
            <LeftButton active={leftButton} onClick={()=>clickHandler('left')}>Самый дешевый</LeftButton>
            <Button active={centerButton} onClick={()=>clickHandler('center')}>Самый быстрый</Button>
            <RightButton active={rightButton} onClick={()=>clickHandler('right')}>Оптимальный</RightButton>
        </Wrapper>
    )
};